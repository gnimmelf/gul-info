"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i8 = decorators.length - 1, decorator; i8 >= 0; i8--)
      if (decorator = decorators[i8])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js
  var require_picocolors_browser = __commonJS({
    "node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js"(exports, module) {
      var x2 = String;
      var create = function() {
        return { isColorSupported: false, reset: x2, bold: x2, dim: x2, italic: x2, underline: x2, inverse: x2, hidden: x2, strikethrough: x2, black: x2, red: x2, green: x2, yellow: x2, blue: x2, magenta: x2, cyan: x2, white: x2, gray: x2, bgBlack: x2, bgRed: x2, bgGreen: x2, bgYellow: x2, bgBlue: x2, bgMagenta: x2, bgCyan: x2, bgWhite: x2, blackBright: x2, redBright: x2, greenBright: x2, yellowBright: x2, blueBright: x2, magentaBright: x2, cyanBright: x2, whiteBright: x2, bgBlackBright: x2, bgRedBright: x2, bgGreenBright: x2, bgYellowBright: x2, bgBlueBright: x2, bgMagentaBright: x2, bgCyanBright: x2, bgWhiteBright: x2 };
      };
      module.exports = create();
      module.exports.createColors = create;
    }
  });

  // (disabled):node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/terminal-highlight
  var require_terminal_highlight = __commonJS({
    "(disabled):node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/terminal-highlight"() {
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/css-syntax-error.js
  var require_css_syntax_error = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/css-syntax-error.js"(exports, module) {
      "use strict";
      var pico = require_picocolors_browser();
      var terminalHighlight = require_terminal_highlight();
      var CssSyntaxError2 = class _CssSyntaxError extends Error {
        constructor(message, line, column, source, file, plugin2) {
          super(message);
          this.name = "CssSyntaxError";
          this.reason = message;
          if (file) {
            this.file = file;
          }
          if (source) {
            this.source = source;
          }
          if (plugin2) {
            this.plugin = plugin2;
          }
          if (typeof line !== "undefined" && typeof column !== "undefined") {
            if (typeof line === "number") {
              this.line = line;
              this.column = column;
            } else {
              this.line = line.line;
              this.column = line.column;
              this.endLine = column.line;
              this.endColumn = column.column;
            }
          }
          this.setMessage();
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, _CssSyntaxError);
          }
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "";
          this.message += this.file ? this.file : "<css input>";
          if (typeof this.line !== "undefined") {
            this.message += ":" + this.line + ":" + this.column;
          }
          this.message += ": " + this.reason;
        }
        showSourceCode(color) {
          if (!this.source) return "";
          let css7 = this.source;
          if (color == null) color = pico.isColorSupported;
          let aside = (text) => text;
          let mark = (text) => text;
          let highlight = (text) => text;
          if (color) {
            let { bold, gray, red } = pico.createColors(true);
            mark = (text) => bold(red(text));
            aside = (text) => gray(text);
            if (terminalHighlight) {
              highlight = (text) => terminalHighlight(text);
            }
          }
          let lines = css7.split(/\r?\n/);
          let start = Math.max(this.line - 3, 0);
          let end = Math.min(this.line + 2, lines.length);
          let maxWidth = String(end).length;
          return lines.slice(start, end).map((line, index2) => {
            let number = start + 1 + index2;
            let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
            if (number === this.line) {
              if (line.length > 160) {
                let padding = 20;
                let subLineStart = Math.max(0, this.column - padding);
                let subLineEnd = Math.max(
                  this.column + padding,
                  this.endColumn + padding
                );
                let subLine = line.slice(subLineStart, subLineEnd);
                let spacing2 = aside(gutter.replace(/\d/g, " ")) + line.slice(0, Math.min(this.column - 1, padding - 1)).replace(/[^\t]/g, " ");
                return mark(">") + aside(gutter) + highlight(subLine) + "\n " + spacing2 + mark("^");
              }
              let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return mark(">") + aside(gutter) + highlight(line) + "\n " + spacing + mark("^");
            }
            return " " + aside(gutter) + highlight(line);
          }).join("\n");
        }
        toString() {
          let code = this.showSourceCode();
          if (code) {
            code = "\n\n" + code + "\n";
          }
          return this.name + ": " + this.message + code;
        }
      };
      module.exports = CssSyntaxError2;
      CssSyntaxError2.default = CssSyntaxError2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/stringifier.js
  var require_stringifier = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/stringifier.js"(exports, module) {
      "use strict";
      var DEFAULT_RAW = {
        after: "\n",
        beforeClose: "\n",
        beforeComment: "\n",
        beforeDecl: "\n",
        beforeOpen: " ",
        beforeRule: "\n",
        colon: ": ",
        commentLeft: " ",
        commentRight: " ",
        emptyBody: "",
        indent: "    ",
        semicolon: false
      };
      function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
      }
      var Stringifier = class {
        constructor(builder) {
          this.builder = builder;
        }
        atrule(node, semicolon) {
          let name2 = "@" + node.name;
          let params = node.params ? this.rawValue(node, "params") : "";
          if (typeof node.raws.afterName !== "undefined") {
            name2 += node.raws.afterName;
          } else if (params) {
            name2 += " ";
          }
          if (node.nodes) {
            this.block(node, name2 + params);
          } else {
            let end = (node.raws.between || "") + (semicolon ? ";" : "");
            this.builder(name2 + params + end, node);
          }
        }
        beforeAfter(node, detect) {
          let value;
          if (node.type === "decl") {
            value = this.raw(node, null, "beforeDecl");
          } else if (node.type === "comment") {
            value = this.raw(node, null, "beforeComment");
          } else if (detect === "before") {
            value = this.raw(node, null, "beforeRule");
          } else {
            value = this.raw(node, null, "beforeClose");
          }
          let buf = node.parent;
          let depth = 0;
          while (buf && buf.type !== "root") {
            depth += 1;
            buf = buf.parent;
          }
          if (value.includes("\n")) {
            let indent = this.raw(node, null, "indent");
            if (indent.length) {
              for (let step = 0; step < depth; step++) value += indent;
            }
          }
          return value;
        }
        block(node, start) {
          let between = this.raw(node, "between", "beforeOpen");
          this.builder(start + between + "{", node, "start");
          let after;
          if (node.nodes && node.nodes.length) {
            this.body(node);
            after = this.raw(node, "after");
          } else {
            after = this.raw(node, "after", "emptyBody");
          }
          if (after) this.builder(after);
          this.builder("}", node, "end");
        }
        body(node) {
          let last = node.nodes.length - 1;
          while (last > 0) {
            if (node.nodes[last].type !== "comment") break;
            last -= 1;
          }
          let semicolon = this.raw(node, "semicolon");
          for (let i8 = 0; i8 < node.nodes.length; i8++) {
            let child = node.nodes[i8];
            let before = this.raw(child, "before");
            if (before) this.builder(before);
            this.stringify(child, last !== i8 || semicolon);
          }
        }
        comment(node) {
          let left = this.raw(node, "left", "commentLeft");
          let right = this.raw(node, "right", "commentRight");
          this.builder("/*" + left + node.text + right + "*/", node);
        }
        decl(node, semicolon) {
          let between = this.raw(node, "between", "colon");
          let string = node.prop + between + this.rawValue(node, "value");
          if (node.important) {
            string += node.raws.important || " !important";
          }
          if (semicolon) string += ";";
          this.builder(string, node);
        }
        document(node) {
          this.body(node);
        }
        raw(node, own, detect) {
          let value;
          if (!detect) detect = own;
          if (own) {
            value = node.raws[own];
            if (typeof value !== "undefined") return value;
          }
          let parent = node.parent;
          if (detect === "before") {
            if (!parent || parent.type === "root" && parent.first === node) {
              return "";
            }
            if (parent && parent.type === "document") {
              return "";
            }
          }
          if (!parent) return DEFAULT_RAW[detect];
          let root2 = node.root();
          if (!root2.rawCache) root2.rawCache = {};
          if (typeof root2.rawCache[detect] !== "undefined") {
            return root2.rawCache[detect];
          }
          if (detect === "before" || detect === "after") {
            return this.beforeAfter(node, detect);
          } else {
            let method = "raw" + capitalize(detect);
            if (this[method]) {
              value = this[method](root2, node);
            } else {
              root2.walk((i8) => {
                value = i8.raws[own];
                if (typeof value !== "undefined") return false;
              });
            }
          }
          if (typeof value === "undefined") value = DEFAULT_RAW[detect];
          root2.rawCache[detect] = value;
          return value;
        }
        rawBeforeClose(root2) {
          let value;
          root2.walk((i8) => {
            if (i8.nodes && i8.nodes.length > 0) {
              if (typeof i8.raws.after !== "undefined") {
                value = i8.raws.after;
                if (value.includes("\n")) {
                  value = value.replace(/[^\n]+$/, "");
                }
                return false;
              }
            }
          });
          if (value) value = value.replace(/\S/g, "");
          return value;
        }
        rawBeforeComment(root2, node) {
          let value;
          root2.walkComments((i8) => {
            if (typeof i8.raws.before !== "undefined") {
              value = i8.raws.before;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          });
          if (typeof value === "undefined") {
            value = this.raw(node, null, "beforeDecl");
          } else if (value) {
            value = value.replace(/\S/g, "");
          }
          return value;
        }
        rawBeforeDecl(root2, node) {
          let value;
          root2.walkDecls((i8) => {
            if (typeof i8.raws.before !== "undefined") {
              value = i8.raws.before;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          });
          if (typeof value === "undefined") {
            value = this.raw(node, null, "beforeRule");
          } else if (value) {
            value = value.replace(/\S/g, "");
          }
          return value;
        }
        rawBeforeOpen(root2) {
          let value;
          root2.walk((i8) => {
            if (i8.type !== "decl") {
              value = i8.raws.between;
              if (typeof value !== "undefined") return false;
            }
          });
          return value;
        }
        rawBeforeRule(root2) {
          let value;
          root2.walk((i8) => {
            if (i8.nodes && (i8.parent !== root2 || root2.first !== i8)) {
              if (typeof i8.raws.before !== "undefined") {
                value = i8.raws.before;
                if (value.includes("\n")) {
                  value = value.replace(/[^\n]+$/, "");
                }
                return false;
              }
            }
          });
          if (value) value = value.replace(/\S/g, "");
          return value;
        }
        rawColon(root2) {
          let value;
          root2.walkDecls((i8) => {
            if (typeof i8.raws.between !== "undefined") {
              value = i8.raws.between.replace(/[^\s:]/g, "");
              return false;
            }
          });
          return value;
        }
        rawEmptyBody(root2) {
          let value;
          root2.walk((i8) => {
            if (i8.nodes && i8.nodes.length === 0) {
              value = i8.raws.after;
              if (typeof value !== "undefined") return false;
            }
          });
          return value;
        }
        rawIndent(root2) {
          if (root2.raws.indent) return root2.raws.indent;
          let value;
          root2.walk((i8) => {
            let p3 = i8.parent;
            if (p3 && p3 !== root2 && p3.parent && p3.parent === root2) {
              if (typeof i8.raws.before !== "undefined") {
                let parts = i8.raws.before.split("\n");
                value = parts[parts.length - 1];
                value = value.replace(/\S/g, "");
                return false;
              }
            }
          });
          return value;
        }
        rawSemicolon(root2) {
          let value;
          root2.walk((i8) => {
            if (i8.nodes && i8.nodes.length && i8.last.type === "decl") {
              value = i8.raws.semicolon;
              if (typeof value !== "undefined") return false;
            }
          });
          return value;
        }
        rawValue(node, prop) {
          let value = node[prop];
          let raw = node.raws[prop];
          if (raw && raw.value === value) {
            return raw.raw;
          }
          return value;
        }
        root(node) {
          this.body(node);
          if (node.raws.after) this.builder(node.raws.after);
        }
        rule(node) {
          this.block(node, this.rawValue(node, "selector"));
          if (node.raws.ownSemicolon) {
            this.builder(node.raws.ownSemicolon, node, "end");
          }
        }
        stringify(node, semicolon) {
          if (!this[node.type]) {
            throw new Error(
              "Unknown AST node type " + node.type + ". Maybe you need to change PostCSS stringifier."
            );
          }
          this[node.type](node, semicolon);
        }
      };
      module.exports = Stringifier;
      Stringifier.default = Stringifier;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/stringify.js"(exports, module) {
      "use strict";
      var Stringifier = require_stringifier();
      function stringify2(node, builder) {
        let str = new Stringifier(builder);
        str.stringify(node);
      }
      module.exports = stringify2;
      stringify2.default = stringify2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/symbols.js
  var require_symbols = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/symbols.js"(exports, module) {
      "use strict";
      module.exports.isClean = Symbol("isClean");
      module.exports.my = Symbol("my");
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/node.js
  var require_node = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/node.js"(exports, module) {
      "use strict";
      var CssSyntaxError2 = require_css_syntax_error();
      var Stringifier = require_stringifier();
      var stringify2 = require_stringify();
      var { isClean, my } = require_symbols();
      function cloneNode(obj, parent) {
        let cloned = new obj.constructor();
        for (let i8 in obj) {
          if (!Object.prototype.hasOwnProperty.call(obj, i8)) {
            continue;
          }
          if (i8 === "proxyCache") continue;
          let value = obj[i8];
          let type = typeof value;
          if (i8 === "parent" && type === "object") {
            if (parent) cloned[i8] = parent;
          } else if (i8 === "source") {
            cloned[i8] = value;
          } else if (Array.isArray(value)) {
            cloned[i8] = value.map((j2) => cloneNode(j2, cloned));
          } else {
            if (type === "object" && value !== null) value = cloneNode(value);
            cloned[i8] = value;
          }
        }
        return cloned;
      }
      function sourceOffset(inputCSS, position) {
        if (position && typeof position.offset !== "undefined") {
          return position.offset;
        }
        let column = 1;
        let line = 1;
        let offset3 = 0;
        for (let i8 = 0; i8 < inputCSS.length; i8++) {
          if (line === position.line && column === position.column) {
            offset3 = i8;
            break;
          }
          if (inputCSS[i8] === "\n") {
            column = 1;
            line += 1;
          } else {
            column += 1;
          }
        }
        return offset3;
      }
      var Node3 = class {
        constructor(defaults = {}) {
          this.raws = {};
          this[isClean] = false;
          this[my] = true;
          for (let name2 in defaults) {
            if (name2 === "nodes") {
              this.nodes = [];
              for (let node of defaults[name2]) {
                if (typeof node.clone === "function") {
                  this.append(node.clone());
                } else {
                  this.append(node);
                }
              }
            } else {
              this[name2] = defaults[name2];
            }
          }
        }
        addToError(error) {
          error.postcssNode = this;
          if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s4 = this.source;
            error.stack = error.stack.replace(
              /\n\s{4}at /,
              `$&${s4.input.from}:${s4.start.line}:${s4.start.column}$&`
            );
          }
          return error;
        }
        after(add) {
          this.parent.insertAfter(this, add);
          return this;
        }
        assign(overrides = {}) {
          for (let name2 in overrides) {
            this[name2] = overrides[name2];
          }
          return this;
        }
        before(add) {
          this.parent.insertBefore(this, add);
          return this;
        }
        cleanRaws(keepBetween) {
          delete this.raws.before;
          delete this.raws.after;
          if (!keepBetween) delete this.raws.between;
        }
        clone(overrides = {}) {
          let cloned = cloneNode(this);
          for (let name2 in overrides) {
            cloned[name2] = overrides[name2];
          }
          return cloned;
        }
        cloneAfter(overrides = {}) {
          let cloned = this.clone(overrides);
          this.parent.insertAfter(this, cloned);
          return cloned;
        }
        cloneBefore(overrides = {}) {
          let cloned = this.clone(overrides);
          this.parent.insertBefore(this, cloned);
          return cloned;
        }
        error(message, opts = {}) {
          if (this.source) {
            let { end, start } = this.rangeBy(opts);
            return this.source.input.error(
              message,
              { column: start.column, line: start.line },
              { column: end.column, line: end.line },
              opts
            );
          }
          return new CssSyntaxError2(message);
        }
        getProxyProcessor() {
          return {
            get(node, prop) {
              if (prop === "proxyOf") {
                return node;
              } else if (prop === "root") {
                return () => node.root().toProxy();
              } else {
                return node[prop];
              }
            },
            set(node, prop, value) {
              if (node[prop] === value) return true;
              node[prop] = value;
              if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */
              prop === "text") {
                node.markDirty();
              }
              return true;
            }
          };
        }
        /* c8 ignore next 3 */
        markClean() {
          this[isClean] = true;
        }
        markDirty() {
          if (this[isClean]) {
            this[isClean] = false;
            let next = this;
            while (next = next.parent) {
              next[isClean] = false;
            }
          }
        }
        next() {
          if (!this.parent) return void 0;
          let index2 = this.parent.index(this);
          return this.parent.nodes[index2 + 1];
        }
        positionBy(opts) {
          let pos = this.source.start;
          if (opts.index) {
            pos = this.positionInside(opts.index);
          } else if (opts.word) {
            let stringRepresentation = this.source.input.css.slice(
              sourceOffset(this.source.input.css, this.source.start),
              sourceOffset(this.source.input.css, this.source.end)
            );
            let index2 = stringRepresentation.indexOf(opts.word);
            if (index2 !== -1) pos = this.positionInside(index2);
          }
          return pos;
        }
        positionInside(index2) {
          let column = this.source.start.column;
          let line = this.source.start.line;
          let offset3 = sourceOffset(this.source.input.css, this.source.start);
          let end = offset3 + index2;
          for (let i8 = offset3; i8 < end; i8++) {
            if (this.source.input.css[i8] === "\n") {
              column = 1;
              line += 1;
            } else {
              column += 1;
            }
          }
          return { column, line };
        }
        prev() {
          if (!this.parent) return void 0;
          let index2 = this.parent.index(this);
          return this.parent.nodes[index2 - 1];
        }
        rangeBy(opts) {
          let start = {
            column: this.source.start.column,
            line: this.source.start.line
          };
          let end = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
          } : {
            column: start.column + 1,
            line: start.line
          };
          if (opts.word) {
            let stringRepresentation = this.source.input.css.slice(
              sourceOffset(this.source.input.css, this.source.start),
              sourceOffset(this.source.input.css, this.source.end)
            );
            let index2 = stringRepresentation.indexOf(opts.word);
            if (index2 !== -1) {
              start = this.positionInside(index2);
              end = this.positionInside(
                index2 + opts.word.length
              );
            }
          } else {
            if (opts.start) {
              start = {
                column: opts.start.column,
                line: opts.start.line
              };
            } else if (opts.index) {
              start = this.positionInside(opts.index);
            }
            if (opts.end) {
              end = {
                column: opts.end.column,
                line: opts.end.line
              };
            } else if (typeof opts.endIndex === "number") {
              end = this.positionInside(opts.endIndex);
            } else if (opts.index) {
              end = this.positionInside(opts.index + 1);
            }
          }
          if (end.line < start.line || end.line === start.line && end.column <= start.column) {
            end = { column: start.column + 1, line: start.line };
          }
          return { end, start };
        }
        raw(prop, defaultType) {
          let str = new Stringifier();
          return str.raw(this, prop, defaultType);
        }
        remove() {
          if (this.parent) {
            this.parent.removeChild(this);
          }
          this.parent = void 0;
          return this;
        }
        replaceWith(...nodes) {
          if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node of nodes) {
              if (node === this) {
                foundSelf = true;
              } else if (foundSelf) {
                this.parent.insertAfter(bookmark, node);
                bookmark = node;
              } else {
                this.parent.insertBefore(bookmark, node);
              }
            }
            if (!foundSelf) {
              this.remove();
            }
          }
          return this;
        }
        root() {
          let result = this;
          while (result.parent && result.parent.type !== "document") {
            result = result.parent;
          }
          return result;
        }
        toJSON(_2, inputs) {
          let fixed = {};
          let emitInputs = inputs == null;
          inputs = inputs || /* @__PURE__ */ new Map();
          let inputsNextIndex = 0;
          for (let name2 in this) {
            if (!Object.prototype.hasOwnProperty.call(this, name2)) {
              continue;
            }
            if (name2 === "parent" || name2 === "proxyCache") continue;
            let value = this[name2];
            if (Array.isArray(value)) {
              fixed[name2] = value.map((i8) => {
                if (typeof i8 === "object" && i8.toJSON) {
                  return i8.toJSON(null, inputs);
                } else {
                  return i8;
                }
              });
            } else if (typeof value === "object" && value.toJSON) {
              fixed[name2] = value.toJSON(null, inputs);
            } else if (name2 === "source") {
              let inputId = inputs.get(value.input);
              if (inputId == null) {
                inputId = inputsNextIndex;
                inputs.set(value.input, inputsNextIndex);
                inputsNextIndex++;
              }
              fixed[name2] = {
                end: value.end,
                inputId,
                start: value.start
              };
            } else {
              fixed[name2] = value;
            }
          }
          if (emitInputs) {
            fixed.inputs = [...inputs.keys()].map((input) => input.toJSON());
          }
          return fixed;
        }
        toProxy() {
          if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
          }
          return this.proxyCache;
        }
        toString(stringifier = stringify2) {
          if (stringifier.stringify) stringifier = stringifier.stringify;
          let result = "";
          stringifier(this, (i8) => {
            result += i8;
          });
          return result;
        }
        warn(result, text, opts) {
          let data = { node: this };
          for (let i8 in opts) data[i8] = opts[i8];
          return result.warn(text, data);
        }
        get proxyOf() {
          return this;
        }
      };
      module.exports = Node3;
      Node3.default = Node3;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/comment.js
  var require_comment = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/comment.js"(exports, module) {
      "use strict";
      var Node3 = require_node();
      var Comment2 = class extends Node3 {
        constructor(defaults) {
          super(defaults);
          this.type = "comment";
        }
      };
      module.exports = Comment2;
      Comment2.default = Comment2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/declaration.js
  var require_declaration = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/declaration.js"(exports, module) {
      "use strict";
      var Node3 = require_node();
      var Declaration2 = class extends Node3 {
        constructor(defaults) {
          if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
            defaults = { ...defaults, value: String(defaults.value) };
          }
          super(defaults);
          this.type = "decl";
        }
        get variable() {
          return this.prop.startsWith("--") || this.prop[0] === "$";
        }
      };
      module.exports = Declaration2;
      Declaration2.default = Declaration2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/container.js
  var require_container = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/container.js"(exports, module) {
      "use strict";
      var Comment2 = require_comment();
      var Declaration2 = require_declaration();
      var Node3 = require_node();
      var { isClean, my } = require_symbols();
      var AtRule2;
      var parse3;
      var Root2;
      var Rule2;
      function cleanSource(nodes) {
        return nodes.map((i8) => {
          if (i8.nodes) i8.nodes = cleanSource(i8.nodes);
          delete i8.source;
          return i8;
        });
      }
      function markTreeDirty(node) {
        node[isClean] = false;
        if (node.proxyOf.nodes) {
          for (let i8 of node.proxyOf.nodes) {
            markTreeDirty(i8);
          }
        }
      }
      var Container2 = class _Container extends Node3 {
        append(...children2) {
          for (let child of children2) {
            let nodes = this.normalize(child, this.last);
            for (let node of nodes) this.proxyOf.nodes.push(node);
          }
          this.markDirty();
          return this;
        }
        cleanRaws(keepBetween) {
          super.cleanRaws(keepBetween);
          if (this.nodes) {
            for (let node of this.nodes) node.cleanRaws(keepBetween);
          }
        }
        each(callback) {
          if (!this.proxyOf.nodes) return void 0;
          let iterator = this.getIterator();
          let index2, result;
          while (this.indexes[iterator] < this.proxyOf.nodes.length) {
            index2 = this.indexes[iterator];
            result = callback(this.proxyOf.nodes[index2], index2);
            if (result === false) break;
            this.indexes[iterator] += 1;
          }
          delete this.indexes[iterator];
          return result;
        }
        every(condition) {
          return this.nodes.every(condition);
        }
        getIterator() {
          if (!this.lastEach) this.lastEach = 0;
          if (!this.indexes) this.indexes = {};
          this.lastEach += 1;
          let iterator = this.lastEach;
          this.indexes[iterator] = 0;
          return iterator;
        }
        getProxyProcessor() {
          return {
            get(node, prop) {
              if (prop === "proxyOf") {
                return node;
              } else if (!node[prop]) {
                return node[prop];
              } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
                return (...args) => {
                  return node[prop](
                    ...args.map((i8) => {
                      if (typeof i8 === "function") {
                        return (child, index2) => i8(child.toProxy(), index2);
                      } else {
                        return i8;
                      }
                    })
                  );
                };
              } else if (prop === "every" || prop === "some") {
                return (cb) => {
                  return node[prop](
                    (child, ...other) => cb(child.toProxy(), ...other)
                  );
                };
              } else if (prop === "root") {
                return () => node.root().toProxy();
              } else if (prop === "nodes") {
                return node.nodes.map((i8) => i8.toProxy());
              } else if (prop === "first" || prop === "last") {
                return node[prop].toProxy();
              } else {
                return node[prop];
              }
            },
            set(node, prop, value) {
              if (node[prop] === value) return true;
              node[prop] = value;
              if (prop === "name" || prop === "params" || prop === "selector") {
                node.markDirty();
              }
              return true;
            }
          };
        }
        index(child) {
          if (typeof child === "number") return child;
          if (child.proxyOf) child = child.proxyOf;
          return this.proxyOf.nodes.indexOf(child);
        }
        insertAfter(exist, add) {
          let existIndex = this.index(exist);
          let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
          existIndex = this.index(exist);
          for (let node of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node);
          let index2;
          for (let id4 in this.indexes) {
            index2 = this.indexes[id4];
            if (existIndex < index2) {
              this.indexes[id4] = index2 + nodes.length;
            }
          }
          this.markDirty();
          return this;
        }
        insertBefore(exist, add) {
          let existIndex = this.index(exist);
          let type = existIndex === 0 ? "prepend" : false;
          let nodes = this.normalize(
            add,
            this.proxyOf.nodes[existIndex],
            type
          ).reverse();
          existIndex = this.index(exist);
          for (let node of nodes) this.proxyOf.nodes.splice(existIndex, 0, node);
          let index2;
          for (let id4 in this.indexes) {
            index2 = this.indexes[id4];
            if (existIndex <= index2) {
              this.indexes[id4] = index2 + nodes.length;
            }
          }
          this.markDirty();
          return this;
        }
        normalize(nodes, sample) {
          if (typeof nodes === "string") {
            nodes = cleanSource(parse3(nodes).nodes);
          } else if (typeof nodes === "undefined") {
            nodes = [];
          } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i8 of nodes) {
              if (i8.parent) i8.parent.removeChild(i8, "ignore");
            }
          } else if (nodes.type === "root" && this.type !== "document") {
            nodes = nodes.nodes.slice(0);
            for (let i8 of nodes) {
              if (i8.parent) i8.parent.removeChild(i8, "ignore");
            }
          } else if (nodes.type) {
            nodes = [nodes];
          } else if (nodes.prop) {
            if (typeof nodes.value === "undefined") {
              throw new Error("Value field is missed in node creation");
            } else if (typeof nodes.value !== "string") {
              nodes.value = String(nodes.value);
            }
            nodes = [new Declaration2(nodes)];
          } else if (nodes.selector || nodes.selectors) {
            nodes = [new Rule2(nodes)];
          } else if (nodes.name) {
            nodes = [new AtRule2(nodes)];
          } else if (nodes.text) {
            nodes = [new Comment2(nodes)];
          } else {
            throw new Error("Unknown node type in node creation");
          }
          let processed = nodes.map((i8) => {
            if (!i8[my]) _Container.rebuild(i8);
            i8 = i8.proxyOf;
            if (i8.parent) i8.parent.removeChild(i8);
            if (i8[isClean]) markTreeDirty(i8);
            if (!i8.raws) i8.raws = {};
            if (typeof i8.raws.before === "undefined") {
              if (sample && typeof sample.raws.before !== "undefined") {
                i8.raws.before = sample.raws.before.replace(/\S/g, "");
              }
            }
            i8.parent = this.proxyOf;
            return i8;
          });
          return processed;
        }
        prepend(...children2) {
          children2 = children2.reverse();
          for (let child of children2) {
            let nodes = this.normalize(child, this.first, "prepend").reverse();
            for (let node of nodes) this.proxyOf.nodes.unshift(node);
            for (let id4 in this.indexes) {
              this.indexes[id4] = this.indexes[id4] + nodes.length;
            }
          }
          this.markDirty();
          return this;
        }
        push(child) {
          child.parent = this;
          this.proxyOf.nodes.push(child);
          return this;
        }
        removeAll() {
          for (let node of this.proxyOf.nodes) node.parent = void 0;
          this.proxyOf.nodes = [];
          this.markDirty();
          return this;
        }
        removeChild(child) {
          child = this.index(child);
          this.proxyOf.nodes[child].parent = void 0;
          this.proxyOf.nodes.splice(child, 1);
          let index2;
          for (let id4 in this.indexes) {
            index2 = this.indexes[id4];
            if (index2 >= child) {
              this.indexes[id4] = index2 - 1;
            }
          }
          this.markDirty();
          return this;
        }
        replaceValues(pattern, opts, callback) {
          if (!callback) {
            callback = opts;
            opts = {};
          }
          this.walkDecls((decl2) => {
            if (opts.props && !opts.props.includes(decl2.prop)) return;
            if (opts.fast && !decl2.value.includes(opts.fast)) return;
            decl2.value = decl2.value.replace(pattern, callback);
          });
          this.markDirty();
          return this;
        }
        some(condition) {
          return this.nodes.some(condition);
        }
        walk(callback) {
          return this.each((child, i8) => {
            let result;
            try {
              result = callback(child, i8);
            } catch (e12) {
              throw child.addToError(e12);
            }
            if (result !== false && child.walk) {
              result = child.walk(callback);
            }
            return result;
          });
        }
        walkAtRules(name2, callback) {
          if (!callback) {
            callback = name2;
            return this.walk((child, i8) => {
              if (child.type === "atrule") {
                return callback(child, i8);
              }
            });
          }
          if (name2 instanceof RegExp) {
            return this.walk((child, i8) => {
              if (child.type === "atrule" && name2.test(child.name)) {
                return callback(child, i8);
              }
            });
          }
          return this.walk((child, i8) => {
            if (child.type === "atrule" && child.name === name2) {
              return callback(child, i8);
            }
          });
        }
        walkComments(callback) {
          return this.walk((child, i8) => {
            if (child.type === "comment") {
              return callback(child, i8);
            }
          });
        }
        walkDecls(prop, callback) {
          if (!callback) {
            callback = prop;
            return this.walk((child, i8) => {
              if (child.type === "decl") {
                return callback(child, i8);
              }
            });
          }
          if (prop instanceof RegExp) {
            return this.walk((child, i8) => {
              if (child.type === "decl" && prop.test(child.prop)) {
                return callback(child, i8);
              }
            });
          }
          return this.walk((child, i8) => {
            if (child.type === "decl" && child.prop === prop) {
              return callback(child, i8);
            }
          });
        }
        walkRules(selector, callback) {
          if (!callback) {
            callback = selector;
            return this.walk((child, i8) => {
              if (child.type === "rule") {
                return callback(child, i8);
              }
            });
          }
          if (selector instanceof RegExp) {
            return this.walk((child, i8) => {
              if (child.type === "rule" && selector.test(child.selector)) {
                return callback(child, i8);
              }
            });
          }
          return this.walk((child, i8) => {
            if (child.type === "rule" && child.selector === selector) {
              return callback(child, i8);
            }
          });
        }
        get first() {
          if (!this.proxyOf.nodes) return void 0;
          return this.proxyOf.nodes[0];
        }
        get last() {
          if (!this.proxyOf.nodes) return void 0;
          return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
        }
      };
      Container2.registerParse = (dependant) => {
        parse3 = dependant;
      };
      Container2.registerRule = (dependant) => {
        Rule2 = dependant;
      };
      Container2.registerAtRule = (dependant) => {
        AtRule2 = dependant;
      };
      Container2.registerRoot = (dependant) => {
        Root2 = dependant;
      };
      module.exports = Container2;
      Container2.default = Container2;
      Container2.rebuild = (node) => {
        if (node.type === "atrule") {
          Object.setPrototypeOf(node, AtRule2.prototype);
        } else if (node.type === "rule") {
          Object.setPrototypeOf(node, Rule2.prototype);
        } else if (node.type === "decl") {
          Object.setPrototypeOf(node, Declaration2.prototype);
        } else if (node.type === "comment") {
          Object.setPrototypeOf(node, Comment2.prototype);
        } else if (node.type === "root") {
          Object.setPrototypeOf(node, Root2.prototype);
        }
        node[my] = true;
        if (node.nodes) {
          node.nodes.forEach((child) => {
            Container2.rebuild(child);
          });
        }
      };
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/at-rule.js
  var require_at_rule = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/at-rule.js"(exports, module) {
      "use strict";
      var Container2 = require_container();
      var AtRule2 = class extends Container2 {
        constructor(defaults) {
          super(defaults);
          this.type = "atrule";
        }
        append(...children2) {
          if (!this.proxyOf.nodes) this.nodes = [];
          return super.append(...children2);
        }
        prepend(...children2) {
          if (!this.proxyOf.nodes) this.nodes = [];
          return super.prepend(...children2);
        }
      };
      module.exports = AtRule2;
      AtRule2.default = AtRule2;
      Container2.registerAtRule(AtRule2);
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/document.js
  var require_document = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/document.js"(exports, module) {
      "use strict";
      var Container2 = require_container();
      var LazyResult;
      var Processor2;
      var Document3 = class extends Container2 {
        constructor(defaults) {
          super({ type: "document", ...defaults });
          if (!this.nodes) {
            this.nodes = [];
          }
        }
        toResult(opts = {}) {
          let lazy = new LazyResult(new Processor2(), this, opts);
          return lazy.stringify();
        }
      };
      Document3.registerLazyResult = (dependant) => {
        LazyResult = dependant;
      };
      Document3.registerProcessor = (dependant) => {
        Processor2 = dependant;
      };
      module.exports = Document3;
      Document3.default = Document3;
    }
  });

  // node_modules/.pnpm/nanoid@3.3.8/node_modules/nanoid/non-secure/index.cjs
  var require_non_secure = __commonJS({
    "node_modules/.pnpm/nanoid@3.3.8/node_modules/nanoid/non-secure/index.cjs"(exports, module) {
      var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
      var customAlphabet = (alphabet, defaultSize = 21) => {
        return (size3 = defaultSize) => {
          let id4 = "";
          let i8 = size3 | 0;
          while (i8--) {
            id4 += alphabet[Math.random() * alphabet.length | 0];
          }
          return id4;
        };
      };
      var nanoid = (size3 = 21) => {
        let id4 = "";
        let i8 = size3 | 0;
        while (i8--) {
          id4 += urlAlphabet[Math.random() * 64 | 0];
        }
        return id4;
      };
      module.exports = { nanoid, customAlphabet };
    }
  });

  // (disabled):path
  var require_path = __commonJS({
    "(disabled):path"() {
    }
  });

  // (disabled):node_modules/.pnpm/source-map-js@1.2.1/node_modules/source-map-js/source-map.js
  var require_source_map = __commonJS({
    "(disabled):node_modules/.pnpm/source-map-js@1.2.1/node_modules/source-map-js/source-map.js"() {
    }
  });

  // (disabled):url
  var require_url = __commonJS({
    "(disabled):url"() {
    }
  });

  // (disabled):fs
  var require_fs = __commonJS({
    "(disabled):fs"() {
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/previous-map.js
  var require_previous_map = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/previous-map.js"(exports, module) {
      "use strict";
      var { existsSync, readFileSync } = require_fs();
      var { dirname, join: join2 } = require_path();
      var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
      function fromBase64(str) {
        if (Buffer) {
          return Buffer.from(str, "base64").toString();
        } else {
          return window.atob(str);
        }
      }
      var PreviousMap = class {
        constructor(css7, opts) {
          if (opts.map === false) return;
          this.loadAnnotation(css7);
          this.inline = this.startWith(this.annotation, "data:");
          let prev = opts.map ? opts.map.prev : void 0;
          let text = this.loadMap(opts.from, prev);
          if (!this.mapFile && opts.from) {
            this.mapFile = opts.from;
          }
          if (this.mapFile) this.root = dirname(this.mapFile);
          if (text) this.text = text;
        }
        consumer() {
          if (!this.consumerCache) {
            this.consumerCache = new SourceMapConsumer(this.text);
          }
          return this.consumerCache;
        }
        decodeInline(text) {
          let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
          let baseUri = /^data:application\/json;base64,/;
          let charsetUri = /^data:application\/json;charset=utf-?8,/;
          let uri = /^data:application\/json,/;
          let uriMatch = text.match(charsetUri) || text.match(uri);
          if (uriMatch) {
            return decodeURIComponent(text.substr(uriMatch[0].length));
          }
          let baseUriMatch = text.match(baseCharsetUri) || text.match(baseUri);
          if (baseUriMatch) {
            return fromBase64(text.substr(baseUriMatch[0].length));
          }
          let encoding = text.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + encoding);
        }
        getAnnotationURL(sourceMapString) {
          return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
        }
        isMap(map) {
          if (typeof map !== "object") return false;
          return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
        }
        loadAnnotation(css7) {
          let comments = css7.match(/\/\*\s*# sourceMappingURL=/g);
          if (!comments) return;
          let start = css7.lastIndexOf(comments.pop());
          let end = css7.indexOf("*/", start);
          if (start > -1 && end > -1) {
            this.annotation = this.getAnnotationURL(css7.substring(start, end));
          }
        }
        loadFile(path) {
          this.root = dirname(path);
          if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, "utf-8").toString().trim();
          }
        }
        loadMap(file, prev) {
          if (prev === false) return false;
          if (prev) {
            if (typeof prev === "string") {
              return prev;
            } else if (typeof prev === "function") {
              let prevPath = prev(file);
              if (prevPath) {
                let map = this.loadFile(prevPath);
                if (!map) {
                  throw new Error(
                    "Unable to load previous source map: " + prevPath.toString()
                  );
                }
                return map;
              }
            } else if (prev instanceof SourceMapConsumer) {
              return SourceMapGenerator.fromSourceMap(prev).toString();
            } else if (prev instanceof SourceMapGenerator) {
              return prev.toString();
            } else if (this.isMap(prev)) {
              return JSON.stringify(prev);
            } else {
              throw new Error(
                "Unsupported previous source map format: " + prev.toString()
              );
            }
          } else if (this.inline) {
            return this.decodeInline(this.annotation);
          } else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join2(dirname(file), map);
            return this.loadFile(map);
          }
        }
        startWith(string, start) {
          if (!string) return false;
          return string.substr(0, start.length) === start;
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
        }
      };
      module.exports = PreviousMap;
      PreviousMap.default = PreviousMap;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/input.js
  var require_input = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/input.js"(exports, module) {
      "use strict";
      var { nanoid } = require_non_secure();
      var { isAbsolute, resolve } = require_path();
      var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
      var { fileURLToPath, pathToFileURL } = require_url();
      var CssSyntaxError2 = require_css_syntax_error();
      var PreviousMap = require_previous_map();
      var terminalHighlight = require_terminal_highlight();
      var fromOffsetCache = Symbol("fromOffsetCache");
      var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
      var pathAvailable = Boolean(resolve && isAbsolute);
      var Input2 = class {
        constructor(css7, opts = {}) {
          if (css7 === null || typeof css7 === "undefined" || typeof css7 === "object" && !css7.toString) {
            throw new Error(`PostCSS received ${css7} instead of CSS string`);
          }
          this.css = css7.toString();
          if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
            this.hasBOM = true;
            this.css = this.css.slice(1);
          } else {
            this.hasBOM = false;
          }
          if (opts.from) {
            if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
              this.file = opts.from;
            } else {
              this.file = resolve(opts.from);
            }
          }
          if (pathAvailable && sourceMapAvailable) {
            let map = new PreviousMap(this.css, opts);
            if (map.text) {
              this.map = map;
              let file = map.consumer().file;
              if (!this.file && file) this.file = this.mapResolve(file);
            }
          }
          if (!this.file) {
            this.id = "<input css " + nanoid(6) + ">";
          }
          if (this.map) this.map.file = this.from;
        }
        error(message, line, column, opts = {}) {
          let endColumn, endLine, result;
          if (line && typeof line === "object") {
            let start = line;
            let end = column;
            if (typeof start.offset === "number") {
              let pos = this.fromOffset(start.offset);
              line = pos.line;
              column = pos.col;
            } else {
              line = start.line;
              column = start.column;
            }
            if (typeof end.offset === "number") {
              let pos = this.fromOffset(end.offset);
              endLine = pos.line;
              endColumn = pos.col;
            } else {
              endLine = end.line;
              endColumn = end.column;
            }
          } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
          }
          let origin = this.origin(line, column, endLine, endColumn);
          if (origin) {
            result = new CssSyntaxError2(
              message,
              origin.endLine === void 0 ? origin.line : { column: origin.column, line: origin.line },
              origin.endLine === void 0 ? origin.column : { column: origin.endColumn, line: origin.endLine },
              origin.source,
              origin.file,
              opts.plugin
            );
          } else {
            result = new CssSyntaxError2(
              message,
              endLine === void 0 ? line : { column, line },
              endLine === void 0 ? column : { column: endColumn, line: endLine },
              this.css,
              this.file,
              opts.plugin
            );
          }
          result.input = { column, endColumn, endLine, line, source: this.css };
          if (this.file) {
            if (pathToFileURL) {
              result.input.url = pathToFileURL(this.file).toString();
            }
            result.input.file = this.file;
          }
          return result;
        }
        fromOffset(offset3) {
          let lastLine, lineToIndex;
          if (!this[fromOffsetCache]) {
            let lines = this.css.split("\n");
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for (let i8 = 0, l5 = lines.length; i8 < l5; i8++) {
              lineToIndex[i8] = prevIndex;
              prevIndex += lines[i8].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
          } else {
            lineToIndex = this[fromOffsetCache];
          }
          lastLine = lineToIndex[lineToIndex.length - 1];
          let min2 = 0;
          if (offset3 >= lastLine) {
            min2 = lineToIndex.length - 1;
          } else {
            let max2 = lineToIndex.length - 2;
            let mid;
            while (min2 < max2) {
              mid = min2 + (max2 - min2 >> 1);
              if (offset3 < lineToIndex[mid]) {
                max2 = mid - 1;
              } else if (offset3 >= lineToIndex[mid + 1]) {
                min2 = mid + 1;
              } else {
                min2 = mid;
                break;
              }
            }
          }
          return {
            col: offset3 - lineToIndex[min2] + 1,
            line: min2 + 1
          };
        }
        mapResolve(file) {
          if (/^\w+:\/\//.test(file)) {
            return file;
          }
          return resolve(this.map.consumer().sourceRoot || this.map.root || ".", file);
        }
        origin(line, column, endLine, endColumn) {
          if (!this.map) return false;
          let consumer = this.map.consumer();
          let from = consumer.originalPositionFor({ column, line });
          if (!from.source) return false;
          let to;
          if (typeof endLine === "number") {
            to = consumer.originalPositionFor({ column: endColumn, line: endLine });
          }
          let fromUrl;
          if (isAbsolute(from.source)) {
            fromUrl = pathToFileURL(from.source);
          } else {
            fromUrl = new URL(
              from.source,
              this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile)
            );
          }
          let result = {
            column: from.column,
            endColumn: to && to.column,
            endLine: to && to.line,
            line: from.line,
            url: fromUrl.toString()
          };
          if (fromUrl.protocol === "file:") {
            if (fileURLToPath) {
              result.file = fileURLToPath(fromUrl);
            } else {
              throw new Error(`file: protocol is not available in this PostCSS build`);
            }
          }
          let source = consumer.sourceContentFor(from.source);
          if (source) result.source = source;
          return result;
        }
        toJSON() {
          let json = {};
          for (let name2 of ["hasBOM", "css", "file", "id"]) {
            if (this[name2] != null) {
              json[name2] = this[name2];
            }
          }
          if (this.map) {
            json.map = { ...this.map };
            if (json.map.consumerCache) {
              json.map.consumerCache = void 0;
            }
          }
          return json;
        }
        get from() {
          return this.file || this.id;
        }
      };
      module.exports = Input2;
      Input2.default = Input2;
      if (terminalHighlight && terminalHighlight.registerInput) {
        terminalHighlight.registerInput(Input2);
      }
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/root.js
  var require_root = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/root.js"(exports, module) {
      "use strict";
      var Container2 = require_container();
      var LazyResult;
      var Processor2;
      var Root2 = class extends Container2 {
        constructor(defaults) {
          super(defaults);
          this.type = "root";
          if (!this.nodes) this.nodes = [];
        }
        normalize(child, sample, type) {
          let nodes = super.normalize(child);
          if (sample) {
            if (type === "prepend") {
              if (this.nodes.length > 1) {
                sample.raws.before = this.nodes[1].raws.before;
              } else {
                delete sample.raws.before;
              }
            } else if (this.first !== sample) {
              for (let node of nodes) {
                node.raws.before = sample.raws.before;
              }
            }
          }
          return nodes;
        }
        removeChild(child, ignore) {
          let index2 = this.index(child);
          if (!ignore && index2 === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[index2].raws.before;
          }
          return super.removeChild(child);
        }
        toResult(opts = {}) {
          let lazy = new LazyResult(new Processor2(), this, opts);
          return lazy.stringify();
        }
      };
      Root2.registerLazyResult = (dependant) => {
        LazyResult = dependant;
      };
      Root2.registerProcessor = (dependant) => {
        Processor2 = dependant;
      };
      module.exports = Root2;
      Root2.default = Root2;
      Container2.registerRoot(Root2);
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/list.js
  var require_list = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/list.js"(exports, module) {
      "use strict";
      var list2 = {
        comma(string) {
          return list2.split(string, [","], true);
        },
        space(string) {
          let spaces = [" ", "\n", "	"];
          return list2.split(string, spaces);
        },
        split(string, separators, last) {
          let array = [];
          let current = "";
          let split = false;
          let func = 0;
          let inQuote = false;
          let prevQuote = "";
          let escape = false;
          for (let letter of string) {
            if (escape) {
              escape = false;
            } else if (letter === "\\") {
              escape = true;
            } else if (inQuote) {
              if (letter === prevQuote) {
                inQuote = false;
              }
            } else if (letter === '"' || letter === "'") {
              inQuote = true;
              prevQuote = letter;
            } else if (letter === "(") {
              func += 1;
            } else if (letter === ")") {
              if (func > 0) func -= 1;
            } else if (func === 0) {
              if (separators.includes(letter)) split = true;
            }
            if (split) {
              if (current !== "") array.push(current.trim());
              current = "";
              split = false;
            } else {
              current += letter;
            }
          }
          if (last || current !== "") array.push(current.trim());
          return array;
        }
      };
      module.exports = list2;
      list2.default = list2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/rule.js
  var require_rule = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/rule.js"(exports, module) {
      "use strict";
      var Container2 = require_container();
      var list2 = require_list();
      var Rule2 = class extends Container2 {
        constructor(defaults) {
          super(defaults);
          this.type = "rule";
          if (!this.nodes) this.nodes = [];
        }
        get selectors() {
          return list2.comma(this.selector);
        }
        set selectors(values) {
          let match = this.selector ? this.selector.match(/,\s*/) : null;
          let sep = match ? match[0] : "," + this.raw("between", "beforeOpen");
          this.selector = values.join(sep);
        }
      };
      module.exports = Rule2;
      Rule2.default = Rule2;
      Container2.registerRule(Rule2);
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/fromJSON.js
  var require_fromJSON = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/fromJSON.js"(exports, module) {
      "use strict";
      var AtRule2 = require_at_rule();
      var Comment2 = require_comment();
      var Declaration2 = require_declaration();
      var Input2 = require_input();
      var PreviousMap = require_previous_map();
      var Root2 = require_root();
      var Rule2 = require_rule();
      function fromJSON2(json, inputs) {
        if (Array.isArray(json)) return json.map((n8) => fromJSON2(n8));
        let { inputs: ownInputs, ...defaults } = json;
        if (ownInputs) {
          inputs = [];
          for (let input of ownInputs) {
            let inputHydrated = { ...input, __proto__: Input2.prototype };
            if (inputHydrated.map) {
              inputHydrated.map = {
                ...inputHydrated.map,
                __proto__: PreviousMap.prototype
              };
            }
            inputs.push(inputHydrated);
          }
        }
        if (defaults.nodes) {
          defaults.nodes = json.nodes.map((n8) => fromJSON2(n8, inputs));
        }
        if (defaults.source) {
          let { inputId, ...source } = defaults.source;
          defaults.source = source;
          if (inputId != null) {
            defaults.source.input = inputs[inputId];
          }
        }
        if (defaults.type === "root") {
          return new Root2(defaults);
        } else if (defaults.type === "decl") {
          return new Declaration2(defaults);
        } else if (defaults.type === "rule") {
          return new Rule2(defaults);
        } else if (defaults.type === "comment") {
          return new Comment2(defaults);
        } else if (defaults.type === "atrule") {
          return new AtRule2(defaults);
        } else {
          throw new Error("Unknown node type: " + json.type);
        }
      }
      module.exports = fromJSON2;
      fromJSON2.default = fromJSON2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/map-generator.js
  var require_map_generator = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/map-generator.js"(exports, module) {
      "use strict";
      var { dirname, relative, resolve, sep } = require_path();
      var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
      var { pathToFileURL } = require_url();
      var Input2 = require_input();
      var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
      var pathAvailable = Boolean(dirname && resolve && relative && sep);
      var MapGenerator = class {
        constructor(stringify2, root2, opts, cssString) {
          this.stringify = stringify2;
          this.mapOpts = opts.map || {};
          this.root = root2;
          this.opts = opts;
          this.css = cssString;
          this.originalCSS = cssString;
          this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
          this.memoizedFileURLs = /* @__PURE__ */ new Map();
          this.memoizedPaths = /* @__PURE__ */ new Map();
          this.memoizedURLs = /* @__PURE__ */ new Map();
        }
        addAnnotation() {
          let content;
          if (this.isInline()) {
            content = "data:application/json;base64," + this.toBase64(this.map.toString());
          } else if (typeof this.mapOpts.annotation === "string") {
            content = this.mapOpts.annotation;
          } else if (typeof this.mapOpts.annotation === "function") {
            content = this.mapOpts.annotation(this.opts.to, this.root);
          } else {
            content = this.outputFile() + ".map";
          }
          let eol = "\n";
          if (this.css.includes("\r\n")) eol = "\r\n";
          this.css += eol + "/*# sourceMappingURL=" + content + " */";
        }
        applyPrevMaps() {
          for (let prev of this.previous()) {
            let from = this.toUrl(this.path(prev.file));
            let root2 = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
              map = new SourceMapConsumer(prev.text);
              if (map.sourcesContent) {
                map.sourcesContent = null;
              }
            } else {
              map = prev.consumer();
            }
            this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
          }
        }
        clearAnnotation() {
          if (this.mapOpts.annotation === false) return;
          if (this.root) {
            let node;
            for (let i8 = this.root.nodes.length - 1; i8 >= 0; i8--) {
              node = this.root.nodes[i8];
              if (node.type !== "comment") continue;
              if (node.text.startsWith("# sourceMappingURL=")) {
                this.root.removeChild(i8);
              }
            }
          } else if (this.css) {
            this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, "");
          }
        }
        generate() {
          this.clearAnnotation();
          if (pathAvailable && sourceMapAvailable && this.isMap()) {
            return this.generateMap();
          } else {
            let result = "";
            this.stringify(this.root, (i8) => {
              result += i8;
            });
            return [result];
          }
        }
        generateMap() {
          if (this.root) {
            this.generateString();
          } else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev, {
              ignoreInvalidMapping: true
            });
          } else {
            this.map = new SourceMapGenerator({
              file: this.outputFile(),
              ignoreInvalidMapping: true
            });
            this.map.addMapping({
              generated: { column: 0, line: 1 },
              original: { column: 0, line: 1 },
              source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
          }
          if (this.isSourcesContent()) this.setSourcesContent();
          if (this.root && this.previous().length > 0) this.applyPrevMaps();
          if (this.isAnnotation()) this.addAnnotation();
          if (this.isInline()) {
            return [this.css];
          } else {
            return [this.css, this.map];
          }
        }
        generateString() {
          this.css = "";
          this.map = new SourceMapGenerator({
            file: this.outputFile(),
            ignoreInvalidMapping: true
          });
          let line = 1;
          let column = 1;
          let noSource = "<no source>";
          let mapping = {
            generated: { column: 0, line: 0 },
            original: { column: 0, line: 0 },
            source: ""
          };
          let last, lines;
          this.stringify(this.root, (str, node, type) => {
            this.css += str;
            if (node && type !== "end") {
              mapping.generated.line = line;
              mapping.generated.column = column - 1;
              if (node.source && node.source.start) {
                mapping.source = this.sourcePath(node);
                mapping.original.line = node.source.start.line;
                mapping.original.column = node.source.start.column - 1;
                this.map.addMapping(mapping);
              } else {
                mapping.source = noSource;
                mapping.original.line = 1;
                mapping.original.column = 0;
                this.map.addMapping(mapping);
              }
            }
            lines = str.match(/\n/g);
            if (lines) {
              line += lines.length;
              last = str.lastIndexOf("\n");
              column = str.length - last;
            } else {
              column += str.length;
            }
            if (node && type !== "start") {
              let p3 = node.parent || { raws: {} };
              let childless = node.type === "decl" || node.type === "atrule" && !node.nodes;
              if (!childless || node !== p3.last || p3.raws.semicolon) {
                if (node.source && node.source.end) {
                  mapping.source = this.sourcePath(node);
                  mapping.original.line = node.source.end.line;
                  mapping.original.column = node.source.end.column - 1;
                  mapping.generated.line = line;
                  mapping.generated.column = column - 2;
                  this.map.addMapping(mapping);
                } else {
                  mapping.source = noSource;
                  mapping.original.line = 1;
                  mapping.original.column = 0;
                  mapping.generated.line = line;
                  mapping.generated.column = column - 1;
                  this.map.addMapping(mapping);
                }
              }
            }
          });
        }
        isAnnotation() {
          if (this.isInline()) {
            return true;
          }
          if (typeof this.mapOpts.annotation !== "undefined") {
            return this.mapOpts.annotation;
          }
          if (this.previous().length) {
            return this.previous().some((i8) => i8.annotation);
          }
          return true;
        }
        isInline() {
          if (typeof this.mapOpts.inline !== "undefined") {
            return this.mapOpts.inline;
          }
          let annotation = this.mapOpts.annotation;
          if (typeof annotation !== "undefined" && annotation !== true) {
            return false;
          }
          if (this.previous().length) {
            return this.previous().some((i8) => i8.inline);
          }
          return true;
        }
        isMap() {
          if (typeof this.opts.map !== "undefined") {
            return !!this.opts.map;
          }
          return this.previous().length > 0;
        }
        isSourcesContent() {
          if (typeof this.mapOpts.sourcesContent !== "undefined") {
            return this.mapOpts.sourcesContent;
          }
          if (this.previous().length) {
            return this.previous().some((i8) => i8.withContent());
          }
          return true;
        }
        outputFile() {
          if (this.opts.to) {
            return this.path(this.opts.to);
          } else if (this.opts.from) {
            return this.path(this.opts.from);
          } else {
            return "to.css";
          }
        }
        path(file) {
          if (this.mapOpts.absolute) return file;
          if (file.charCodeAt(0) === 60) return file;
          if (/^\w+:\/\//.test(file)) return file;
          let cached = this.memoizedPaths.get(file);
          if (cached) return cached;
          let from = this.opts.to ? dirname(this.opts.to) : ".";
          if (typeof this.mapOpts.annotation === "string") {
            from = dirname(resolve(from, this.mapOpts.annotation));
          }
          let path = relative(from, file);
          this.memoizedPaths.set(file, path);
          return path;
        }
        previous() {
          if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) {
              this.root.walk((node) => {
                if (node.source && node.source.input.map) {
                  let map = node.source.input.map;
                  if (!this.previousMaps.includes(map)) {
                    this.previousMaps.push(map);
                  }
                }
              });
            } else {
              let input = new Input2(this.originalCSS, this.opts);
              if (input.map) this.previousMaps.push(input.map);
            }
          }
          return this.previousMaps;
        }
        setSourcesContent() {
          let already = {};
          if (this.root) {
            this.root.walk((node) => {
              if (node.source) {
                let from = node.source.input.from;
                if (from && !already[from]) {
                  already[from] = true;
                  let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                  this.map.setSourceContent(fromUrl, node.source.input.css);
                }
              }
            });
          } else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(from, this.css);
          }
        }
        sourcePath(node) {
          if (this.mapOpts.from) {
            return this.toUrl(this.mapOpts.from);
          } else if (this.usesFileUrls) {
            return this.toFileUrl(node.source.input.from);
          } else {
            return this.toUrl(this.path(node.source.input.from));
          }
        }
        toBase64(str) {
          if (Buffer) {
            return Buffer.from(str).toString("base64");
          } else {
            return window.btoa(unescape(encodeURIComponent(str)));
          }
        }
        toFileUrl(path) {
          let cached = this.memoizedFileURLs.get(path);
          if (cached) return cached;
          if (pathToFileURL) {
            let fileURL = pathToFileURL(path).toString();
            this.memoizedFileURLs.set(path, fileURL);
            return fileURL;
          } else {
            throw new Error(
              "`map.absolute` option is not available in this PostCSS build"
            );
          }
        }
        toUrl(path) {
          let cached = this.memoizedURLs.get(path);
          if (cached) return cached;
          if (sep === "\\") {
            path = path.replace(/\\/g, "/");
          }
          let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
          this.memoizedURLs.set(path, url);
          return url;
        }
      };
      module.exports = MapGenerator;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/tokenize.js
  var require_tokenize = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/tokenize.js"(exports, module) {
      "use strict";
      var SINGLE_QUOTE = "'".charCodeAt(0);
      var DOUBLE_QUOTE = '"'.charCodeAt(0);
      var BACKSLASH = "\\".charCodeAt(0);
      var SLASH = "/".charCodeAt(0);
      var NEWLINE = "\n".charCodeAt(0);
      var SPACE = " ".charCodeAt(0);
      var FEED = "\f".charCodeAt(0);
      var TAB = "	".charCodeAt(0);
      var CR = "\r".charCodeAt(0);
      var OPEN_SQUARE = "[".charCodeAt(0);
      var CLOSE_SQUARE = "]".charCodeAt(0);
      var OPEN_PARENTHESES = "(".charCodeAt(0);
      var CLOSE_PARENTHESES = ")".charCodeAt(0);
      var OPEN_CURLY = "{".charCodeAt(0);
      var CLOSE_CURLY = "}".charCodeAt(0);
      var SEMICOLON = ";".charCodeAt(0);
      var ASTERISK = "*".charCodeAt(0);
      var COLON = ":".charCodeAt(0);
      var AT = "@".charCodeAt(0);
      var RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
      var RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
      var RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
      var RE_HEX_ESCAPE = /[\da-f]/i;
      module.exports = function tokenizer(input, options = {}) {
        let css7 = input.css.valueOf();
        let ignore = options.ignoreErrors;
        let code, content, escape, next, quote;
        let currentToken, escaped, escapePos, n8, prev;
        let length = css7.length;
        let pos = 0;
        let buffer = [];
        let returned = [];
        function position() {
          return pos;
        }
        function unclosed(what) {
          throw input.error("Unclosed " + what, pos);
        }
        function endOfFile() {
          return returned.length === 0 && pos >= length;
        }
        function nextToken(opts) {
          if (returned.length) return returned.pop();
          if (pos >= length) return;
          let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
          code = css7.charCodeAt(pos);
          switch (code) {
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED: {
              next = pos;
              do {
                next += 1;
                code = css7.charCodeAt(next);
              } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
              currentToken = ["space", css7.slice(pos, next)];
              pos = next - 1;
              break;
            }
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES: {
              let controlChar = String.fromCharCode(code);
              currentToken = [controlChar, controlChar, pos];
              break;
            }
            case OPEN_PARENTHESES: {
              prev = buffer.length ? buffer.pop()[1] : "";
              n8 = css7.charCodeAt(pos + 1);
              if (prev === "url" && n8 !== SINGLE_QUOTE && n8 !== DOUBLE_QUOTE && n8 !== SPACE && n8 !== NEWLINE && n8 !== TAB && n8 !== FEED && n8 !== CR) {
                next = pos;
                do {
                  escaped = false;
                  next = css7.indexOf(")", next + 1);
                  if (next === -1) {
                    if (ignore || ignoreUnclosed) {
                      next = pos;
                      break;
                    } else {
                      unclosed("bracket");
                    }
                  }
                  escapePos = next;
                  while (css7.charCodeAt(escapePos - 1) === BACKSLASH) {
                    escapePos -= 1;
                    escaped = !escaped;
                  }
                } while (escaped);
                currentToken = ["brackets", css7.slice(pos, next + 1), pos, next];
                pos = next;
              } else {
                next = css7.indexOf(")", pos + 1);
                content = css7.slice(pos, next + 1);
                if (next === -1 || RE_BAD_BRACKET.test(content)) {
                  currentToken = ["(", "(", pos];
                } else {
                  currentToken = ["brackets", content, pos, next];
                  pos = next;
                }
              }
              break;
            }
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE: {
              quote = code === SINGLE_QUOTE ? "'" : '"';
              next = pos;
              do {
                escaped = false;
                next = css7.indexOf(quote, next + 1);
                if (next === -1) {
                  if (ignore || ignoreUnclosed) {
                    next = pos + 1;
                    break;
                  } else {
                    unclosed("string");
                  }
                }
                escapePos = next;
                while (css7.charCodeAt(escapePos - 1) === BACKSLASH) {
                  escapePos -= 1;
                  escaped = !escaped;
                }
              } while (escaped);
              currentToken = ["string", css7.slice(pos, next + 1), pos, next];
              pos = next;
              break;
            }
            case AT: {
              RE_AT_END.lastIndex = pos + 1;
              RE_AT_END.test(css7);
              if (RE_AT_END.lastIndex === 0) {
                next = css7.length - 1;
              } else {
                next = RE_AT_END.lastIndex - 2;
              }
              currentToken = ["at-word", css7.slice(pos, next + 1), pos, next];
              pos = next;
              break;
            }
            case BACKSLASH: {
              next = pos;
              escape = true;
              while (css7.charCodeAt(next + 1) === BACKSLASH) {
                next += 1;
                escape = !escape;
              }
              code = css7.charCodeAt(next + 1);
              if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                next += 1;
                if (RE_HEX_ESCAPE.test(css7.charAt(next))) {
                  while (RE_HEX_ESCAPE.test(css7.charAt(next + 1))) {
                    next += 1;
                  }
                  if (css7.charCodeAt(next + 1) === SPACE) {
                    next += 1;
                  }
                }
              }
              currentToken = ["word", css7.slice(pos, next + 1), pos, next];
              pos = next;
              break;
            }
            default: {
              if (code === SLASH && css7.charCodeAt(pos + 1) === ASTERISK) {
                next = css7.indexOf("*/", pos + 2) + 1;
                if (next === 0) {
                  if (ignore || ignoreUnclosed) {
                    next = css7.length;
                  } else {
                    unclosed("comment");
                  }
                }
                currentToken = ["comment", css7.slice(pos, next + 1), pos, next];
                pos = next;
              } else {
                RE_WORD_END.lastIndex = pos + 1;
                RE_WORD_END.test(css7);
                if (RE_WORD_END.lastIndex === 0) {
                  next = css7.length - 1;
                } else {
                  next = RE_WORD_END.lastIndex - 2;
                }
                currentToken = ["word", css7.slice(pos, next + 1), pos, next];
                buffer.push(currentToken);
                pos = next;
              }
              break;
            }
          }
          pos++;
          return currentToken;
        }
        function back(token) {
          returned.push(token);
        }
        return {
          back,
          endOfFile,
          nextToken,
          position
        };
      };
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/parser.js
  var require_parser = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/parser.js"(exports, module) {
      "use strict";
      var AtRule2 = require_at_rule();
      var Comment2 = require_comment();
      var Declaration2 = require_declaration();
      var Root2 = require_root();
      var Rule2 = require_rule();
      var tokenizer = require_tokenize();
      var SAFE_COMMENT_NEIGHBOR = {
        empty: true,
        space: true
      };
      function findLastWithPosition(tokens) {
        for (let i8 = tokens.length - 1; i8 >= 0; i8--) {
          let token = tokens[i8];
          let pos = token[3] || token[2];
          if (pos) return pos;
        }
      }
      var Parser = class {
        constructor(input) {
          this.input = input;
          this.root = new Root2();
          this.current = this.root;
          this.spaces = "";
          this.semicolon = false;
          this.createTokenizer();
          this.root.source = { input, start: { column: 1, line: 1, offset: 0 } };
        }
        atrule(token) {
          let node = new AtRule2();
          node.name = token[1].slice(1);
          if (node.name === "") {
            this.unnamedAtrule(node, token);
          }
          this.init(node, token[2]);
          let type;
          let prev;
          let shift3;
          let last = false;
          let open = false;
          let params = [];
          let brackets = [];
          while (!this.tokenizer.endOfFile()) {
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === "(" || type === "[") {
              brackets.push(type === "(" ? ")" : "]");
            } else if (type === "{" && brackets.length > 0) {
              brackets.push("}");
            } else if (type === brackets[brackets.length - 1]) {
              brackets.pop();
            }
            if (brackets.length === 0) {
              if (type === ";") {
                node.source.end = this.getPosition(token[2]);
                node.source.end.offset++;
                this.semicolon = true;
                break;
              } else if (type === "{") {
                open = true;
                break;
              } else if (type === "}") {
                if (params.length > 0) {
                  shift3 = params.length - 1;
                  prev = params[shift3];
                  while (prev && prev[0] === "space") {
                    prev = params[--shift3];
                  }
                  if (prev) {
                    node.source.end = this.getPosition(prev[3] || prev[2]);
                    node.source.end.offset++;
                  }
                }
                this.end(token);
                break;
              } else {
                params.push(token);
              }
            } else {
              params.push(token);
            }
            if (this.tokenizer.endOfFile()) {
              last = true;
              break;
            }
          }
          node.raws.between = this.spacesAndCommentsFromEnd(params);
          if (params.length) {
            node.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node, "params", params);
            if (last) {
              token = params[params.length - 1];
              node.source.end = this.getPosition(token[3] || token[2]);
              node.source.end.offset++;
              this.spaces = node.raws.between;
              node.raws.between = "";
            }
          } else {
            node.raws.afterName = "";
            node.params = "";
          }
          if (open) {
            node.nodes = [];
            this.current = node;
          }
        }
        checkMissedSemicolon(tokens) {
          let colon = this.colon(tokens);
          if (colon === false) return;
          let founded = 0;
          let token;
          for (let j2 = colon - 1; j2 >= 0; j2--) {
            token = tokens[j2];
            if (token[0] !== "space") {
              founded += 1;
              if (founded === 2) break;
            }
          }
          throw this.input.error(
            "Missed semicolon",
            token[0] === "word" ? token[3] + 1 : token[2]
          );
        }
        colon(tokens) {
          let brackets = 0;
          let prev, token, type;
          for (let [i8, element] of tokens.entries()) {
            token = element;
            type = token[0];
            if (type === "(") {
              brackets += 1;
            }
            if (type === ")") {
              brackets -= 1;
            }
            if (brackets === 0 && type === ":") {
              if (!prev) {
                this.doubleColon(token);
              } else if (prev[0] === "word" && prev[1] === "progid") {
                continue;
              } else {
                return i8;
              }
            }
            prev = token;
          }
          return false;
        }
        comment(token) {
          let node = new Comment2();
          this.init(node, token[2]);
          node.source.end = this.getPosition(token[3] || token[2]);
          node.source.end.offset++;
          let text = token[1].slice(2, -2);
          if (/^\s*$/.test(text)) {
            node.text = "";
            node.raws.left = text;
            node.raws.right = "";
          } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node.text = match[2];
            node.raws.left = match[1];
            node.raws.right = match[3];
          }
        }
        createTokenizer() {
          this.tokenizer = tokenizer(this.input);
        }
        decl(tokens, customProperty) {
          let node = new Declaration2();
          this.init(node, tokens[0][2]);
          let last = tokens[tokens.length - 1];
          if (last[0] === ";") {
            this.semicolon = true;
            tokens.pop();
          }
          node.source.end = this.getPosition(
            last[3] || last[2] || findLastWithPosition(tokens)
          );
          node.source.end.offset++;
          while (tokens[0][0] !== "word") {
            if (tokens.length === 1) this.unknownWord(tokens);
            node.raws.before += tokens.shift()[1];
          }
          node.source.start = this.getPosition(tokens[0][2]);
          node.prop = "";
          while (tokens.length) {
            let type = tokens[0][0];
            if (type === ":" || type === "space" || type === "comment") {
              break;
            }
            node.prop += tokens.shift()[1];
          }
          node.raws.between = "";
          let token;
          while (tokens.length) {
            token = tokens.shift();
            if (token[0] === ":") {
              node.raws.between += token[1];
              break;
            } else {
              if (token[0] === "word" && /\w/.test(token[1])) {
                this.unknownWord([token]);
              }
              node.raws.between += token[1];
            }
          }
          if (node.prop[0] === "_" || node.prop[0] === "*") {
            node.raws.before += node.prop[0];
            node.prop = node.prop.slice(1);
          }
          let firstSpaces = [];
          let next;
          while (tokens.length) {
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            firstSpaces.push(tokens.shift());
          }
          this.precheckMissedSemicolon(tokens);
          for (let i8 = tokens.length - 1; i8 >= 0; i8--) {
            token = tokens[i8];
            if (token[1].toLowerCase() === "!important") {
              node.important = true;
              let string = this.stringFrom(tokens, i8);
              string = this.spacesFromEnd(tokens) + string;
              if (string !== " !important") node.raws.important = string;
              break;
            } else if (token[1].toLowerCase() === "important") {
              let cache = tokens.slice(0);
              let str = "";
              for (let j2 = i8; j2 > 0; j2--) {
                let type = cache[j2][0];
                if (str.trim().startsWith("!") && type !== "space") {
                  break;
                }
                str = cache.pop()[1] + str;
              }
              if (str.trim().startsWith("!")) {
                node.important = true;
                node.raws.important = str;
                tokens = cache;
              }
            }
            if (token[0] !== "space" && token[0] !== "comment") {
              break;
            }
          }
          let hasWord = tokens.some((i8) => i8[0] !== "space" && i8[0] !== "comment");
          if (hasWord) {
            node.raws.between += firstSpaces.map((i8) => i8[1]).join("");
            firstSpaces = [];
          }
          this.raw(node, "value", firstSpaces.concat(tokens), customProperty);
          if (node.value.includes(":") && !customProperty) {
            this.checkMissedSemicolon(tokens);
          }
        }
        doubleColon(token) {
          throw this.input.error(
            "Double colon",
            { offset: token[2] },
            { offset: token[2] + token[1].length }
          );
        }
        emptyRule(token) {
          let node = new Rule2();
          this.init(node, token[2]);
          node.selector = "";
          node.raws.between = "";
          this.current = node;
        }
        end(token) {
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
          }
          this.semicolon = false;
          this.current.raws.after = (this.current.raws.after || "") + this.spaces;
          this.spaces = "";
          if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current.source.end.offset++;
            this.current = this.current.parent;
          } else {
            this.unexpectedClose(token);
          }
        }
        endFile() {
          if (this.current.parent) this.unclosedBlock();
          if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
          }
          this.current.raws.after = (this.current.raws.after || "") + this.spaces;
          this.root.source.end = this.getPosition(this.tokenizer.position());
        }
        freeSemicolon(token) {
          this.spaces += token[1];
          if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
              prev.raws.ownSemicolon = this.spaces;
              this.spaces = "";
            }
          }
        }
        // Helpers
        getPosition(offset3) {
          let pos = this.input.fromOffset(offset3);
          return {
            column: pos.col,
            line: pos.line,
            offset: offset3
          };
        }
        init(node, offset3) {
          this.current.push(node);
          node.source = {
            input: this.input,
            start: this.getPosition(offset3)
          };
          node.raws.before = this.spaces;
          this.spaces = "";
          if (node.type !== "comment") this.semicolon = false;
        }
        other(start) {
          let end = false;
          let type = null;
          let colon = false;
          let bracket = null;
          let brackets = [];
          let customProperty = start[1].startsWith("--");
          let tokens = [];
          let token = start;
          while (token) {
            type = token[0];
            tokens.push(token);
            if (type === "(" || type === "[") {
              if (!bracket) bracket = token;
              brackets.push(type === "(" ? ")" : "]");
            } else if (customProperty && colon && type === "{") {
              if (!bracket) bracket = token;
              brackets.push("}");
            } else if (brackets.length === 0) {
              if (type === ";") {
                if (colon) {
                  this.decl(tokens, customProperty);
                  return;
                } else {
                  break;
                }
              } else if (type === "{") {
                this.rule(tokens);
                return;
              } else if (type === "}") {
                this.tokenizer.back(tokens.pop());
                end = true;
                break;
              } else if (type === ":") {
                colon = true;
              }
            } else if (type === brackets[brackets.length - 1]) {
              brackets.pop();
              if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
          }
          if (this.tokenizer.endOfFile()) end = true;
          if (brackets.length > 0) this.unclosedBracket(bracket);
          if (end && colon) {
            if (!customProperty) {
              while (tokens.length) {
                token = tokens[tokens.length - 1][0];
                if (token !== "space" && token !== "comment") break;
                this.tokenizer.back(tokens.pop());
              }
            }
            this.decl(tokens, customProperty);
          } else {
            this.unknownWord(tokens);
          }
        }
        parse() {
          let token;
          while (!this.tokenizer.endOfFile()) {
            token = this.tokenizer.nextToken();
            switch (token[0]) {
              case "space":
                this.spaces += token[1];
                break;
              case ";":
                this.freeSemicolon(token);
                break;
              case "}":
                this.end(token);
                break;
              case "comment":
                this.comment(token);
                break;
              case "at-word":
                this.atrule(token);
                break;
              case "{":
                this.emptyRule(token);
                break;
              default:
                this.other(token);
                break;
            }
          }
          this.endFile();
        }
        precheckMissedSemicolon() {
        }
        raw(node, prop, tokens, customProperty) {
          let token, type;
          let length = tokens.length;
          let value = "";
          let clean = true;
          let next, prev;
          for (let i8 = 0; i8 < length; i8 += 1) {
            token = tokens[i8];
            type = token[0];
            if (type === "space" && i8 === length - 1 && !customProperty) {
              clean = false;
            } else if (type === "comment") {
              prev = tokens[i8 - 1] ? tokens[i8 - 1][0] : "empty";
              next = tokens[i8 + 1] ? tokens[i8 + 1][0] : "empty";
              if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                if (value.slice(-1) === ",") {
                  clean = false;
                } else {
                  value += token[1];
                }
              } else {
                clean = false;
              }
            } else {
              value += token[1];
            }
          }
          if (!clean) {
            let raw = tokens.reduce((all, i8) => all + i8[1], "");
            node.raws[prop] = { raw, value };
          }
          node[prop] = value;
        }
        rule(tokens) {
          tokens.pop();
          let node = new Rule2();
          this.init(node, tokens[0][2]);
          node.raws.between = this.spacesAndCommentsFromEnd(tokens);
          this.raw(node, "selector", tokens);
          this.current = node;
        }
        spacesAndCommentsFromEnd(tokens) {
          let lastTokenType;
          let spaces = "";
          while (tokens.length) {
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space" && lastTokenType !== "comment") break;
            spaces = tokens.pop()[1] + spaces;
          }
          return spaces;
        }
        // Errors
        spacesAndCommentsFromStart(tokens) {
          let next;
          let spaces = "";
          while (tokens.length) {
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            spaces += tokens.shift()[1];
          }
          return spaces;
        }
        spacesFromEnd(tokens) {
          let lastTokenType;
          let spaces = "";
          while (tokens.length) {
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space") break;
            spaces = tokens.pop()[1] + spaces;
          }
          return spaces;
        }
        stringFrom(tokens, from) {
          let result = "";
          for (let i8 = from; i8 < tokens.length; i8++) {
            result += tokens[i8][1];
          }
          tokens.splice(from, tokens.length - from);
          return result;
        }
        unclosedBlock() {
          let pos = this.current.source.start;
          throw this.input.error("Unclosed block", pos.line, pos.column);
        }
        unclosedBracket(bracket) {
          throw this.input.error(
            "Unclosed bracket",
            { offset: bracket[2] },
            { offset: bracket[2] + 1 }
          );
        }
        unexpectedClose(token) {
          throw this.input.error(
            "Unexpected }",
            { offset: token[2] },
            { offset: token[2] + 1 }
          );
        }
        unknownWord(tokens) {
          throw this.input.error(
            "Unknown word",
            { offset: tokens[0][2] },
            { offset: tokens[0][2] + tokens[0][1].length }
          );
        }
        unnamedAtrule(node, token) {
          throw this.input.error(
            "At-rule without name",
            { offset: token[2] },
            { offset: token[2] + token[1].length }
          );
        }
      };
      module.exports = Parser;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/parse.js"(exports, module) {
      "use strict";
      var Container2 = require_container();
      var Input2 = require_input();
      var Parser = require_parser();
      function parse3(css7, opts) {
        let input = new Input2(css7, opts);
        let parser2 = new Parser(input);
        try {
          parser2.parse();
        } catch (e12) {
          if (true) {
            if (e12.name === "CssSyntaxError" && opts && opts.from) {
              if (/\.scss$/i.test(opts.from)) {
                e12.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
              } else if (/\.sass/i.test(opts.from)) {
                e12.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
              } else if (/\.less$/i.test(opts.from)) {
                e12.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
              }
            }
          }
          throw e12;
        }
        return parser2.root;
      }
      module.exports = parse3;
      parse3.default = parse3;
      Container2.registerParse(parse3);
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/warning.js
  var require_warning = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/warning.js"(exports, module) {
      "use strict";
      var Warning2 = class {
        constructor(text, opts = {}) {
          this.type = "warning";
          this.text = text;
          if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
          }
          for (let opt in opts) this[opt] = opts[opt];
        }
        toString() {
          if (this.node) {
            return this.node.error(this.text, {
              index: this.index,
              plugin: this.plugin,
              word: this.word
            }).message;
          }
          if (this.plugin) {
            return this.plugin + ": " + this.text;
          }
          return this.text;
        }
      };
      module.exports = Warning2;
      Warning2.default = Warning2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/result.js
  var require_result = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/result.js"(exports, module) {
      "use strict";
      var Warning2 = require_warning();
      var Result2 = class {
        constructor(processor, root2, opts) {
          this.processor = processor;
          this.messages = [];
          this.root = root2;
          this.opts = opts;
          this.css = void 0;
          this.map = void 0;
        }
        toString() {
          return this.css;
        }
        warn(text, opts = {}) {
          if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
              opts.plugin = this.lastPlugin.postcssPlugin;
            }
          }
          let warning = new Warning2(text, opts);
          this.messages.push(warning);
          return warning;
        }
        warnings() {
          return this.messages.filter((i8) => i8.type === "warning");
        }
        get content() {
          return this.css;
        }
      };
      module.exports = Result2;
      Result2.default = Result2;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/warn-once.js
  var require_warn_once = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/warn-once.js"(exports, module) {
      "use strict";
      var printed = {};
      module.exports = function warnOnce(message) {
        if (printed[message]) return;
        printed[message] = true;
        if (typeof console !== "undefined" && console.warn) {
          console.warn(message);
        }
      };
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/lazy-result.js
  var require_lazy_result = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/lazy-result.js"(exports, module) {
      "use strict";
      var Container2 = require_container();
      var Document3 = require_document();
      var MapGenerator = require_map_generator();
      var parse3 = require_parse();
      var Result2 = require_result();
      var Root2 = require_root();
      var stringify2 = require_stringify();
      var { isClean, my } = require_symbols();
      var warnOnce = require_warn_once();
      var TYPE_TO_CLASS_NAME = {
        atrule: "AtRule",
        comment: "Comment",
        decl: "Declaration",
        document: "Document",
        root: "Root",
        rule: "Rule"
      };
      var PLUGIN_PROPS = {
        AtRule: true,
        AtRuleExit: true,
        Comment: true,
        CommentExit: true,
        Declaration: true,
        DeclarationExit: true,
        Document: true,
        DocumentExit: true,
        Once: true,
        OnceExit: true,
        postcssPlugin: true,
        prepare: true,
        Root: true,
        RootExit: true,
        Rule: true,
        RuleExit: true
      };
      var NOT_VISITORS = {
        Once: true,
        postcssPlugin: true,
        prepare: true
      };
      var CHILDREN = 0;
      function isPromise2(obj) {
        return typeof obj === "object" && typeof obj.then === "function";
      }
      function getEvents(node) {
        let key = false;
        let type = TYPE_TO_CLASS_NAME[node.type];
        if (node.type === "decl") {
          key = node.prop.toLowerCase();
        } else if (node.type === "atrule") {
          key = node.name.toLowerCase();
        }
        if (key && node.append) {
          return [
            type,
            type + "-" + key,
            CHILDREN,
            type + "Exit",
            type + "Exit-" + key
          ];
        } else if (key) {
          return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
        } else if (node.append) {
          return [type, CHILDREN, type + "Exit"];
        } else {
          return [type, type + "Exit"];
        }
      }
      function toStack(node) {
        let events;
        if (node.type === "document") {
          events = ["Document", CHILDREN, "DocumentExit"];
        } else if (node.type === "root") {
          events = ["Root", CHILDREN, "RootExit"];
        } else {
          events = getEvents(node);
        }
        return {
          eventIndex: 0,
          events,
          iterator: 0,
          node,
          visitorIndex: 0,
          visitors: []
        };
      }
      function cleanMarks(node) {
        node[isClean] = false;
        if (node.nodes) node.nodes.forEach((i8) => cleanMarks(i8));
        return node;
      }
      var postcss2 = {};
      var LazyResult = class _LazyResult {
        constructor(processor, css7, opts) {
          this.stringified = false;
          this.processed = false;
          let root2;
          if (typeof css7 === "object" && css7 !== null && (css7.type === "root" || css7.type === "document")) {
            root2 = cleanMarks(css7);
          } else if (css7 instanceof _LazyResult || css7 instanceof Result2) {
            root2 = cleanMarks(css7.root);
            if (css7.map) {
              if (typeof opts.map === "undefined") opts.map = {};
              if (!opts.map.inline) opts.map.inline = false;
              opts.map.prev = css7.map;
            }
          } else {
            let parser2 = parse3;
            if (opts.syntax) parser2 = opts.syntax.parse;
            if (opts.parser) parser2 = opts.parser;
            if (parser2.parse) parser2 = parser2.parse;
            try {
              root2 = parser2(css7, opts);
            } catch (error) {
              this.processed = true;
              this.error = error;
            }
            if (root2 && !root2[my]) {
              Container2.rebuild(root2);
            }
          }
          this.result = new Result2(processor, root2, opts);
          this.helpers = { ...postcss2, postcss: postcss2, result: this.result };
          this.plugins = this.processor.plugins.map((plugin2) => {
            if (typeof plugin2 === "object" && plugin2.prepare) {
              return { ...plugin2, ...plugin2.prepare(this.result) };
            } else {
              return plugin2;
            }
          });
        }
        async() {
          if (this.error) return Promise.reject(this.error);
          if (this.processed) return Promise.resolve(this.result);
          if (!this.processing) {
            this.processing = this.runAsync();
          }
          return this.processing;
        }
        catch(onRejected) {
          return this.async().catch(onRejected);
        }
        finally(onFinally) {
          return this.async().then(onFinally, onFinally);
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins");
        }
        handleError(error, node) {
          let plugin2 = this.result.lastPlugin;
          try {
            if (node) node.addToError(error);
            this.error = error;
            if (error.name === "CssSyntaxError" && !error.plugin) {
              error.plugin = plugin2.postcssPlugin;
              error.setMessage();
            } else if (plugin2.postcssVersion) {
              if (true) {
                let pluginName = plugin2.postcssPlugin;
                let pluginVer = plugin2.postcssVersion;
                let runtimeVer = this.result.processor.version;
                let a4 = pluginVer.split(".");
                let b3 = runtimeVer.split(".");
                if (a4[0] !== b3[0] || parseInt(a4[1]) > parseInt(b3[1])) {
                  console.error(
                    "Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below."
                  );
                }
              }
            }
          } catch (err) {
            if (console && console.error) console.error(err);
          }
          return error;
        }
        prepareVisitors() {
          this.listeners = {};
          let add = (plugin2, type, cb) => {
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([plugin2, cb]);
          };
          for (let plugin2 of this.plugins) {
            if (typeof plugin2 === "object") {
              for (let event in plugin2) {
                if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                  throw new Error(
                    `Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
                  );
                }
                if (!NOT_VISITORS[event]) {
                  if (typeof plugin2[event] === "object") {
                    for (let filter in plugin2[event]) {
                      if (filter === "*") {
                        add(plugin2, event, plugin2[event][filter]);
                      } else {
                        add(
                          plugin2,
                          event + "-" + filter.toLowerCase(),
                          plugin2[event][filter]
                        );
                      }
                    }
                  } else if (typeof plugin2[event] === "function") {
                    add(plugin2, event, plugin2[event]);
                  }
                }
              }
            }
          }
          this.hasListener = Object.keys(this.listeners).length > 0;
        }
        async runAsync() {
          this.plugin = 0;
          for (let i8 = 0; i8 < this.plugins.length; i8++) {
            let plugin2 = this.plugins[i8];
            let promise = this.runOnRoot(plugin2);
            if (isPromise2(promise)) {
              try {
                await promise;
              } catch (error) {
                throw this.handleError(error);
              }
            }
          }
          this.prepareVisitors();
          if (this.hasListener) {
            let root2 = this.result.root;
            while (!root2[isClean]) {
              root2[isClean] = true;
              let stack = [toStack(root2)];
              while (stack.length > 0) {
                let promise = this.visitTick(stack);
                if (isPromise2(promise)) {
                  try {
                    await promise;
                  } catch (e12) {
                    let node = stack[stack.length - 1].node;
                    throw this.handleError(e12, node);
                  }
                }
              }
            }
            if (this.listeners.OnceExit) {
              for (let [plugin2, visitor] of this.listeners.OnceExit) {
                this.result.lastPlugin = plugin2;
                try {
                  if (root2.type === "document") {
                    let roots = root2.nodes.map(
                      (subRoot) => visitor(subRoot, this.helpers)
                    );
                    await Promise.all(roots);
                  } else {
                    await visitor(root2, this.helpers);
                  }
                } catch (e12) {
                  throw this.handleError(e12);
                }
              }
            }
          }
          this.processed = true;
          return this.stringify();
        }
        runOnRoot(plugin2) {
          this.result.lastPlugin = plugin2;
          try {
            if (typeof plugin2 === "object" && plugin2.Once) {
              if (this.result.root.type === "document") {
                let roots = this.result.root.nodes.map(
                  (root2) => plugin2.Once(root2, this.helpers)
                );
                if (isPromise2(roots[0])) {
                  return Promise.all(roots);
                }
                return roots;
              }
              return plugin2.Once(this.result.root, this.helpers);
            } else if (typeof plugin2 === "function") {
              return plugin2(this.result.root, this.result);
            }
          } catch (error) {
            throw this.handleError(error);
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = true;
          this.sync();
          let opts = this.result.opts;
          let str = stringify2;
          if (opts.syntax) str = opts.syntax.stringify;
          if (opts.stringifier) str = opts.stringifier;
          if (str.stringify) str = str.stringify;
          let map = new MapGenerator(str, this.result.root, this.result.opts);
          let data = map.generate();
          this.result.css = data[0];
          this.result.map = data[1];
          return this.result;
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          this.processed = true;
          if (this.processing) {
            throw this.getAsyncError();
          }
          for (let plugin2 of this.plugins) {
            let promise = this.runOnRoot(plugin2);
            if (isPromise2(promise)) {
              throw this.getAsyncError();
            }
          }
          this.prepareVisitors();
          if (this.hasListener) {
            let root2 = this.result.root;
            while (!root2[isClean]) {
              root2[isClean] = true;
              this.walkSync(root2);
            }
            if (this.listeners.OnceExit) {
              if (root2.type === "document") {
                for (let subRoot of root2.nodes) {
                  this.visitSync(this.listeners.OnceExit, subRoot);
                }
              } else {
                this.visitSync(this.listeners.OnceExit, root2);
              }
            }
          }
          return this.result;
        }
        then(onFulfilled, onRejected) {
          if (true) {
            if (!("from" in this.opts)) {
              warnOnce(
                "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
              );
            }
          }
          return this.async().then(onFulfilled, onRejected);
        }
        toString() {
          return this.css;
        }
        visitSync(visitors, node) {
          for (let [plugin2, visitor] of visitors) {
            this.result.lastPlugin = plugin2;
            let promise;
            try {
              promise = visitor(node, this.helpers);
            } catch (e12) {
              throw this.handleError(e12, node.proxyOf);
            }
            if (node.type !== "root" && node.type !== "document" && !node.parent) {
              return true;
            }
            if (isPromise2(promise)) {
              throw this.getAsyncError();
            }
          }
        }
        visitTick(stack) {
          let visit = stack[stack.length - 1];
          let { node, visitors } = visit;
          if (node.type !== "root" && node.type !== "document" && !node.parent) {
            stack.pop();
            return;
          }
          if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
            let [plugin2, visitor] = visitors[visit.visitorIndex];
            visit.visitorIndex += 1;
            if (visit.visitorIndex === visitors.length) {
              visit.visitors = [];
              visit.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin2;
            try {
              return visitor(node.toProxy(), this.helpers);
            } catch (e12) {
              throw this.handleError(e12, node);
            }
          }
          if (visit.iterator !== 0) {
            let iterator = visit.iterator;
            let child;
            while (child = node.nodes[node.indexes[iterator]]) {
              node.indexes[iterator] += 1;
              if (!child[isClean]) {
                child[isClean] = true;
                stack.push(toStack(child));
                return;
              }
            }
            visit.iterator = 0;
            delete node.indexes[iterator];
          }
          let events = visit.events;
          while (visit.eventIndex < events.length) {
            let event = events[visit.eventIndex];
            visit.eventIndex += 1;
            if (event === CHILDREN) {
              if (node.nodes && node.nodes.length) {
                node[isClean] = true;
                visit.iterator = node.getIterator();
              }
              return;
            } else if (this.listeners[event]) {
              visit.visitors = this.listeners[event];
              return;
            }
          }
          stack.pop();
        }
        walkSync(node) {
          node[isClean] = true;
          let events = getEvents(node);
          for (let event of events) {
            if (event === CHILDREN) {
              if (node.nodes) {
                node.each((child) => {
                  if (!child[isClean]) this.walkSync(child);
                });
              }
            } else {
              let visitors = this.listeners[event];
              if (visitors) {
                if (this.visitSync(visitors, node.toProxy())) return;
              }
            }
          }
        }
        warnings() {
          return this.sync().warnings();
        }
        get content() {
          return this.stringify().content;
        }
        get css() {
          return this.stringify().css;
        }
        get map() {
          return this.stringify().map;
        }
        get messages() {
          return this.sync().messages;
        }
        get opts() {
          return this.result.opts;
        }
        get processor() {
          return this.result.processor;
        }
        get root() {
          return this.sync().root;
        }
        get [Symbol.toStringTag]() {
          return "LazyResult";
        }
      };
      LazyResult.registerPostcss = (dependant) => {
        postcss2 = dependant;
      };
      module.exports = LazyResult;
      LazyResult.default = LazyResult;
      Root2.registerLazyResult(LazyResult);
      Document3.registerLazyResult(LazyResult);
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/no-work-result.js
  var require_no_work_result = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/no-work-result.js"(exports, module) {
      "use strict";
      var MapGenerator = require_map_generator();
      var parse3 = require_parse();
      var Result2 = require_result();
      var stringify2 = require_stringify();
      var warnOnce = require_warn_once();
      var NoWorkResult = class {
        constructor(processor, css7, opts) {
          css7 = css7.toString();
          this.stringified = false;
          this._processor = processor;
          this._css = css7;
          this._opts = opts;
          this._map = void 0;
          let root2;
          let str = stringify2;
          this.result = new Result2(this._processor, root2, this._opts);
          this.result.css = css7;
          let self2 = this;
          Object.defineProperty(this.result, "root", {
            get() {
              return self2.root;
            }
          });
          let map = new MapGenerator(str, root2, this._opts, css7);
          if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) {
              this.result.css = generatedCSS;
            }
            if (generatedMap) {
              this.result.map = generatedMap;
            }
          } else {
            map.clearAnnotation();
            this.result.css = map.css;
          }
        }
        async() {
          if (this.error) return Promise.reject(this.error);
          return Promise.resolve(this.result);
        }
        catch(onRejected) {
          return this.async().catch(onRejected);
        }
        finally(onFinally) {
          return this.async().then(onFinally, onFinally);
        }
        sync() {
          if (this.error) throw this.error;
          return this.result;
        }
        then(onFulfilled, onRejected) {
          if (true) {
            if (!("from" in this._opts)) {
              warnOnce(
                "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
              );
            }
          }
          return this.async().then(onFulfilled, onRejected);
        }
        toString() {
          return this._css;
        }
        warnings() {
          return [];
        }
        get content() {
          return this.result.css;
        }
        get css() {
          return this.result.css;
        }
        get map() {
          return this.result.map;
        }
        get messages() {
          return [];
        }
        get opts() {
          return this.result.opts;
        }
        get processor() {
          return this.result.processor;
        }
        get root() {
          if (this._root) {
            return this._root;
          }
          let root2;
          let parser2 = parse3;
          try {
            root2 = parser2(this._css, this._opts);
          } catch (error) {
            this.error = error;
          }
          if (this.error) {
            throw this.error;
          } else {
            this._root = root2;
            return root2;
          }
        }
        get [Symbol.toStringTag]() {
          return "NoWorkResult";
        }
      };
      module.exports = NoWorkResult;
      NoWorkResult.default = NoWorkResult;
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/processor.js
  var require_processor = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/processor.js"(exports, module) {
      "use strict";
      var Document3 = require_document();
      var LazyResult = require_lazy_result();
      var NoWorkResult = require_no_work_result();
      var Root2 = require_root();
      var Processor2 = class {
        constructor(plugins = []) {
          this.version = "8.4.49";
          this.plugins = this.normalize(plugins);
        }
        normalize(plugins) {
          let normalized = [];
          for (let i8 of plugins) {
            if (i8.postcss === true) {
              i8 = i8();
            } else if (i8.postcss) {
              i8 = i8.postcss;
            }
            if (typeof i8 === "object" && Array.isArray(i8.plugins)) {
              normalized = normalized.concat(i8.plugins);
            } else if (typeof i8 === "object" && i8.postcssPlugin) {
              normalized.push(i8);
            } else if (typeof i8 === "function") {
              normalized.push(i8);
            } else if (typeof i8 === "object" && (i8.parse || i8.stringify)) {
              if (true) {
                throw new Error(
                  "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
                );
              }
            } else {
              throw new Error(i8 + " is not a PostCSS plugin");
            }
          }
          return normalized;
        }
        process(css7, opts = {}) {
          if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
            return new NoWorkResult(this, css7, opts);
          } else {
            return new LazyResult(this, css7, opts);
          }
        }
        use(plugin2) {
          this.plugins = this.plugins.concat(this.normalize([plugin2]));
          return this;
        }
      };
      module.exports = Processor2;
      Processor2.default = Processor2;
      Root2.registerProcessor(Processor2);
      Document3.registerProcessor(Processor2);
    }
  });

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/postcss.js
  var require_postcss = __commonJS({
    "node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/postcss.js"(exports, module) {
      "use strict";
      var AtRule2 = require_at_rule();
      var Comment2 = require_comment();
      var Container2 = require_container();
      var CssSyntaxError2 = require_css_syntax_error();
      var Declaration2 = require_declaration();
      var Document3 = require_document();
      var fromJSON2 = require_fromJSON();
      var Input2 = require_input();
      var LazyResult = require_lazy_result();
      var list2 = require_list();
      var Node3 = require_node();
      var parse3 = require_parse();
      var Processor2 = require_processor();
      var Result2 = require_result();
      var Root2 = require_root();
      var Rule2 = require_rule();
      var stringify2 = require_stringify();
      var Warning2 = require_warning();
      function postcss2(...plugins) {
        if (plugins.length === 1 && Array.isArray(plugins[0])) {
          plugins = plugins[0];
        }
        return new Processor2(plugins);
      }
      postcss2.plugin = function plugin2(name2, initializer) {
        let warningPrinted = false;
        function creator(...args) {
          if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            console.warn(
              name2 + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"
            );
            if (process.env.LANG && process.env.LANG.startsWith("cn")) {
              console.warn(
                name2 + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"
              );
            }
          }
          let transformer = initializer(...args);
          transformer.postcssPlugin = name2;
          transformer.postcssVersion = new Processor2().version;
          return transformer;
        }
        let cache;
        Object.defineProperty(creator, "postcss", {
          get() {
            if (!cache) cache = creator();
            return cache;
          }
        });
        creator.process = function(css7, processOpts, pluginOpts) {
          return postcss2([creator(pluginOpts)]).process(css7, processOpts);
        };
        return creator;
      };
      postcss2.stringify = stringify2;
      postcss2.parse = parse3;
      postcss2.fromJSON = fromJSON2;
      postcss2.list = list2;
      postcss2.comment = (defaults) => new Comment2(defaults);
      postcss2.atRule = (defaults) => new AtRule2(defaults);
      postcss2.decl = (defaults) => new Declaration2(defaults);
      postcss2.rule = (defaults) => new Rule2(defaults);
      postcss2.root = (defaults) => new Root2(defaults);
      postcss2.document = (defaults) => new Document3(defaults);
      postcss2.CssSyntaxError = CssSyntaxError2;
      postcss2.Declaration = Declaration2;
      postcss2.Container = Container2;
      postcss2.Processor = Processor2;
      postcss2.Document = Document3;
      postcss2.Comment = Comment2;
      postcss2.Warning = Warning2;
      postcss2.AtRule = AtRule2;
      postcss2.Result = Result2;
      postcss2.Input = Input2;
      postcss2.Rule = Rule2;
      postcss2.Root = Root2;
      postcss2.Node = Node3;
      LazyResult.registerPostcss(postcss2);
      module.exports = postcss2;
      postcss2.default = postcss2;
    }
  });

  // node_modules/.pnpm/camelcase-css@2.0.1/node_modules/camelcase-css/index-es5.js
  var require_index_es5 = __commonJS({
    "node_modules/.pnpm/camelcase-css@2.0.1/node_modules/camelcase-css/index-es5.js"(exports, module) {
      "use strict";
      var pattern = /-(\w|$)/g;
      var callback = function callback2(dashChar, char) {
        return char.toUpperCase();
      };
      var camelCaseCSS = function camelCaseCSS2(property) {
        property = property.toLowerCase();
        if (property === "float") {
          return "cssFloat";
        } else if (property.charCodeAt(0) === 45 && property.charCodeAt(1) === 109 && property.charCodeAt(2) === 115 && property.charCodeAt(3) === 45) {
          return property.substr(1).replace(pattern, callback);
        } else {
          return property.replace(pattern, callback);
        }
      };
      module.exports = camelCaseCSS;
    }
  });

  // node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/objectifier.js
  var require_objectifier = __commonJS({
    "node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/objectifier.js"(exports, module) {
      var camelcase = require_index_es5();
      var UNITLESS = {
        boxFlex: true,
        boxFlexGroup: true,
        columnCount: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        strokeDashoffset: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      function atRule2(node) {
        if (typeof node.nodes === "undefined") {
          return true;
        } else {
          return process2(node);
        }
      }
      function process2(node) {
        let name2;
        let result = {};
        node.each((child) => {
          if (child.type === "atrule") {
            name2 = "@" + child.name;
            if (child.params) name2 += " " + child.params;
            if (typeof result[name2] === "undefined") {
              result[name2] = atRule2(child);
            } else if (Array.isArray(result[name2])) {
              result[name2].push(atRule2(child));
            } else {
              result[name2] = [result[name2], atRule2(child)];
            }
          } else if (child.type === "rule") {
            let body = process2(child);
            if (result[child.selector]) {
              for (let i8 in body) {
                result[child.selector][i8] = body[i8];
              }
            } else {
              result[child.selector] = body;
            }
          } else if (child.type === "decl") {
            if (child.prop[0] === "-" && child.prop[1] === "-") {
              name2 = child.prop;
            } else if (child.parent && child.parent.selector === ":export") {
              name2 = child.prop;
            } else {
              name2 = camelcase(child.prop);
            }
            let value = child.value;
            if (!isNaN(child.value) && UNITLESS[name2]) {
              value = parseFloat(child.value);
            }
            if (child.important) value += " !important";
            if (typeof result[name2] === "undefined") {
              result[name2] = value;
            } else if (Array.isArray(result[name2])) {
              result[name2].push(value);
            } else {
              result[name2] = [result[name2], value];
            }
          }
        });
        return result;
      }
      module.exports = process2;
    }
  });

  // node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/parser.js
  var require_parser2 = __commonJS({
    "node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/parser.js"(exports, module) {
      var postcss2 = require_postcss();
      var IMPORTANT = /\s*!important\s*$/i;
      var UNITLESS = {
        "box-flex": true,
        "box-flex-group": true,
        "column-count": true,
        "flex": true,
        "flex-grow": true,
        "flex-positive": true,
        "flex-shrink": true,
        "flex-negative": true,
        "font-weight": true,
        "line-clamp": true,
        "line-height": true,
        "opacity": true,
        "order": true,
        "orphans": true,
        "tab-size": true,
        "widows": true,
        "z-index": true,
        "zoom": true,
        "fill-opacity": true,
        "stroke-dashoffset": true,
        "stroke-opacity": true,
        "stroke-width": true
      };
      function dashify(str) {
        return str.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
      }
      function decl2(parent, name2, value) {
        if (value === false || value === null) return;
        if (!name2.startsWith("--")) {
          name2 = dashify(name2);
        }
        if (typeof value === "number") {
          if (value === 0 || UNITLESS[name2]) {
            value = value.toString();
          } else {
            value += "px";
          }
        }
        if (name2 === "css-float") name2 = "float";
        if (IMPORTANT.test(value)) {
          value = value.replace(IMPORTANT, "");
          parent.push(postcss2.decl({ prop: name2, value, important: true }));
        } else {
          parent.push(postcss2.decl({ prop: name2, value }));
        }
      }
      function atRule2(parent, parts, value) {
        let node = postcss2.atRule({ name: parts[1], params: parts[3] || "" });
        if (typeof value === "object") {
          node.nodes = [];
          parse3(value, node);
        }
        parent.push(node);
      }
      function parse3(obj, parent) {
        let name2, value, node;
        for (name2 in obj) {
          value = obj[name2];
          if (value === null || typeof value === "undefined") {
            continue;
          } else if (name2[0] === "@") {
            let parts = name2.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
            if (Array.isArray(value)) {
              for (let i8 of value) {
                atRule2(parent, parts, i8);
              }
            } else {
              atRule2(parent, parts, value);
            }
          } else if (Array.isArray(value)) {
            for (let i8 of value) {
              decl2(parent, name2, i8);
            }
          } else if (typeof value === "object") {
            node = postcss2.rule({ selector: name2 });
            parse3(value, node);
            parent.push(node);
          } else {
            decl2(parent, name2, value);
          }
        }
      }
      module.exports = function(obj) {
        let root2 = postcss2.root();
        parse3(obj, root2);
        return root2;
      };
    }
  });

  // node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/process-result.js
  var require_process_result = __commonJS({
    "node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/process-result.js"(exports, module) {
      var objectify2 = require_objectifier();
      module.exports = function processResult(result) {
        if (console && console.warn) {
          result.warnings().forEach((warn) => {
            let source = warn.plugin || "PostCSS";
            console.warn(source + ": " + warn.text);
          });
        }
        return objectify2(result.root);
      };
    }
  });

  // node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/async.js
  var require_async = __commonJS({
    "node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/async.js"(exports, module) {
      var postcss2 = require_postcss();
      var processResult = require_process_result();
      var parse3 = require_parser2();
      module.exports = function async2(plugins) {
        let processor = postcss2(plugins);
        return async (input) => {
          let result = await processor.process(input, {
            parser: parse3,
            from: void 0
          });
          return processResult(result);
        };
      };
    }
  });

  // node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/sync.js
  var require_sync = __commonJS({
    "node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/sync.js"(exports, module) {
      var postcss2 = require_postcss();
      var processResult = require_process_result();
      var parse3 = require_parser2();
      module.exports = function(plugins) {
        let processor = postcss2(plugins);
        return (input) => {
          let result = processor.process(input, { parser: parse3, from: void 0 });
          return processResult(result);
        };
      };
    }
  });

  // node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/index.js
  var require_postcss_js = __commonJS({
    "node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/index.js"(exports, module) {
      var objectify2 = require_objectifier();
      var parse3 = require_parser2();
      var async2 = require_async();
      var sync2 = require_sync();
      module.exports = {
        objectify: objectify2,
        parse: parse3,
        async: async2,
        sync: sync2
      };
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/unesc.js
  var require_unesc = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/unesc.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = unesc;
      function gobbleHex(str) {
        var lower = str.toLowerCase();
        var hex = "";
        var spaceTerminated = false;
        for (var i8 = 0; i8 < 6 && lower[i8] !== void 0; i8++) {
          var code = lower.charCodeAt(i8);
          var valid = code >= 97 && code <= 102 || code >= 48 && code <= 57;
          spaceTerminated = code === 32;
          if (!valid) {
            break;
          }
          hex += lower[i8];
        }
        if (hex.length === 0) {
          return void 0;
        }
        var codePoint = parseInt(hex, 16);
        var isSurrogate = codePoint >= 55296 && codePoint <= 57343;
        if (isSurrogate || codePoint === 0 || codePoint > 1114111) {
          return ["\uFFFD", hex.length + (spaceTerminated ? 1 : 0)];
        }
        return [String.fromCodePoint(codePoint), hex.length + (spaceTerminated ? 1 : 0)];
      }
      var CONTAINS_ESCAPE = /\\/;
      function unesc(str) {
        var needToProcess = CONTAINS_ESCAPE.test(str);
        if (!needToProcess) {
          return str;
        }
        var ret = "";
        for (var i8 = 0; i8 < str.length; i8++) {
          if (str[i8] === "\\") {
            var gobbled = gobbleHex(str.slice(i8 + 1, i8 + 7));
            if (gobbled !== void 0) {
              ret += gobbled[0];
              i8 += gobbled[1];
              continue;
            }
            if (str[i8 + 1] === "\\") {
              ret += "\\";
              i8++;
              continue;
            }
            if (str.length === i8 + 1) {
              ret += str[i8];
            }
            continue;
          }
          ret += str[i8];
        }
        return ret;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/getProp.js
  var require_getProp = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/getProp.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = getProp;
      function getProp(obj) {
        for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          props[_key - 1] = arguments[_key];
        }
        while (props.length > 0) {
          var prop = props.shift();
          if (!obj[prop]) {
            return void 0;
          }
          obj = obj[prop];
        }
        return obj;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/ensureObject.js
  var require_ensureObject = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/ensureObject.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = ensureObject;
      function ensureObject(obj) {
        for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          props[_key - 1] = arguments[_key];
        }
        while (props.length > 0) {
          var prop = props.shift();
          if (!obj[prop]) {
            obj[prop] = {};
          }
          obj = obj[prop];
        }
      }
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/stripComments.js
  var require_stripComments = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/stripComments.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = stripComments;
      function stripComments(str) {
        var s4 = "";
        var commentStart = str.indexOf("/*");
        var lastEnd = 0;
        while (commentStart >= 0) {
          s4 = s4 + str.slice(lastEnd, commentStart);
          var commentEnd = str.indexOf("*/", commentStart + 2);
          if (commentEnd < 0) {
            return s4;
          }
          lastEnd = commentEnd + 2;
          commentStart = str.indexOf("/*", lastEnd);
        }
        s4 = s4 + str.slice(lastEnd);
        return s4;
      }
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/index.js
  var require_util = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/util/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.unesc = exports.stripComments = exports.getProp = exports.ensureObject = void 0;
      var _unesc = _interopRequireDefault(require_unesc());
      exports.unesc = _unesc["default"];
      var _getProp = _interopRequireDefault(require_getProp());
      exports.getProp = _getProp["default"];
      var _ensureObject = _interopRequireDefault(require_ensureObject());
      exports.ensureObject = _ensureObject["default"];
      var _stripComments = _interopRequireDefault(require_stripComments());
      exports.stripComments = _stripComments["default"];
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/node.js
  var require_node2 = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/node.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _util = require_util();
      function _defineProperties(target, props) {
        for (var i8 = 0; i8 < props.length; i8++) {
          var descriptor = props[i8];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      var cloneNode = function cloneNode2(obj, parent) {
        if (typeof obj !== "object" || obj === null) {
          return obj;
        }
        var cloned = new obj.constructor();
        for (var i8 in obj) {
          if (!obj.hasOwnProperty(i8)) {
            continue;
          }
          var value = obj[i8];
          var type = typeof value;
          if (i8 === "parent" && type === "object") {
            if (parent) {
              cloned[i8] = parent;
            }
          } else if (value instanceof Array) {
            cloned[i8] = value.map(function(j2) {
              return cloneNode2(j2, cloned);
            });
          } else {
            cloned[i8] = cloneNode2(value, cloned);
          }
        }
        return cloned;
      };
      var Node3 = /* @__PURE__ */ function() {
        function Node4(opts) {
          if (opts === void 0) {
            opts = {};
          }
          Object.assign(this, opts);
          this.spaces = this.spaces || {};
          this.spaces.before = this.spaces.before || "";
          this.spaces.after = this.spaces.after || "";
        }
        var _proto = Node4.prototype;
        _proto.remove = function remove() {
          if (this.parent) {
            this.parent.removeChild(this);
          }
          this.parent = void 0;
          return this;
        };
        _proto.replaceWith = function replaceWith() {
          if (this.parent) {
            for (var index2 in arguments) {
              this.parent.insertBefore(this, arguments[index2]);
            }
            this.remove();
          }
          return this;
        };
        _proto.next = function next() {
          return this.parent.at(this.parent.index(this) + 1);
        };
        _proto.prev = function prev() {
          return this.parent.at(this.parent.index(this) - 1);
        };
        _proto.clone = function clone(overrides) {
          if (overrides === void 0) {
            overrides = {};
          }
          var cloned = cloneNode(this);
          for (var name2 in overrides) {
            cloned[name2] = overrides[name2];
          }
          return cloned;
        };
        _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name2, value, valueEscaped) {
          if (!this.raws) {
            this.raws = {};
          }
          var originalValue = this[name2];
          var originalEscaped = this.raws[name2];
          this[name2] = originalValue + value;
          if (originalEscaped || valueEscaped !== value) {
            this.raws[name2] = (originalEscaped || originalValue) + valueEscaped;
          } else {
            delete this.raws[name2];
          }
        };
        _proto.setPropertyAndEscape = function setPropertyAndEscape(name2, value, valueEscaped) {
          if (!this.raws) {
            this.raws = {};
          }
          this[name2] = value;
          this.raws[name2] = valueEscaped;
        };
        _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name2, value) {
          this[name2] = value;
          if (this.raws) {
            delete this.raws[name2];
          }
        };
        _proto.isAtPosition = function isAtPosition(line, column) {
          if (this.source && this.source.start && this.source.end) {
            if (this.source.start.line > line) {
              return false;
            }
            if (this.source.end.line < line) {
              return false;
            }
            if (this.source.start.line === line && this.source.start.column > column) {
              return false;
            }
            if (this.source.end.line === line && this.source.end.column < column) {
              return false;
            }
            return true;
          }
          return void 0;
        };
        _proto.stringifyProperty = function stringifyProperty(name2) {
          return this.raws && this.raws[name2] || this[name2];
        };
        _proto.valueToString = function valueToString() {
          return String(this.stringifyProperty("value"));
        };
        _proto.toString = function toString() {
          return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join("");
        };
        _createClass(Node4, [{
          key: "rawSpaceBefore",
          get: function get() {
            var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;
            if (rawSpace === void 0) {
              rawSpace = this.spaces && this.spaces.before;
            }
            return rawSpace || "";
          },
          set: function set(raw) {
            (0, _util.ensureObject)(this, "raws", "spaces");
            this.raws.spaces.before = raw;
          }
        }, {
          key: "rawSpaceAfter",
          get: function get() {
            var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;
            if (rawSpace === void 0) {
              rawSpace = this.spaces.after;
            }
            return rawSpace || "";
          },
          set: function set(raw) {
            (0, _util.ensureObject)(this, "raws", "spaces");
            this.raws.spaces.after = raw;
          }
        }]);
        return Node4;
      }();
      exports["default"] = Node3;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/types.js
  var require_types = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/types.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.UNIVERSAL = exports.TAG = exports.STRING = exports.SELECTOR = exports.ROOT = exports.PSEUDO = exports.NESTING = exports.ID = exports.COMMENT = exports.COMBINATOR = exports.CLASS = exports.ATTRIBUTE = void 0;
      var TAG = "tag";
      exports.TAG = TAG;
      var STRING = "string";
      exports.STRING = STRING;
      var SELECTOR = "selector";
      exports.SELECTOR = SELECTOR;
      var ROOT = "root";
      exports.ROOT = ROOT;
      var PSEUDO = "pseudo";
      exports.PSEUDO = PSEUDO;
      var NESTING = "nesting";
      exports.NESTING = NESTING;
      var ID = "id";
      exports.ID = ID;
      var COMMENT = "comment";
      exports.COMMENT = COMMENT;
      var COMBINATOR = "combinator";
      exports.COMBINATOR = COMBINATOR;
      var CLASS = "class";
      exports.CLASS = CLASS;
      var ATTRIBUTE = "attribute";
      exports.ATTRIBUTE = ATTRIBUTE;
      var UNIVERSAL = "universal";
      exports.UNIVERSAL = UNIVERSAL;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/container.js
  var require_container2 = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/container.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _node = _interopRequireDefault(require_node2());
      var types = _interopRequireWildcard(require_types());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _createForOfIteratorHelperLoose(o10, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o10[Symbol.iterator] || o10["@@iterator"];
        if (it) return (it = it.call(o10)).next.bind(it);
        if (Array.isArray(o10) || (it = _unsupportedIterableToArray(o10)) || allowArrayLike && o10 && typeof o10.length === "number") {
          if (it) o10 = it;
          var i8 = 0;
          return function() {
            if (i8 >= o10.length) return { done: true };
            return { done: false, value: o10[i8++] };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o10, minLen) {
        if (!o10) return;
        if (typeof o10 === "string") return _arrayLikeToArray(o10, minLen);
        var n8 = Object.prototype.toString.call(o10).slice(8, -1);
        if (n8 === "Object" && o10.constructor) n8 = o10.constructor.name;
        if (n8 === "Map" || n8 === "Set") return Array.from(o10);
        if (n8 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n8)) return _arrayLikeToArray(o10, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i8 = 0, arr2 = new Array(len); i8 < len; i8++) {
          arr2[i8] = arr[i8];
        }
        return arr2;
      }
      function _defineProperties(target, props) {
        for (var i8 = 0; i8 < props.length; i8++) {
          var descriptor = props[i8];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Container2 = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(Container3, _Node);
        function Container3(opts) {
          var _this;
          _this = _Node.call(this, opts) || this;
          if (!_this.nodes) {
            _this.nodes = [];
          }
          return _this;
        }
        var _proto = Container3.prototype;
        _proto.append = function append(selector) {
          selector.parent = this;
          this.nodes.push(selector);
          return this;
        };
        _proto.prepend = function prepend(selector) {
          selector.parent = this;
          this.nodes.unshift(selector);
          for (var id4 in this.indexes) {
            this.indexes[id4]++;
          }
          return this;
        };
        _proto.at = function at(index2) {
          return this.nodes[index2];
        };
        _proto.index = function index2(child) {
          if (typeof child === "number") {
            return child;
          }
          return this.nodes.indexOf(child);
        };
        _proto.removeChild = function removeChild(child) {
          child = this.index(child);
          this.at(child).parent = void 0;
          this.nodes.splice(child, 1);
          var index2;
          for (var id4 in this.indexes) {
            index2 = this.indexes[id4];
            if (index2 >= child) {
              this.indexes[id4] = index2 - 1;
            }
          }
          return this;
        };
        _proto.removeAll = function removeAll() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.nodes), _step; !(_step = _iterator()).done; ) {
            var node = _step.value;
            node.parent = void 0;
          }
          this.nodes = [];
          return this;
        };
        _proto.empty = function empty() {
          return this.removeAll();
        };
        _proto.insertAfter = function insertAfter(oldNode, newNode) {
          newNode.parent = this;
          var oldIndex = this.index(oldNode);
          this.nodes.splice(oldIndex + 1, 0, newNode);
          newNode.parent = this;
          var index2;
          for (var id4 in this.indexes) {
            index2 = this.indexes[id4];
            if (oldIndex < index2) {
              this.indexes[id4] = index2 + 1;
            }
          }
          return this;
        };
        _proto.insertBefore = function insertBefore(oldNode, newNode) {
          newNode.parent = this;
          var oldIndex = this.index(oldNode);
          this.nodes.splice(oldIndex, 0, newNode);
          newNode.parent = this;
          var index2;
          for (var id4 in this.indexes) {
            index2 = this.indexes[id4];
            if (index2 >= oldIndex) {
              this.indexes[id4] = index2 + 1;
            }
          }
          return this;
        };
        _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
          var found = void 0;
          this.each(function(node) {
            if (node.atPosition) {
              var foundChild = node.atPosition(line, col);
              if (foundChild) {
                found = foundChild;
                return false;
              }
            } else if (node.isAtPosition(line, col)) {
              found = node;
              return false;
            }
          });
          return found;
        };
        _proto.atPosition = function atPosition(line, col) {
          if (this.isAtPosition(line, col)) {
            return this._findChildAtPosition(line, col) || this;
          } else {
            return void 0;
          }
        };
        _proto._inferEndPosition = function _inferEndPosition() {
          if (this.last && this.last.source && this.last.source.end) {
            this.source = this.source || {};
            this.source.end = this.source.end || {};
            Object.assign(this.source.end, this.last.source.end);
          }
        };
        _proto.each = function each(callback) {
          if (!this.lastEach) {
            this.lastEach = 0;
          }
          if (!this.indexes) {
            this.indexes = {};
          }
          this.lastEach++;
          var id4 = this.lastEach;
          this.indexes[id4] = 0;
          if (!this.length) {
            return void 0;
          }
          var index2, result;
          while (this.indexes[id4] < this.length) {
            index2 = this.indexes[id4];
            result = callback(this.at(index2), index2);
            if (result === false) {
              break;
            }
            this.indexes[id4] += 1;
          }
          delete this.indexes[id4];
          if (result === false) {
            return false;
          }
        };
        _proto.walk = function walk(callback) {
          return this.each(function(node, i8) {
            var result = callback(node, i8);
            if (result !== false && node.length) {
              result = node.walk(callback);
            }
            if (result === false) {
              return false;
            }
          });
        };
        _proto.walkAttributes = function walkAttributes(callback) {
          var _this2 = this;
          return this.walk(function(selector) {
            if (selector.type === types.ATTRIBUTE) {
              return callback.call(_this2, selector);
            }
          });
        };
        _proto.walkClasses = function walkClasses(callback) {
          var _this3 = this;
          return this.walk(function(selector) {
            if (selector.type === types.CLASS) {
              return callback.call(_this3, selector);
            }
          });
        };
        _proto.walkCombinators = function walkCombinators(callback) {
          var _this4 = this;
          return this.walk(function(selector) {
            if (selector.type === types.COMBINATOR) {
              return callback.call(_this4, selector);
            }
          });
        };
        _proto.walkComments = function walkComments(callback) {
          var _this5 = this;
          return this.walk(function(selector) {
            if (selector.type === types.COMMENT) {
              return callback.call(_this5, selector);
            }
          });
        };
        _proto.walkIds = function walkIds(callback) {
          var _this6 = this;
          return this.walk(function(selector) {
            if (selector.type === types.ID) {
              return callback.call(_this6, selector);
            }
          });
        };
        _proto.walkNesting = function walkNesting(callback) {
          var _this7 = this;
          return this.walk(function(selector) {
            if (selector.type === types.NESTING) {
              return callback.call(_this7, selector);
            }
          });
        };
        _proto.walkPseudos = function walkPseudos(callback) {
          var _this8 = this;
          return this.walk(function(selector) {
            if (selector.type === types.PSEUDO) {
              return callback.call(_this8, selector);
            }
          });
        };
        _proto.walkTags = function walkTags(callback) {
          var _this9 = this;
          return this.walk(function(selector) {
            if (selector.type === types.TAG) {
              return callback.call(_this9, selector);
            }
          });
        };
        _proto.walkUniversals = function walkUniversals(callback) {
          var _this10 = this;
          return this.walk(function(selector) {
            if (selector.type === types.UNIVERSAL) {
              return callback.call(_this10, selector);
            }
          });
        };
        _proto.split = function split(callback) {
          var _this11 = this;
          var current = [];
          return this.reduce(function(memo, node, index2) {
            var split2 = callback.call(_this11, node);
            current.push(node);
            if (split2) {
              memo.push(current);
              current = [];
            } else if (index2 === _this11.length - 1) {
              memo.push(current);
            }
            return memo;
          }, []);
        };
        _proto.map = function map(callback) {
          return this.nodes.map(callback);
        };
        _proto.reduce = function reduce(callback, memo) {
          return this.nodes.reduce(callback, memo);
        };
        _proto.every = function every(callback) {
          return this.nodes.every(callback);
        };
        _proto.some = function some(callback) {
          return this.nodes.some(callback);
        };
        _proto.filter = function filter(callback) {
          return this.nodes.filter(callback);
        };
        _proto.sort = function sort(callback) {
          return this.nodes.sort(callback);
        };
        _proto.toString = function toString() {
          return this.map(String).join("");
        };
        _createClass(Container3, [{
          key: "first",
          get: function get() {
            return this.at(0);
          }
        }, {
          key: "last",
          get: function get() {
            return this.at(this.length - 1);
          }
        }, {
          key: "length",
          get: function get() {
            return this.nodes.length;
          }
        }]);
        return Container3;
      }(_node["default"]);
      exports["default"] = Container2;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/root.js
  var require_root2 = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/root.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _container = _interopRequireDefault(require_container2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _defineProperties(target, props) {
        for (var i8 = 0; i8 < props.length; i8++) {
          var descriptor = props[i8];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Root2 = /* @__PURE__ */ function(_Container) {
        _inheritsLoose(Root3, _Container);
        function Root3(opts) {
          var _this;
          _this = _Container.call(this, opts) || this;
          _this.type = _types.ROOT;
          return _this;
        }
        var _proto = Root3.prototype;
        _proto.toString = function toString() {
          var str = this.reduce(function(memo, selector) {
            memo.push(String(selector));
            return memo;
          }, []).join(",");
          return this.trailingComma ? str + "," : str;
        };
        _proto.error = function error(message, options) {
          if (this._error) {
            return this._error(message, options);
          } else {
            return new Error(message);
          }
        };
        _createClass(Root3, [{
          key: "errorGenerator",
          set: function set(handler) {
            this._error = handler;
          }
        }]);
        return Root3;
      }(_container["default"]);
      exports["default"] = Root2;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/selector.js
  var require_selector = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/selector.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _container = _interopRequireDefault(require_container2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Selector = /* @__PURE__ */ function(_Container) {
        _inheritsLoose(Selector2, _Container);
        function Selector2(opts) {
          var _this;
          _this = _Container.call(this, opts) || this;
          _this.type = _types.SELECTOR;
          return _this;
        }
        return Selector2;
      }(_container["default"]);
      exports["default"] = Selector;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js
  var require_cssesc = __commonJS({
    "node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js"(exports, module) {
      "use strict";
      var object = {};
      var hasOwnProperty = object.hasOwnProperty;
      var merge = function merge2(options, defaults) {
        if (!options) {
          return defaults;
        }
        var result = {};
        for (var key in defaults) {
          result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
        }
        return result;
      };
      var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
      var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
      var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
      var cssesc = function cssesc2(string, options) {
        options = merge(options, cssesc2.options);
        if (options.quotes != "single" && options.quotes != "double") {
          options.quotes = "single";
        }
        var quote = options.quotes == "double" ? '"' : "'";
        var isIdentifier = options.isIdentifier;
        var firstChar = string.charAt(0);
        var output2 = "";
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var character = string.charAt(counter++);
          var codePoint = character.charCodeAt();
          var value = void 0;
          if (codePoint < 32 || codePoint > 126) {
            if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
              var extra = string.charCodeAt(counter++);
              if ((extra & 64512) == 56320) {
                codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
              } else {
                counter--;
              }
            }
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          } else {
            if (options.escapeEverything) {
              if (regexAnySingleEscape.test(character)) {
                value = "\\" + character;
              } else {
                value = "\\" + codePoint.toString(16).toUpperCase() + " ";
              }
            } else if (/[\t\n\f\r\x0B]/.test(character)) {
              value = "\\" + codePoint.toString(16).toUpperCase() + " ";
            } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
              value = "\\" + character;
            } else {
              value = character;
            }
          }
          output2 += value;
        }
        if (isIdentifier) {
          if (/^-[-\d]/.test(output2)) {
            output2 = "\\-" + output2.slice(1);
          } else if (/\d/.test(firstChar)) {
            output2 = "\\3" + firstChar + " " + output2.slice(1);
          }
        }
        output2 = output2.replace(regexExcessiveSpaces, function($0, $1, $22) {
          if ($1 && $1.length % 2) {
            return $0;
          }
          return ($1 || "") + $22;
        });
        if (!isIdentifier && options.wrap) {
          return quote + output2 + quote;
        }
        return output2;
      };
      cssesc.options = {
        "escapeEverything": false,
        "isIdentifier": false,
        "quotes": "single",
        "wrap": false
      };
      cssesc.version = "3.0.0";
      module.exports = cssesc;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/className.js
  var require_className = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/className.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _cssesc = _interopRequireDefault(require_cssesc());
      var _util = require_util();
      var _node = _interopRequireDefault(require_node2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _defineProperties(target, props) {
        for (var i8 = 0; i8 < props.length; i8++) {
          var descriptor = props[i8];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var ClassName = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(ClassName2, _Node);
        function ClassName2(opts) {
          var _this;
          _this = _Node.call(this, opts) || this;
          _this.type = _types.CLASS;
          _this._constructed = true;
          return _this;
        }
        var _proto = ClassName2.prototype;
        _proto.valueToString = function valueToString() {
          return "." + _Node.prototype.valueToString.call(this);
        };
        _createClass(ClassName2, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(v2) {
            if (this._constructed) {
              var escaped = (0, _cssesc["default"])(v2, {
                isIdentifier: true
              });
              if (escaped !== v2) {
                (0, _util.ensureObject)(this, "raws");
                this.raws.value = escaped;
              } else if (this.raws) {
                delete this.raws.value;
              }
            }
            this._value = v2;
          }
        }]);
        return ClassName2;
      }(_node["default"]);
      exports["default"] = ClassName;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/comment.js
  var require_comment2 = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/comment.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _node = _interopRequireDefault(require_node2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Comment2 = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(Comment3, _Node);
        function Comment3(opts) {
          var _this;
          _this = _Node.call(this, opts) || this;
          _this.type = _types.COMMENT;
          return _this;
        }
        return Comment3;
      }(_node["default"]);
      exports["default"] = Comment2;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/id.js
  var require_id = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/id.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _node = _interopRequireDefault(require_node2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var ID = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(ID2, _Node);
        function ID2(opts) {
          var _this;
          _this = _Node.call(this, opts) || this;
          _this.type = _types.ID;
          return _this;
        }
        var _proto = ID2.prototype;
        _proto.valueToString = function valueToString() {
          return "#" + _Node.prototype.valueToString.call(this);
        };
        return ID2;
      }(_node["default"]);
      exports["default"] = ID;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/namespace.js
  var require_namespace = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/namespace.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _cssesc = _interopRequireDefault(require_cssesc());
      var _util = require_util();
      var _node = _interopRequireDefault(require_node2());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _defineProperties(target, props) {
        for (var i8 = 0; i8 < props.length; i8++) {
          var descriptor = props[i8];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Namespace = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(Namespace2, _Node);
        function Namespace2() {
          return _Node.apply(this, arguments) || this;
        }
        var _proto = Namespace2.prototype;
        _proto.qualifiedName = function qualifiedName(value) {
          if (this.namespace) {
            return this.namespaceString + "|" + value;
          } else {
            return value;
          }
        };
        _proto.valueToString = function valueToString() {
          return this.qualifiedName(_Node.prototype.valueToString.call(this));
        };
        _createClass(Namespace2, [{
          key: "namespace",
          get: function get() {
            return this._namespace;
          },
          set: function set(namespace) {
            if (namespace === true || namespace === "*" || namespace === "&") {
              this._namespace = namespace;
              if (this.raws) {
                delete this.raws.namespace;
              }
              return;
            }
            var escaped = (0, _cssesc["default"])(namespace, {
              isIdentifier: true
            });
            this._namespace = namespace;
            if (escaped !== namespace) {
              (0, _util.ensureObject)(this, "raws");
              this.raws.namespace = escaped;
            } else if (this.raws) {
              delete this.raws.namespace;
            }
          }
        }, {
          key: "ns",
          get: function get() {
            return this._namespace;
          },
          set: function set(namespace) {
            this.namespace = namespace;
          }
        }, {
          key: "namespaceString",
          get: function get() {
            if (this.namespace) {
              var ns = this.stringifyProperty("namespace");
              if (ns === true) {
                return "";
              } else {
                return ns;
              }
            } else {
              return "";
            }
          }
        }]);
        return Namespace2;
      }(_node["default"]);
      exports["default"] = Namespace;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/tag.js
  var require_tag = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/tag.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _namespace = _interopRequireDefault(require_namespace());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Tag = /* @__PURE__ */ function(_Namespace) {
        _inheritsLoose(Tag2, _Namespace);
        function Tag2(opts) {
          var _this;
          _this = _Namespace.call(this, opts) || this;
          _this.type = _types.TAG;
          return _this;
        }
        return Tag2;
      }(_namespace["default"]);
      exports["default"] = Tag;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/string.js
  var require_string = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/string.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _node = _interopRequireDefault(require_node2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var String2 = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(String3, _Node);
        function String3(opts) {
          var _this;
          _this = _Node.call(this, opts) || this;
          _this.type = _types.STRING;
          return _this;
        }
        return String3;
      }(_node["default"]);
      exports["default"] = String2;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/pseudo.js
  var require_pseudo = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/pseudo.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _container = _interopRequireDefault(require_container2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Pseudo = /* @__PURE__ */ function(_Container) {
        _inheritsLoose(Pseudo2, _Container);
        function Pseudo2(opts) {
          var _this;
          _this = _Container.call(this, opts) || this;
          _this.type = _types.PSEUDO;
          return _this;
        }
        var _proto = Pseudo2.prototype;
        _proto.toString = function toString() {
          var params = this.length ? "(" + this.map(String).join(",") + ")" : "";
          return [this.rawSpaceBefore, this.stringifyProperty("value"), params, this.rawSpaceAfter].join("");
        };
        return Pseudo2;
      }(_container["default"]);
      exports["default"] = Pseudo;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/browser.js
  var require_browser = __commonJS({
    "node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/browser.js"(exports, module) {
      module.exports = deprecate;
      function deprecate(fn, msg) {
        if (config("noDeprecation")) {
          return fn;
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (config("throwDeprecation")) {
              throw new Error(msg);
            } else if (config("traceDeprecation")) {
              console.trace(msg);
            } else {
              console.warn(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      }
      function config(name2) {
        try {
          if (!global.localStorage) return false;
        } catch (_2) {
          return false;
        }
        var val = global.localStorage[name2];
        if (null == val) return false;
        return String(val).toLowerCase() === "true";
      }
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/attribute.js
  var require_attribute = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/attribute.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      exports.unescapeValue = unescapeValue;
      var _cssesc = _interopRequireDefault(require_cssesc());
      var _unesc = _interopRequireDefault(require_unesc());
      var _namespace = _interopRequireDefault(require_namespace());
      var _types = require_types();
      var _CSSESC_QUOTE_OPTIONS;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _defineProperties(target, props) {
        for (var i8 = 0; i8 < props.length; i8++) {
          var descriptor = props[i8];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var deprecate = require_browser();
      var WRAPPED_IN_QUOTES = /^('|")([^]*)\1$/;
      var warnOfDeprecatedValueAssignment = deprecate(function() {
      }, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.");
      var warnOfDeprecatedQuotedAssignment = deprecate(function() {
      }, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
      var warnOfDeprecatedConstructor = deprecate(function() {
      }, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
      function unescapeValue(value) {
        var deprecatedUsage = false;
        var quoteMark = null;
        var unescaped = value;
        var m3 = unescaped.match(WRAPPED_IN_QUOTES);
        if (m3) {
          quoteMark = m3[1];
          unescaped = m3[2];
        }
        unescaped = (0, _unesc["default"])(unescaped);
        if (unescaped !== value) {
          deprecatedUsage = true;
        }
        return {
          deprecatedUsage,
          unescaped,
          quoteMark
        };
      }
      function handleDeprecatedContructorOpts(opts) {
        if (opts.quoteMark !== void 0) {
          return opts;
        }
        if (opts.value === void 0) {
          return opts;
        }
        warnOfDeprecatedConstructor();
        var _unescapeValue = unescapeValue(opts.value), quoteMark = _unescapeValue.quoteMark, unescaped = _unescapeValue.unescaped;
        if (!opts.raws) {
          opts.raws = {};
        }
        if (opts.raws.value === void 0) {
          opts.raws.value = opts.value;
        }
        opts.value = unescaped;
        opts.quoteMark = quoteMark;
        return opts;
      }
      var Attribute = /* @__PURE__ */ function(_Namespace) {
        _inheritsLoose(Attribute2, _Namespace);
        function Attribute2(opts) {
          var _this;
          if (opts === void 0) {
            opts = {};
          }
          _this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
          _this.type = _types.ATTRIBUTE;
          _this.raws = _this.raws || {};
          Object.defineProperty(_this.raws, "unquoted", {
            get: deprecate(function() {
              return _this.value;
            }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
            set: deprecate(function() {
              return _this.value;
            }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
          });
          _this._constructed = true;
          return _this;
        }
        var _proto = Attribute2.prototype;
        _proto.getQuotedValue = function getQuotedValue(options) {
          if (options === void 0) {
            options = {};
          }
          var quoteMark = this._determineQuoteMark(options);
          var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
          var escaped = (0, _cssesc["default"])(this._value, cssescopts);
          return escaped;
        };
        _proto._determineQuoteMark = function _determineQuoteMark(options) {
          return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
        };
        _proto.setValue = function setValue(value, options) {
          if (options === void 0) {
            options = {};
          }
          this._value = value;
          this._quoteMark = this._determineQuoteMark(options);
          this._syncRawValue();
        };
        _proto.smartQuoteMark = function smartQuoteMark(options) {
          var v2 = this.value;
          var numSingleQuotes = v2.replace(/[^']/g, "").length;
          var numDoubleQuotes = v2.replace(/[^"]/g, "").length;
          if (numSingleQuotes + numDoubleQuotes === 0) {
            var escaped = (0, _cssesc["default"])(v2, {
              isIdentifier: true
            });
            if (escaped === v2) {
              return Attribute2.NO_QUOTE;
            } else {
              var pref = this.preferredQuoteMark(options);
              if (pref === Attribute2.NO_QUOTE) {
                var quote = this.quoteMark || options.quoteMark || Attribute2.DOUBLE_QUOTE;
                var opts = CSSESC_QUOTE_OPTIONS[quote];
                var quoteValue = (0, _cssesc["default"])(v2, opts);
                if (quoteValue.length < escaped.length) {
                  return quote;
                }
              }
              return pref;
            }
          } else if (numDoubleQuotes === numSingleQuotes) {
            return this.preferredQuoteMark(options);
          } else if (numDoubleQuotes < numSingleQuotes) {
            return Attribute2.DOUBLE_QUOTE;
          } else {
            return Attribute2.SINGLE_QUOTE;
          }
        };
        _proto.preferredQuoteMark = function preferredQuoteMark(options) {
          var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;
          if (quoteMark === void 0) {
            quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
          }
          if (quoteMark === void 0) {
            quoteMark = Attribute2.DOUBLE_QUOTE;
          }
          return quoteMark;
        };
        _proto._syncRawValue = function _syncRawValue() {
          var rawValue = (0, _cssesc["default"])(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);
          if (rawValue === this._value) {
            if (this.raws) {
              delete this.raws.value;
            }
          } else {
            this.raws.value = rawValue;
          }
        };
        _proto._handleEscapes = function _handleEscapes(prop, value) {
          if (this._constructed) {
            var escaped = (0, _cssesc["default"])(value, {
              isIdentifier: true
            });
            if (escaped !== value) {
              this.raws[prop] = escaped;
            } else {
              delete this.raws[prop];
            }
          }
        };
        _proto._spacesFor = function _spacesFor(name2) {
          var attrSpaces = {
            before: "",
            after: ""
          };
          var spaces = this.spaces[name2] || {};
          var rawSpaces = this.raws.spaces && this.raws.spaces[name2] || {};
          return Object.assign(attrSpaces, spaces, rawSpaces);
        };
        _proto._stringFor = function _stringFor(name2, spaceName, concat) {
          if (spaceName === void 0) {
            spaceName = name2;
          }
          if (concat === void 0) {
            concat = defaultAttrConcat;
          }
          var attrSpaces = this._spacesFor(spaceName);
          return concat(this.stringifyProperty(name2), attrSpaces);
        };
        _proto.offsetOf = function offsetOf(name2) {
          var count = 1;
          var attributeSpaces = this._spacesFor("attribute");
          count += attributeSpaces.before.length;
          if (name2 === "namespace" || name2 === "ns") {
            return this.namespace ? count : -1;
          }
          if (name2 === "attributeNS") {
            return count;
          }
          count += this.namespaceString.length;
          if (this.namespace) {
            count += 1;
          }
          if (name2 === "attribute") {
            return count;
          }
          count += this.stringifyProperty("attribute").length;
          count += attributeSpaces.after.length;
          var operatorSpaces = this._spacesFor("operator");
          count += operatorSpaces.before.length;
          var operator = this.stringifyProperty("operator");
          if (name2 === "operator") {
            return operator ? count : -1;
          }
          count += operator.length;
          count += operatorSpaces.after.length;
          var valueSpaces = this._spacesFor("value");
          count += valueSpaces.before.length;
          var value = this.stringifyProperty("value");
          if (name2 === "value") {
            return value ? count : -1;
          }
          count += value.length;
          count += valueSpaces.after.length;
          var insensitiveSpaces = this._spacesFor("insensitive");
          count += insensitiveSpaces.before.length;
          if (name2 === "insensitive") {
            return this.insensitive ? count : -1;
          }
          return -1;
        };
        _proto.toString = function toString() {
          var _this2 = this;
          var selector = [this.rawSpaceBefore, "["];
          selector.push(this._stringFor("qualifiedAttribute", "attribute"));
          if (this.operator && (this.value || this.value === "")) {
            selector.push(this._stringFor("operator"));
            selector.push(this._stringFor("value"));
            selector.push(this._stringFor("insensitiveFlag", "insensitive", function(attrValue, attrSpaces) {
              if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
                attrSpaces.before = " ";
              }
              return defaultAttrConcat(attrValue, attrSpaces);
            }));
          }
          selector.push("]");
          selector.push(this.rawSpaceAfter);
          return selector.join("");
        };
        _createClass(Attribute2, [{
          key: "quoted",
          get: function get() {
            var qm = this.quoteMark;
            return qm === "'" || qm === '"';
          },
          set: function set(value) {
            warnOfDeprecatedQuotedAssignment();
          }
          /**
           * returns a single (`'`) or double (`"`) quote character if the value is quoted.
           * returns `null` if the value is not quoted.
           * returns `undefined` if the quotation state is unknown (this can happen when
           * the attribute is constructed without specifying a quote mark.)
           */
        }, {
          key: "quoteMark",
          get: function get() {
            return this._quoteMark;
          },
          set: function set(quoteMark) {
            if (!this._constructed) {
              this._quoteMark = quoteMark;
              return;
            }
            if (this._quoteMark !== quoteMark) {
              this._quoteMark = quoteMark;
              this._syncRawValue();
            }
          }
        }, {
          key: "qualifiedAttribute",
          get: function get() {
            return this.qualifiedName(this.raws.attribute || this.attribute);
          }
        }, {
          key: "insensitiveFlag",
          get: function get() {
            return this.insensitive ? "i" : "";
          }
        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: (
            /**
             * Before 3.0, the value had to be set to an escaped value including any wrapped
             * quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
             * is unescaped during parsing and any quote marks are removed.
             *
             * Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
             * a deprecation warning is raised when the new value contains any characters that would
             * require escaping (including if it contains wrapped quotes).
             *
             * Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
             * how the new value is quoted.
             */
            function set(v2) {
              if (this._constructed) {
                var _unescapeValue2 = unescapeValue(v2), deprecatedUsage = _unescapeValue2.deprecatedUsage, unescaped = _unescapeValue2.unescaped, quoteMark = _unescapeValue2.quoteMark;
                if (deprecatedUsage) {
                  warnOfDeprecatedValueAssignment();
                }
                if (unescaped === this._value && quoteMark === this._quoteMark) {
                  return;
                }
                this._value = unescaped;
                this._quoteMark = quoteMark;
                this._syncRawValue();
              } else {
                this._value = v2;
              }
            }
          )
        }, {
          key: "insensitive",
          get: function get() {
            return this._insensitive;
          },
          set: function set(insensitive) {
            if (!insensitive) {
              this._insensitive = false;
              if (this.raws && (this.raws.insensitiveFlag === "I" || this.raws.insensitiveFlag === "i")) {
                this.raws.insensitiveFlag = void 0;
              }
            }
            this._insensitive = insensitive;
          }
        }, {
          key: "attribute",
          get: function get() {
            return this._attribute;
          },
          set: function set(name2) {
            this._handleEscapes("attribute", name2);
            this._attribute = name2;
          }
        }]);
        return Attribute2;
      }(_namespace["default"]);
      exports["default"] = Attribute;
      Attribute.NO_QUOTE = null;
      Attribute.SINGLE_QUOTE = "'";
      Attribute.DOUBLE_QUOTE = '"';
      var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
        "'": {
          quotes: "single",
          wrap: true
        },
        '"': {
          quotes: "double",
          wrap: true
        }
      }, _CSSESC_QUOTE_OPTIONS[null] = {
        isIdentifier: true
      }, _CSSESC_QUOTE_OPTIONS);
      function defaultAttrConcat(attrValue, attrSpaces) {
        return "" + attrSpaces.before + attrValue + attrSpaces.after;
      }
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/universal.js
  var require_universal = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/universal.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _namespace = _interopRequireDefault(require_namespace());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Universal = /* @__PURE__ */ function(_Namespace) {
        _inheritsLoose(Universal2, _Namespace);
        function Universal2(opts) {
          var _this;
          _this = _Namespace.call(this, opts) || this;
          _this.type = _types.UNIVERSAL;
          _this.value = "*";
          return _this;
        }
        return Universal2;
      }(_namespace["default"]);
      exports["default"] = Universal;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/combinator.js
  var require_combinator = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/combinator.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _node = _interopRequireDefault(require_node2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Combinator = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(Combinator2, _Node);
        function Combinator2(opts) {
          var _this;
          _this = _Node.call(this, opts) || this;
          _this.type = _types.COMBINATOR;
          return _this;
        }
        return Combinator2;
      }(_node["default"]);
      exports["default"] = Combinator;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/nesting.js
  var require_nesting = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/nesting.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _node = _interopRequireDefault(require_node2());
      var _types = require_types();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o10, p3) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p4) {
          o11.__proto__ = p4;
          return o11;
        };
        return _setPrototypeOf(o10, p3);
      }
      var Nesting = /* @__PURE__ */ function(_Node) {
        _inheritsLoose(Nesting2, _Node);
        function Nesting2(opts) {
          var _this;
          _this = _Node.call(this, opts) || this;
          _this.type = _types.NESTING;
          _this.value = "&";
          return _this;
        }
        return Nesting2;
      }(_node["default"]);
      exports["default"] = Nesting;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/sortAscending.js
  var require_sortAscending = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/sortAscending.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = sortAscending;
      function sortAscending(list2) {
        return list2.sort(function(a4, b3) {
          return a4 - b3;
        });
      }
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/tokenTypes.js
  var require_tokenTypes = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/tokenTypes.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.word = exports.tilde = exports.tab = exports.str = exports.space = exports.slash = exports.singleQuote = exports.semicolon = exports.plus = exports.pipe = exports.openSquare = exports.openParenthesis = exports.newline = exports.greaterThan = exports.feed = exports.equals = exports.doubleQuote = exports.dollar = exports.cr = exports.comment = exports.comma = exports.combinator = exports.colon = exports.closeSquare = exports.closeParenthesis = exports.caret = exports.bang = exports.backslash = exports.at = exports.asterisk = exports.ampersand = void 0;
      var ampersand = 38;
      exports.ampersand = ampersand;
      var asterisk = 42;
      exports.asterisk = asterisk;
      var at = 64;
      exports.at = at;
      var comma = 44;
      exports.comma = comma;
      var colon = 58;
      exports.colon = colon;
      var semicolon = 59;
      exports.semicolon = semicolon;
      var openParenthesis = 40;
      exports.openParenthesis = openParenthesis;
      var closeParenthesis = 41;
      exports.closeParenthesis = closeParenthesis;
      var openSquare = 91;
      exports.openSquare = openSquare;
      var closeSquare = 93;
      exports.closeSquare = closeSquare;
      var dollar = 36;
      exports.dollar = dollar;
      var tilde = 126;
      exports.tilde = tilde;
      var caret = 94;
      exports.caret = caret;
      var plus = 43;
      exports.plus = plus;
      var equals2 = 61;
      exports.equals = equals2;
      var pipe = 124;
      exports.pipe = pipe;
      var greaterThan = 62;
      exports.greaterThan = greaterThan;
      var space = 32;
      exports.space = space;
      var singleQuote = 39;
      exports.singleQuote = singleQuote;
      var doubleQuote = 34;
      exports.doubleQuote = doubleQuote;
      var slash = 47;
      exports.slash = slash;
      var bang = 33;
      exports.bang = bang;
      var backslash = 92;
      exports.backslash = backslash;
      var cr = 13;
      exports.cr = cr;
      var feed = 12;
      exports.feed = feed;
      var newline = 10;
      exports.newline = newline;
      var tab = 9;
      exports.tab = tab;
      var str = singleQuote;
      exports.str = str;
      var comment2 = -1;
      exports.comment = comment2;
      var word = -2;
      exports.word = word;
      var combinator = -3;
      exports.combinator = combinator;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/tokenize.js
  var require_tokenize2 = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/tokenize.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.FIELDS = void 0;
      exports["default"] = tokenize;
      var t6 = _interopRequireWildcard(require_tokenTypes());
      var _unescapable;
      var _wordDelimiters;
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      var unescapable = (_unescapable = {}, _unescapable[t6.tab] = true, _unescapable[t6.newline] = true, _unescapable[t6.cr] = true, _unescapable[t6.feed] = true, _unescapable);
      var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t6.space] = true, _wordDelimiters[t6.tab] = true, _wordDelimiters[t6.newline] = true, _wordDelimiters[t6.cr] = true, _wordDelimiters[t6.feed] = true, _wordDelimiters[t6.ampersand] = true, _wordDelimiters[t6.asterisk] = true, _wordDelimiters[t6.bang] = true, _wordDelimiters[t6.comma] = true, _wordDelimiters[t6.colon] = true, _wordDelimiters[t6.semicolon] = true, _wordDelimiters[t6.openParenthesis] = true, _wordDelimiters[t6.closeParenthesis] = true, _wordDelimiters[t6.openSquare] = true, _wordDelimiters[t6.closeSquare] = true, _wordDelimiters[t6.singleQuote] = true, _wordDelimiters[t6.doubleQuote] = true, _wordDelimiters[t6.plus] = true, _wordDelimiters[t6.pipe] = true, _wordDelimiters[t6.tilde] = true, _wordDelimiters[t6.greaterThan] = true, _wordDelimiters[t6.equals] = true, _wordDelimiters[t6.dollar] = true, _wordDelimiters[t6.caret] = true, _wordDelimiters[t6.slash] = true, _wordDelimiters);
      var hex = {};
      var hexChars = "0123456789abcdefABCDEF";
      for (i8 = 0; i8 < hexChars.length; i8++) {
        hex[hexChars.charCodeAt(i8)] = true;
      }
      var i8;
      function consumeWord(css7, start) {
        var next = start;
        var code;
        do {
          code = css7.charCodeAt(next);
          if (wordDelimiters[code]) {
            return next - 1;
          } else if (code === t6.backslash) {
            next = consumeEscape(css7, next) + 1;
          } else {
            next++;
          }
        } while (next < css7.length);
        return next - 1;
      }
      function consumeEscape(css7, start) {
        var next = start;
        var code = css7.charCodeAt(next + 1);
        if (unescapable[code]) {
        } else if (hex[code]) {
          var hexDigits = 0;
          do {
            next++;
            hexDigits++;
            code = css7.charCodeAt(next + 1);
          } while (hex[code] && hexDigits < 6);
          if (hexDigits < 6 && code === t6.space) {
            next++;
          }
        } else {
          next++;
        }
        return next;
      }
      var FIELDS = {
        TYPE: 0,
        START_LINE: 1,
        START_COL: 2,
        END_LINE: 3,
        END_COL: 4,
        START_POS: 5,
        END_POS: 6
      };
      exports.FIELDS = FIELDS;
      function tokenize(input) {
        var tokens = [];
        var css7 = input.css.valueOf();
        var _css = css7, length = _css.length;
        var offset3 = -1;
        var line = 1;
        var start = 0;
        var end = 0;
        var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;
        function unclosed(what, fix) {
          if (input.safe) {
            css7 += fix;
            next = css7.length - 1;
          } else {
            throw input.error("Unclosed " + what, line, start - offset3, start);
          }
        }
        while (start < length) {
          code = css7.charCodeAt(start);
          if (code === t6.newline) {
            offset3 = start;
            line += 1;
          }
          switch (code) {
            case t6.space:
            case t6.tab:
            case t6.newline:
            case t6.cr:
            case t6.feed:
              next = start;
              do {
                next += 1;
                code = css7.charCodeAt(next);
                if (code === t6.newline) {
                  offset3 = next;
                  line += 1;
                }
              } while (code === t6.space || code === t6.newline || code === t6.tab || code === t6.cr || code === t6.feed);
              tokenType = t6.space;
              endLine = line;
              endColumn = next - offset3 - 1;
              end = next;
              break;
            case t6.plus:
            case t6.greaterThan:
            case t6.tilde:
            case t6.pipe:
              next = start;
              do {
                next += 1;
                code = css7.charCodeAt(next);
              } while (code === t6.plus || code === t6.greaterThan || code === t6.tilde || code === t6.pipe);
              tokenType = t6.combinator;
              endLine = line;
              endColumn = start - offset3;
              end = next;
              break;
            // Consume these characters as single tokens.
            case t6.asterisk:
            case t6.ampersand:
            case t6.bang:
            case t6.comma:
            case t6.equals:
            case t6.dollar:
            case t6.caret:
            case t6.openSquare:
            case t6.closeSquare:
            case t6.colon:
            case t6.semicolon:
            case t6.openParenthesis:
            case t6.closeParenthesis:
              next = start;
              tokenType = code;
              endLine = line;
              endColumn = start - offset3;
              end = next + 1;
              break;
            case t6.singleQuote:
            case t6.doubleQuote:
              quote = code === t6.singleQuote ? "'" : '"';
              next = start;
              do {
                escaped = false;
                next = css7.indexOf(quote, next + 1);
                if (next === -1) {
                  unclosed("quote", quote);
                }
                escapePos = next;
                while (css7.charCodeAt(escapePos - 1) === t6.backslash) {
                  escapePos -= 1;
                  escaped = !escaped;
                }
              } while (escaped);
              tokenType = t6.str;
              endLine = line;
              endColumn = start - offset3;
              end = next + 1;
              break;
            default:
              if (code === t6.slash && css7.charCodeAt(start + 1) === t6.asterisk) {
                next = css7.indexOf("*/", start + 2) + 1;
                if (next === 0) {
                  unclosed("comment", "*/");
                }
                content = css7.slice(start, next + 1);
                lines = content.split("\n");
                last = lines.length - 1;
                if (last > 0) {
                  nextLine = line + last;
                  nextOffset = next - lines[last].length;
                } else {
                  nextLine = line;
                  nextOffset = offset3;
                }
                tokenType = t6.comment;
                line = nextLine;
                endLine = nextLine;
                endColumn = next - nextOffset;
              } else if (code === t6.slash) {
                next = start;
                tokenType = code;
                endLine = line;
                endColumn = start - offset3;
                end = next + 1;
              } else {
                next = consumeWord(css7, start);
                tokenType = t6.word;
                endLine = line;
                endColumn = next - offset3;
              }
              end = next + 1;
              break;
          }
          tokens.push([
            tokenType,
            // [0] Token type
            line,
            // [1] Starting line
            start - offset3,
            // [2] Starting column
            endLine,
            // [3] Ending line
            endColumn,
            // [4] Ending column
            start,
            // [5] Start position / Source index
            end
            // [6] End position
          ]);
          if (nextOffset) {
            offset3 = nextOffset;
            nextOffset = null;
          }
          start = end;
        }
        return tokens;
      }
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/parser.js
  var require_parser3 = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/parser.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _root = _interopRequireDefault(require_root2());
      var _selector = _interopRequireDefault(require_selector());
      var _className = _interopRequireDefault(require_className());
      var _comment = _interopRequireDefault(require_comment2());
      var _id = _interopRequireDefault(require_id());
      var _tag = _interopRequireDefault(require_tag());
      var _string = _interopRequireDefault(require_string());
      var _pseudo = _interopRequireDefault(require_pseudo());
      var _attribute = _interopRequireWildcard(require_attribute());
      var _universal = _interopRequireDefault(require_universal());
      var _combinator = _interopRequireDefault(require_combinator());
      var _nesting = _interopRequireDefault(require_nesting());
      var _sortAscending = _interopRequireDefault(require_sortAscending());
      var _tokenize = _interopRequireWildcard(require_tokenize2());
      var tokens = _interopRequireWildcard(require_tokenTypes());
      var types = _interopRequireWildcard(require_types());
      var _util = require_util();
      var _WHITESPACE_TOKENS;
      var _Object$assign;
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _defineProperties(target, props) {
        for (var i8 = 0; i8 < props.length; i8++) {
          var descriptor = props[i8];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
      var WHITESPACE_EQUIV_TOKENS = Object.assign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));
      function tokenStart(token) {
        return {
          line: token[_tokenize.FIELDS.START_LINE],
          column: token[_tokenize.FIELDS.START_COL]
        };
      }
      function tokenEnd(token) {
        return {
          line: token[_tokenize.FIELDS.END_LINE],
          column: token[_tokenize.FIELDS.END_COL]
        };
      }
      function getSource(startLine, startColumn, endLine, endColumn) {
        return {
          start: {
            line: startLine,
            column: startColumn
          },
          end: {
            line: endLine,
            column: endColumn
          }
        };
      }
      function getTokenSource(token) {
        return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
      }
      function getTokenSourceSpan(startToken, endToken) {
        if (!startToken) {
          return void 0;
        }
        return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
      }
      function unescapeProp(node, prop) {
        var value = node[prop];
        if (typeof value !== "string") {
          return;
        }
        if (value.indexOf("\\") !== -1) {
          (0, _util.ensureObject)(node, "raws");
          node[prop] = (0, _util.unesc)(value);
          if (node.raws[prop] === void 0) {
            node.raws[prop] = value;
          }
        }
        return node;
      }
      function indexesOf(array, item) {
        var i8 = -1;
        var indexes = [];
        while ((i8 = array.indexOf(item, i8 + 1)) !== -1) {
          indexes.push(i8);
        }
        return indexes;
      }
      function uniqs() {
        var list2 = Array.prototype.concat.apply([], arguments);
        return list2.filter(function(item, i8) {
          return i8 === list2.indexOf(item);
        });
      }
      var Parser = /* @__PURE__ */ function() {
        function Parser2(rule2, options) {
          if (options === void 0) {
            options = {};
          }
          this.rule = rule2;
          this.options = Object.assign({
            lossy: false,
            safe: false
          }, options);
          this.position = 0;
          this.css = typeof this.rule === "string" ? this.rule : this.rule.selector;
          this.tokens = (0, _tokenize["default"])({
            css: this.css,
            error: this._errorGenerator(),
            safe: this.options.safe
          });
          var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
          this.root = new _root["default"]({
            source: rootSource
          });
          this.root.errorGenerator = this._errorGenerator();
          var selector = new _selector["default"]({
            source: {
              start: {
                line: 1,
                column: 1
              }
            },
            sourceIndex: 0
          });
          this.root.append(selector);
          this.current = selector;
          this.loop();
        }
        var _proto = Parser2.prototype;
        _proto._errorGenerator = function _errorGenerator() {
          var _this = this;
          return function(message, errorOptions) {
            if (typeof _this.rule === "string") {
              return new Error(message);
            }
            return _this.rule.error(message, errorOptions);
          };
        };
        _proto.attribute = function attribute() {
          var attr = [];
          var startingToken = this.currToken;
          this.position++;
          while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
            attr.push(this.currToken);
            this.position++;
          }
          if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
            return this.expected("closing square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
          }
          var len = attr.length;
          var node = {
            source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
            sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
          };
          if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) {
            return this.expected("attribute", attr[0][_tokenize.FIELDS.START_POS]);
          }
          var pos = 0;
          var spaceBefore = "";
          var commentBefore = "";
          var lastAdded = null;
          var spaceAfterMeaningfulToken = false;
          while (pos < len) {
            var token = attr[pos];
            var content = this.content(token);
            var next = attr[pos + 1];
            switch (token[_tokenize.FIELDS.TYPE]) {
              case tokens.space:
                spaceAfterMeaningfulToken = true;
                if (this.options.lossy) {
                  break;
                }
                if (lastAdded) {
                  (0, _util.ensureObject)(node, "spaces", lastAdded);
                  var prevContent = node.spaces[lastAdded].after || "";
                  node.spaces[lastAdded].after = prevContent + content;
                  var existingComment = (0, _util.getProp)(node, "raws", "spaces", lastAdded, "after") || null;
                  if (existingComment) {
                    node.raws.spaces[lastAdded].after = existingComment + content;
                  }
                } else {
                  spaceBefore = spaceBefore + content;
                  commentBefore = commentBefore + content;
                }
                break;
              case tokens.asterisk:
                if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                  node.operator = content;
                  lastAdded = "operator";
                } else if ((!node.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
                  if (spaceBefore) {
                    (0, _util.ensureObject)(node, "spaces", "attribute");
                    node.spaces.attribute.before = spaceBefore;
                    spaceBefore = "";
                  }
                  if (commentBefore) {
                    (0, _util.ensureObject)(node, "raws", "spaces", "attribute");
                    node.raws.spaces.attribute.before = spaceBefore;
                    commentBefore = "";
                  }
                  node.namespace = (node.namespace || "") + content;
                  var rawValue = (0, _util.getProp)(node, "raws", "namespace") || null;
                  if (rawValue) {
                    node.raws.namespace += content;
                  }
                  lastAdded = "namespace";
                }
                spaceAfterMeaningfulToken = false;
                break;
              case tokens.dollar:
                if (lastAdded === "value") {
                  var oldRawValue = (0, _util.getProp)(node, "raws", "value");
                  node.value += "$";
                  if (oldRawValue) {
                    node.raws.value = oldRawValue + "$";
                  }
                  break;
                }
              // Falls through
              case tokens.caret:
                if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                  node.operator = content;
                  lastAdded = "operator";
                }
                spaceAfterMeaningfulToken = false;
                break;
              case tokens.combinator:
                if (content === "~" && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                  node.operator = content;
                  lastAdded = "operator";
                }
                if (content !== "|") {
                  spaceAfterMeaningfulToken = false;
                  break;
                }
                if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                  node.operator = content;
                  lastAdded = "operator";
                } else if (!node.namespace && !node.attribute) {
                  node.namespace = true;
                }
                spaceAfterMeaningfulToken = false;
                break;
              case tokens.word:
                if (next && this.content(next) === "|" && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals && // this look-ahead probably fails with comment nodes involved.
                !node.operator && !node.namespace) {
                  node.namespace = content;
                  lastAdded = "namespace";
                } else if (!node.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
                  if (spaceBefore) {
                    (0, _util.ensureObject)(node, "spaces", "attribute");
                    node.spaces.attribute.before = spaceBefore;
                    spaceBefore = "";
                  }
                  if (commentBefore) {
                    (0, _util.ensureObject)(node, "raws", "spaces", "attribute");
                    node.raws.spaces.attribute.before = commentBefore;
                    commentBefore = "";
                  }
                  node.attribute = (node.attribute || "") + content;
                  var _rawValue = (0, _util.getProp)(node, "raws", "attribute") || null;
                  if (_rawValue) {
                    node.raws.attribute += content;
                  }
                  lastAdded = "attribute";
                } else if (!node.value && node.value !== "" || lastAdded === "value" && !(spaceAfterMeaningfulToken || node.quoteMark)) {
                  var _unescaped = (0, _util.unesc)(content);
                  var _oldRawValue = (0, _util.getProp)(node, "raws", "value") || "";
                  var oldValue = node.value || "";
                  node.value = oldValue + _unescaped;
                  node.quoteMark = null;
                  if (_unescaped !== content || _oldRawValue) {
                    (0, _util.ensureObject)(node, "raws");
                    node.raws.value = (_oldRawValue || oldValue) + content;
                  }
                  lastAdded = "value";
                } else {
                  var insensitive = content === "i" || content === "I";
                  if ((node.value || node.value === "") && (node.quoteMark || spaceAfterMeaningfulToken)) {
                    node.insensitive = insensitive;
                    if (!insensitive || content === "I") {
                      (0, _util.ensureObject)(node, "raws");
                      node.raws.insensitiveFlag = content;
                    }
                    lastAdded = "insensitive";
                    if (spaceBefore) {
                      (0, _util.ensureObject)(node, "spaces", "insensitive");
                      node.spaces.insensitive.before = spaceBefore;
                      spaceBefore = "";
                    }
                    if (commentBefore) {
                      (0, _util.ensureObject)(node, "raws", "spaces", "insensitive");
                      node.raws.spaces.insensitive.before = commentBefore;
                      commentBefore = "";
                    }
                  } else if (node.value || node.value === "") {
                    lastAdded = "value";
                    node.value += content;
                    if (node.raws.value) {
                      node.raws.value += content;
                    }
                  }
                }
                spaceAfterMeaningfulToken = false;
                break;
              case tokens.str:
                if (!node.attribute || !node.operator) {
                  return this.error("Expected an attribute followed by an operator preceding the string.", {
                    index: token[_tokenize.FIELDS.START_POS]
                  });
                }
                var _unescapeValue = (0, _attribute.unescapeValue)(content), unescaped = _unescapeValue.unescaped, quoteMark = _unescapeValue.quoteMark;
                node.value = unescaped;
                node.quoteMark = quoteMark;
                lastAdded = "value";
                (0, _util.ensureObject)(node, "raws");
                node.raws.value = content;
                spaceAfterMeaningfulToken = false;
                break;
              case tokens.equals:
                if (!node.attribute) {
                  return this.expected("attribute", token[_tokenize.FIELDS.START_POS], content);
                }
                if (node.value) {
                  return this.error('Unexpected "=" found; an operator was already defined.', {
                    index: token[_tokenize.FIELDS.START_POS]
                  });
                }
                node.operator = node.operator ? node.operator + content : content;
                lastAdded = "operator";
                spaceAfterMeaningfulToken = false;
                break;
              case tokens.comment:
                if (lastAdded) {
                  if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === "insensitive") {
                    var lastComment = (0, _util.getProp)(node, "spaces", lastAdded, "after") || "";
                    var rawLastComment = (0, _util.getProp)(node, "raws", "spaces", lastAdded, "after") || lastComment;
                    (0, _util.ensureObject)(node, "raws", "spaces", lastAdded);
                    node.raws.spaces[lastAdded].after = rawLastComment + content;
                  } else {
                    var lastValue = node[lastAdded] || "";
                    var rawLastValue = (0, _util.getProp)(node, "raws", lastAdded) || lastValue;
                    (0, _util.ensureObject)(node, "raws");
                    node.raws[lastAdded] = rawLastValue + content;
                  }
                } else {
                  commentBefore = commentBefore + content;
                }
                break;
              default:
                return this.error('Unexpected "' + content + '" found.', {
                  index: token[_tokenize.FIELDS.START_POS]
                });
            }
            pos++;
          }
          unescapeProp(node, "attribute");
          unescapeProp(node, "namespace");
          this.newNode(new _attribute["default"](node));
          this.position++;
        };
        _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
          if (stopPosition < 0) {
            stopPosition = this.tokens.length;
          }
          var startPosition = this.position;
          var nodes = [];
          var space = "";
          var lastComment = void 0;
          do {
            if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
              if (!this.options.lossy) {
                space += this.content();
              }
            } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
              var spaces = {};
              if (space) {
                spaces.before = space;
                space = "";
              }
              lastComment = new _comment["default"]({
                value: this.content(),
                source: getTokenSource(this.currToken),
                sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
                spaces
              });
              nodes.push(lastComment);
            }
          } while (++this.position < stopPosition);
          if (space) {
            if (lastComment) {
              lastComment.spaces.after = space;
            } else if (!this.options.lossy) {
              var firstToken = this.tokens[startPosition];
              var lastToken = this.tokens[this.position - 1];
              nodes.push(new _string["default"]({
                value: "",
                source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
                sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
                spaces: {
                  before: space,
                  after: ""
                }
              }));
            }
          }
          return nodes;
        };
        _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
          var _this2 = this;
          if (requiredSpace === void 0) {
            requiredSpace = false;
          }
          var space = "";
          var rawSpace = "";
          nodes.forEach(function(n8) {
            var spaceBefore = _this2.lossySpace(n8.spaces.before, requiredSpace);
            var rawSpaceBefore = _this2.lossySpace(n8.rawSpaceBefore, requiredSpace);
            space += spaceBefore + _this2.lossySpace(n8.spaces.after, requiredSpace && spaceBefore.length === 0);
            rawSpace += spaceBefore + n8.value + _this2.lossySpace(n8.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
          });
          if (rawSpace === space) {
            rawSpace = void 0;
          }
          var result = {
            space,
            rawSpace
          };
          return result;
        };
        _proto.isNamedCombinator = function isNamedCombinator(position) {
          if (position === void 0) {
            position = this.position;
          }
          return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
        };
        _proto.namedCombinator = function namedCombinator() {
          if (this.isNamedCombinator()) {
            var nameRaw = this.content(this.tokens[this.position + 1]);
            var name2 = (0, _util.unesc)(nameRaw).toLowerCase();
            var raws = {};
            if (name2 !== nameRaw) {
              raws.value = "/" + nameRaw + "/";
            }
            var node = new _combinator["default"]({
              value: "/" + name2 + "/",
              source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
              sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
              raws
            });
            this.position = this.position + 3;
            return node;
          } else {
            this.unexpected();
          }
        };
        _proto.combinator = function combinator() {
          var _this3 = this;
          if (this.content() === "|") {
            return this.namespace();
          }
          var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);
          if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
            var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
            if (nodes.length > 0) {
              var last = this.current.last;
              if (last) {
                var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes), space = _this$convertWhitespa.space, rawSpace = _this$convertWhitespa.rawSpace;
                if (rawSpace !== void 0) {
                  last.rawSpaceAfter += rawSpace;
                }
                last.spaces.after += space;
              } else {
                nodes.forEach(function(n8) {
                  return _this3.newNode(n8);
                });
              }
            }
            return;
          }
          var firstToken = this.currToken;
          var spaceOrDescendantSelectorNodes = void 0;
          if (nextSigTokenPos > this.position) {
            spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
          }
          var node;
          if (this.isNamedCombinator()) {
            node = this.namedCombinator();
          } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
            node = new _combinator["default"]({
              value: this.content(),
              source: getTokenSource(this.currToken),
              sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
            });
            this.position++;
          } else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
          } else if (!spaceOrDescendantSelectorNodes) {
            this.unexpected();
          }
          if (node) {
            if (spaceOrDescendantSelectorNodes) {
              var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes), _space = _this$convertWhitespa2.space, _rawSpace = _this$convertWhitespa2.rawSpace;
              node.spaces.before = _space;
              node.rawSpaceBefore = _rawSpace;
            }
          } else {
            var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true), _space2 = _this$convertWhitespa3.space, _rawSpace2 = _this$convertWhitespa3.rawSpace;
            if (!_rawSpace2) {
              _rawSpace2 = _space2;
            }
            var spaces = {};
            var raws = {
              spaces: {}
            };
            if (_space2.endsWith(" ") && _rawSpace2.endsWith(" ")) {
              spaces.before = _space2.slice(0, _space2.length - 1);
              raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
            } else if (_space2.startsWith(" ") && _rawSpace2.startsWith(" ")) {
              spaces.after = _space2.slice(1);
              raws.spaces.after = _rawSpace2.slice(1);
            } else {
              raws.value = _rawSpace2;
            }
            node = new _combinator["default"]({
              value: " ",
              source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
              sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
              spaces,
              raws
            });
          }
          if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
            node.spaces.after = this.optionalSpace(this.content());
            this.position++;
          }
          return this.newNode(node);
        };
        _proto.comma = function comma() {
          if (this.position === this.tokens.length - 1) {
            this.root.trailingComma = true;
            this.position++;
            return;
          }
          this.current._inferEndPosition();
          var selector = new _selector["default"]({
            source: {
              start: tokenStart(this.tokens[this.position + 1])
            },
            sourceIndex: this.tokens[this.position + 1][_tokenize.FIELDS.START_POS]
          });
          this.current.parent.append(selector);
          this.current = selector;
          this.position++;
        };
        _proto.comment = function comment2() {
          var current = this.currToken;
          this.newNode(new _comment["default"]({
            value: this.content(),
            source: getTokenSource(current),
            sourceIndex: current[_tokenize.FIELDS.START_POS]
          }));
          this.position++;
        };
        _proto.error = function error(message, opts) {
          throw this.root.error(message, opts);
        };
        _proto.missingBackslash = function missingBackslash() {
          return this.error("Expected a backslash preceding the semicolon.", {
            index: this.currToken[_tokenize.FIELDS.START_POS]
          });
        };
        _proto.missingParenthesis = function missingParenthesis() {
          return this.expected("opening parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
        };
        _proto.missingSquareBracket = function missingSquareBracket() {
          return this.expected("opening square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
        };
        _proto.unexpected = function unexpected() {
          return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
        };
        _proto.unexpectedPipe = function unexpectedPipe() {
          return this.error("Unexpected '|'.", this.currToken[_tokenize.FIELDS.START_POS]);
        };
        _proto.namespace = function namespace() {
          var before = this.prevToken && this.content(this.prevToken) || true;
          if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
            this.position++;
            return this.word(before);
          } else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
            this.position++;
            return this.universal(before);
          }
          this.unexpectedPipe();
        };
        _proto.nesting = function nesting() {
          if (this.nextToken) {
            var nextContent = this.content(this.nextToken);
            if (nextContent === "|") {
              this.position++;
              return;
            }
          }
          var current = this.currToken;
          this.newNode(new _nesting["default"]({
            value: this.content(),
            source: getTokenSource(current),
            sourceIndex: current[_tokenize.FIELDS.START_POS]
          }));
          this.position++;
        };
        _proto.parentheses = function parentheses() {
          var last = this.current.last;
          var unbalanced = 1;
          this.position++;
          if (last && last.type === types.PSEUDO) {
            var selector = new _selector["default"]({
              source: {
                start: tokenStart(this.tokens[this.position])
              },
              sourceIndex: this.tokens[this.position][_tokenize.FIELDS.START_POS]
            });
            var cache = this.current;
            last.append(selector);
            this.current = selector;
            while (this.position < this.tokens.length && unbalanced) {
              if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
                unbalanced++;
              }
              if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
                unbalanced--;
              }
              if (unbalanced) {
                this.parse();
              } else {
                this.current.source.end = tokenEnd(this.currToken);
                this.current.parent.source.end = tokenEnd(this.currToken);
                this.position++;
              }
            }
            this.current = cache;
          } else {
            var parenStart = this.currToken;
            var parenValue = "(";
            var parenEnd;
            while (this.position < this.tokens.length && unbalanced) {
              if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
                unbalanced++;
              }
              if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
                unbalanced--;
              }
              parenEnd = this.currToken;
              parenValue += this.parseParenthesisToken(this.currToken);
              this.position++;
            }
            if (last) {
              last.appendToPropertyAndEscape("value", parenValue, parenValue);
            } else {
              this.newNode(new _string["default"]({
                value: parenValue,
                source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
                sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
              }));
            }
          }
          if (unbalanced) {
            return this.expected("closing parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
          }
        };
        _proto.pseudo = function pseudo() {
          var _this4 = this;
          var pseudoStr = "";
          var startingToken = this.currToken;
          while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
            pseudoStr += this.content();
            this.position++;
          }
          if (!this.currToken) {
            return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
          }
          if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
            this.splitWord(false, function(first, length) {
              pseudoStr += first;
              _this4.newNode(new _pseudo["default"]({
                value: pseudoStr,
                source: getTokenSourceSpan(startingToken, _this4.currToken),
                sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
              }));
              if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
                _this4.error("Misplaced parenthesis.", {
                  index: _this4.nextToken[_tokenize.FIELDS.START_POS]
                });
              }
            });
          } else {
            return this.expected(["pseudo-class", "pseudo-element"], this.currToken[_tokenize.FIELDS.START_POS]);
          }
        };
        _proto.space = function space() {
          var content = this.content();
          if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function(node) {
            return node.type === "comment";
          })) {
            this.spaces = this.optionalSpace(content);
            this.position++;
          } else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
            this.current.last.spaces.after = this.optionalSpace(content);
            this.position++;
          } else {
            this.combinator();
          }
        };
        _proto.string = function string() {
          var current = this.currToken;
          this.newNode(new _string["default"]({
            value: this.content(),
            source: getTokenSource(current),
            sourceIndex: current[_tokenize.FIELDS.START_POS]
          }));
          this.position++;
        };
        _proto.universal = function universal(namespace) {
          var nextToken = this.nextToken;
          if (nextToken && this.content(nextToken) === "|") {
            this.position++;
            return this.namespace();
          }
          var current = this.currToken;
          this.newNode(new _universal["default"]({
            value: this.content(),
            source: getTokenSource(current),
            sourceIndex: current[_tokenize.FIELDS.START_POS]
          }), namespace);
          this.position++;
        };
        _proto.splitWord = function splitWord(namespace, firstCallback) {
          var _this5 = this;
          var nextToken = this.nextToken;
          var word = this.content();
          while (nextToken && ~[tokens.dollar, tokens.caret, tokens.equals, tokens.word].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
            this.position++;
            var current = this.content();
            word += current;
            if (current.lastIndexOf("\\") === current.length - 1) {
              var next = this.nextToken;
              if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
                word += this.requiredSpace(this.content(next));
                this.position++;
              }
            }
            nextToken = this.nextToken;
          }
          var hasClass = indexesOf(word, ".").filter(function(i8) {
            var escapedDot = word[i8 - 1] === "\\";
            var isKeyframesPercent = /^\d+\.\d+%$/.test(word);
            return !escapedDot && !isKeyframesPercent;
          });
          var hasId = indexesOf(word, "#").filter(function(i8) {
            return word[i8 - 1] !== "\\";
          });
          var interpolations = indexesOf(word, "#{");
          if (interpolations.length) {
            hasId = hasId.filter(function(hashIndex) {
              return !~interpolations.indexOf(hashIndex);
            });
          }
          var indices = (0, _sortAscending["default"])(uniqs([0].concat(hasClass, hasId)));
          indices.forEach(function(ind, i8) {
            var index2 = indices[i8 + 1] || word.length;
            var value = word.slice(ind, index2);
            if (i8 === 0 && firstCallback) {
              return firstCallback.call(_this5, value, indices.length);
            }
            var node;
            var current2 = _this5.currToken;
            var sourceIndex = current2[_tokenize.FIELDS.START_POS] + indices[i8];
            var source = getSource(current2[1], current2[2] + ind, current2[3], current2[2] + (index2 - 1));
            if (~hasClass.indexOf(ind)) {
              var classNameOpts = {
                value: value.slice(1),
                source,
                sourceIndex
              };
              node = new _className["default"](unescapeProp(classNameOpts, "value"));
            } else if (~hasId.indexOf(ind)) {
              var idOpts = {
                value: value.slice(1),
                source,
                sourceIndex
              };
              node = new _id["default"](unescapeProp(idOpts, "value"));
            } else {
              var tagOpts = {
                value,
                source,
                sourceIndex
              };
              unescapeProp(tagOpts, "value");
              node = new _tag["default"](tagOpts);
            }
            _this5.newNode(node, namespace);
            namespace = null;
          });
          this.position++;
        };
        _proto.word = function word(namespace) {
          var nextToken = this.nextToken;
          if (nextToken && this.content(nextToken) === "|") {
            this.position++;
            return this.namespace();
          }
          return this.splitWord(namespace);
        };
        _proto.loop = function loop() {
          while (this.position < this.tokens.length) {
            this.parse(true);
          }
          this.current._inferEndPosition();
          return this.root;
        };
        _proto.parse = function parse3(throwOnParenthesis) {
          switch (this.currToken[_tokenize.FIELDS.TYPE]) {
            case tokens.space:
              this.space();
              break;
            case tokens.comment:
              this.comment();
              break;
            case tokens.openParenthesis:
              this.parentheses();
              break;
            case tokens.closeParenthesis:
              if (throwOnParenthesis) {
                this.missingParenthesis();
              }
              break;
            case tokens.openSquare:
              this.attribute();
              break;
            case tokens.dollar:
            case tokens.caret:
            case tokens.equals:
            case tokens.word:
              this.word();
              break;
            case tokens.colon:
              this.pseudo();
              break;
            case tokens.comma:
              this.comma();
              break;
            case tokens.asterisk:
              this.universal();
              break;
            case tokens.ampersand:
              this.nesting();
              break;
            case tokens.slash:
            case tokens.combinator:
              this.combinator();
              break;
            case tokens.str:
              this.string();
              break;
            // These cases throw; no break needed.
            case tokens.closeSquare:
              this.missingSquareBracket();
            case tokens.semicolon:
              this.missingBackslash();
            default:
              this.unexpected();
          }
        };
        _proto.expected = function expected(description, index2, found) {
          if (Array.isArray(description)) {
            var last = description.pop();
            description = description.join(", ") + " or " + last;
          }
          var an = /^[aeiou]/.test(description[0]) ? "an" : "a";
          if (!found) {
            return this.error("Expected " + an + " " + description + ".", {
              index: index2
            });
          }
          return this.error("Expected " + an + " " + description + ', found "' + found + '" instead.', {
            index: index2
          });
        };
        _proto.requiredSpace = function requiredSpace(space) {
          return this.options.lossy ? " " : space;
        };
        _proto.optionalSpace = function optionalSpace(space) {
          return this.options.lossy ? "" : space;
        };
        _proto.lossySpace = function lossySpace(space, required) {
          if (this.options.lossy) {
            return required ? " " : "";
          } else {
            return space;
          }
        };
        _proto.parseParenthesisToken = function parseParenthesisToken(token) {
          var content = this.content(token);
          if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
            return this.requiredSpace(content);
          } else {
            return content;
          }
        };
        _proto.newNode = function newNode(node, namespace) {
          if (namespace) {
            if (/^ +$/.test(namespace)) {
              if (!this.options.lossy) {
                this.spaces = (this.spaces || "") + namespace;
              }
              namespace = true;
            }
            node.namespace = namespace;
            unescapeProp(node, "namespace");
          }
          if (this.spaces) {
            node.spaces.before = this.spaces;
            this.spaces = "";
          }
          return this.current.append(node);
        };
        _proto.content = function content(token) {
          if (token === void 0) {
            token = this.currToken;
          }
          return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
        };
        _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
          if (startPosition === void 0) {
            startPosition = this.position + 1;
          }
          var searchPosition = startPosition;
          while (searchPosition < this.tokens.length) {
            if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
              searchPosition++;
              continue;
            } else {
              return searchPosition;
            }
          }
          return -1;
        };
        _createClass(Parser2, [{
          key: "currToken",
          get: function get() {
            return this.tokens[this.position];
          }
        }, {
          key: "nextToken",
          get: function get() {
            return this.tokens[this.position + 1];
          }
        }, {
          key: "prevToken",
          get: function get() {
            return this.tokens[this.position - 1];
          }
        }]);
        return Parser2;
      }();
      exports["default"] = Parser;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/processor.js
  var require_processor2 = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/processor.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _parser = _interopRequireDefault(require_parser3());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var Processor2 = /* @__PURE__ */ function() {
        function Processor3(func, options) {
          this.func = func || function noop() {
          };
          this.funcRes = null;
          this.options = options;
        }
        var _proto = Processor3.prototype;
        _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule2, options) {
          if (options === void 0) {
            options = {};
          }
          var merged = Object.assign({}, this.options, options);
          if (merged.updateSelector === false) {
            return false;
          } else {
            return typeof rule2 !== "string";
          }
        };
        _proto._isLossy = function _isLossy(options) {
          if (options === void 0) {
            options = {};
          }
          var merged = Object.assign({}, this.options, options);
          if (merged.lossless === false) {
            return true;
          } else {
            return false;
          }
        };
        _proto._root = function _root(rule2, options) {
          if (options === void 0) {
            options = {};
          }
          var parser2 = new _parser["default"](rule2, this._parseOptions(options));
          return parser2.root;
        };
        _proto._parseOptions = function _parseOptions(options) {
          return {
            lossy: this._isLossy(options)
          };
        };
        _proto._run = function _run(rule2, options) {
          var _this = this;
          if (options === void 0) {
            options = {};
          }
          return new Promise(function(resolve, reject) {
            try {
              var root2 = _this._root(rule2, options);
              Promise.resolve(_this.func(root2)).then(function(transform) {
                var string = void 0;
                if (_this._shouldUpdateSelector(rule2, options)) {
                  string = root2.toString();
                  rule2.selector = string;
                }
                return {
                  transform,
                  root: root2,
                  string
                };
              }).then(resolve, reject);
            } catch (e12) {
              reject(e12);
              return;
            }
          });
        };
        _proto._runSync = function _runSync(rule2, options) {
          if (options === void 0) {
            options = {};
          }
          var root2 = this._root(rule2, options);
          var transform = this.func(root2);
          if (transform && typeof transform.then === "function") {
            throw new Error("Selector processor returned a promise to a synchronous call.");
          }
          var string = void 0;
          if (options.updateSelector && typeof rule2 !== "string") {
            string = root2.toString();
            rule2.selector = string;
          }
          return {
            transform,
            root: root2,
            string
          };
        };
        _proto.ast = function ast(rule2, options) {
          return this._run(rule2, options).then(function(result) {
            return result.root;
          });
        };
        _proto.astSync = function astSync(rule2, options) {
          return this._runSync(rule2, options).root;
        };
        _proto.transform = function transform(rule2, options) {
          return this._run(rule2, options).then(function(result) {
            return result.transform;
          });
        };
        _proto.transformSync = function transformSync(rule2, options) {
          return this._runSync(rule2, options).transform;
        };
        _proto.process = function process2(rule2, options) {
          return this._run(rule2, options).then(function(result) {
            return result.string || result.root.toString();
          });
        };
        _proto.processSync = function processSync(rule2, options) {
          var result = this._runSync(rule2, options);
          return result.string || result.root.toString();
        };
        return Processor3;
      }();
      exports["default"] = Processor2;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/constructors.js
  var require_constructors = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/constructors.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;
      var _attribute = _interopRequireDefault(require_attribute());
      var _className = _interopRequireDefault(require_className());
      var _combinator = _interopRequireDefault(require_combinator());
      var _comment = _interopRequireDefault(require_comment2());
      var _id = _interopRequireDefault(require_id());
      var _nesting = _interopRequireDefault(require_nesting());
      var _pseudo = _interopRequireDefault(require_pseudo());
      var _root = _interopRequireDefault(require_root2());
      var _selector = _interopRequireDefault(require_selector());
      var _string = _interopRequireDefault(require_string());
      var _tag = _interopRequireDefault(require_tag());
      var _universal = _interopRequireDefault(require_universal());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var attribute = function attribute2(opts) {
        return new _attribute["default"](opts);
      };
      exports.attribute = attribute;
      var className2 = function className3(opts) {
        return new _className["default"](opts);
      };
      exports.className = className2;
      var combinator = function combinator2(opts) {
        return new _combinator["default"](opts);
      };
      exports.combinator = combinator;
      var comment2 = function comment3(opts) {
        return new _comment["default"](opts);
      };
      exports.comment = comment2;
      var id4 = function id5(opts) {
        return new _id["default"](opts);
      };
      exports.id = id4;
      var nesting = function nesting2(opts) {
        return new _nesting["default"](opts);
      };
      exports.nesting = nesting;
      var pseudo = function pseudo2(opts) {
        return new _pseudo["default"](opts);
      };
      exports.pseudo = pseudo;
      var root2 = function root3(opts) {
        return new _root["default"](opts);
      };
      exports.root = root2;
      var selector = function selector2(opts) {
        return new _selector["default"](opts);
      };
      exports.selector = selector;
      var string = function string2(opts) {
        return new _string["default"](opts);
      };
      exports.string = string;
      var tag = function tag2(opts) {
        return new _tag["default"](opts);
      };
      exports.tag = tag;
      var universal = function universal2(opts) {
        return new _universal["default"](opts);
      };
      exports.universal = universal;
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/guards.js
  var require_guards = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/guards.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;
      exports.isContainer = isContainer;
      exports.isIdentifier = void 0;
      exports.isNamespace = isNamespace;
      exports.isNesting = void 0;
      exports.isNode = isNode2;
      exports.isPseudo = void 0;
      exports.isPseudoClass = isPseudoClass;
      exports.isPseudoElement = isPseudoElement;
      exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = void 0;
      var _types = require_types();
      var _IS_TYPE;
      var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[_types.ATTRIBUTE] = true, _IS_TYPE[_types.CLASS] = true, _IS_TYPE[_types.COMBINATOR] = true, _IS_TYPE[_types.COMMENT] = true, _IS_TYPE[_types.ID] = true, _IS_TYPE[_types.NESTING] = true, _IS_TYPE[_types.PSEUDO] = true, _IS_TYPE[_types.ROOT] = true, _IS_TYPE[_types.SELECTOR] = true, _IS_TYPE[_types.STRING] = true, _IS_TYPE[_types.TAG] = true, _IS_TYPE[_types.UNIVERSAL] = true, _IS_TYPE);
      function isNode2(node) {
        return typeof node === "object" && IS_TYPE[node.type];
      }
      function isNodeType(type, node) {
        return isNode2(node) && node.type === type;
      }
      var isAttribute = isNodeType.bind(null, _types.ATTRIBUTE);
      exports.isAttribute = isAttribute;
      var isClassName = isNodeType.bind(null, _types.CLASS);
      exports.isClassName = isClassName;
      var isCombinator = isNodeType.bind(null, _types.COMBINATOR);
      exports.isCombinator = isCombinator;
      var isComment = isNodeType.bind(null, _types.COMMENT);
      exports.isComment = isComment;
      var isIdentifier = isNodeType.bind(null, _types.ID);
      exports.isIdentifier = isIdentifier;
      var isNesting = isNodeType.bind(null, _types.NESTING);
      exports.isNesting = isNesting;
      var isPseudo = isNodeType.bind(null, _types.PSEUDO);
      exports.isPseudo = isPseudo;
      var isRoot = isNodeType.bind(null, _types.ROOT);
      exports.isRoot = isRoot;
      var isSelector = isNodeType.bind(null, _types.SELECTOR);
      exports.isSelector = isSelector;
      var isString = isNodeType.bind(null, _types.STRING);
      exports.isString = isString;
      var isTag = isNodeType.bind(null, _types.TAG);
      exports.isTag = isTag;
      var isUniversal = isNodeType.bind(null, _types.UNIVERSAL);
      exports.isUniversal = isUniversal;
      function isPseudoElement(node) {
        return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after" || node.value.toLowerCase() === ":first-letter" || node.value.toLowerCase() === ":first-line");
      }
      function isPseudoClass(node) {
        return isPseudo(node) && !isPseudoElement(node);
      }
      function isContainer(node) {
        return !!(isNode2(node) && node.walk);
      }
      function isNamespace(node) {
        return isAttribute(node) || isTag(node);
      }
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/index.js
  var require_selectors = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/selectors/index.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var _types = require_types();
      Object.keys(_types).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (key in exports && exports[key] === _types[key]) return;
        exports[key] = _types[key];
      });
      var _constructors = require_constructors();
      Object.keys(_constructors).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (key in exports && exports[key] === _constructors[key]) return;
        exports[key] = _constructors[key];
      });
      var _guards = require_guards();
      Object.keys(_guards).forEach(function(key) {
        if (key === "default" || key === "__esModule") return;
        if (key in exports && exports[key] === _guards[key]) return;
        exports[key] = _guards[key];
      });
    }
  });

  // node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/postcss-selector-parser@7.0.0/node_modules/postcss-selector-parser/dist/index.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = void 0;
      var _processor = _interopRequireDefault(require_processor2());
      var selectors = _interopRequireWildcard(require_selectors());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var parser2 = function parser3(processor) {
        return new _processor["default"](processor);
      };
      Object.assign(parser2, selectors);
      delete parser2.__esModule;
      var _default = parser2;
      exports["default"] = _default;
      module.exports = exports.default;
    }
  });

  // node_modules/.pnpm/postcss-nested@7.0.2_postcss@8.4.49/node_modules/postcss-nested/index.js
  var require_postcss_nested = __commonJS({
    "node_modules/.pnpm/postcss-nested@7.0.2_postcss@8.4.49/node_modules/postcss-nested/index.js"(exports, module) {
      var { AtRule: AtRule2, Rule: Rule2 } = require_postcss();
      var parser2 = require_dist();
      function parse3(rawSelector, rule2) {
        let nodes;
        try {
          parser2((parsed) => {
            nodes = parsed;
          }).processSync(rawSelector);
        } catch (e12) {
          if (rawSelector.includes(":")) {
            throw rule2 ? rule2.error("Missed semicolon") : e12;
          } else {
            throw rule2 ? rule2.error(e12.message) : e12;
          }
        }
        return nodes.at(0);
      }
      function interpolateAmpInSelector(nodes, parent) {
        let replaced = false;
        nodes.each((node) => {
          if (node.type === "nesting") {
            let clonedParent = parent.clone({});
            if (node.value !== "&") {
              node.replaceWith(
                parse3(node.value.replace("&", clonedParent.toString()))
              );
            } else {
              node.replaceWith(clonedParent);
            }
            replaced = true;
          } else if ("nodes" in node && node.nodes) {
            if (interpolateAmpInSelector(node, parent)) {
              replaced = true;
            }
          }
        });
        return replaced;
      }
      function mergeSelectors(parent, child) {
        let merged = [];
        for (let sel of parent.selectors) {
          let parentNode = parse3(sel, parent);
          for (let selector of child.selectors) {
            if (!selector) {
              continue;
            }
            let node = parse3(selector, child);
            let replaced = interpolateAmpInSelector(node, parentNode);
            if (!replaced) {
              node.prepend(parser2.combinator({ value: " " }));
              node.prepend(parentNode.clone({}));
            }
            merged.push(node.toString());
          }
        }
        return merged;
      }
      function breakOut(child, currentNode) {
        if (child.prev()?.type !== "comment") {
          currentNode.after(child);
          return child;
        }
        let prevNode = child.prev();
        let regexp = /[*]\/ *\n.*{/;
        if (child.parent.toString().match(regexp)) {
          currentNode.after(child).after(prevNode);
        } else {
          currentNode.after(child);
        }
        return child;
      }
      function createFnAtruleChilds(bubble) {
        return function atruleChilds(rule2, atrule, bubbling, mergeSels = bubbling) {
          let children2 = [];
          atrule.each((child) => {
            if (child.type === "rule" && bubbling) {
              if (mergeSels) {
                child.selectors = mergeSelectors(rule2, child);
              }
            } else if (child.type === "atrule" && child.nodes) {
              if (bubble[child.name]) {
                atruleChilds(rule2, child, mergeSels);
              } else if (atrule[rootRuleMergeSel] !== false) {
                children2.push(child);
              }
            } else {
              children2.push(child);
            }
          });
          if (bubbling && children2.length) {
            let clone = rule2.clone({ nodes: [] });
            for (let child of children2) {
              clone.append(child);
            }
            atrule.prepend(clone);
          }
        };
      }
      function pickDeclarations(selector, declarations, after) {
        let parent = new Rule2({
          nodes: [],
          selector
        });
        parent.append(declarations);
        after.after(parent);
        return parent;
      }
      function pickAndClearDeclarations(ruleSelector, declarations, after, clear = true) {
        if (!declarations.length) return [after, declarations];
        after = pickDeclarations(ruleSelector, declarations, after);
        if (clear) {
          declarations = [];
        }
        return [after, declarations];
      }
      function atruleNames(defaults, custom2 = "") {
        let names = defaults.concat(custom2);
        let list2 = {};
        for (let name2 of names) {
          list2[name2.replace(/^@/, "")] = true;
        }
        return list2;
      }
      function parseRootRuleParams(params) {
        params = params.trim();
        let braceBlock = params.match(/^\((.*)\)$/);
        if (!braceBlock) {
          return { selector: params, type: "basic" };
        }
        let bits = braceBlock[1].match(/^(with(?:out)?):(.+)$/);
        if (bits) {
          let allowlist = bits[1] === "with";
          let rules = Object.fromEntries(
            bits[2].trim().split(/\s+/).map((name2) => [name2, true])
          );
          if (allowlist && rules.all) {
            return { type: "noop" };
          }
          let escapes = (rule2) => !!rules[rule2];
          if (rules.all) {
            escapes = () => true;
          } else if (allowlist) {
            escapes = (rule2) => rule2 === "all" ? false : !rules[rule2];
          }
          return {
            escapes,
            type: "withrules"
          };
        }
        return { type: "unknown" };
      }
      function getAncestorRules(leaf) {
        let lineage = [];
        let parent = leaf.parent;
        while (parent && parent instanceof AtRule2) {
          lineage.push(parent);
          parent = parent.parent;
        }
        return lineage;
      }
      function unwrapRootRule(rule2) {
        let escapes = rule2[rootRuleEscapes];
        if (!escapes) {
          rule2.after(rule2.nodes);
        } else {
          let nodes = rule2.nodes;
          let topEscaped;
          let topEscapedIdx = -1;
          let breakoutLeaf;
          let breakoutRoot;
          let clone;
          let lineage = getAncestorRules(rule2);
          lineage.forEach((parent, i8) => {
            if (escapes(parent.name)) {
              topEscaped = parent;
              topEscapedIdx = i8;
              breakoutRoot = clone;
            } else {
              let oldClone = clone;
              clone = parent.clone({ nodes: [] });
              oldClone && clone.append(oldClone);
              breakoutLeaf = breakoutLeaf || clone;
            }
          });
          if (!topEscaped) {
            rule2.after(nodes);
          } else if (!breakoutRoot) {
            topEscaped.after(nodes);
          } else {
            let leaf = breakoutLeaf;
            leaf.append(nodes);
            topEscaped.after(breakoutRoot);
          }
          if (rule2.next() && topEscaped) {
            let restRoot;
            lineage.slice(0, topEscapedIdx + 1).forEach((parent, i8, arr) => {
              let oldRoot = restRoot;
              restRoot = parent.clone({ nodes: [] });
              oldRoot && restRoot.append(oldRoot);
              let nextSibs = [];
              let _child = arr[i8 - 1] || rule2;
              let next = _child.next();
              while (next) {
                nextSibs.push(next);
                next = next.next();
              }
              restRoot.append(nextSibs);
            });
            restRoot && (breakoutRoot || nodes[nodes.length - 1]).after(restRoot);
          }
        }
        rule2.remove();
      }
      var rootRuleMergeSel = Symbol("rootRuleMergeSel");
      var rootRuleEscapes = Symbol("rootRuleEscapes");
      function normalizeRootRule(rule2) {
        let { params } = rule2;
        let { escapes, selector, type } = parseRootRuleParams(params);
        if (type === "unknown") {
          throw rule2.error(
            `Unknown @${rule2.name} parameter ${JSON.stringify(params)}`
          );
        }
        if (type === "basic" && selector) {
          let selectorBlock = new Rule2({ nodes: rule2.nodes, selector });
          rule2.removeAll();
          rule2.append(selectorBlock);
        }
        rule2[rootRuleEscapes] = escapes;
        rule2[rootRuleMergeSel] = escapes ? !escapes("all") : type === "noop";
      }
      var hasRootRule = Symbol("hasRootRule");
      module.exports = (opts = {}) => {
        let bubble = atruleNames(
          ["media", "supports", "layer", "container", "starting-style"],
          opts.bubble
        );
        let atruleChilds = createFnAtruleChilds(bubble);
        let unwrap = atruleNames(
          [
            "document",
            "font-face",
            "keyframes",
            "-webkit-keyframes",
            "-moz-keyframes"
          ],
          opts.unwrap
        );
        let rootRuleName = (opts.rootRuleName || "at-root").replace(/^@/, "");
        let preserveEmpty = opts.preserveEmpty;
        return {
          Once(root2) {
            root2.walkAtRules(rootRuleName, (node) => {
              normalizeRootRule(node);
              root2[hasRootRule] = true;
            });
          },
          postcssPlugin: "postcss-nested",
          RootExit(root2) {
            if (!root2[hasRootRule]) return;
            root2.walkAtRules(rootRuleName, unwrapRootRule);
            root2[hasRootRule] = false;
          },
          Rule(rule2) {
            let unwrapped = false;
            let after = rule2;
            let copyDeclarations = false;
            let declarations = [];
            rule2.each((child) => {
              switch (child.type) {
                case "atrule":
                  [after, declarations] = pickAndClearDeclarations(rule2.selector, declarations, after);
                  if (child.name === rootRuleName) {
                    unwrapped = true;
                    atruleChilds(rule2, child, true, child[rootRuleMergeSel]);
                    after = breakOut(child, after);
                  } else if (bubble[child.name]) {
                    copyDeclarations = true;
                    unwrapped = true;
                    atruleChilds(rule2, child, true);
                    after = breakOut(child, after);
                  } else if (unwrap[child.name]) {
                    copyDeclarations = true;
                    unwrapped = true;
                    atruleChilds(rule2, child, false);
                    after = breakOut(child, after);
                  } else if (copyDeclarations) {
                    declarations.push(child);
                  }
                  break;
                case "decl":
                  if (copyDeclarations) {
                    declarations.push(child);
                  }
                  break;
                case "rule":
                  [after, declarations] = pickAndClearDeclarations(rule2.selector, declarations, after);
                  copyDeclarations = true;
                  unwrapped = true;
                  child.selectors = mergeSelectors(rule2, child);
                  after = breakOut(child, after);
                  break;
              }
            });
            pickAndClearDeclarations(rule2.selector, declarations, after, false);
            if (unwrapped && preserveEmpty !== true) {
              rule2.raws.semicolon = true;
              if (rule2.nodes.length === 0) rule2.remove();
            }
          }
        };
      };
      module.exports.postcss = true;
    }
  });

  // node_modules/.pnpm/component-register@0.8.7/node_modules/component-register/dist/component-register.js
  function cloneProps(props) {
    const propKeys = Object.keys(props);
    return propKeys.reduce((memo, k2) => {
      const prop = props[k2];
      memo[k2] = Object.assign({}, prop);
      if (isObject(prop.value) && !isFunction(prop.value) && !Array.isArray(prop.value)) memo[k2].value = Object.assign({}, prop.value);
      if (Array.isArray(prop.value)) memo[k2].value = prop.value.slice(0);
      return memo;
    }, {});
  }
  function normalizePropDefs(props) {
    if (!props) return {};
    const propKeys = Object.keys(props);
    return propKeys.reduce((memo, k2) => {
      const v2 = props[k2];
      memo[k2] = !(isObject(v2) && "value" in v2) ? {
        value: v2
      } : v2;
      memo[k2].attribute || (memo[k2].attribute = toAttribute(k2));
      memo[k2].parse = "parse" in memo[k2] ? memo[k2].parse : typeof memo[k2].value !== "string";
      return memo;
    }, {});
  }
  function propValues(props) {
    const propKeys = Object.keys(props);
    return propKeys.reduce((memo, k2) => {
      memo[k2] = props[k2].value;
      return memo;
    }, {});
  }
  function initializeProps(element, propDefinition) {
    const props = cloneProps(propDefinition), propKeys = Object.keys(propDefinition);
    propKeys.forEach((key) => {
      const prop = props[key], attr = element.getAttribute(prop.attribute), value = element[key];
      if (attr != null) prop.value = prop.parse ? parseAttributeValue(attr) : attr;
      if (value != null) prop.value = Array.isArray(value) ? value.slice(0) : value;
      prop.reflect && reflect(element, prop.attribute, prop.value, !!prop.parse);
      Object.defineProperty(element, key, {
        get() {
          return prop.value;
        },
        set(val) {
          const oldValue = prop.value;
          prop.value = val;
          prop.reflect && reflect(this, prop.attribute, prop.value, !!prop.parse);
          for (let i8 = 0, l5 = this.__propertyChangedCallbacks.length; i8 < l5; i8++) {
            this.__propertyChangedCallbacks[i8](key, val, oldValue);
          }
        },
        enumerable: true,
        configurable: true
      });
    });
    return props;
  }
  function parseAttributeValue(value) {
    if (!value) return;
    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
  function reflect(node, attribute, value, parse3) {
    if (value == null || value === false) return node.removeAttribute(attribute);
    let reflect2 = parse3 ? JSON.stringify(value) : value;
    node.__updating[attribute] = true;
    if (reflect2 === "true") reflect2 = "";
    node.setAttribute(attribute, reflect2);
    Promise.resolve().then(() => delete node.__updating[attribute]);
  }
  function toAttribute(propName) {
    return propName.replace(/\.?([A-Z]+)/g, (x2, y3) => "-" + y3.toLowerCase()).replace("_", "-").replace(/^-/, "");
  }
  function isObject(obj) {
    return obj != null && (typeof obj === "object" || typeof obj === "function");
  }
  function isFunction(val) {
    return Object.prototype.toString.call(val) === "[object Function]";
  }
  function isConstructor(f6) {
    return typeof f6 === "function" && f6.toString().indexOf("class") === 0;
  }
  var currentElement;
  function createElementType(BaseElement, propDefinition) {
    const propKeys = Object.keys(propDefinition);
    return class CustomElement extends BaseElement {
      static get observedAttributes() {
        return propKeys.map((k2) => propDefinition[k2].attribute);
      }
      constructor() {
        super();
        this.__initialized = false;
        this.__released = false;
        this.__releaseCallbacks = [];
        this.__propertyChangedCallbacks = [];
        this.__updating = {};
        this.props = {};
      }
      connectedCallback() {
        if (this.__initialized) return;
        this.__releaseCallbacks = [];
        this.__propertyChangedCallbacks = [];
        this.__updating = {};
        this.props = initializeProps(this, propDefinition);
        const props = propValues(this.props), ComponentType = this.Component, outerElement = currentElement;
        try {
          currentElement = this;
          this.__initialized = true;
          if (isConstructor(ComponentType)) new ComponentType(props, {
            element: this
          });
          else ComponentType(props, {
            element: this
          });
        } finally {
          currentElement = outerElement;
        }
      }
      async disconnectedCallback() {
        await Promise.resolve();
        if (this.isConnected) return;
        this.__propertyChangedCallbacks.length = 0;
        let callback = null;
        while (callback = this.__releaseCallbacks.pop()) callback(this);
        delete this.__initialized;
        this.__released = true;
      }
      attributeChangedCallback(name2, oldVal, newVal) {
        if (!this.__initialized) return;
        if (this.__updating[name2]) return;
        name2 = this.lookupProp(name2);
        if (name2 in propDefinition) {
          if (newVal == null && !this[name2]) return;
          this[name2] = propDefinition[name2].parse ? parseAttributeValue(newVal) : newVal;
        }
      }
      lookupProp(attrName) {
        if (!propDefinition) return;
        return propKeys.find((k2) => attrName === k2 || attrName === propDefinition[k2].attribute);
      }
      get renderRoot() {
        return this.shadowRoot || this.attachShadow({
          mode: "open"
        });
      }
      addReleaseCallback(fn) {
        this.__releaseCallbacks.push(fn);
      }
      addPropertyChangedCallback(fn) {
        this.__propertyChangedCallbacks.push(fn);
      }
    };
  }
  var EC = Symbol("element-context");
  function register(tag, props = {}, options = {}) {
    const {
      BaseElement = HTMLElement,
      extension,
      customElements: customElements2 = window.customElements
    } = options;
    return (ComponentType) => {
      if (!tag) throw new Error("tag is required to register a Component");
      let ElementType = customElements2.get(tag);
      if (ElementType) {
        ElementType.prototype.Component = ComponentType;
        return ElementType;
      }
      ElementType = createElementType(BaseElement, normalizePropDefs(props));
      ElementType.prototype.Component = ComponentType;
      ElementType.prototype.registeredTag = tag;
      customElements2.define(tag, ElementType, extension);
      return ElementType;
    };
  }

  // node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/dist/solid.js
  var sharedConfig = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: false,
    getContextId() {
      return getContextId(this.context.count);
    },
    getNextContextId() {
      return getContextId(this.context.count++);
    }
  };
  function getContextId(count) {
    const num = String(count), len = num.length - 1;
    return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
  }
  function setHydrateContext(context) {
    sharedConfig.context = context;
  }
  function nextHydrateContext() {
    return {
      ...sharedConfig.context,
      id: sharedConfig.getNextContextId(),
      count: 0
    };
  }
  var equalFn = (a4, b3) => a4 === b3;
  var $PROXY = Symbol("solid-proxy");
  var $TRACK = Symbol("solid-track");
  var $DEVCOMP = Symbol("solid-dev-component");
  var signalOptions = {
    equals: equalFn
  };
  var ERROR = null;
  var runEffects = runQueue;
  var STALE = 1;
  var PENDING = 2;
  var UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var NO_INIT = {};
  var Owner = null;
  var Transition = null;
  var Scheduler = null;
  var ExternalSourceConfig = null;
  var Listener = null;
  var Updates = null;
  var Effects = null;
  var ExecCount = 0;
  function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root2 = unowned ? UNOWNED : {
      owned: null,
      cleanups: null,
      context: current ? current.context : null,
      owner: current
    }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root2)));
    Owner = root2;
    Listener = null;
    try {
      return runUpdates(updateFn, true);
    } finally {
      Listener = listener;
      Owner = owner;
    }
  }
  function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s4 = {
      value,
      observers: null,
      observerSlots: null,
      comparator: options.equals || void 0
    };
    const setter = (value2) => {
      if (typeof value2 === "function") {
        if (Transition && Transition.running && Transition.sources.has(s4)) value2 = value2(s4.tValue);
        else value2 = value2(s4.value);
      }
      return writeSignal(s4, value2);
    };
    return [readSignal.bind(s4), setter];
  }
  function createComputed(fn, value, options) {
    const c6 = createComputation(fn, value, true, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c6);
    else updateComputation(c6);
  }
  function createRenderEffect(fn, value, options) {
    const c6 = createComputation(fn, value, false, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c6);
    else updateComputation(c6);
  }
  function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c6 = createComputation(fn, value, true, 0);
    c6.observers = null;
    c6.observerSlots = null;
    c6.comparator = options.equals || void 0;
    if (Scheduler && Transition && Transition.running) {
      c6.tState = STALE;
      Updates.push(c6);
    } else updateComputation(c6);
    return readSignal.bind(c6);
  }
  function isPromise(v2) {
    return v2 && typeof v2 === "object" && "then" in v2;
  }
  function createResource(pSource, pFetcher, pOptions) {
    let source;
    let fetcher;
    let options;
    if (arguments.length === 2 && typeof pFetcher === "object" || arguments.length === 1) {
      source = true;
      fetcher = pSource;
      options = pFetcher || {};
    } else {
      source = pSource;
      fetcher = pFetcher;
      options = pOptions || {};
    }
    let pr = null, initP = NO_INIT, id4 = null, loadedUnderTransition = false, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
    const contexts = /* @__PURE__ */ new Set(), [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
      equals: false
    }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
    if (sharedConfig.context) {
      id4 = sharedConfig.getNextContextId();
      if (options.ssrLoadFrom === "initial") initP = options.initialValue;
      else if (sharedConfig.load && sharedConfig.has(id4)) initP = sharedConfig.load(id4);
    }
    function loadEnd(p3, v2, error2, key) {
      if (pr === p3) {
        pr = null;
        key !== void 0 && (resolved = true);
        if ((p3 === initP || v2 === initP) && options.onHydrated)
          queueMicrotask(
            () => options.onHydrated(key, {
              value: v2
            })
          );
        initP = NO_INIT;
        if (Transition && p3 && loadedUnderTransition) {
          Transition.promises.delete(p3);
          loadedUnderTransition = false;
          runUpdates(() => {
            Transition.running = true;
            completeLoad(v2, error2);
          }, false);
        } else completeLoad(v2, error2);
      }
      return v2;
    }
    function completeLoad(v2, err) {
      runUpdates(() => {
        if (err === void 0) setValue(() => v2);
        setState(err !== void 0 ? "errored" : resolved ? "ready" : "unresolved");
        setError(err);
        for (const c6 of contexts.keys()) c6.decrement();
        contexts.clear();
      }, false);
    }
    function read() {
      const c6 = SuspenseContext && useContext(SuspenseContext), v2 = value(), err = error();
      if (err !== void 0 && !pr) throw err;
      if (Listener && !Listener.user && c6) {
        createComputed(() => {
          track();
          if (pr) {
            if (c6.resolved && Transition && loadedUnderTransition) Transition.promises.add(pr);
            else if (!contexts.has(c6)) {
              c6.increment();
              contexts.add(c6);
            }
          }
        });
      }
      return v2;
    }
    function load(refetching = true) {
      if (refetching !== false && scheduled) return;
      scheduled = false;
      const lookup = dynamic ? dynamic() : source;
      loadedUnderTransition = Transition && Transition.running;
      if (lookup == null || lookup === false) {
        loadEnd(pr, untrack(value));
        return;
      }
      if (Transition && pr) Transition.promises.delete(pr);
      const p3 = initP !== NO_INIT ? initP : untrack(
        () => fetcher(lookup, {
          value: value(),
          refetching
        })
      );
      if (!isPromise(p3)) {
        loadEnd(pr, p3, void 0, lookup);
        return p3;
      }
      pr = p3;
      if ("value" in p3) {
        if (p3.status === "success") loadEnd(pr, p3.value, void 0, lookup);
        else loadEnd(pr, void 0, castError(p3.value), lookup);
        return p3;
      }
      scheduled = true;
      queueMicrotask(() => scheduled = false);
      runUpdates(() => {
        setState(resolved ? "refreshing" : "pending");
        trigger();
      }, false);
      return p3.then(
        (v2) => loadEnd(p3, v2, void 0, lookup),
        (e12) => loadEnd(p3, void 0, castError(e12), lookup)
      );
    }
    Object.defineProperties(read, {
      state: {
        get: () => state()
      },
      error: {
        get: () => error()
      },
      loading: {
        get() {
          const s4 = state();
          return s4 === "pending" || s4 === "refreshing";
        }
      },
      latest: {
        get() {
          if (!resolved) return read();
          const err = error();
          if (err && !pr) throw err;
          return value();
        }
      }
    });
    if (dynamic) createComputed(() => load(false));
    else load(false);
    return [
      read,
      {
        refetch: load,
        mutate: setValue
      }
    ];
  }
  function untrack(fn) {
    if (!ExternalSourceConfig && Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
      if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
      return fn();
    } finally {
      Listener = listener;
    }
  }
  function onCleanup(fn) {
    if (Owner === null) ;
    else if (Owner.cleanups === null) Owner.cleanups = [fn];
    else Owner.cleanups.push(fn);
    return fn;
  }
  function catchError(fn, handler) {
    ERROR || (ERROR = Symbol("error"));
    Owner = createComputation(void 0, void 0, true);
    Owner.context = {
      ...Owner.context,
      [ERROR]: [handler]
    };
    if (Transition && Transition.running) Transition.sources.add(Owner);
    try {
      return fn();
    } catch (err) {
      handleError(err);
    } finally {
      Owner = Owner.owner;
    }
  }
  function getOwner() {
    return Owner;
  }
  function startTransition(fn) {
    if (Transition && Transition.running) {
      fn();
      return Transition.done;
    }
    const l5 = Listener;
    const o10 = Owner;
    return Promise.resolve().then(() => {
      Listener = l5;
      Owner = o10;
      let t6;
      if (Scheduler || SuspenseContext) {
        t6 = Transition || (Transition = {
          sources: /* @__PURE__ */ new Set(),
          effects: [],
          promises: /* @__PURE__ */ new Set(),
          disposed: /* @__PURE__ */ new Set(),
          queue: /* @__PURE__ */ new Set(),
          running: true
        });
        t6.done || (t6.done = new Promise((res) => t6.resolve = res));
        t6.running = true;
      }
      runUpdates(fn, false);
      Listener = Owner = null;
      return t6 ? t6.done : void 0;
    });
  }
  var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
  function resumeEffects(e12) {
    Effects.push.apply(Effects, e12);
    e12.length = 0;
  }
  function createContext(defaultValue2, options) {
    const id4 = Symbol("context");
    return {
      id: id4,
      Provider: createProvider(id4),
      defaultValue: defaultValue2
    };
  }
  function useContext(context) {
    let value;
    return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
  }
  function children(fn) {
    const children2 = createMemo(fn);
    const memo = createMemo(() => resolveChildren(children2()));
    memo.toArray = () => {
      const c6 = memo();
      return Array.isArray(c6) ? c6 : c6 != null ? [c6] : [];
    };
    return memo;
  }
  var SuspenseContext;
  function getSuspenseContext() {
    return SuspenseContext || (SuspenseContext = createContext());
  }
  function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (runningTransition ? this.tState : this.state)) {
      if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this);
      else {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(this), false);
        Updates = updates;
      }
    }
    if (Listener) {
      const sSlot = this.observers ? this.observers.length : 0;
      if (!Listener.sources) {
        Listener.sources = [this];
        Listener.sourceSlots = [sSlot];
      } else {
        Listener.sources.push(this);
        Listener.sourceSlots.push(sSlot);
      }
      if (!this.observers) {
        this.observers = [Listener];
        this.observerSlots = [Listener.sources.length - 1];
      } else {
        this.observers.push(Listener);
        this.observerSlots.push(Listener.sources.length - 1);
      }
    }
    if (runningTransition && Transition.sources.has(this)) return this.tValue;
    return this.value;
  }
  function writeSignal(node, value, isComp) {
    let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
      if (Transition) {
        const TransitionRunning = Transition.running;
        if (TransitionRunning || !isComp && Transition.sources.has(node)) {
          Transition.sources.add(node);
          node.tValue = value;
        }
        if (!TransitionRunning) node.value = value;
      } else node.value = value;
      if (node.observers && node.observers.length) {
        runUpdates(() => {
          for (let i8 = 0; i8 < node.observers.length; i8 += 1) {
            const o10 = node.observers[i8];
            const TransitionRunning = Transition && Transition.running;
            if (TransitionRunning && Transition.disposed.has(o10)) continue;
            if (TransitionRunning ? !o10.tState : !o10.state) {
              if (o10.pure) Updates.push(o10);
              else Effects.push(o10);
              if (o10.observers) markDownstream(o10);
            }
            if (!TransitionRunning) o10.state = STALE;
            else o10.tState = STALE;
          }
          if (Updates.length > 1e6) {
            Updates = [];
            if (false) ;
            throw new Error();
          }
        }, false);
      }
    }
    return value;
  }
  function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(
      node,
      Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value,
      time
    );
    if (Transition && !Transition.running && Transition.sources.has(node)) {
      queueMicrotask(() => {
        runUpdates(() => {
          Transition && (Transition.running = true);
          Listener = Owner = node;
          runComputation(node, node.tValue, time);
          Listener = Owner = null;
        }, false);
      });
    }
  }
  function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner, listener = Listener;
    Listener = Owner = node;
    try {
      nextValue = node.fn(value);
    } catch (err) {
      if (node.pure) {
        if (Transition && Transition.running) {
          node.tState = STALE;
          node.tOwned && node.tOwned.forEach(cleanNode);
          node.tOwned = void 0;
        } else {
          node.state = STALE;
          node.owned && node.owned.forEach(cleanNode);
          node.owned = null;
        }
      }
      node.updatedAt = time + 1;
      return handleError(err);
    } finally {
      Listener = listener;
      Owner = owner;
    }
    if (!node.updatedAt || node.updatedAt <= time) {
      if (node.updatedAt != null && "observers" in node) {
        writeSignal(node, nextValue, true);
      } else if (Transition && Transition.running && node.pure) {
        Transition.sources.add(node);
        node.tValue = nextValue;
      } else node.value = nextValue;
      node.updatedAt = time;
    }
  }
  function createComputation(fn, init, pure, state = STALE, options) {
    const c6 = {
      fn,
      state,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: init,
      owner: Owner,
      context: Owner ? Owner.context : null,
      pure
    };
    if (Transition && Transition.running) {
      c6.state = 0;
      c6.tState = state;
    }
    if (Owner === null) ;
    else if (Owner !== UNOWNED) {
      if (Transition && Transition.running && Owner.pure) {
        if (!Owner.tOwned) Owner.tOwned = [c6];
        else Owner.tOwned.push(c6);
      } else {
        if (!Owner.owned) Owner.owned = [c6];
        else Owner.owned.push(c6);
      }
    }
    if (ExternalSourceConfig && c6.fn) {
      const [track, trigger] = createSignal(void 0, {
        equals: false
      });
      const ordinary = ExternalSourceConfig.factory(c6.fn, trigger);
      onCleanup(() => ordinary.dispose());
      const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
      const inTransition = ExternalSourceConfig.factory(c6.fn, triggerInTransition);
      c6.fn = (x2) => {
        track();
        return Transition && Transition.running ? inTransition.track(x2) : ordinary.track(x2);
      };
    }
    return c6;
  }
  function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if ((runningTransition ? node.tState : node.state) === 0) return;
    if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [node];
    while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
      if (runningTransition && Transition.disposed.has(node)) return;
      if (runningTransition ? node.tState : node.state) ancestors.push(node);
    }
    for (let i8 = ancestors.length - 1; i8 >= 0; i8--) {
      node = ancestors[i8];
      if (runningTransition) {
        let top = node, prev = ancestors[i8 + 1];
        while ((top = top.owner) && top !== prev) {
          if (Transition.disposed.has(top)) return;
        }
      }
      if ((runningTransition ? node.tState : node.state) === STALE) {
        updateComputation(node);
      } else if ((runningTransition ? node.tState : node.state) === PENDING) {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(node, ancestors[0]), false);
        Updates = updates;
      }
    }
  }
  function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;
    else Effects = [];
    ExecCount++;
    try {
      const res = fn();
      completeUpdates(wait);
      return res;
    } catch (err) {
      if (!wait) Effects = null;
      Updates = null;
      handleError(err);
    }
  }
  function completeUpdates(wait) {
    if (Updates) {
      if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
      else runQueue(Updates);
      Updates = null;
    }
    if (wait) return;
    let res;
    if (Transition) {
      if (!Transition.promises.size && !Transition.queue.size) {
        const sources = Transition.sources;
        const disposed = Transition.disposed;
        Effects.push.apply(Effects, Transition.effects);
        res = Transition.resolve;
        for (const e13 of Effects) {
          "tState" in e13 && (e13.state = e13.tState);
          delete e13.tState;
        }
        Transition = null;
        runUpdates(() => {
          for (const d3 of disposed) cleanNode(d3);
          for (const v2 of sources) {
            v2.value = v2.tValue;
            if (v2.owned) {
              for (let i8 = 0, len = v2.owned.length; i8 < len; i8++) cleanNode(v2.owned[i8]);
            }
            if (v2.tOwned) v2.owned = v2.tOwned;
            delete v2.tValue;
            delete v2.tOwned;
            v2.tState = 0;
          }
          setTransPending(false);
        }, false);
      } else if (Transition.running) {
        Transition.running = false;
        Transition.effects.push.apply(Transition.effects, Effects);
        Effects = null;
        setTransPending(true);
        return;
      }
    }
    const e12 = Effects;
    Effects = null;
    if (e12.length) runUpdates(() => runEffects(e12), false);
    if (res) res();
  }
  function runQueue(queue) {
    for (let i8 = 0; i8 < queue.length; i8++) runTop(queue[i8]);
  }
  function scheduleQueue(queue) {
    for (let i8 = 0; i8 < queue.length; i8++) {
      const item = queue[i8];
      const tasks = Transition.queue;
      if (!tasks.has(item)) {
        tasks.add(item);
        Scheduler(() => {
          tasks.delete(item);
          runUpdates(() => {
            Transition.running = true;
            runTop(item);
          }, false);
          Transition && (Transition.running = false);
        });
      }
    }
  }
  function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition) node.tState = 0;
    else node.state = 0;
    for (let i8 = 0; i8 < node.sources.length; i8 += 1) {
      const source = node.sources[i8];
      if (source.sources) {
        const state = runningTransition ? source.tState : source.state;
        if (state === STALE) {
          if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount))
            runTop(source);
        } else if (state === PENDING) lookUpstream(source, ignore);
      }
    }
  }
  function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for (let i8 = 0; i8 < node.observers.length; i8 += 1) {
      const o10 = node.observers[i8];
      if (runningTransition ? !o10.tState : !o10.state) {
        if (runningTransition) o10.tState = PENDING;
        else o10.state = PENDING;
        if (o10.pure) Updates.push(o10);
        else Effects.push(o10);
        o10.observers && markDownstream(o10);
      }
    }
  }
  function cleanNode(node) {
    let i8;
    if (node.sources) {
      while (node.sources.length) {
        const source = node.sources.pop(), index2 = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
          const n8 = obs.pop(), s4 = source.observerSlots.pop();
          if (index2 < obs.length) {
            n8.sourceSlots[s4] = index2;
            obs[index2] = n8;
            source.observerSlots[index2] = s4;
          }
        }
      }
    }
    if (node.tOwned) {
      for (i8 = node.tOwned.length - 1; i8 >= 0; i8--) cleanNode(node.tOwned[i8]);
      delete node.tOwned;
    }
    if (Transition && Transition.running && node.pure) {
      reset(node, true);
    } else if (node.owned) {
      for (i8 = node.owned.length - 1; i8 >= 0; i8--) cleanNode(node.owned[i8]);
      node.owned = null;
    }
    if (node.cleanups) {
      for (i8 = node.cleanups.length - 1; i8 >= 0; i8--) node.cleanups[i8]();
      node.cleanups = null;
    }
    if (Transition && Transition.running) node.tState = 0;
    else node.state = 0;
  }
  function reset(node, top) {
    if (!top) {
      node.tState = 0;
      Transition.disposed.add(node);
    }
    if (node.owned) {
      for (let i8 = 0; i8 < node.owned.length; i8++) reset(node.owned[i8]);
    }
  }
  function castError(err) {
    if (err instanceof Error) return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
      cause: err
    });
  }
  function runErrors(err, fns, owner) {
    try {
      for (const f6 of fns) f6(err);
    } catch (e12) {
      handleError(e12, owner && owner.owner || null);
    }
  }
  function handleError(err, owner = Owner) {
    const fns = ERROR && owner && owner.context && owner.context[ERROR];
    const error = castError(err);
    if (!fns) throw error;
    if (Effects)
      Effects.push({
        fn() {
          runErrors(error, fns, owner);
        },
        state: STALE
      });
    else runErrors(error, fns, owner);
  }
  function resolveChildren(children2) {
    if (typeof children2 === "function" && !children2.length) return resolveChildren(children2());
    if (Array.isArray(children2)) {
      const results = [];
      for (let i8 = 0; i8 < children2.length; i8++) {
        const result = resolveChildren(children2[i8]);
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
      }
      return results;
    }
    return children2;
  }
  function createProvider(id4, options) {
    return function provider(props) {
      let res;
      createRenderEffect(
        () => res = untrack(() => {
          Owner.context = {
            ...Owner.context,
            [id4]: props.value
          };
          return children(() => props.children);
        }),
        void 0
      );
      return res;
    };
  }
  var FALLBACK = Symbol("fallback");
  var hydrationEnabled = false;
  function createComponent(Comp, props) {
    if (hydrationEnabled) {
      if (sharedConfig.context) {
        const c6 = sharedConfig.context;
        setHydrateContext(nextHydrateContext());
        const r9 = untrack(() => Comp(props || {}));
        setHydrateContext(c6);
        return r9;
      }
    }
    return untrack(() => Comp(props || {}));
  }
  var narrowedError = (name2) => `Stale read from <${name2}>.`;
  function Show(props) {
    const keyed = props.keyed;
    const condition = createMemo(() => props.when, void 0, {
      equals: (a4, b3) => keyed ? a4 === b3 : !a4 === !b3
    });
    return createMemo(
      () => {
        const c6 = condition();
        if (c6) {
          const child = props.children;
          const fn = typeof child === "function" && child.length > 0;
          return fn ? untrack(
            () => child(
              keyed ? c6 : () => {
                if (!untrack(condition)) throw narrowedError("Show");
                return props.when;
              }
            )
          ) : child;
        }
        return props.fallback;
      },
      void 0,
      void 0
    );
  }
  var Errors;
  function ErrorBoundary(props) {
    let err;
    if (sharedConfig.context && sharedConfig.load)
      err = sharedConfig.load(sharedConfig.getContextId());
    const [errored, setErrored] = createSignal(err, void 0);
    Errors || (Errors = /* @__PURE__ */ new Set());
    Errors.add(setErrored);
    onCleanup(() => Errors.delete(setErrored));
    return createMemo(
      () => {
        let e12;
        if (e12 = errored()) {
          const f6 = props.fallback;
          return typeof f6 === "function" && f6.length ? untrack(() => f6(e12, () => setErrored())) : f6;
        }
        return catchError(() => props.children, setErrored);
      },
      void 0,
      void 0
    );
  }
  var SuspenseListContext = /* @__PURE__ */ createContext();
  function Suspense(props) {
    let counter = 0, show, ctx, p3, flicker, error;
    const [inFallback, setFallback] = createSignal(false), SuspenseContext2 = getSuspenseContext(), store = {
      increment: () => {
        if (++counter === 1) setFallback(true);
      },
      decrement: () => {
        if (--counter === 0) setFallback(false);
      },
      inFallback,
      effects: [],
      resolved: false
    }, owner = getOwner();
    if (sharedConfig.context && sharedConfig.load) {
      const key = sharedConfig.getContextId();
      let ref = sharedConfig.load(key);
      if (ref) {
        if (typeof ref !== "object" || ref.status !== "success") p3 = ref;
        else sharedConfig.gather(key);
      }
      if (p3 && p3 !== "$$f") {
        const [s4, set] = createSignal(void 0, {
          equals: false
        });
        flicker = s4;
        p3.then(
          () => {
            if (sharedConfig.done) return set();
            sharedConfig.gather(key);
            setHydrateContext(ctx);
            set();
            setHydrateContext();
          },
          (err) => {
            error = err;
            set();
          }
        );
      }
    }
    const listContext = useContext(SuspenseListContext);
    if (listContext) show = listContext.register(store.inFallback);
    let dispose;
    onCleanup(() => dispose && dispose());
    return createComponent(SuspenseContext2.Provider, {
      value: store,
      get children() {
        return createMemo(() => {
          if (error) throw error;
          ctx = sharedConfig.context;
          if (flicker) {
            flicker();
            return flicker = void 0;
          }
          if (ctx && p3 === "$$f") setHydrateContext();
          const rendered = createMemo(() => props.children);
          return createMemo((prev) => {
            const inFallback2 = store.inFallback(), { showContent = true, showFallback = true } = show ? show() : {};
            if ((!inFallback2 || p3 && p3 !== "$$f") && showContent) {
              store.resolved = true;
              dispose && dispose();
              dispose = ctx = p3 = void 0;
              resumeEffects(store.effects);
              return rendered();
            }
            if (!showFallback) return;
            if (dispose) return prev;
            return createRoot((disposer) => {
              dispose = disposer;
              if (ctx) {
                setHydrateContext({
                  id: ctx.id + "F",
                  count: 0
                });
                ctx = void 0;
              }
              return props.fallback;
            }, owner);
          });
        });
      }
    });
  }

  // node_modules/.pnpm/solid-js@1.9.3/node_modules/solid-js/web/dist/web.js
  var booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected"
  ];
  var Properties = /* @__PURE__ */ new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans
  ]);
  function reconcileArrays(parentNode, a4, b3) {
    let bLength = b3.length, aEnd = a4.length, bEnd = bLength, aStart = 0, bStart = 0, after = a4[aEnd - 1].nextSibling, map = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (a4[aStart] === b3[bStart]) {
        aStart++;
        bStart++;
        continue;
      }
      while (a4[aEnd - 1] === b3[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      if (aEnd === aStart) {
        const node = bEnd < bLength ? bStart ? b3[bStart - 1].nextSibling : b3[bEnd - bStart] : after;
        while (bStart < bEnd) parentNode.insertBefore(b3[bStart++], node);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map || !map.has(a4[aStart])) a4[aStart].remove();
          aStart++;
        }
      } else if (a4[aStart] === b3[bEnd - 1] && b3[bStart] === a4[aEnd - 1]) {
        const node = a4[--aEnd].nextSibling;
        parentNode.insertBefore(b3[bStart++], a4[aStart++].nextSibling);
        parentNode.insertBefore(b3[--bEnd], node);
        a4[aEnd] = b3[bEnd];
      } else {
        if (!map) {
          map = /* @__PURE__ */ new Map();
          let i8 = bStart;
          while (i8 < bEnd) map.set(b3[i8], i8++);
        }
        const index2 = map.get(a4[aStart]);
        if (index2 != null) {
          if (bStart < index2 && index2 < bEnd) {
            let i8 = aStart, sequence = 1, t6;
            while (++i8 < aEnd && i8 < bEnd) {
              if ((t6 = map.get(a4[i8])) == null || t6 !== index2 + sequence) break;
              sequence++;
            }
            if (sequence > index2 - bStart) {
              const node = a4[aStart];
              while (bStart < index2) parentNode.insertBefore(b3[bStart++], node);
            } else parentNode.replaceChild(b3[bStart++], a4[aStart++]);
          } else aStart++;
        } else a4[aStart++].remove();
      }
    }
  }
  var $$EVENTS = "_$DX_DELEGATE";
  function template(html, isImportNode, isSVG) {
    let node;
    const create = () => {
      const t6 = document.createElement("template");
      t6.innerHTML = html;
      return isSVG ? t6.content.firstChild.firstChild : t6.content.firstChild;
    };
    const fn = isImportNode ? () => untrack(() => document.importNode(node || (node = create()), true)) : () => (node || (node = create())).cloneNode(true);
    fn.cloneNode = fn;
    return fn;
  }
  function delegateEvents(eventNames, document3 = window.document) {
    const e12 = document3[$$EVENTS] || (document3[$$EVENTS] = /* @__PURE__ */ new Set());
    for (let i8 = 0, l5 = eventNames.length; i8 < l5; i8++) {
      const name2 = eventNames[i8];
      if (!e12.has(name2)) {
        e12.add(name2);
        document3.addEventListener(name2, eventHandler);
      }
    }
  }
  function setAttribute(node, name2, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttribute(name2);
    else node.setAttribute(name2, value);
  }
  function className(node, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttribute("class");
    else node.className = value;
  }
  function addEventListener(node, name2, handler, delegate) {
    if (delegate) {
      if (Array.isArray(handler)) {
        node[`$$${name2}`] = handler[0];
        node[`$$${name2}Data`] = handler[1];
      } else node[`$$${name2}`] = handler;
    } else if (Array.isArray(handler)) {
      const handlerFn = handler[0];
      node.addEventListener(name2, handler[0] = (e12) => handlerFn.call(node, handler[1], e12));
    } else node.addEventListener(name2, handler, typeof handler !== "function" && handler);
  }
  function insert(parent, accessor, marker, initial) {
    if (marker !== void 0 && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
  }
  function isHydrating(node) {
    return !!sharedConfig.context && !sharedConfig.done && (!node || node.isConnected);
  }
  function eventHandler(e12) {
    if (sharedConfig.registry && sharedConfig.events) {
      if (sharedConfig.events.find(([el, ev]) => ev === e12)) return;
    }
    let node = e12.target;
    const key = `$$${e12.type}`;
    const oriTarget = e12.target;
    const oriCurrentTarget = e12.currentTarget;
    const retarget = (value) => Object.defineProperty(e12, "target", {
      configurable: true,
      value
    });
    const handleNode = () => {
      const handler = node[key];
      if (handler && !node.disabled) {
        const data = node[`${key}Data`];
        data !== void 0 ? handler.call(node, data, e12) : handler.call(node, e12);
        if (e12.cancelBubble) return;
      }
      node.host && typeof node.host !== "string" && !node.host._$host && node.contains(e12.target) && retarget(node.host);
      return true;
    };
    const walkUpTree = () => {
      while (handleNode() && (node = node._$host || node.parentNode || node.host)) ;
    };
    Object.defineProperty(e12, "currentTarget", {
      configurable: true,
      get() {
        return node || document;
      }
    });
    if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = _$HY.done = true;
    if (e12.composedPath) {
      const path = e12.composedPath();
      retarget(path[0]);
      for (let i8 = 0; i8 < path.length - 2; i8++) {
        node = path[i8];
        if (!handleNode()) break;
        if (node._$host) {
          node = node._$host;
          walkUpTree();
          break;
        }
        if (node.parentNode === oriCurrentTarget) {
          break;
        }
      }
    } else walkUpTree();
    retarget(oriTarget);
  }
  function insertExpression(parent, value, current, marker, unwrapArray) {
    const hydrating = isHydrating(parent);
    if (hydrating) {
      !current && (current = [...parent.childNodes]);
      let cleaned = [];
      for (let i8 = 0; i8 < current.length; i8++) {
        const node = current[i8];
        if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();
        else cleaned.push(node);
      }
      current = cleaned;
    }
    while (typeof current === "function") current = current();
    if (value === current) return current;
    const t6 = typeof value, multi = marker !== void 0;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t6 === "string" || t6 === "number") {
      if (hydrating) return current;
      if (t6 === "number") {
        value = value.toString();
        if (value === current) return current;
      }
      if (multi) {
        let node = current[0];
        if (node && node.nodeType === 3) {
          node.data !== value && (node.data = value);
        } else node = document.createTextNode(value);
        current = cleanChildren(parent, current, marker, node);
      } else {
        if (current !== "" && typeof current === "string") {
          current = parent.firstChild.data = value;
        } else current = parent.textContent = value;
      }
    } else if (value == null || t6 === "boolean") {
      if (hydrating) return current;
      current = cleanChildren(parent, current, marker);
    } else if (t6 === "function") {
      createRenderEffect(() => {
        let v2 = value();
        while (typeof v2 === "function") v2 = v2();
        current = insertExpression(parent, v2, current, marker);
      });
      return () => current;
    } else if (Array.isArray(value)) {
      const array = [];
      const currentArray = current && Array.isArray(current);
      if (normalizeIncomingArray(array, value, current, unwrapArray)) {
        createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
        return () => current;
      }
      if (hydrating) {
        if (!array.length) return current;
        if (marker === void 0) return current = [...parent.childNodes];
        let node = array[0];
        if (node.parentNode !== parent) return current;
        const nodes = [node];
        while ((node = node.nextSibling) !== marker) nodes.push(node);
        return current = nodes;
      }
      if (array.length === 0) {
        current = cleanChildren(parent, current, marker);
        if (multi) return current;
      } else if (currentArray) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else {
        current && cleanChildren(parent);
        appendNodes(parent, array);
      }
      current = array;
    } else if (value.nodeType) {
      if (hydrating && value.parentNode) return current = multi ? [value] : value;
      if (Array.isArray(current)) {
        if (multi) return current = cleanChildren(parent, current, marker, value);
        cleanChildren(parent, current, null, value);
      } else if (current == null || current === "" || !parent.firstChild) {
        parent.appendChild(value);
      } else parent.replaceChild(value, parent.firstChild);
      current = value;
    } else ;
    return current;
  }
  function normalizeIncomingArray(normalized, array, current, unwrap) {
    let dynamic = false;
    for (let i8 = 0, len = array.length; i8 < len; i8++) {
      let item = array[i8], prev = current && current[normalized.length], t6;
      if (item == null || item === true || item === false) ;
      else if ((t6 = typeof item) === "object" && item.nodeType) {
        normalized.push(item);
      } else if (Array.isArray(item)) {
        dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
      } else if (t6 === "function") {
        if (unwrap) {
          while (typeof item === "function") item = item();
          dynamic = normalizeIncomingArray(
            normalized,
            Array.isArray(item) ? item : [item],
            Array.isArray(prev) ? prev : [prev]
          ) || dynamic;
        } else {
          normalized.push(item);
          dynamic = true;
        }
      } else {
        const value = String(item);
        if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);
        else normalized.push(document.createTextNode(value));
      }
    }
    return dynamic;
  }
  function appendNodes(parent, array, marker = null) {
    for (let i8 = 0, len = array.length; i8 < len; i8++) parent.insertBefore(array[i8], marker);
  }
  function cleanChildren(parent, current, marker, replacement) {
    if (marker === void 0) return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
      let inserted = false;
      for (let i8 = current.length - 1; i8 >= 0; i8--) {
        const el = current[i8];
        if (node !== el) {
          const isParent = el.parentNode === parent;
          if (!inserted && !i8)
            isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
          else isParent && el.remove();
        } else inserted = true;
      }
    } else parent.insertBefore(node, marker);
    return [node];
  }
  var RequestContext = Symbol();

  // node_modules/.pnpm/solid-element@1.9.1_solid-js@1.9.3/node_modules/solid-element/dist/index.js
  function createProps(raw) {
    const keys = Object.keys(raw);
    const props = {};
    for (let i8 = 0; i8 < keys.length; i8++) {
      const [get, set] = createSignal(raw[keys[i8]]);
      Object.defineProperty(props, keys[i8], {
        get,
        set(v2) {
          set(() => v2);
        }
      });
    }
    return props;
  }
  function lookupContext(el) {
    if (el.assignedSlot && el.assignedSlot._$owner) return el.assignedSlot._$owner;
    let next = el.parentNode;
    while (next && !next._$owner && !(next.assignedSlot && next.assignedSlot._$owner))
      next = next.parentNode;
    return next && next.assignedSlot ? next.assignedSlot._$owner : el._$owner;
  }
  function withSolid(ComponentType) {
    return (rawProps, options) => {
      const { element } = options;
      return createRoot((dispose) => {
        const props = createProps(rawProps);
        element.addPropertyChangedCallback((key, val) => props[key] = val);
        element.addReleaseCallback(() => {
          element.renderRoot.textContent = "";
          dispose();
        });
        const comp = ComponentType(props, options);
        return insert(element.renderRoot, comp);
      }, lookupContext(element));
    };
  }
  function customElement(tag, props, ComponentType) {
    if (arguments.length === 2) {
      ComponentType = props;
      props = {};
    }
    return register(tag, props)(withSolid(ComponentType));
  }

  // node_modules/.pnpm/postcss@8.4.49/node_modules/postcss/lib/postcss.mjs
  var import_postcss = __toESM(require_postcss(), 1);
  var postcss_default = import_postcss.default;
  var stringify = import_postcss.default.stringify;
  var fromJSON = import_postcss.default.fromJSON;
  var plugin = import_postcss.default.plugin;
  var parse = import_postcss.default.parse;
  var list = import_postcss.default.list;
  var document2 = import_postcss.default.document;
  var comment = import_postcss.default.comment;
  var atRule = import_postcss.default.atRule;
  var rule = import_postcss.default.rule;
  var decl = import_postcss.default.decl;
  var root = import_postcss.default.root;
  var CssSyntaxError = import_postcss.default.CssSyntaxError;
  var Declaration = import_postcss.default.Declaration;
  var Container = import_postcss.default.Container;
  var Processor = import_postcss.default.Processor;
  var Document2 = import_postcss.default.Document;
  var Comment = import_postcss.default.Comment;
  var Warning = import_postcss.default.Warning;
  var AtRule = import_postcss.default.AtRule;
  var Result = import_postcss.default.Result;
  var Input = import_postcss.default.Input;
  var Rule = import_postcss.default.Rule;
  var Root = import_postcss.default.Root;
  var Node2 = import_postcss.default.Node;

  // node_modules/.pnpm/postcss-js@4.0.1_postcss@8.4.49/node_modules/postcss-js/index.mjs
  var import_index = __toESM(require_postcss_js(), 1);
  var postcss_js_default = import_index.default;
  var objectify = import_index.default.objectify;
  var parse2 = import_index.default.parse;
  var async = import_index.default.async;
  var sync = import_index.default.sync;

  // src/lib/styler.ts
  var import_postcss_nested = __toESM(require_postcss_nested());
  var join = (...classnames) => {
    return classnames.join(" ");
  };
  var StyleReg = class {
    globalStyles;
    moduleStyles;
    styleCounter = 0;
    context;
    constructor(initialContext = {}) {
      this.moduleStyles = /* @__PURE__ */ new Map();
      this.globalStyles = /* @__PURE__ */ new Map();
      this.context = {
        prefix: "css",
        theme: {},
        ...initialContext
      };
    }
    // Generate a class name using the counter
    generateClassName(key) {
      return `${this.context.prefix}-${key}-${this.styleCounter++}`;
    }
    /**
     * Set the global context, including the theme
     * @param newContext - The new context to set
     */
    setContext(newContext) {
      this.context = {
        ...this.context,
        ...newContext
      };
      return this;
    }
    /**
     * Add global styling.
     * @param styles - Object with keys as css-selectors and values as styles or function returning styles
     */
    globals(styles) {
      if (this.globalStyles.size) {
        throw new Error("gobalStyles can only be set once");
      }
      for (const [selector, styleDec] of Object.entries(styles)) {
        this.globalStyles.set(selector, styleDec);
      }
      return this;
    }
    /**
     * Add modularized styling. Returns an object of key:classnames to apply classname by key in markup.
     * @param styles Object with values as styles or function returning styles
     * @returns Object with modularized classnames as values
     */
    css(styles) {
      const classNames = {};
      for (const [key, styleDec] of Object.entries(styles)) {
        const className2 = this.generateClassName(key);
        this.moduleStyles.set(className2, styleDec);
        classNames[key] = className2;
      }
      return classNames;
    }
    /**
    * Mimics Stitches' `globalStyles` function
    * @returns All generated CSS as a single string
    */
    resolveGlobals() {
      const styles = [];
      this.globalStyles.forEach((declaration, selector) => {
        const resolvedDeclaration = typeof declaration === "function" ? declaration(this.context) : declaration;
        const wrappedStyles = { [selector]: resolvedDeclaration };
        const result = postcss_default([import_postcss_nested.default]).process(wrappedStyles, { parser: postcss_js_default });
        styles.push(result.css);
      });
      return styles.join("\n");
    }
    /**
     * Mimics Stitches' `getCssText` function
     * @returns All generated CSS as a single string
     */
    resolveStyles() {
      const styles = [];
      this.moduleStyles.forEach((declaration, className2) => {
        const resolvedDeclaration = typeof declaration === "function" ? declaration(this.context) : declaration;
        const wrappedStyles = { [`.${className2}`]: resolvedDeclaration };
        const result = postcss_default([import_postcss_nested.default]).process(wrappedStyles, { parser: postcss_js_default });
        styles.push(result.css);
      });
      return styles.join("\n");
    }
  };
  var styler = new StyleReg();
  var loadFontFace = (name2, source, descriptors = {}) => {
    const font = new FontFace(name2, source, descriptors);
    document.fonts.add(font);
  };

  // node_modules/.pnpm/uuidv7@1.0.2/node_modules/uuidv7/dist/index.js
  var DIGITS = "0123456789abcdef";
  var UUID = class _UUID {
    /** @param bytes - The 16-byte byte array representation. */
    constructor(bytes) {
      this.bytes = bytes;
    }
    /**
     * Creates an object from the internal representation, a 16-byte byte array
     * containing the binary UUID representation in the big-endian byte order.
     *
     * This method does NOT shallow-copy the argument, and thus the created object
     * holds the reference to the underlying buffer.
     *
     * @throws TypeError if the length of the argument is not 16.
     */
    static ofInner(bytes) {
      if (bytes.length !== 16) {
        throw new TypeError("not 128-bit length");
      } else {
        return new _UUID(bytes);
      }
    }
    /**
     * Builds a byte array from UUIDv7 field values.
     *
     * @param unixTsMs - A 48-bit `unix_ts_ms` field value.
     * @param randA - A 12-bit `rand_a` field value.
     * @param randBHi - The higher 30 bits of 62-bit `rand_b` field value.
     * @param randBLo - The lower 32 bits of 62-bit `rand_b` field value.
     * @throws RangeError if any field value is out of the specified range.
     */
    static fromFieldsV7(unixTsMs, randA, randBHi, randBLo) {
      if (!Number.isInteger(unixTsMs) || !Number.isInteger(randA) || !Number.isInteger(randBHi) || !Number.isInteger(randBLo) || unixTsMs < 0 || randA < 0 || randBHi < 0 || randBLo < 0 || unixTsMs > 281474976710655 || randA > 4095 || randBHi > 1073741823 || randBLo > 4294967295) {
        throw new RangeError("invalid field value");
      }
      const bytes = new Uint8Array(16);
      bytes[0] = unixTsMs / 2 ** 40;
      bytes[1] = unixTsMs / 2 ** 32;
      bytes[2] = unixTsMs / 2 ** 24;
      bytes[3] = unixTsMs / 2 ** 16;
      bytes[4] = unixTsMs / 2 ** 8;
      bytes[5] = unixTsMs;
      bytes[6] = 112 | randA >>> 8;
      bytes[7] = randA;
      bytes[8] = 128 | randBHi >>> 24;
      bytes[9] = randBHi >>> 16;
      bytes[10] = randBHi >>> 8;
      bytes[11] = randBHi;
      bytes[12] = randBLo >>> 24;
      bytes[13] = randBLo >>> 16;
      bytes[14] = randBLo >>> 8;
      bytes[15] = randBLo;
      return new _UUID(bytes);
    }
    /**
     * Builds a byte array from a string representation.
     *
     * This method accepts the following formats:
     *
     * - 32-digit hexadecimal format without hyphens: `0189dcd553117d408db09496a2eef37b`
     * - 8-4-4-4-12 hyphenated format: `0189dcd5-5311-7d40-8db0-9496a2eef37b`
     * - Hyphenated format with surrounding braces: `{0189dcd5-5311-7d40-8db0-9496a2eef37b}`
     * - RFC 9562 URN format: `urn:uuid:0189dcd5-5311-7d40-8db0-9496a2eef37b`
     *
     * Leading and trailing whitespaces represents an error.
     *
     * @throws SyntaxError if the argument could not parse as a valid UUID string.
     */
    static parse(uuid) {
      var _a, _b, _c, _d;
      let hex = void 0;
      switch (uuid.length) {
        case 32:
          hex = (_a = /^[0-9a-f]{32}$/i.exec(uuid)) === null || _a === void 0 ? void 0 : _a[0];
          break;
        case 36:
          hex = (_b = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)) === null || _b === void 0 ? void 0 : _b.slice(1, 6).join("");
          break;
        case 38:
          hex = (_c = /^\{([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})\}$/i.exec(uuid)) === null || _c === void 0 ? void 0 : _c.slice(1, 6).join("");
          break;
        case 45:
          hex = (_d = /^urn:uuid:([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/i.exec(uuid)) === null || _d === void 0 ? void 0 : _d.slice(1, 6).join("");
          break;
        default:
          break;
      }
      if (hex) {
        const inner = new Uint8Array(16);
        for (let i8 = 0; i8 < 16; i8 += 4) {
          const n8 = parseInt(hex.substring(2 * i8, 2 * i8 + 8), 16);
          inner[i8 + 0] = n8 >>> 24;
          inner[i8 + 1] = n8 >>> 16;
          inner[i8 + 2] = n8 >>> 8;
          inner[i8 + 3] = n8;
        }
        return new _UUID(inner);
      } else {
        throw new SyntaxError("could not parse UUID string");
      }
    }
    /**
     * @returns The 8-4-4-4-12 canonical hexadecimal string representation
     * (`0189dcd5-5311-7d40-8db0-9496a2eef37b`).
     */
    toString() {
      let text = "";
      for (let i8 = 0; i8 < this.bytes.length; i8++) {
        text += DIGITS.charAt(this.bytes[i8] >>> 4);
        text += DIGITS.charAt(this.bytes[i8] & 15);
        if (i8 === 3 || i8 === 5 || i8 === 7 || i8 === 9) {
          text += "-";
        }
      }
      return text;
    }
    /**
     * @returns The 32-digit hexadecimal representation without hyphens
     * (`0189dcd553117d408db09496a2eef37b`).
     */
    toHex() {
      let text = "";
      for (let i8 = 0; i8 < this.bytes.length; i8++) {
        text += DIGITS.charAt(this.bytes[i8] >>> 4);
        text += DIGITS.charAt(this.bytes[i8] & 15);
      }
      return text;
    }
    /** @returns The 8-4-4-4-12 canonical hexadecimal string representation. */
    toJSON() {
      return this.toString();
    }
    /**
     * Reports the variant field value of the UUID or, if appropriate, "NIL" or
     * "MAX".
     *
     * For convenience, this method reports "NIL" or "MAX" if `this` represents
     * the Nil or Max UUID, although the Nil and Max UUIDs are technically
     * subsumed under the variants `0b0` and `0b111`, respectively.
     */
    getVariant() {
      const n8 = this.bytes[8] >>> 4;
      if (n8 < 0) {
        throw new Error("unreachable");
      } else if (n8 <= 7) {
        return this.bytes.every((e12) => e12 === 0) ? "NIL" : "VAR_0";
      } else if (n8 <= 11) {
        return "VAR_10";
      } else if (n8 <= 13) {
        return "VAR_110";
      } else if (n8 <= 15) {
        return this.bytes.every((e12) => e12 === 255) ? "MAX" : "VAR_RESERVED";
      } else {
        throw new Error("unreachable");
      }
    }
    /**
     * Returns the version field value of the UUID or `undefined` if the UUID does
     * not have the variant field value of `0b10`.
     */
    getVersion() {
      return this.getVariant() === "VAR_10" ? this.bytes[6] >>> 4 : void 0;
    }
    /** Creates an object from `this`. */
    clone() {
      return new _UUID(this.bytes.slice(0));
    }
    /** Returns true if `this` is equivalent to `other`. */
    equals(other) {
      return this.compareTo(other) === 0;
    }
    /**
     * Returns a negative integer, zero, or positive integer if `this` is less
     * than, equal to, or greater than `other`, respectively.
     */
    compareTo(other) {
      for (let i8 = 0; i8 < 16; i8++) {
        const diff = this.bytes[i8] - other.bytes[i8];
        if (diff !== 0) {
          return Math.sign(diff);
        }
      }
      return 0;
    }
  };
  var V7Generator = class {
    /**
     * Creates a generator object with the default random number generator, or
     * with the specified one if passed as an argument. The specified random
     * number generator should be cryptographically strong and securely seeded.
     */
    constructor(randomNumberGenerator) {
      this.timestamp = 0;
      this.counter = 0;
      this.random = randomNumberGenerator !== null && randomNumberGenerator !== void 0 ? randomNumberGenerator : getDefaultRandom();
    }
    /**
     * Generates a new UUIDv7 object from the current timestamp, or resets the
     * generator upon significant timestamp rollback.
     *
     * This method returns a monotonically increasing UUID by reusing the previous
     * timestamp even if the up-to-date timestamp is smaller than the immediately
     * preceding UUID's. However, when such a clock rollback is considered
     * significant (i.e., by more than ten seconds), this method resets the
     * generator and returns a new UUID based on the given timestamp, breaking the
     * increasing order of UUIDs.
     *
     * See {@link generateOrAbort} for the other mode of generation and
     * {@link generateOrResetCore} for the low-level primitive.
     */
    generate() {
      return this.generateOrResetCore(Date.now(), 1e4);
    }
    /**
     * Generates a new UUIDv7 object from the current timestamp, or returns
     * `undefined` upon significant timestamp rollback.
     *
     * This method returns a monotonically increasing UUID by reusing the previous
     * timestamp even if the up-to-date timestamp is smaller than the immediately
     * preceding UUID's. However, when such a clock rollback is considered
     * significant (i.e., by more than ten seconds), this method aborts and
     * returns `undefined` immediately.
     *
     * See {@link generate} for the other mode of generation and
     * {@link generateOrAbortCore} for the low-level primitive.
     */
    generateOrAbort() {
      return this.generateOrAbortCore(Date.now(), 1e4);
    }
    /**
     * Generates a new UUIDv7 object from the `unixTsMs` passed, or resets the
     * generator upon significant timestamp rollback.
     *
     * This method is equivalent to {@link generate} except that it takes a custom
     * timestamp and clock rollback allowance.
     *
     * @param rollbackAllowance - The amount of `unixTsMs` rollback that is
     * considered significant. A suggested value is `10_000` (milliseconds).
     * @throws RangeError if `unixTsMs` is not a 48-bit positive integer.
     */
    generateOrResetCore(unixTsMs, rollbackAllowance) {
      let value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
      if (value === void 0) {
        this.timestamp = 0;
        value = this.generateOrAbortCore(unixTsMs, rollbackAllowance);
      }
      return value;
    }
    /**
     * Generates a new UUIDv7 object from the `unixTsMs` passed, or returns
     * `undefined` upon significant timestamp rollback.
     *
     * This method is equivalent to {@link generateOrAbort} except that it takes a
     * custom timestamp and clock rollback allowance.
     *
     * @param rollbackAllowance - The amount of `unixTsMs` rollback that is
     * considered significant. A suggested value is `10_000` (milliseconds).
     * @throws RangeError if `unixTsMs` is not a 48-bit positive integer.
     */
    generateOrAbortCore(unixTsMs, rollbackAllowance) {
      const MAX_COUNTER = 4398046511103;
      if (!Number.isInteger(unixTsMs) || unixTsMs < 1 || unixTsMs > 281474976710655) {
        throw new RangeError("`unixTsMs` must be a 48-bit positive integer");
      } else if (rollbackAllowance < 0 || rollbackAllowance > 281474976710655) {
        throw new RangeError("`rollbackAllowance` out of reasonable range");
      }
      if (unixTsMs > this.timestamp) {
        this.timestamp = unixTsMs;
        this.resetCounter();
      } else if (unixTsMs + rollbackAllowance >= this.timestamp) {
        this.counter++;
        if (this.counter > MAX_COUNTER) {
          this.timestamp++;
          this.resetCounter();
        }
      } else {
        return void 0;
      }
      return UUID.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 2 ** 30), this.counter & 2 ** 30 - 1, this.random.nextUint32());
    }
    /** Initializes the counter at a 42-bit random integer. */
    resetCounter() {
      this.counter = this.random.nextUint32() * 1024 + (this.random.nextUint32() & 1023);
    }
    /**
     * Generates a new UUIDv4 object utilizing the random number generator inside.
     *
     * @internal
     */
    generateV4() {
      const bytes = new Uint8Array(Uint32Array.of(this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32(), this.random.nextUint32()).buffer);
      bytes[6] = 64 | bytes[6] >>> 4;
      bytes[8] = 128 | bytes[8] >>> 2;
      return UUID.ofInner(bytes);
    }
  };
  var getDefaultRandom = () => {
    if (typeof crypto !== "undefined" && typeof crypto.getRandomValues !== "undefined") {
      return new BufferedCryptoRandom();
    } else {
      if (typeof UUIDV7_DENY_WEAK_RNG !== "undefined" && UUIDV7_DENY_WEAK_RNG) {
        throw new Error("no cryptographically strong RNG available");
      }
      return {
        nextUint32: () => Math.trunc(Math.random() * 65536) * 65536 + Math.trunc(Math.random() * 65536)
      };
    }
  };
  var BufferedCryptoRandom = class {
    constructor() {
      this.buffer = new Uint32Array(8);
      this.cursor = 65535;
    }
    nextUint32() {
      if (this.cursor >= this.buffer.length) {
        crypto.getRandomValues(this.buffer);
        this.cursor = 0;
      }
      return this.buffer[this.cursor++];
    }
  };
  var defaultGenerator;
  var uuidv7obj = () => (defaultGenerator || (defaultGenerator = new V7Generator())).generate();
  var uuidv4obj = () => (defaultGenerator || (defaultGenerator = new V7Generator())).generateV4();

  // node_modules/.pnpm/isows@1.0.6_ws@8.18.0/node_modules/isows/_esm/utils.js
  function getNativeWebSocket() {
    if (typeof WebSocket !== "undefined")
      return WebSocket;
    if (typeof global.WebSocket !== "undefined")
      return global.WebSocket;
    if (typeof window.WebSocket !== "undefined")
      return window.WebSocket;
    if (typeof self.WebSocket !== "undefined")
      return self.WebSocket;
    throw new Error("`WebSocket` is not supported in this environment");
  }

  // node_modules/.pnpm/isows@1.0.6_ws@8.18.0/node_modules/isows/_esm/native.js
  var WebSocket2 = getNativeWebSocket();

  // node_modules/.pnpm/surrealdb@1.1.0_tslib@2.8.1_typescript@5.7.2_ws@8.18.0/node_modules/surrealdb/dist/index.mjs
  var __defProp2 = Object.defineProperty;
  var __export = (target, all) => {
    for (var name2 in all) __defProp2(target, name2, { get: all[name2], enumerable: true });
  };
  var Emitter = class {
    collectable = {};
    listeners = {};
    interceptors;
    constructor({ interceptors } = {}) {
      this.interceptors = interceptors ?? {};
    }
    subscribe(event, listener, historic = false) {
      if (this.listeners[event] || (this.listeners[event] = []), !this.isSubscribed(event, listener) && (this.listeners[event]?.push(listener), historic && this.collectable[event])) {
        let buffer = this.collectable[event];
        this.collectable[event] = [];
        for (let args of buffer) listener(...args);
      }
    }
    subscribeOnce(event, historic = false) {
      return new Promise((resolve) => {
        let resolved = false, listener = (...args) => {
          resolved || (resolved = true, this.unSubscribe(event, listener), resolve(args));
        };
        this.subscribe(event, listener, historic);
      });
    }
    unSubscribe(event, listener) {
      if (this.listeners[event]) {
        let index2 = this.listeners[event]?.findIndex((v2) => v2 === listener);
        index2 && this.listeners[event]?.splice(index2, 1);
      }
    }
    isSubscribed(event, listener) {
      return !!this.listeners[event]?.includes(listener);
    }
    async emit(event, args, collectable = false) {
      let interceptor = this.interceptors[event], computedArgs = interceptor ? await interceptor(...args) : args;
      this.listeners[event]?.length === 0 && collectable && (this.collectable[event] || (this.collectable[event] = []), this.collectable[event]?.push(args));
      for (let listener of this.listeners[event] ?? []) listener(...computedArgs);
    }
    reset({ collectable, listeners }) {
      if (Array.isArray(collectable)) for (let k2 of collectable) delete this.collectable[k2];
      else typeof collectable == "string" ? delete this.collectable[collectable] : collectable !== false && (this.collectable = {});
      if (Array.isArray(listeners)) for (let k2 of listeners) delete this.listeners[k2];
      else typeof listeners == "string" ? delete this.listeners[listeners] : listeners !== false && (this.listeners = {});
    }
    scanListeners(filter) {
      let listeners = Object.keys(this.listeners);
      return filter && (listeners = listeners.filter(filter)), listeners;
    }
  };
  var Gap = class {
    args = [];
    constructor(...args) {
      this.args = args;
    }
    fill(value) {
      return [this, value];
    }
    hasDefault() {
      return this.args.length === 1;
    }
    get default() {
      return this.args[0];
    }
  };
  var cbor_exports = {};
  __export(cbor_exports, { CborBreak: () => CborBreak, CborError: () => CborError, CborFillMissing: () => CborFillMissing, CborInvalidMajorError: () => CborInvalidMajorError, CborNumberError: () => CborNumberError, CborPartialDisabled: () => CborPartialDisabled, CborRangeError: () => CborRangeError, Encoded: () => Encoded, Gap: () => Gap, POW_2_53: () => POW_2_53, POW_2_64: () => POW_2_64, PartiallyEncoded: () => PartiallyEncoded, Reader: () => Reader, Tagged: () => Tagged, Writer: () => Writer, decode: () => decode, encode: () => encode, infiniteBytes: () => infiniteBytes, partiallyEncodeObject: () => partiallyEncodeObject });
  var POW_2_53 = 9007199254740992;
  var POW_2_64 = BigInt(18446744073709552e3);
  var Encoded = class {
    constructor(encoded) {
      this.encoded = encoded;
    }
  };
  var SurrealDbError = class extends Error {
  };
  var NoActiveSocket = class extends SurrealDbError {
    name = "NoActiveSocket";
    message = "No socket is currently connected to a SurrealDB instance. Please call the .connect() method first!";
  };
  var EngineDisconnected = class extends SurrealDbError {
    name = "EngineDisconnected";
    message = "The engine reported the connection to SurrealDB has dropped";
  };
  var UnexpectedServerResponse = class extends SurrealDbError {
    constructor(response) {
      super();
      this.response = response;
      this.message = `${response}`;
    }
    name = "UnexpectedServerResponse";
  };
  var UnexpectedConnectionError = class extends SurrealDbError {
    constructor(error) {
      super();
      this.error = error;
      this.message = `${error}`;
    }
    name = "UnexpectedConnectionError";
  };
  var UnsupportedEngine = class extends SurrealDbError {
    constructor(engine) {
      super();
      this.engine = engine;
    }
    name = "UnsupportedEngine";
    message = "The engine you are trying to connect to is not supported or configured.";
  };
  var ConnectionUnavailable = class extends SurrealDbError {
    name = "ConnectionUnavailable";
    message = "There is no connection available at this moment.";
  };
  var MissingNamespaceDatabase = class extends SurrealDbError {
    name = "MissingNamespaceDatabase";
    message = "There is no namespace and/or database selected.";
  };
  var HttpConnectionError = class extends SurrealDbError {
    constructor(message, status, statusText, buffer) {
      super();
      this.message = message;
      this.status = status;
      this.statusText = statusText;
      this.buffer = buffer;
    }
    name = "HttpConnectionError";
  };
  var ResponseError = class extends SurrealDbError {
    constructor(message) {
      super();
      this.message = message;
    }
    name = "ResponseError";
  };
  var NoNamespaceSpecified = class extends SurrealDbError {
    name = "NoNamespaceSpecified";
    message = "Please specify a namespace to use.";
  };
  var NoDatabaseSpecified = class extends SurrealDbError {
    name = "NoDatabaseSpecified";
    message = "Please specify a database to use.";
  };
  var NoTokenReturned = class extends SurrealDbError {
    name = "NoTokenReturned";
    message = "Did not receive an authentication token.";
  };
  var UnsupportedVersion = class extends SurrealDbError {
    name = "UnsupportedVersion";
    version;
    supportedRange;
    constructor(version, supportedRange) {
      super(), this.version = version, this.supportedRange = supportedRange, this.message = `The version "${version}" reported by the engine is not supported by this library, expected a version that satisfies "${supportedRange}".`;
    }
  };
  var VersionRetrievalFailure = class extends SurrealDbError {
    constructor(error) {
      super();
      this.error = error;
    }
    name = "VersionRetrievalFailure";
    message = "Failed to retrieve remote version. If the server is behind a proxy, make sure it's configured correctly.";
  };
  var CborError = class extends SurrealDbError {
    message;
    constructor(message) {
      super(), this.message = message;
    }
  };
  var CborNumberError = class extends CborError {
    name = "CborNumberError";
  };
  var CborRangeError = class extends CborError {
    name = "CborRangeError";
  };
  var CborInvalidMajorError = class extends CborError {
    name = "CborInvalidMajorError";
  };
  var CborBreak = class extends CborError {
    name = "CborBreak";
    constructor() {
      super("Came across a break which was not intercepted by the decoder");
    }
  };
  var CborPartialDisabled = class extends CborError {
    name = "CborPartialDisabled";
    constructor() {
      super("Tried to insert a Gap into a CBOR value, while partial mode is not enabled");
    }
  };
  var CborFillMissing = class extends CborError {
    name = "CborFillMissing";
    constructor() {
      super("Fill for a gap is missing, and gap has no default");
    }
  };
  var Writer = class {
    constructor(byteLength = 256) {
      this.byteLength = byteLength;
      this._buf = new ArrayBuffer(this.byteLength), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf);
    }
    _chunks = [];
    _pos = 0;
    _buf;
    _view;
    _byte;
    chunk(gap) {
      this._chunks.push([this._buf.slice(0, this._pos), gap]), this._buf = new ArrayBuffer(this.byteLength), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf), this._pos = 0;
    }
    get chunks() {
      return this._chunks;
    }
    get buffer() {
      return this._buf.slice(0, this._pos);
    }
    claim(length) {
      let pos = this._pos;
      if (this._pos += length, this._pos <= this._buf.byteLength) return pos;
      let newLen = this._buf.byteLength << 1;
      for (; newLen < this._pos; ) newLen <<= 1;
      if (newLen > this._buf.byteLength) {
        let oldb = this._byte;
        this._buf = new ArrayBuffer(newLen), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf), this._byte.set(oldb);
      }
      return pos;
    }
    writeUint8(value) {
      let pos = this.claim(1);
      this._view.setUint8(pos, value);
    }
    writeUint16(value) {
      let pos = this.claim(2);
      this._view.setUint16(pos, value);
    }
    writeUint32(value) {
      let pos = this.claim(4);
      this._view.setUint32(pos, value);
    }
    writeUint64(value) {
      let pos = this.claim(8);
      this._view.setBigUint64(pos, value);
    }
    writeUint8Array(data) {
      if (data.byteLength === 0) return;
      let pos = this.claim(data.byteLength);
      this._byte.set(data, pos);
    }
    writeArrayBuffer(data) {
      data.byteLength !== 0 && this.writeUint8Array(new Uint8Array(data));
    }
    writePartiallyEncoded(data) {
      for (let [buf, gap] of data.chunks) this.writeArrayBuffer(buf), this.chunk(gap);
      this.writeArrayBuffer(data.end);
    }
    writeFloat32(value) {
      let pos = this.claim(4);
      this._view.setFloat32(pos, value);
    }
    writeFloat64(value) {
      let pos = this.claim(8);
      this._view.setFloat64(pos, value);
    }
    writeMajor(type, length) {
      let base = type << 5;
      length < 24 ? this.writeUint8(base + Number(length)) : length < 256 ? (this.writeUint8(base + 24), this.writeUint8(Number(length))) : length < 65536 ? (this.writeUint8(base + 25), this.writeUint16(Number(length))) : length < 4294967296 ? (this.writeUint8(base + 26), this.writeUint32(Number(length))) : (this.writeUint8(base + 27), this.writeUint64(BigInt(length)));
    }
    output(partial, replacer2) {
      return partial ? new PartiallyEncoded(this._chunks, this.buffer, replacer2) : this.buffer;
    }
  };
  var PartiallyEncoded = class {
    constructor(chunks, end, replacer2) {
      this.chunks = chunks;
      this.end = end;
      this.replacer = replacer2;
    }
    build(fills, partial) {
      let writer = new Writer(), map = new Map(fills);
      for (let [buffer, gap] of this.chunks) {
        let hasValue = map.has(gap) || gap.hasDefault();
        if (!partial && !hasValue) throw new CborFillMissing();
        if (writer.writeArrayBuffer(buffer), hasValue) {
          let data = map.get(gap) ?? gap.default;
          encode(data, { writer, replacer: this.replacer });
        } else writer.chunk(gap);
      }
      return writer.writeArrayBuffer(this.end), writer.output(!!partial, this.replacer);
    }
  };
  function partiallyEncodeObject(object, options) {
    return Object.fromEntries(Object.entries(object).map(([k2, v2]) => [k2, encode(v2, { ...options, partial: true })]));
  }
  var Tagged = class {
    constructor(tag, value) {
      this.tag = tag;
      this.value = value;
    }
  };
  var textEncoder;
  function encode(input, options = {}) {
    let w2 = options.writer ?? new Writer(), fillsMap = new Map(options.fills ?? []);
    function inner(input2) {
      let value = options.replacer ? options.replacer(input2) : input2;
      if (value === void 0) return w2.writeUint8(247);
      if (value === null) return w2.writeUint8(246);
      if (value === true) return w2.writeUint8(245);
      if (value === false) return w2.writeUint8(244);
      switch (typeof value) {
        case "number": {
          if (Number.isInteger(value)) if (value >= 0 && value <= 9007199254740992) w2.writeMajor(0, value);
          else if (value < 0 && value >= -9007199254740992) w2.writeMajor(1, -(value + 1));
          else throw new CborNumberError("Number too big to be encoded");
          else w2.writeUint8(251), w2.writeFloat64(value);
          return;
        }
        case "bigint": {
          if (value >= 0 && value < POW_2_64) w2.writeMajor(0, value);
          else if (value <= 0 && value >= -POW_2_64) w2.writeMajor(1, -(value + 1n));
          else throw new CborNumberError("BigInt too big to be encoded");
          return;
        }
        case "string": {
          textEncoder ??= new TextEncoder();
          let encoded = textEncoder.encode(value);
          w2.writeMajor(3, encoded.byteLength), w2.writeUint8Array(encoded);
          return;
        }
        default: {
          if (Array.isArray(value)) {
            w2.writeMajor(4, value.length);
            for (let v2 of value) inner(v2);
            return;
          }
          if (value instanceof Tagged) {
            w2.writeMajor(6, value.tag), inner(value.value);
            return;
          }
          if (value instanceof Encoded) {
            w2.writeArrayBuffer(value.encoded);
            return;
          }
          if (value instanceof Gap) {
            if (fillsMap.has(value)) inner(fillsMap.get(value));
            else {
              if (!options.partial) throw new CborPartialDisabled();
              w2.chunk(value);
            }
            return;
          }
          if (value instanceof PartiallyEncoded) {
            let res = value.build(options.fills ?? [], options.partial);
            options.partial ? w2.writePartiallyEncoded(res) : w2.writeArrayBuffer(res);
            return;
          }
          if (value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Uint32Array || value instanceof Int8Array || value instanceof Int16Array || value instanceof Int32Array || value instanceof Float32Array || value instanceof Float64Array || value instanceof ArrayBuffer) {
            let v2 = new Uint8Array(value);
            w2.writeMajor(2, v2.byteLength), w2.writeUint8Array(v2);
            return;
          }
          let entries = value instanceof Map ? Array.from(value.entries()) : Object.entries(value);
          w2.writeMajor(5, entries.length);
          for (let v2 of entries.flat()) inner(v2);
        }
      }
    }
    return inner(input), w2.output(!!options.partial, options.replacer);
  }
  var Reader = class {
    _buf;
    _view;
    _byte;
    _pos = 0;
    constructor(buffer) {
      this._buf = new ArrayBuffer(buffer.byteLength), this._view = new DataView(this._buf), this._byte = new Uint8Array(this._buf), this._byte.set(new Uint8Array(buffer));
    }
    read(amount, res) {
      return this._pos += amount, res;
    }
    readUint8() {
      try {
        return this.read(1, this._view.getUint8(this._pos));
      } catch (e12) {
        throw e12 instanceof RangeError ? new CborRangeError(e12.message) : e12;
      }
    }
    readUint16() {
      try {
        return this.read(2, this._view.getUint16(this._pos));
      } catch (e12) {
        throw e12 instanceof RangeError ? new CborRangeError(e12.message) : e12;
      }
    }
    readUint32() {
      try {
        return this.read(4, this._view.getUint32(this._pos));
      } catch (e12) {
        throw e12 instanceof RangeError ? new CborRangeError(e12.message) : e12;
      }
    }
    readUint64() {
      try {
        return this.read(8, this._view.getBigUint64(this._pos));
      } catch (e12) {
        throw e12 instanceof RangeError ? new CborRangeError(e12.message) : e12;
      }
    }
    readFloat16() {
      let bytes = this.readUint16(), s22 = (bytes & 32768) >> 15, e12 = (bytes & 31744) >> 10, f22 = bytes & 1023;
      return e12 === 0 ? (s22 ? -1 : 1) * 2 ** -14 * (f22 / 2 ** 10) : e12 === 31 ? f22 ? Number.NaN : (s22 ? -1 : 1) * Number.POSITIVE_INFINITY : (s22 ? -1 : 1) * 2 ** (e12 - 15) * (1 + f22 / 2 ** 10);
    }
    readFloat32() {
      try {
        return this.read(4, this._view.getFloat32(this._pos));
      } catch (e12) {
        throw e12 instanceof RangeError ? new CborRangeError(e12.message) : e12;
      }
    }
    readFloat64() {
      try {
        return this.read(8, this._view.getFloat64(this._pos));
      } catch (e12) {
        throw e12 instanceof RangeError ? new CborRangeError(e12.message) : e12;
      }
    }
    readBytes(amount) {
      let available = this._byte.length - this._pos;
      if (available < amount) throw new CborRangeError(`The argument must be between 0 and ${available}`);
      return this.read(amount, this._byte.slice(this._pos, this._pos + amount));
    }
    readMajor() {
      let byte = this.readUint8(), major = byte >> 5;
      if (major < 0 || major > 7) throw new CborInvalidMajorError("Received invalid major type");
      return [major, byte & 31];
    }
    readMajorLength(length) {
      if (length <= 23) return length;
      switch (length) {
        case 24:
          return this.readUint8();
        case 25:
          return this.readUint16();
        case 26:
          return this.readUint32();
        case 27: {
          let read = this.readUint64();
          return read > 9007199254740992 ? read : Number(read);
        }
      }
      throw new CborRangeError("Expected a final length");
    }
  };
  function infiniteBytes(r22, forMajor) {
    let w2 = new Writer();
    for (; ; ) {
      let [major, len] = r22.readMajor();
      if (major === 7 && len === 31) break;
      if (major !== forMajor) throw new CborInvalidMajorError(`Expected a resource of the same major (${forMajor}) while processing an infinite resource`);
      if (len === 31) throw new CborRangeError("Expected a finite resource while processing an infinite resource");
      w2.writeUint8Array(r22.readBytes(Number(r22.readMajorLength(len))));
    }
    return w2.buffer;
  }
  var textDecoder;
  function decode(input, options = {}) {
    let r22 = input instanceof Reader ? input : new Reader(input);
    function inner() {
      let [major, len] = r22.readMajor();
      switch (major) {
        case 0:
          return r22.readMajorLength(len);
        case 1: {
          let l5 = r22.readMajorLength(len);
          return typeof l5 == "bigint" ? -(l5 + 1n) : -(l5 + 1);
        }
        case 2:
          return len === 31 ? infiniteBytes(r22, 2) : r22.readBytes(Number(r22.readMajorLength(len))).buffer;
        case 3: {
          let encoded = len === 31 ? infiniteBytes(r22, 3) : r22.readBytes(Number(r22.readMajorLength(len)));
          return textDecoder ??= new TextDecoder(), textDecoder.decode(encoded);
        }
        case 4: {
          if (len === 31) {
            let arr2 = [];
            for (; ; ) try {
              arr2.push(decode2());
            } catch (e12) {
              if (e12 instanceof CborBreak) break;
              throw e12;
            }
            return arr2;
          }
          let l5 = r22.readMajorLength(len), arr = Array(l5);
          for (let i8 = 0; i8 < l5; i8++) arr[i8] = decode2();
          return arr;
        }
        case 5: {
          let entries = [];
          if (len === 31) for (; ; ) {
            let key;
            try {
              key = decode2();
            } catch (e12) {
              if (e12 instanceof CborBreak) break;
              throw e12;
            }
            let value = decode2();
            entries.push([key, value]);
          }
          else {
            let l5 = r22.readMajorLength(len);
            for (let i8 = 0; i8 < l5; i8++) {
              let key = decode2(), value = decode2();
              entries[i8] = [key, value];
            }
          }
          return options.map === "map" ? new Map(entries) : Object.fromEntries(entries);
        }
        case 6: {
          let tag = r22.readMajorLength(len), value = decode2();
          return new Tagged(tag, value);
        }
        case 7:
          switch (len) {
            case 20:
              return false;
            case 21:
              return true;
            case 22:
              return null;
            case 23:
              return;
            case 25:
              return r22.readFloat16();
            case 26:
              return r22.readFloat32();
            case 27:
              return r22.readFloat64();
            case 31:
              throw new CborBreak();
          }
      }
      throw new CborInvalidMajorError(`Unable to decode value with major tag ${major}`);
    }
    function decode2() {
      return options.replacer ? options.replacer(inner()) : inner();
    }
    return decode2();
  }
  function dateToCborCustomDate(date) {
    let s22 = Math.floor(date.getTime() / 1e3), ms = date.getTime() - s22 * 1e3;
    return [s22, ms * 1e6];
  }
  function cborCustomDateToDate([s22, ns]) {
    let date = /* @__PURE__ */ new Date(0);
    return date.setUTCSeconds(Number(s22)), date.setMilliseconds(Math.floor(Number(ns) / 1e6)), date;
  }
  var Value = class {
  };
  var Decimal = class _Decimal extends Value {
    decimal;
    constructor(decimal) {
      super(), this.decimal = decimal.toString();
    }
    equals(other) {
      return other instanceof _Decimal ? this.decimal === other.decimal : false;
    }
    toString() {
      return this.decimal;
    }
    toJSON() {
      return this.decimal;
    }
  };
  var millisecond = 1;
  var microsecond = millisecond / 1e3;
  var nanosecond = microsecond / 1e3;
  var second = 1e3 * millisecond;
  var minute = 60 * second;
  var hour = 60 * minute;
  var day = 24 * hour;
  var week = 7 * day;
  var units = /* @__PURE__ */ new Map([["ns", nanosecond], ["\xB5s", microsecond], ["\u03BCs", microsecond], ["us", microsecond], ["ms", millisecond], ["s", second], ["m", minute], ["h", hour], ["d", day], ["w", week]]);
  var unitsReverse = Array.from(units).reduce((map, [unit, size3]) => (map.set(size3, unit), map), /* @__PURE__ */ new Map());
  var durationPartRegex = new RegExp(`^(\\d+)(${Array.from(units.keys()).join("|")})`);
  var Duration = class _Duration extends Value {
    _milliseconds;
    constructor(input) {
      super(), input instanceof _Duration ? this._milliseconds = input._milliseconds : typeof input == "string" ? this._milliseconds = _Duration.parseString(input) : this._milliseconds = input;
    }
    static fromCompact([s22, ns]) {
      s22 = s22 ?? 0, ns = ns ?? 0;
      let ms = s22 * 1e3 + ns / 1e6;
      return new _Duration(ms);
    }
    equals(other) {
      return other instanceof _Duration ? this._milliseconds === other._milliseconds : false;
    }
    toCompact() {
      let s22 = Math.floor(this._milliseconds / 1e3), ns = Math.floor((this._milliseconds - s22 * 1e3) * 1e6);
      return ns > 0 ? [s22, ns] : s22 > 0 ? [s22] : [];
    }
    toString() {
      let left = this._milliseconds, result = "";
      function scrap(size3) {
        let num = Math.floor(left / size3);
        return num > 0 && (left = left % size3), num;
      }
      for (let [size3, unit] of Array.from(unitsReverse).reverse()) {
        let scrapped = scrap(size3);
        scrapped > 0 && (result += `${scrapped}${unit}`);
      }
      return result;
    }
    toJSON() {
      return this.toString();
    }
    static parseString(input) {
      let ms = 0, left = input;
      for (; left !== ""; ) {
        let match = left.match(durationPartRegex);
        if (match) {
          let amount = Number.parseInt(match[1]), factor = units.get(match[2]);
          if (factor === void 0) throw new SurrealDbError(`Invalid duration unit: ${match[2]}`);
          ms += amount * factor, left = left.slice(match[0].length);
          continue;
        }
        throw new SurrealDbError("Could not match a next duration part");
      }
      return ms;
    }
    static nanoseconds(nanoseconds) {
      return new _Duration(Math.floor(nanoseconds * nanosecond));
    }
    static microseconds(microseconds) {
      return new _Duration(Math.floor(microseconds * microsecond));
    }
    static milliseconds(milliseconds) {
      return new _Duration(milliseconds);
    }
    static seconds(seconds) {
      return new _Duration(seconds * second);
    }
    static minutes(minutes) {
      return new _Duration(minutes * minute);
    }
    static hours(hours) {
      return new _Duration(hours * hour);
    }
    static days(days) {
      return new _Duration(days * day);
    }
    static weeks(weeks) {
      return new _Duration(weeks * week);
    }
    get microseconds() {
      return Math.floor(this._milliseconds / microsecond);
    }
    get nanoseconds() {
      return Math.floor(this._milliseconds / nanosecond);
    }
    get milliseconds() {
      return Math.floor(this._milliseconds);
    }
    get seconds() {
      return Math.floor(this._milliseconds / second);
    }
    get minutes() {
      return Math.floor(this._milliseconds / minute);
    }
    get hours() {
      return Math.floor(this._milliseconds / hour);
    }
    get days() {
      return Math.floor(this._milliseconds / day);
    }
    get weeks() {
      return Math.floor(this._milliseconds / week);
    }
  };
  var Future = class _Future extends Value {
    constructor(inner) {
      super();
      this.inner = inner;
    }
    equals(other) {
      return other instanceof _Future ? this.inner === other.inner : false;
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      return `<future> ${this.inner}`;
    }
  };
  var Geometry = class _Geometry extends Value {
    equals(other) {
      return other instanceof _Geometry ? this.is(other) : false;
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
  };
  function f(num) {
    return num instanceof Decimal ? Number.parseFloat(num.decimal) : num;
  }
  var GeometryPoint = class _GeometryPoint extends Geometry {
    point;
    constructor(point) {
      super(), point instanceof _GeometryPoint ? this.point = point.clone().point : this.point = [f(point[0]), f(point[1])];
    }
    toJSON() {
      return { type: "Point", coordinates: this.coordinates };
    }
    get coordinates() {
      return this.point;
    }
    is(geometry) {
      return geometry instanceof _GeometryPoint ? this.point[0] === geometry.point[0] && this.point[1] === geometry.point[1] : false;
    }
    clone() {
      return new _GeometryPoint([...this.point]);
    }
  };
  var GeometryLine = class _GeometryLine extends Geometry {
    line;
    constructor(line) {
      super(), this.line = line instanceof _GeometryLine ? line.clone().line : line;
    }
    toJSON() {
      return { type: "LineString", coordinates: this.coordinates };
    }
    get coordinates() {
      return this.line.map((g2) => g2.coordinates);
    }
    close() {
      this.line[0].is(this.line.at(-1)) || this.line.push(this.line[0]);
    }
    is(geometry) {
      if (!(geometry instanceof _GeometryLine) || this.line.length !== geometry.line.length) return false;
      for (let i8 = 0; i8 < this.line.length; i8++) if (!this.line[i8].is(geometry.line[i8])) return false;
      return true;
    }
    clone() {
      return new _GeometryLine(this.line.map((p3) => p3.clone()));
    }
  };
  var GeometryPolygon = class _GeometryPolygon extends Geometry {
    polygon;
    constructor(polygon) {
      super(), this.polygon = polygon instanceof _GeometryPolygon ? polygon.clone().polygon : polygon.map((l5) => {
        let line = l5.clone();
        return line.close(), line;
      });
    }
    toJSON() {
      return { type: "Polygon", coordinates: this.coordinates };
    }
    get coordinates() {
      return this.polygon.map((g2) => g2.coordinates);
    }
    is(geometry) {
      if (!(geometry instanceof _GeometryPolygon) || this.polygon.length !== geometry.polygon.length) return false;
      for (let i8 = 0; i8 < this.polygon.length; i8++) if (!this.polygon[i8].is(geometry.polygon[i8])) return false;
      return true;
    }
    clone() {
      return new _GeometryPolygon(this.polygon.map((p3) => p3.clone()));
    }
  };
  var GeometryMultiPoint = class _GeometryMultiPoint extends Geometry {
    points;
    constructor(points) {
      super(), this.points = points instanceof _GeometryMultiPoint ? points.points : points;
    }
    toJSON() {
      return { type: "MultiPoint", coordinates: this.coordinates };
    }
    get coordinates() {
      return this.points.map((g2) => g2.coordinates);
    }
    is(geometry) {
      if (!(geometry instanceof _GeometryMultiPoint) || this.points.length !== geometry.points.length) return false;
      for (let i8 = 0; i8 < this.points.length; i8++) if (!this.points[i8].is(geometry.points[i8])) return false;
      return true;
    }
    clone() {
      return new _GeometryMultiPoint(this.points.map((p3) => p3.clone()));
    }
  };
  var GeometryMultiLine = class _GeometryMultiLine extends Geometry {
    lines;
    constructor(lines) {
      super(), this.lines = lines instanceof _GeometryMultiLine ? lines.lines : lines;
    }
    toJSON() {
      return { type: "MultiLineString", coordinates: this.coordinates };
    }
    get coordinates() {
      return this.lines.map((g2) => g2.coordinates);
    }
    is(geometry) {
      if (!(geometry instanceof _GeometryMultiLine) || this.lines.length !== geometry.lines.length) return false;
      for (let i8 = 0; i8 < this.lines.length; i8++) if (!this.lines[i8].is(geometry.lines[i8])) return false;
      return true;
    }
    clone() {
      return new _GeometryMultiLine(this.lines.map((p3) => p3.clone()));
    }
  };
  var GeometryMultiPolygon = class _GeometryMultiPolygon extends Geometry {
    polygons;
    constructor(polygons) {
      super(), this.polygons = polygons instanceof _GeometryMultiPolygon ? polygons.polygons : polygons;
    }
    toJSON() {
      return { type: "MultiPolygon", coordinates: this.coordinates };
    }
    get coordinates() {
      return this.polygons.map((g2) => g2.coordinates);
    }
    is(geometry) {
      if (!(geometry instanceof _GeometryMultiPolygon) || this.polygons.length !== geometry.polygons.length) return false;
      for (let i8 = 0; i8 < this.polygons.length; i8++) if (!this.polygons[i8].is(geometry.polygons[i8])) return false;
      return true;
    }
    clone() {
      return new _GeometryMultiPolygon(this.polygons.map((p3) => p3.clone()));
    }
  };
  var GeometryCollection = class _GeometryCollection extends Geometry {
    collection;
    constructor(collection) {
      super(), this.collection = collection instanceof _GeometryCollection ? collection.collection : collection;
    }
    toJSON() {
      return { type: "GeometryCollection", geometries: this.geometries };
    }
    get geometries() {
      return this.collection.map((g2) => g2.toJSON());
    }
    is(geometry) {
      if (!(geometry instanceof _GeometryCollection) || this.collection.length !== geometry.collection.length) return false;
      for (let i8 = 0; i8 < this.collection.length; i8++) if (!this.collection[i8].is(geometry.collection[i8])) return false;
      return true;
    }
    clone() {
      return new _GeometryCollection(this.collection.map((p3) => p3.clone()));
    }
  };
  function equals(x2, y3) {
    if (Object.is(x2, y3)) return true;
    if (x2 instanceof Date && y3 instanceof Date) return x2.getTime() === y3.getTime();
    if (x2 instanceof RegExp && y3 instanceof RegExp) return x2.toString() === y3.toString();
    if (x2 instanceof Value && y3 instanceof Value) return x2.equals(y3);
    if (typeof x2 != "object" || x2 === null || typeof y3 != "object" || y3 === null) return false;
    let keysX = Reflect.ownKeys(x2), keysY = Reflect.ownKeys(y3);
    if (keysX.length !== keysY.length) return false;
    for (let i8 = 0; i8 < keysX.length; i8++) if (!Reflect.has(y3, keysX[i8]) || !equals(x2[keysX[i8]], y3[keysX[i8]])) return false;
    return true;
  }
  var MAX_i64 = 9223372036854775807n;
  function escapeIdent(str) {
    if (isOnlyNumbers(str)) return `\u27E8${str}\u27E9`;
    let code, i8, len;
    for (i8 = 0, len = str.length; i8 < len; i8++) if (code = str.charCodeAt(i8), !(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123) && code !== 95) return `\u27E8${str.replaceAll("\u27E9", "\\\u27E9")}\u27E9`;
    return str;
  }
  function escapeNumber(num) {
    return num <= MAX_i64 ? num.toString() : `\u27E8${num}\u27E9`;
  }
  function isOnlyNumbers(str) {
    let stripped = str.replace("_", ""), parsed = Number.parseInt(stripped);
    return !Number.isNaN(parsed) && parsed.toString() === stripped;
  }
  var Uuid = class _Uuid extends Value {
    inner;
    constructor(uuid) {
      super(), uuid instanceof ArrayBuffer ? this.inner = UUID.ofInner(new Uint8Array(uuid)) : uuid instanceof Uint8Array ? this.inner = UUID.ofInner(uuid) : uuid instanceof _Uuid ? this.inner = uuid.inner : uuid instanceof UUID ? this.inner = uuid : this.inner = UUID.parse(uuid);
    }
    equals(other) {
      return other instanceof _Uuid ? this.inner.equals(other.inner) : false;
    }
    toString() {
      return this.inner.toString();
    }
    toJSON() {
      return this.inner.toString();
    }
    toUint8Array() {
      return this.inner.bytes;
    }
    toBuffer() {
      return this.inner.bytes.buffer;
    }
    static v4() {
      return new _Uuid(uuidv4obj());
    }
    static v7() {
      return new _Uuid(uuidv7obj());
    }
  };
  var RecordId = class _RecordId extends Value {
    tb;
    id;
    constructor(tb, id22) {
      if (super(), typeof tb != "string") throw new SurrealDbError("TB part is not valid");
      if (!isValidIdPart(id22)) throw new SurrealDbError("ID part is not valid");
      this.tb = tb, this.id = id22;
    }
    equals(other) {
      return other instanceof _RecordId ? this.tb === other.tb && equals(this.id, other.id) : false;
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      let tb = escapeIdent(this.tb), id22 = escapeIdPart(this.id);
      return `${tb}:${id22}`;
    }
  };
  var StringRecordId = class _StringRecordId extends Value {
    rid;
    constructor(rid) {
      if (super(), rid instanceof _StringRecordId) this.rid = rid.rid;
      else if (rid instanceof RecordId) this.rid = rid.toString();
      else if (typeof rid == "string") this.rid = rid;
      else throw new SurrealDbError("String Record ID must be a string");
    }
    equals(other) {
      return other instanceof _StringRecordId ? this.rid === other.rid : false;
    }
    toJSON() {
      return this.rid;
    }
    toString() {
      return this.rid;
    }
  };
  function isValidIdPart(v2) {
    if (v2 instanceof Uuid) return true;
    switch (typeof v2) {
      case "string":
      case "number":
      case "bigint":
        return true;
      case "object":
        return Array.isArray(v2) || v2 !== null;
      default:
        return false;
    }
  }
  function escapeIdPart(id22) {
    return id22 instanceof Uuid ? `u"${id22}"` : typeof id22 == "string" ? escapeIdent(id22) : typeof id22 == "bigint" || typeof id22 == "number" ? escapeNumber(id22) : toSurrealqlString(id22);
  }
  var Table = class _Table extends Value {
    tb;
    constructor(tb) {
      if (super(), typeof tb != "string") throw new SurrealDbError("Table must be a string");
      this.tb = tb;
    }
    equals(other) {
      return other instanceof _Table ? this.tb === other.tb : false;
    }
    toJSON() {
      return this.tb;
    }
    toString() {
      return this.tb;
    }
  };
  function toSurrealqlString(input) {
    if (typeof input == "string") return `s${JSON.stringify(input)}`;
    if (input === null) return "NULL";
    if (input === void 0) return "NONE";
    if (typeof input == "object") {
      if (input instanceof Date) return `d${JSON.stringify(input.toISOString())}`;
      if (input instanceof Uuid) return `u${JSON.stringify(input.toString())}`;
      if (input instanceof RecordId || input instanceof StringRecordId) return `r${JSON.stringify(input.toString())}`;
      if (input instanceof Geometry) return toSurrealqlString(input.toJSON());
      if (input instanceof Decimal || input instanceof Duration || input instanceof Future || input instanceof Range || input instanceof Table) return input.toJSON();
      switch (Object.getPrototypeOf(input)) {
        case Object.prototype: {
          let output2 = "{ ", entries = Object.entries(input);
          for (let [i8, [k2, v2]] of entries.entries()) output2 += `${JSON.stringify(k2)}: ${toSurrealqlString(v2)}`, i8 < entries.length - 1 && (output2 += ", ");
          return output2 += " }", output2;
        }
        case Map.prototype: {
          let output2 = "{ ", entries = Array.from(input.entries());
          for (let [i8, [k2, v2]] of entries.entries()) output2 += `${JSON.stringify(k2)}: ${toSurrealqlString(v2)}`, i8 < entries.length - 1 && (output2 += ", ");
          return output2 += " }", output2;
        }
        case Array.prototype:
          return `[ ${input.map(toSurrealqlString).join(", ")} ]`;
        case Set.prototype:
          return `[ ${[...new Set([...input].map(toSurrealqlString))].join(", ")} ]`;
      }
    }
    return `${input}`;
  }
  var Range = class _Range extends Value {
    constructor(beg, end) {
      super();
      this.beg = beg;
      this.end = end;
    }
    equals(other) {
      return !(other instanceof _Range) || this.beg?.constructor !== other.beg?.constructor || this.end?.constructor !== other.end?.constructor ? false : equals(this.beg?.value, other.beg?.value) && equals(this.end?.value, other.end?.value);
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      let beg = escapeRangeBound(this.beg), end = escapeRangeBound(this.end);
      return `${beg}${getRangeJoin(this.beg, this.end)}${end}`;
    }
  };
  var BoundIncluded = class {
    constructor(value) {
      this.value = value;
    }
  };
  var BoundExcluded = class {
    constructor(value) {
      this.value = value;
    }
  };
  var RecordIdRange = class _RecordIdRange extends Value {
    constructor(tb, beg, end) {
      super();
      this.tb = tb;
      this.beg = beg;
      this.end = end;
      if (typeof tb != "string") throw new SurrealDbError("TB part is not valid");
      if (!isValidIdBound(beg)) throw new SurrealDbError("Beg part is not valid");
      if (!isValidIdBound(end)) throw new SurrealDbError("End part is not valid");
    }
    equals(other) {
      return !(other instanceof _RecordIdRange) || this.beg?.constructor !== other.beg?.constructor || this.end?.constructor !== other.end?.constructor ? false : this.tb === other.tb && equals(this.beg?.value, other.beg?.value) && equals(this.end?.value, other.end?.value);
    }
    toJSON() {
      return this.toString();
    }
    toString() {
      let tb = escapeIdent(this.tb), beg = escapeIdBound(this.beg), end = escapeIdBound(this.end);
      return `${tb}:${beg}${getRangeJoin(this.beg, this.end)}${end}`;
    }
  };
  function getRangeJoin(beg, end) {
    let output2 = "";
    return beg instanceof BoundExcluded && (output2 += ">"), output2 += "..", end instanceof BoundIncluded && (output2 += "="), output2;
  }
  function isValidIdBound(bound) {
    return bound instanceof BoundIncluded || bound instanceof BoundExcluded ? isValidIdPart(bound.value) : true;
  }
  function escapeIdBound(bound) {
    return bound instanceof BoundIncluded || bound instanceof BoundExcluded ? escapeIdPart(bound.value) : "";
  }
  function escapeRangeBound(bound) {
    if (bound === void 0) return "";
    let value = bound.value;
    return bound instanceof Range ? `(${toSurrealqlString(value)})` : toSurrealqlString(value);
  }
  function rangeToCbor([beg, end]) {
    function encodeBound(bound) {
      return bound instanceof BoundIncluded ? new Tagged(TAG_BOUND_INCLUDED, bound.value) : bound instanceof BoundExcluded ? new Tagged(TAG_BOUND_EXCLUDED, bound.value) : null;
    }
    return [encodeBound(beg), encodeBound(end)];
  }
  function cborToRange(range) {
    function decodeBound(bound) {
      if (bound !== null) {
        if (bound.tag === TAG_BOUND_INCLUDED) return new BoundIncluded(bound.value);
        if (bound.tag === TAG_BOUND_EXCLUDED) return new BoundExcluded(bound.value);
        throw new SurrealDbError("Invalid bound tag");
      }
    }
    return [decodeBound(range[0]), decodeBound(range[1])];
  }
  var TAG_SPEC_DATETIME = 0;
  var TAG_SPEC_UUID = 37;
  var TAG_NONE = 6;
  var TAG_TABLE = 7;
  var TAG_RECORDID = 8;
  var TAG_STRING_UUID = 9;
  var TAG_STRING_DECIMAL = 10;
  var TAG_CUSTOM_DATETIME = 12;
  var TAG_STRING_DURATION = 13;
  var TAG_CUSTOM_DURATION = 14;
  var TAG_FUTURE = 15;
  var TAG_RANGE = 49;
  var TAG_BOUND_INCLUDED = 50;
  var TAG_BOUND_EXCLUDED = 51;
  var TAG_GEOMETRY_POINT = 88;
  var TAG_GEOMETRY_LINE = 89;
  var TAG_GEOMETRY_POLYGON = 90;
  var TAG_GEOMETRY_MULTIPOINT = 91;
  var TAG_GEOMETRY_MULTILINE = 92;
  var TAG_GEOMETRY_MULTIPOLYGON = 93;
  var TAG_GEOMETRY_COLLECTION = 94;
  var replacer = { encode(v2) {
    return v2 instanceof Date ? new Tagged(TAG_CUSTOM_DATETIME, dateToCborCustomDate(v2)) : v2 === void 0 ? new Tagged(TAG_NONE, null) : v2 instanceof Uuid ? new Tagged(TAG_SPEC_UUID, v2.toBuffer()) : v2 instanceof Decimal ? new Tagged(TAG_STRING_DECIMAL, v2.toString()) : v2 instanceof Duration ? new Tagged(TAG_CUSTOM_DURATION, v2.toCompact()) : v2 instanceof RecordId ? new Tagged(TAG_RECORDID, [v2.tb, v2.id]) : v2 instanceof StringRecordId ? new Tagged(TAG_RECORDID, v2.rid) : v2 instanceof RecordIdRange ? new Tagged(TAG_RECORDID, [v2.tb, new Tagged(TAG_RANGE, rangeToCbor([v2.beg, v2.end]))]) : v2 instanceof Table ? new Tagged(TAG_TABLE, v2.tb) : v2 instanceof Future ? new Tagged(TAG_FUTURE, v2.inner) : v2 instanceof Range ? new Tagged(TAG_RANGE, rangeToCbor([v2.beg, v2.end])) : v2 instanceof GeometryPoint ? new Tagged(TAG_GEOMETRY_POINT, v2.point) : v2 instanceof GeometryLine ? new Tagged(TAG_GEOMETRY_LINE, v2.line) : v2 instanceof GeometryPolygon ? new Tagged(TAG_GEOMETRY_POLYGON, v2.polygon) : v2 instanceof GeometryMultiPoint ? new Tagged(TAG_GEOMETRY_MULTIPOINT, v2.points) : v2 instanceof GeometryMultiLine ? new Tagged(TAG_GEOMETRY_MULTILINE, v2.lines) : v2 instanceof GeometryMultiPolygon ? new Tagged(TAG_GEOMETRY_MULTIPOLYGON, v2.polygons) : v2 instanceof GeometryCollection ? new Tagged(TAG_GEOMETRY_COLLECTION, v2.collection) : v2;
  }, decode(v2) {
    if (!(v2 instanceof Tagged)) return v2;
    switch (v2.tag) {
      case TAG_SPEC_DATETIME:
        return new Date(v2.value);
      case TAG_SPEC_UUID:
      case TAG_STRING_UUID:
        return new Uuid(v2.value);
      case TAG_CUSTOM_DATETIME:
        return cborCustomDateToDate(v2.value);
      case TAG_NONE:
        return;
      case TAG_STRING_DECIMAL:
        return new Decimal(v2.value);
      case TAG_STRING_DURATION:
        return new Duration(v2.value);
      case TAG_CUSTOM_DURATION:
        return Duration.fromCompact(v2.value);
      case TAG_TABLE:
        return new Table(v2.value);
      case TAG_FUTURE:
        return new Future(v2.value);
      case TAG_RANGE:
        return new Range(...cborToRange(v2.value));
      case TAG_RECORDID:
        return v2.value[1] instanceof Range ? new RecordIdRange(v2.value[0], v2.value[1].beg, v2.value[1].end) : new RecordId(v2.value[0], v2.value[1]);
      case TAG_GEOMETRY_POINT:
        return new GeometryPoint(v2.value);
      case TAG_GEOMETRY_LINE:
        return new GeometryLine(v2.value);
      case TAG_GEOMETRY_POLYGON:
        return new GeometryPolygon(v2.value);
      case TAG_GEOMETRY_MULTIPOINT:
        return new GeometryMultiPoint(v2.value);
      case TAG_GEOMETRY_MULTILINE:
        return new GeometryMultiLine(v2.value);
      case TAG_GEOMETRY_MULTIPOLYGON:
        return new GeometryMultiPolygon(v2.value);
      case TAG_GEOMETRY_COLLECTION:
        return new GeometryCollection(v2.value);
    }
  } };
  Object.freeze(replacer);
  function encodeCbor(data) {
    return encode(data, { replacer: replacer.encode });
  }
  function decodeCbor(data) {
    return decode(data, { replacer: replacer.decode });
  }
  var textEncoder2;
  var PreparedQuery = class {
    _query;
    _bindings;
    length;
    constructor(query, bindings) {
      textEncoder2 ??= new TextEncoder(), this._query = textEncoder2.encode(query), this._bindings = partiallyEncodeObject(bindings ?? {}, { replacer: replacer.encode }), this.length = Object.keys(this._bindings).length;
    }
    get query() {
      let w2 = new Writer(this._query.byteLength + 9);
      return w2.writeMajor(3, this._query.byteLength), w2.writeUint8Array(this._query), new Encoded(w2.output(false));
    }
    get bindings() {
      return this._bindings;
    }
    build(fills) {
      return encode([this.query, this.bindings], { fills });
    }
    append(query_raw, ...values) {
      let base = this.length;
      this.length += values.length;
      let reused = 0, gaps = /* @__PURE__ */ new Map(), mapped_bindings = values.map((v2, i8) => {
        if (v2 instanceof Gap) {
          let index2 = gaps.get(v2);
          if (index2 !== void 0) return reused++, [`bind___${index2}`, v2];
          gaps.set(v2, i8 - reused);
        }
        return [`bind___${base + i8 - reused}`, v2];
      });
      for (let [k2, v2] of mapped_bindings) this._bindings[k2] = encode(v2, { replacer: replacer.encode, partial: true });
      let query = query_raw.flatMap((segment, i8) => {
        let variable = mapped_bindings[i8]?.[0];
        return [segment, ...variable ? [`$${variable}`] : []];
      }).join("");
      textEncoder2 ??= new TextEncoder();
      let current = new Uint8Array(this._query), added = textEncoder2.encode(query);
      return this._query = new Uint8Array(current.byteLength + added.byteLength), this._query.set(current), this._query.set(added, current.byteLength), this;
    }
  };
  function convertAuth(params) {
    let result = {}, convertString = (a4, b3, optional) => {
      if (a4 in params) result[b3] = `${params[a4]}`, delete result[a4];
      else if (optional !== true) throw new SurrealDbError(`Key ${a4} is missing from the authentication parameters`);
    };
    return "scope" in params ? (result = { ...params }, convertString("scope", "sc"), convertString("namespace", "ns"), convertString("database", "db")) : "variables" in params ? (result = { ...params.variables }, convertString("access", "ac"), convertString("namespace", "ns"), convertString("database", "db")) : (convertString("access", "ac", true), convertString("database", "db", true), convertString("namespace", "ns", !("database" in params)), convertString("username", "user"), convertString("password", "pass")), result;
  }
  var liveActions = ["CREATE", "UPDATE", "DELETE"];
  function isLiveResult(v2) {
    return !(typeof v2 != "object" || v2 === null || !("id" in v2 && "action" in v2 && "result" in v2) || !(v2.id instanceof Uuid) || !liveActions.includes(v2.action) || typeof v2.result != "object" || v2.result === null);
  }
  var defaultVersionCheckTimeout = 5e3;
  var supportedSurrealDbVersionMin = "1.4.2";
  var supportedSurrealDbVersionUntil = "3.0.0";
  var supportedSurrealDbVersionRange = `>= ${supportedSurrealDbVersionMin} < ${supportedSurrealDbVersionUntil}`;
  function versionCheck(version, min2 = supportedSurrealDbVersionMin, until = supportedSurrealDbVersionUntil) {
    if (!isVersionSupported(version, min2, until)) throw new UnsupportedVersion(version, `>= ${min2} < ${until}`);
    return true;
  }
  function isVersionSupported(version, min2 = supportedSurrealDbVersionMin, until = supportedSurrealDbVersionUntil) {
    return min2.localeCompare(version, void 0, { numeric: true }) <= 0 && until.localeCompare(version, void 0, { numeric: true }) === 1;
  }
  async function retrieveRemoteVersion(url, timeout) {
    let protocol = { "ws:": "http:", "wss:": "https:", "http:": "http:", "https:": "https:" }[url.protocol];
    if (protocol) {
      let basepath = url.pathname.slice(0, -4);
      url = new URL(url), url.pathname = `${basepath}/version`, url.protocol = protocol;
      let controller = new AbortController(), id22 = setTimeout(() => controller.abort(), timeout ?? defaultVersionCheckTimeout), versionPrefix = "surrealdb-";
      return await fetch(url, { signal: controller.signal }).then((res) => res.text()).then((version2) => version2.slice(versionPrefix.length)).catch((e12) => {
        throw new VersionRetrievalFailure(e12);
      }).finally(() => {
        clearTimeout(id22);
      });
    }
    throw new VersionRetrievalFailure();
  }
  var id = 0;
  function getIncrementalID() {
    return id = (id + 1) % Number.MAX_SAFE_INTEGER, id.toString();
  }
  var ConnectionStatus = ((ConnectionStatus2) => (ConnectionStatus2.Disconnected = "disconnected", ConnectionStatus2.Connecting = "connecting", ConnectionStatus2.Connected = "connected", ConnectionStatus2.Error = "error", ConnectionStatus2))(ConnectionStatus || {});
  var EngineContext = class {
    emitter;
    encodeCbor;
    decodeCbor;
    constructor({ emitter, encodeCbor: encodeCbor2, decodeCbor: decodeCbor2 }) {
      this.emitter = emitter, this.encodeCbor = encodeCbor2, this.decodeCbor = decodeCbor2;
    }
  };
  var AbstractEngine = class {
    context;
    ready;
    status = "disconnected";
    connection = { url: void 0, namespace: void 0, database: void 0, token: void 0 };
    constructor(context) {
      this.context = context;
    }
    get emitter() {
      return this.context.emitter;
    }
    get encodeCbor() {
      return this.context.encodeCbor;
    }
    get decodeCbor() {
      return this.context.decodeCbor;
    }
    async req_post(body, url, headers_) {
      let headers = { "Content-Type": "application/cbor", Accept: "application/cbor", ...headers_ };
      this.connection.namespace && (headers["Surreal-NS"] = this.connection.namespace), this.connection.database && (headers["Surreal-DB"] = this.connection.database), this.connection.token && (headers.Authorization = `Bearer ${this.connection.token}`);
      let raw = await fetch(`${url ?? this.connection.url}`, { method: "POST", headers, body: this.encodeCbor(body) }), buffer = await raw.arrayBuffer();
      if (raw.status === 200) return buffer;
      let dec = new TextDecoder("utf-8");
      throw new HttpConnectionError(dec.decode(buffer), raw.status, raw.statusText, buffer);
    }
  };
  function processAuthVars(vars, fallback2) {
    if ("scope" in vars || "access" in vars && "variables" in vars && vars.variables) {
      if (!vars.namespace) {
        if (!fallback2?.namespace) throw new NoNamespaceSpecified();
        vars.namespace = fallback2.namespace;
      }
      if (!vars.database) {
        if (!fallback2?.database) throw new NoDatabaseSpecified();
        vars.database = fallback2.database;
      }
    }
    return vars;
  }
  var ALWAYS_ALLOW = /* @__PURE__ */ new Set(["signin", "signup", "authenticate", "invalidate", "version", "use", "let", "unset", "query"]);
  var HttpEngine = class extends AbstractEngine {
    connection = { url: void 0, namespace: void 0, database: void 0, token: void 0, variables: {} };
    setStatus(status, ...args) {
      this.status = status, this.emitter.emit(status, args);
    }
    version(url, timeout) {
      return retrieveRemoteVersion(url, timeout);
    }
    connect(url) {
      return this.setStatus("connecting"), this.connection.url = url, this.setStatus("connected"), this.ready = new Promise((r22) => r22()), this.ready;
    }
    disconnect() {
      return this.connection = { url: void 0, namespace: void 0, database: void 0, token: void 0, variables: {} }, this.ready = void 0, this.setStatus("disconnected"), new Promise((r22) => r22());
    }
    async rpc(request) {
      if (await this.ready, !this.connection.url) throw new ConnectionUnavailable();
      if ((!this.connection.namespace || !this.connection.database) && !ALWAYS_ALLOW.has(request.method)) throw new MissingNamespaceDatabase();
      if (request.method === "use") {
        let [ns, db] = request.params;
        return ns === null && (this.connection.namespace = void 0), db === null && (this.connection.database = void 0), ns && (this.connection.namespace = ns), db && (this.connection.database = db), { result: true };
      }
      if (request.method === "let") {
        let [key, value] = request.params;
        return this.connection.variables[key] = value, { result: true };
      }
      if (request.method === "unset") {
        let [key] = request.params;
        return delete this.connection.variables[key], { result: true };
      }
      request.method === "query" && (request.params = [request.params?.[0], { ...this.connection.variables, ...request.params?.[1] ?? {} }]);
      let id22 = getIncrementalID(), buffer = await this.req_post({ id: id22, ...request }), response = this.decodeCbor(buffer);
      if ("result" in response) switch (request.method) {
        case "signin":
        case "signup": {
          this.connection.token = response.result;
          break;
        }
        case "authenticate": {
          let [token] = request.params;
          this.connection.token = token;
          break;
        }
        case "invalidate": {
          this.connection.token = void 0;
          break;
        }
      }
      return this.emitter.emit(`rpc-${id22}`, [response]), response;
    }
    get connected() {
      return !!this.connection.url;
    }
    async export(options) {
      if (!this.connection.url) throw new ConnectionUnavailable();
      let url = new URL(this.connection.url), basepath = url.pathname.slice(0, -4);
      url.pathname = `${basepath}/export`;
      let buffer = await this.req_post(options ?? {}, url, { Accept: "plain/text" });
      return new TextDecoder("utf-8").decode(buffer);
    }
  };
  var WebsocketEngine = class extends AbstractEngine {
    pinger;
    socket;
    constructor(context) {
      super(context), this.emitter.subscribe("disconnected", () => this.pinger?.stop());
    }
    setStatus(status, ...args) {
      this.status = status, this.emitter.emit(status, args);
    }
    async requireStatus(status) {
      return this.status !== status && await this.emitter.subscribeOnce(status), true;
    }
    version(url, timeout) {
      return retrieveRemoteVersion(url, timeout);
    }
    async connect(url) {
      this.connection.url = url, this.setStatus("connecting");
      let socket = new WebSocket2(url.toString(), "cbor"), ready = new Promise((resolve, reject) => {
        socket.addEventListener("open", () => {
          this.setStatus("connected"), resolve();
        }), socket.addEventListener("error", (e12) => {
          let error = new UnexpectedConnectionError("detail" in e12 ? e12.detail : "error" in e12 ? e12.error : "An unexpected error occurred");
          this.setStatus("error", error), reject(error);
        }), socket.addEventListener("close", () => {
          this.setStatus("disconnected");
        }), socket.addEventListener("message", async ({ data }) => {
          try {
            let decoded = this.decodeCbor(data instanceof ArrayBuffer ? data : data instanceof Blob ? await data.arrayBuffer() : data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength));
            if (typeof decoded == "object" && decoded != null && Object.getPrototypeOf(decoded) === Object.prototype) this.handleRpcResponse(decoded);
            else throw new UnexpectedServerResponse(decoded);
          } catch (detail) {
            socket.dispatchEvent(new CustomEvent("error", { detail }));
          }
        });
      });
      return this.ready = ready, await ready.then(() => {
        this.socket = socket, this.pinger?.stop(), this.pinger = new Pinger(3e4), this.pinger.start(() => this.rpc({ method: "ping" }));
      });
    }
    async disconnect() {
      this.connection = { url: void 0, namespace: void 0, database: void 0, token: void 0 }, await this.ready?.catch(() => {
      }), this.socket?.close(), this.ready = void 0, this.socket = void 0, await Promise.any([this.requireStatus("disconnected"), this.requireStatus("error")]);
    }
    async rpc(request) {
      if (await this.ready, !this.socket) throw new ConnectionUnavailable();
      let id22 = getIncrementalID(), response = this.emitter.subscribeOnce(`rpc-${id22}`);
      this.socket.send(this.encodeCbor({ id: id22, ...request }));
      let [res] = await response;
      if (res instanceof EngineDisconnected) throw res;
      if ("result" in res) switch (request.method) {
        case "use": {
          let [ns, db] = request.params;
          ns === null && (this.connection.namespace = void 0), db === null && (this.connection.database = void 0), ns && (this.connection.namespace = ns), db && (this.connection.database = db);
          break;
        }
        case "signin":
        case "signup": {
          this.connection.token = res.result;
          break;
        }
        case "authenticate": {
          let [token] = request.params;
          this.connection.token = token;
          break;
        }
        case "invalidate": {
          this.connection.token = void 0;
          break;
        }
      }
      return res;
    }
    handleRpcResponse({ id: id22, ...res }) {
      if (id22) this.emitter.emit(`rpc-${id22}`, [res]);
      else if (res.error) this.setStatus("error", new ResponseError(res.error));
      else if (isLiveResult(res.result)) {
        let { id: id32, action, result } = res.result;
        this.emitter.emit(`live-${id32}`, [action, result], true);
      } else this.setStatus("error", new UnexpectedServerResponse({ id: id22, ...res }));
    }
    get connected() {
      return !!this.socket;
    }
    async export(options) {
      if (!this.connection.url) throw new ConnectionUnavailable();
      let url = new URL(this.connection.url), basepath = url.pathname.slice(0, -4);
      url.protocol = url.protocol.replace("ws", "http"), url.pathname = `${basepath}/export`;
      let buffer = await this.req_post(options ?? {}, url, { Accept: "plain/text" });
      return new TextDecoder("utf-8").decode(buffer);
    }
  };
  var Pinger = class {
    pinger;
    interval;
    constructor(interval = 3e4) {
      this.interval = interval;
    }
    start(callback) {
      this.pinger = setInterval(callback, this.interval);
    }
    stop() {
      clearInterval(this.pinger);
    }
  };
  var Surreal = class {
    connection;
    ready;
    emitter;
    engines = { ws: WebsocketEngine, wss: WebsocketEngine, http: HttpEngine, https: HttpEngine };
    constructor({ engines } = {}) {
      this.emitter = new Emitter(), this.emitter.subscribe("disconnected", () => this.clean()), this.emitter.subscribe("error", () => this.close()), engines && (this.engines = { ...this.engines, ...engines });
    }
    async connect(url, opts = {}) {
      url = new URL(url), url.pathname.endsWith("/rpc") || (url.pathname.endsWith("/") || (url.pathname += "/"), url.pathname += "rpc");
      let engineName = url.protocol.slice(0, -1), engine = this.engines[engineName];
      if (!engine) throw new UnsupportedEngine(engineName);
      let { prepare, auth, namespace, database } = opts;
      await this.close();
      let context = new EngineContext({ emitter: this.emitter, encodeCbor, decodeCbor }), connection = new engine(context);
      if (opts.versionCheck !== false) {
        let version = await connection.version(url, opts.versionCheckTimeout);
        versionCheck(version);
      }
      return this.connection = connection, this.ready = new Promise((resolve, reject) => connection.connect(url).then(async () => {
        (namespace || database) && await this.use({ namespace, database }), typeof auth == "string" ? await this.authenticate(auth) : auth && await this.signin(auth), await prepare?.(this), resolve();
      }).catch(reject)), await this.ready, true;
    }
    async close() {
      return this.clean(), await this.connection?.disconnect(), true;
    }
    clean() {
      let pending = this.emitter.scanListeners((k2) => k2.startsWith("rpc-"));
      pending.map((k2) => this.emitter.emit(k2, [new EngineDisconnected()]));
      let live = this.emitter.scanListeners((k2) => k2.startsWith("live-"));
      live.map((k2) => this.emitter.emit(k2, ["CLOSE", "disconnected"])), this.emitter.reset({ collectable: true, listeners: [...pending, ...live] });
    }
    get status() {
      return this.connection?.status ?? "disconnected";
    }
    async ping() {
      let { error } = await this.rpc("ping");
      if (error) throw new ResponseError(error.message);
      return true;
    }
    async use({ namespace, database }) {
      if (!this.connection) throw new NoActiveSocket();
      if (namespace === null && database !== null) throw new SurrealDbError("Cannot unset namespace without unsetting database");
      let { error } = await this.rpc("use", [namespace, database]);
      if (error) throw new ResponseError(error.message);
      return true;
    }
    async info() {
      await this.ready;
      let res = await this.rpc("info");
      if (res.error) throw new ResponseError(res.error.message);
      return res.result ?? void 0;
    }
    async signup(vars) {
      if (!this.connection) throw new NoActiveSocket();
      let parsed = processAuthVars(vars, this.connection.connection), converted = convertAuth(parsed), res = await this.rpc("signup", [converted]);
      if (res.error) throw new ResponseError(res.error.message);
      if (!res.result) throw new NoTokenReturned();
      return res.result;
    }
    async signin(vars) {
      if (!this.connection) throw new NoActiveSocket();
      let parsed = processAuthVars(vars, this.connection.connection), converted = convertAuth(parsed), res = await this.rpc("signin", [converted]);
      if (res.error) throw new ResponseError(res.error.message);
      if (!res.result) throw new NoTokenReturned();
      return res.result;
    }
    async authenticate(token) {
      let res = await this.rpc("authenticate", [token]);
      if (res.error) throw new ResponseError(res.error.message);
      return true;
    }
    async invalidate() {
      let res = await this.rpc("invalidate");
      if (res.error) throw new ResponseError(res.error.message);
      return true;
    }
    async let(variable, value) {
      let res = await this.rpc("let", [variable, value]);
      if (res.error) throw new ResponseError(res.error.message);
      return true;
    }
    async unset(variable) {
      let res = await this.rpc("unset", [variable]);
      if (res.error) throw new ResponseError(res.error.message);
      return true;
    }
    async live(table, callback, diff) {
      await this.ready;
      let res = await this.rpc("live", [table, diff]);
      if (res.error) throw new ResponseError(res.error.message);
      return callback && this.subscribeLive(res.result, callback), res.result;
    }
    async subscribeLive(queryUuid, callback) {
      if (await this.ready, !this.connection) throw new NoActiveSocket();
      this.connection.emitter.subscribe(`live-${queryUuid}`, callback, true);
    }
    async unSubscribeLive(queryUuid, callback) {
      if (await this.ready, !this.connection) throw new NoActiveSocket();
      this.connection.emitter.unSubscribe(`live-${queryUuid}`, callback);
    }
    async kill(queryUuid) {
      if (await this.ready, !this.connection) throw new NoActiveSocket();
      if (Array.isArray(queryUuid)) {
        await Promise.all(queryUuid.map((u22) => this.rpc("kill", [u22])));
        let toBeKilled = queryUuid.map((u22) => `live-${u22}`);
        toBeKilled.map((k2) => this.emitter.emit(k2, ["CLOSE", "killed"])), this.connection.emitter.reset({ collectable: toBeKilled, listeners: toBeKilled });
      } else await this.rpc("kill", [queryUuid]), this.emitter.emit(`live-${queryUuid}`, ["CLOSE", "killed"]), this.connection.emitter.reset({ collectable: `live-${queryUuid}`, listeners: `live-${queryUuid}` });
    }
    async query(...args) {
      return (await this.queryRaw(...args)).map(({ status, result }) => {
        if (status === "ERR") throw new ResponseError(result);
        return result;
      });
    }
    async queryRaw(...[q, b3]) {
      let params = q instanceof PreparedQuery ? [q.query, partiallyEncodeObject(q.bindings, { fills: b3, replacer: replacer.encode })] : [q, b3];
      await this.ready;
      let res = await this.rpc("query", params);
      if (res.error) throw new ResponseError(res.error.message);
      return res.result;
    }
    async query_raw(...args) {
      return this.queryRaw(...args);
    }
    async select(thing) {
      await this.ready;
      let res = await this.rpc("select", [thing]);
      if (res.error) throw new ResponseError(res.error.message);
      return output(thing, res.result);
    }
    async create(thing, data) {
      await this.ready;
      let res = await this.rpc("create", [thing, data]);
      if (res.error) throw new ResponseError(res.error.message);
      return output(thing, res.result);
    }
    async insert(arg1, arg2) {
      await this.ready;
      let [table, data] = typeof arg1 == "string" || arg1 instanceof Table ? [arg1, arg2] : [void 0, arg1], res = await this.rpc("insert", [table, data]);
      if (res.error) throw new ResponseError(res.error.message);
      return res.result;
    }
    async insertRelation(arg1, arg2) {
      await this.ready;
      let [table, data] = typeof arg1 == "string" || arg1 instanceof Table ? [arg1, arg2] : [void 0, arg1], res = await this.rpc("insert_relation", [table, data]);
      if (res.error) throw new ResponseError(res.error.message);
      return res.result;
    }
    async insert_relation(arg1, arg2) {
      return arg1 instanceof Table || typeof arg1 == "string" ? this.insertRelation(arg1, arg2) : this.insertRelation(arg1);
    }
    async update(thing, data) {
      await this.ready;
      let res = await this.rpc("update", [thing, data]);
      if (res.error) throw new ResponseError(res.error.message);
      return output(thing, res.result);
    }
    async upsert(thing, data) {
      await this.ready;
      let res = await this.rpc("upsert", [thing, data]);
      if (res.error) throw new ResponseError(res.error.message);
      return output(thing, res.result);
    }
    async merge(thing, data) {
      await this.ready;
      let res = await this.rpc("merge", [thing, data]);
      if (res.error) throw new ResponseError(res.error.message);
      return output(thing, res.result);
    }
    async patch(thing, data, diff) {
      await this.ready;
      let res = await this.rpc("patch", [thing, data, diff]);
      if (res.error) throw new ResponseError(res.error.message);
      return diff ? res.result : output(thing, res.result);
    }
    async delete(thing) {
      await this.ready;
      let res = await this.rpc("delete", [thing]);
      if (res.error) throw new ResponseError(res.error.message);
      return output(thing, res.result);
    }
    async version() {
      await this.ready;
      let res = await this.rpc("version");
      if (res.error) throw new ResponseError(res.error.message);
      return res.result;
    }
    async run(name2, arg2, arg3) {
      await this.ready;
      let [version, args] = Array.isArray(arg2) ? [void 0, arg2] : [arg2, arg3], res = await this.rpc("run", [name2, version, args]);
      if (res.error) throw new ResponseError(res.error.message);
      return res.result;
    }
    async relate(from, thing, to, data) {
      await this.ready;
      let res = await this.rpc("relate", [from, thing, to, data]);
      if (res.error) throw new ResponseError(res.error.message);
      return output(thing, res.result);
    }
    rpc(method, params) {
      if (!this.connection) throw new NoActiveSocket();
      return this.connection.rpc({ method, params });
    }
    async export(options) {
      if (await this.ready, !this.connection) throw new NoActiveSocket();
      return this.connection.export(options);
    }
  };
  function output(subject, input) {
    return subject instanceof RecordId || subject instanceof StringRecordId ? Array.isArray(input) ? input[0] : input : Array.isArray(input) ? input : [input];
  }

  // src/adapters/SurrealDb.ts
  var TB_LISTINGS = "listings";
  function Connect(_target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function(...args) {
      const self2 = this;
      await self2.connect();
      return originalMethod.apply(this, args);
    };
  }
  var SurrealAdapter = class {
    db = new Surreal();
    config;
    constructor(config) {
      const {
        namespace,
        database,
        datapoint
      } = config;
      this.config = {
        namespace,
        database,
        url: new URL(`${datapoint}/rpc`).href
      };
      Object.freeze(this.config);
    }
    async connect(options = { resetError: false }) {
      if ("connecting" === this.db.status) {
        await this.db.ready;
      } else if ("disconnected" === this.db.status || options.resetError) {
        try {
          const { url, namespace, database } = this.config;
          await this.db.connect(url, { namespace, database });
        } catch (err) {
          console.error("Failed to connect to SurrealDB:", err instanceof Error ? err.message : String(err));
          await this.db.close();
          throw err;
        }
      } else if ("error" === this.db.status) {
        throw new Error("Not connected to SurrealDb");
      }
      return this.db.status;
    }
    async authenticate(token) {
    }
    async signup() {
    }
    async signin() {
    }
    async invalidate() {
    }
    async getListings(filters) {
      let whereClause = "";
      const conditions = [];
      if (filters?.letter) {
        conditions.push(`string::starts_with(string::lowercase(title), '${filters.letter.toLocaleLowerCase()}')`);
      }
      if (filters?.tag) {
        conditions.push(`tags[WHERE key = '${filters.tag}']`);
      }
      if (conditions.length) {
        whereClause = ` WHERE ${conditions.join(" AND ")}`;
      }
      const query = `SELECT *, tags.*.* FROM ${TB_LISTINGS}${whereClause};`;
      const res = (await this.db.query(query)).pop();
      return res;
    }
    async getIndex() {
      const query = `SELECT string::slice(title, 0, 1) AS letter, count() AS count FROM ${TB_LISTINGS} GROUP BY letter;`;
      const res = (await this.db.query(query)).pop();
      return res;
    }
    async getTags() {
      const query = `SELECT *, count(
      SELECT id
      FROM listings
      WHERE $parent.id INSIDE tags
    ) as usages
    FROM tags;`;
      const res = (await this.db.query(query)).pop();
      return res;
    }
  };
  __decorateClass([
    Connect
  ], SurrealAdapter.prototype, "getListings", 1);
  __decorateClass([
    Connect
  ], SurrealAdapter.prototype, "getIndex", 1);
  __decorateClass([
    Connect
  ], SurrealAdapter.prototype, "getTags", 1);
  var SurrealDb_default = SurrealAdapter;

  // node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs
  var util;
  (function(util2) {
    util2.assertEqual = (val) => val;
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
      const filtered = {};
      for (const k2 of validKeys) {
        filtered[k2] = obj[k2];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e12) {
        return obj[e12];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_2, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second2) => {
      return {
        ...first,
        ...second2
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  var getParsedType = (data) => {
    const t6 = typeof data;
    switch (t6) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  var quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  var ZodError = class _ZodError extends Error {
    get errors() {
      return this.issues;
    }
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i8 = 0;
            while (i8 < issue.path.length) {
              const el = issue.path[i8];
              const terminal = i8 === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i8++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof _ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
          fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
  };
  var errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  var overrideErrorMap = errorMap;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }
  var makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m3) => !!m3).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: errorMessage
    };
  };
  var EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === errorMap ? void 0 : errorMap
        // then global default map
      ].filter((x2) => !!x2)
    });
    ctx.common.issues.push(issue);
  }
  var ParseStatus = class _ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s4 of results) {
        if (s4.status === "aborted")
          return INVALID;
        if (s4.status === "dirty")
          status.dirty();
        arrayValue.push(s4.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key;
        const value = await pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return _ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  };
  var INVALID = Object.freeze({
    status: "aborted"
  });
  var DIRTY = (value) => ({ status: "dirty", value });
  var OK = (value) => ({ status: "valid", value });
  var isAborted = (x2) => x2.status === "aborted";
  var isDirty = (x2) => x2.status === "dirty";
  var isValid = (x2) => x2.status === "valid";
  var isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
  function __classPrivateFieldGet(receiver, state, kind, f6) {
    if (kind === "a" && !f6) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f6 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f6 : kind === "a" ? f6.call(receiver) : f6 ? f6.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f6) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f6) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f6 : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f6.call(receiver, value) : f6 ? f6.value = value : state.set(receiver, value), value;
  }
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
  })(errorUtil || (errorUtil = {}));
  var _ZodEnum_cache;
  var _ZodNativeEnum_cache;
  var ParseInputLazyPath = class {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (this._key instanceof Array) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  };
  var handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      var _a, _b;
      const { message } = params;
      if (iss.code === "invalid_enum_value") {
        return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  var ZodType = class {
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      var _a;
      const ctx = {
        common: {
          issues: [],
          async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    "~validate"(data) {
      var _a, _b;
      const ctx = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      if (!this["~standard"].async) {
        try {
          const result = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result) ? {
            value: result.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
        value: result.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
          async: true
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
      this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (data) => this["~validate"](data)
      };
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  };
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var cuid2Regex = /^[0-9a-z]+$/;
  var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  var nanoidRegex = /^[a-z0-9_-]{21}$/i;
  var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  var emojiRegex;
  var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  var dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) {
      regex = `${regex}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      regex = `${regex}(\\.\\d+)?`;
    }
    return regex;
  }
  function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
  }
  function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if (!decoded.typ || !decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch (_a) {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  var ZodString = class _ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "nanoid") {
          if (!nanoidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "nanoid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch (_a) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "time",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "duration") {
          if (!durationRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "duration",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "jwt") {
          if (!isValidJWT(input.data, check.alg)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "jwt",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cidr") {
          if (!isValidCidr(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cidr",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64") {
          if (!base64Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64url") {
          if (!base64urlRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      var _a, _b;
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
        offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
        local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options === null || options === void 0 ? void 0 : options.position,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxLength() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
  };
  ZodString.create = (params) => {
    var _a;
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
      ...processCreateParams(params)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  var ZodNumber = class _ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxValue() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max2 = null, min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        } else if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return Number.isFinite(min2) && Number.isFinite(max2);
    }
  };
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  var ZodBigInt = class _ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch (_a) {
          return this._getInvalidInput(input);
        }
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxValue() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
  };
  ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
      ...processCreateParams(params)
    });
  };
  var ZodBoolean = class extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  var ZodDate = class _ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new _ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2 != null ? new Date(min2) : null;
    }
    get maxDate() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2 != null ? new Date(max2) : null;
    }
  };
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  var ZodSymbol = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  var ZodUndefined = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  var ZodNull = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  var ZodAny = class extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  var ZodUnknown = class extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  var ZodNever = class extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  };
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  var ZodVoid = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  var ZodArray = class _ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i8) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i8));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i8) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i8));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new _ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new _ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new _ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodArray.create = (schema, params) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  var ZodObject = class _ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      return this._cached = { shape, keys };
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            var _a, _b, _c, _d;
            const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new _ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new _ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index2) {
      return new _ZodObject({
        ...this._def,
        catchall: index2
      });
    }
    pick(mask) {
      const shape = {};
      util.objectKeys(mask).forEach((key) => {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  };
  ZodObject.create = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  var ZodUnion = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  var getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return util.objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else if (type instanceof ZodOptional) {
      return [void 0, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodNullable) {
      return [null, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodBranded) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
      return getDiscriminator(type._def.innerType);
    } else {
      return [];
    }
  };
  var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues.length) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
          optionsMap.set(value, type);
        }
      }
      return new _ZodDiscriminatedUnion({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  };
  function mergeValues(a4, b3) {
    const aType = getParsedType(a4);
    const bType = getParsedType(b3);
    if (a4 === b3) {
      return { valid: true, data: a4 };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b3);
      const sharedKeys = util.objectKeys(a4).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a4, ...b3 };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a4[key], b3[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a4.length !== b3.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index2 = 0; index2 < a4.length; index2++) {
        const itemA = a4[index2];
        const itemB = b3[index2];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a4 === +b3) {
      return { valid: true, data: a4 };
    } else {
      return { valid: false };
    }
  }
  var ZodIntersection = class extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  };
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  var ZodTuple = class _ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x2) => !!x2);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new _ZodTuple({
        ...this._def,
        rest
      });
    }
  };
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  var ZodRecord = class _ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second2, third) {
      if (second2 instanceof ZodType) {
        return new _ZodRecord({
          keyType: first,
          valueType: second2,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(third)
        });
      }
      return new _ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(second2)
      });
    }
  };
  var ZodMap = class extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index2) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index2, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index2, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  };
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  var ZodSet = class _ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i8) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i8)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new _ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new _ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size3, message) {
      return this.min(size3, message).max(size3, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  var ZodFunction = class _ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x2) => !!x2),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error
          }
        });
      }
      function makeReturnsIssue(returns, error) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x2) => !!x2),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        const me = this;
        return OK(async function(...args) {
          const error = new ZodError([]);
          const parsedArgs = await me._def.args.parseAsync(args, params).catch((e12) => {
            error.addIssue(makeArgsIssue(args, e12));
            throw error;
          });
          const result = await Reflect.apply(fn, this, parsedArgs);
          const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e12) => {
            error.addIssue(makeReturnsIssue(result, e12));
            throw error;
          });
          return parsedReturns;
        });
      } else {
        const me = this;
        return OK(function(...args) {
          const parsedArgs = me._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = Reflect.apply(fn, this, parsedArgs.data);
          const parsedReturns = me._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new _ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new _ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params) {
      return new _ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: ZodFirstPartyTypeKind.ZodFunction,
        ...processCreateParams(params)
      });
    }
  };
  var ZodLazy = class extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  };
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  var ZodLiteral = class extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  };
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params)
    });
  };
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params)
    });
  }
  var ZodEnum = class _ZodEnum extends ZodType {
    constructor() {
      super(...arguments);
      _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
        __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
      }
      if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values, newDef = this._def) {
      return _ZodEnum.create(values, {
        ...this._def,
        ...newDef
      });
    }
    exclude(values, newDef = this._def) {
      return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
        ...this._def,
        ...newDef
      });
    }
  };
  _ZodEnum_cache = /* @__PURE__ */ new WeakMap();
  ZodEnum.create = createZodEnum;
  var ZodNativeEnum = class extends ZodType {
    constructor() {
      super(...arguments);
      _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
        __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
      }
      if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  _ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  var ZodPromise = class extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  };
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  var ZodEffects = class extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return base;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return base;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
          });
        }
      }
      util.assertNever(effect);
    }
  };
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  var ZodOptional = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  var ZodNullable = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  var ZodDefault = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  var ZodCatch = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  var ZodNaN = class extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  };
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  var BRAND = Symbol("zod_brand");
  var ZodBranded = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  };
  var ZodPipeline = class _ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a4, b3) {
      return new _ZodPipeline({
        in: a4,
        out: b3,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  };
  var ZodReadonly = class extends ZodType {
    _parse(input) {
      const result = this._def.innerType._parse(input);
      const freeze = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params)
    });
  };
  function custom(check, params = {}, fatal) {
    if (check)
      return ZodAny.create().superRefine((data, ctx) => {
        var _a, _b;
        if (!check(data)) {
          const p3 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
          const _fatal = (_b = (_a = p3.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
          const p22 = typeof p3 === "string" ? { message: p3 } : p3;
          ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
        }
      });
    return ZodAny.create();
  }
  var late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  var instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var nanType = ZodNaN.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var symbolType = ZodSymbol.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var discriminatedUnionType = ZodDiscriminatedUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var pipelineType = ZodPipeline.create;
  var ostring = () => stringType().optional();
  var onumber = () => numberType().optional();
  var oboolean = () => booleanType().optional();
  var coerce = {
    string: (arg) => ZodString.create({ ...arg, coerce: true }),
    number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
    boolean: (arg) => ZodBoolean.create({
      ...arg,
      coerce: true
    }),
    bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
    date: (arg) => ZodDate.create({ ...arg, coerce: true })
  };
  var NEVER = INVALID;
  var z = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap,
    getErrorMap,
    makeIssue,
    EMPTY_PATH,
    addIssueToContext,
    ParseStatus,
    INVALID,
    DIRTY,
    OK,
    isAborted,
    isDirty,
    isValid,
    isAsync,
    get util() {
      return util;
    },
    get objectUtil() {
      return objectUtil;
    },
    ZodParsedType,
    getParsedType,
    ZodType,
    datetimeRegex,
    ZodString,
    ZodNumber,
    ZodBigInt,
    ZodBoolean,
    ZodDate,
    ZodSymbol,
    ZodUndefined,
    ZodNull,
    ZodAny,
    ZodUnknown,
    ZodNever,
    ZodVoid,
    ZodArray,
    ZodObject,
    ZodUnion,
    ZodDiscriminatedUnion,
    ZodIntersection,
    ZodTuple,
    ZodRecord,
    ZodMap,
    ZodSet,
    ZodFunction,
    ZodLazy,
    ZodLiteral,
    ZodEnum,
    ZodNativeEnum,
    ZodPromise,
    ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional,
    ZodNullable,
    ZodDefault,
    ZodCatch,
    ZodNaN,
    BRAND,
    ZodBranded,
    ZodPipeline,
    ZodReadonly,
    custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late,
    get ZodFirstPartyTypeKind() {
      return ZodFirstPartyTypeKind;
    },
    coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean,
    onumber,
    optional: optionalType,
    ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    NEVER,
    ZodIssueCode,
    quotelessJson,
    ZodError
  });

  // src/lib/utils.ts
  var createVoidSignal = createSignal(void 0, {
    equals: false
  });
  var logError = (error) => {
    const str = [error.name, error.message].filter((x2) => x2).join("::");
    console.warn(str, error);
  };
  function zodGetDefaults(schema) {
    return Object.fromEntries(
      Object.entries(CreateTranscriptSchema.shape).map(([k2, v2]) => [k2, v2 instanceof z.ZodDefault ? v2._def.defaultValue() : void 0]).filter(([k2, v2]) => v2 !== void 0)
    );
  }
  function zodSchemaDefaults(schema) {
    if (schema instanceof z.ZodEffects) {
      if (schema.innerType() instanceof z.ZodEffects) return zodGetDefaults(schema.innerType());
      return zodGetDefaults(z.ZodObject.create(schema.innerType().shape));
    }
    function getDefaultValue(schema2) {
      if (schema2 instanceof z.ZodDefault) return schema2._def.defaultValue();
      if (schema2 instanceof z.ZodArray) return [];
      if (schema2 instanceof z.ZodString) return "";
      if (schema2 instanceof z.ZodObject) return zodGetDefaults(schema2);
      if (!("innerType" in schema2._def)) return void 0;
      return getDefaultValue(schema2._def.innerType);
    }
    return Object.fromEntries(
      Object.entries(schema.shape).map(([key, value]) => {
        return [key, getDefaultValue(value)];
      })
    );
  }

  // src/lib/form-utils.ts
  var reName = new RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u);
  var rePhone = new RegExp(/^([\+][1-9]{2})?[ ]?([0-9 ]{8})$/);
  var reStreet = new RegExp(/^[\p{L}'][ \p{L}\p{N}'-,]{8,}$/u);
  var rePass = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?!.* ).{3,16}$/);
  var email = z.string().trim().email("Must be a valid email address");
  var name = z.string().trim().regex(reName, "Must be a valid name");
  var pass = z.string().trim().regex(rePass, "Must be 3-16 charcters and contain one digit and a special char");
  var address = z.string().trim().regex(reStreet, "Must be a valid street address").or(z.literal(""));
  var phone = z.preprocess(
    (val) => val.split(" ").join(""),
    z.string().trim().regex(rePhone, "Must be a valid phone number").or(z.literal(""))
  );
  var checkLoadedData = (Schema, values) => {
    const res = Schema.safeParse(values);
    if (!res.success) {
      console.warn("Incompatible data loaded:", res.error.flatten());
    }
  };

  // src/core/AuthService.ts
  var AuthSchema = z.object({
    isAuthenticated: z.boolean().default(false)
  });
  var CredentialsSchema = z.object({
    email: email.default(""),
    pass: pass.default("")
  });
  var AuthService = class {
    repo;
    #accessToken;
    #setState;
    state;
    constructor(repository, useState) {
      this.repo = repository;
      this.#accessToken = "";
      const [state, setState] = useState(zodSchemaDefaults(AuthSchema));
      this.#setState = setState;
      this.state = state;
    }
    #storeAccessToken() {
      localStorage.accessToken = this.#accessToken;
    }
    get #isAuthenticated() {
      return !!this.#accessToken && this.repo.isConnected;
    }
    async authenticate() {
      if (localStorage.accessToken) {
        this.#accessToken = localStorage.accessToken;
        try {
          console.info("Authenticating token from localStorage...");
          await this.repo.authenticate(this.#accessToken);
        } catch (error) {
          logError(error);
          return this.signout();
        }
        this.#setState((prev) => ({
          ...prev,
          isAuthenticated: this.#isAuthenticated
        }));
      }
    }
    async signup(credentials) {
      try {
        this.#accessToken = await this.repo.signup({
          email: credentials.email,
          pass: credentials.pass
        });
      } catch (err) {
        throw err;
      }
      this.#storeAccessToken();
      this.#setState((prev) => ({
        ...prev,
        isAuthenticated: this.#isAuthenticated
      }));
    }
    async signin(credentials) {
      try {
        this.#accessToken = await this.repo.signin({
          email: credentials.email,
          pass: credentials.pass
        });
      } catch (err) {
        throw err;
      }
      this.#storeAccessToken();
      this.#setState((prev) => ({
        ...prev,
        isAuthenticated: this.#isAuthenticated
      }));
    }
    async signout() {
      this.#accessToken = "";
      this.#storeAccessToken();
      await this.repo.invalidate();
      this.#setState((prev) => ({
        ...prev,
        isAuthenticated: this.#isAuthenticated
      }));
    }
  };
  var AuthService_default = AuthService;

  // src/core/AccountService.ts
  var AccountSchema = z.object({
    email: email.default("")
  });
  var UpdateEmailSchema = z.object({
    email: email.default(""),
    pass: pass.default("")
  });
  var UpdatePassSchema = z.object({
    newPass: pass.default(""),
    pass: pass.default("")
  });
  var DeleteAccountSchema = z.object({
    pass: pass.default("")
  });
  var AccountService = class {
    repo;
    #setState;
    state;
    constructor(SurrealAdapter2, useState) {
      this.repo = SurrealAdapter2;
      const [state, setState] = useState(zodSchemaDefaults(AccountSchema));
      this.#setState = setState;
      this.state = state;
    }
    async loadData() {
      const details = await this.repo.getAccountDetails();
      checkLoadedData(AccountSchema, details);
      this.#setState(details);
    }
    async updateEmail(details) {
      await this.repo.setAccountEmail(details);
      this.#setState({ email: details.email });
    }
    async updatePassword(details) {
      await this.repo.setAccountPassword(details);
    }
    async deleteAccount(details) {
      await this.repo.deleteAccount();
    }
  };
  var AccountService_default = AccountService;

  // src/core/ProfileService.ts
  var ProfileSchema = z.object({
    firstName: name.default(""),
    lastName: name.default(""),
    address: address.default(""),
    phone: phone.default("")
  });
  var ProfileService = class {
    repo;
    #setState;
    state;
    constructor(SurrealAdapter2, useState) {
      this.repo = SurrealAdapter2;
      const [state, setState] = useState(zodSchemaDefaults(ProfileSchema));
      this.#setState = setState;
      this.state = state;
    }
    async loadData() {
      const details = await this.repo.getProfileDetails();
      checkLoadedData(ProfileSchema, details);
      this.#setState(details);
    }
    async saveData(details) {
      await this.repo.setProfileDetails(details);
      this.#setState(details);
    }
  };
  var ProfileService_default = ProfileService;

  // src/core/repository.ts
  var ProductSchema = z.object({
    isActive: z.boolean(),
    title: z.string(),
    description: z.string(),
    address: z.string(),
    muncipiality: z.string(),
    zip: z.string().regex(/^\d{4}$/),
    phone: z.string(),
    // TODO! Get from '~/lib/form-utils
    email: z.string().email(),
    // TODO! Get from '~/lib/form-utils
    id: z.object({
      tb: z.string(),
      id: z.string()
    }),
    links: z.array(
      z.object({
        href: z.string()
      })
    ),
    tags: z.array(
      z.object({
        key: z.string(),
        name: z.string()
      })
    )
  });
  var ProductListSchema = z.array(ProductSchema);
  var IndexSchema = z.object({
    letter: z.string().length(1),
    count: z.number()
  });
  var IndexListSchema = z.array(IndexSchema);
  var FiltersSchema = z.object({
    letter: z.string().length(1).optional(),
    tag: z.string().optional(),
    text: z.string().optional()
  });
  var TagSchema = z.object({
    key: z.string(),
    name: z.string(),
    usages: z.number()
  });
  var TagsSchema = z.array(TagSchema);

  // src/core/DirectoryService.ts
  var DirectoryService = class {
    repo;
    filters;
    setFilters;
    listings;
    indexLetters;
    tags;
    constructor(repository) {
      this.repo = repository;
      [this.filters, this.setFilters] = createSignal(zodSchemaDefaults(FiltersSchema));
      [this.listings] = createResource(
        () => this.filters(),
        (filterValue) => this.loadListings(filterValue)
      );
      [this.indexLetters] = createResource(() => this.loadIndex());
      [this.tags] = createResource(() => this.loadTags());
    }
    async loadIndex() {
      const details = await this.repo.getIndex();
      checkLoadedData(IndexListSchema, details);
      return details.sort((a4, b3) => a4.letter < b3.letter ? -1 : 1);
    }
    async loadTags() {
      const details = await this.repo.getTags();
      checkLoadedData(TagsSchema, details);
      return details.filter(({ usages }) => usages).sort((a4, b3) => a4.name < b3.name ? -1 : 1);
    }
    async loadListings(filters) {
      const details = await this.repo.getListings(filters);
      checkLoadedData(ProductListSchema, details);
      return details.sort((a4, b3) => a4.title < b3.title ? -1 : 1);
    }
  };
  var DirectoryService_default = DirectoryService;

  // src/components/ServiceProvider.tsx
  var ServiceContext = createContext();
  var ServiceProvider = (props) => {
    const repository = new SurrealDb_default({
      datapoint: props.datapoint,
      namespace: props.namespace,
      database: props.database
    });
    const directoryService = new DirectoryService_default(repository);
    const authService = new AuthService_default(repository, createSignal);
    const accountService = new AccountService_default(repository, createSignal);
    const profileService = new ProfileService_default(repository, createSignal);
    const services = {
      api: repository,
      auth: authService,
      account: accountService,
      profile: profileService,
      directory: directoryService
    };
    return createComponent(ServiceContext.Provider, {
      value: services,
      get children() {
        return props.children;
      }
    });
  };
  var useService = () => {
    return useContext(ServiceContext);
  };

  // src/components/partials/Loading.tsx
  var _tmpl$ = /* @__PURE__ */ template(`<div><sl-spinner style=font-size:50px;--track-width:10px;></sl-spinner><div>`, true, false);
  var css = styler.css({
    centered: ({
      theme
    }) => ({
      textAlign: "center"
    })
  });
  var Loading = (props) => (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    _el$2._$owner = getOwner();
    insert(_el$3, () => props.children);
    createRenderEffect(() => className(_el$, join("loading", css.centered)));
    return _el$;
  })();

  // src/components/Layout.tsx
  var _tmpl$2 = /* @__PURE__ */ template(`<div><section><div><h1></h1></div><div><sl-icon-button>`, true, false);
  var _tmpl$22 = /* @__PURE__ */ template(`<div>Error: `);
  var css2 = styler.css({
    app: ({
      theme
    }) => ({
      padding: "10px 15px",
      color: theme.colorOnPrimary,
      backgroundColor: theme.colorPrimary,
      font: "16px var(--sl-font-sans)",
      fontWeight: "var(--sl-font-weight-normal)"
    }),
    border: ({
      theme
    }) => ({
      borderRadius: "10px",
      border: "5px solid",
      borderColor: theme.colorAccent
    }),
    header: ({
      theme
    }) => ({
      display: "flex",
      justifyContent: "space-between"
    }),
    title: ({
      theme
    }) => ({
      fontFamily: "'Playwrite HU', sans-serif",
      fontSize: theme.fontSizeLg
    })
  });
  var Layout = (props) => {
    return (() => {
      var _el$ = _tmpl$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$3.nextSibling, _el$6 = _el$5.firstChild;
      insert(_el$4, () => props.title);
      addEventListener(_el$6, "click", () => console.log("cog"));
      _el$6.name = "gear";
      _el$6._$owner = getOwner();
      insert(_el$, createComponent(ErrorBoundary, {
        fallback: (error) => {
          console.error(error);
          return (() => {
            var _el$7 = _tmpl$22(), _el$8 = _el$7.firstChild;
            insert(_el$7, () => error.message, null);
            return _el$7;
          })();
        },
        get children() {
          return createComponent(Suspense, {
            get fallback() {
              return createComponent(Loading, {});
            },
            get children() {
              return props.children;
            }
          });
        }
      }), null);
      createRenderEffect((_p$) => {
        var _v$ = join(css2.app, css2.border), _v$2 = css2.header, _v$3 = css2.title;
        _v$ !== _p$.e && className(_el$, _p$.e = _v$);
        _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
        _v$3 !== _p$.a && className(_el$4, _p$.a = _v$3);
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0
      });
      return _el$;
    })();
  };

  // src/components/partials/IconLabel.tsx
  var _tmpl$3 = /* @__PURE__ */ template(`<span><sl-icon></sl-icon><span>`, true, false);
  var css3 = styler.css({
    wrapper: {
      display: "flex"
    },
    label: {
      paddingInlineStart: "var(--sl-spacing-2x-small)"
    },
    icon: {
      minWidth: "20px"
    }
  });
  var IconLabel = (props) => {
    return (() => {
      var _el$ = _tmpl$3(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      _el$2._$owner = getOwner();
      insert(_el$3, () => props.children);
      createRenderEffect((_p$) => {
        var _v$ = css3.wrapper, _v$2 = css3.icon, _v$3 = props.icon, _v$4 = props.label, _v$5 = css3.label;
        _v$ !== _p$.e && className(_el$, _p$.e = _v$);
        _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
        _v$3 !== _p$.a && (_el$2.name = _p$.a = _v$3);
        _v$4 !== _p$.o && (_el$2.label = _p$.o = _v$4);
        _v$5 !== _p$.i && className(_el$3, _p$.i = _v$5);
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0,
        i: void 0
      });
      return _el$;
    })();
  };

  // src/components/partials/WebLink.tsx
  var _tmpl$4 = /* @__PURE__ */ template(`<a target=_blank>`);
  var WebLink = (props) => {
    const {
      pathname,
      hostname
    } = new URL(props.link.href);
    const link = {
      icon: "globe",
      title: "Website"
    };
    if (hostname.match(/facebook\.(no|com)/)) {
      link.icon = "facebook";
      link.title = "Facebook";
    } else if (hostname.match(/instagram\.(no|com)/)) {
      link.icon = "instagram";
      link.title = `@${pathname.split("/").pop()}`;
    } else if (hostname.match(/linkedin\.(no|com)/)) {
      link.icon = "linkedin";
      link.title = "LinkedIn";
    }
    return createComponent(IconLabel, {
      get icon() {
        return link.icon;
      },
      label: hostname,
      get children() {
        var _el$ = _tmpl$4();
        insert(_el$, () => link.title);
        createRenderEffect(() => setAttribute(_el$, "href", props.link.href));
        return _el$;
      }
    });
  };

  // src/components/partials/Phone.tsx
  var _tmpl$5 = /* @__PURE__ */ template(`<sl-dropdown><sl-button><sl-icon slot=prefix></sl-icon></sl-button><sl-menu><sl-menu-item><sl-icon slot=prefix></sl-icon>Copy</sl-menu-item><sl-menu-item><sl-icon slot=prefix></sl-icon>Call`, true, false);
  var Phone = (props) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(props.phoneNumber);
    };
    const triggerCall = () => {
      window.location.href = `tel:${props.phoneNumber}`;
    };
    return (() => {
      var _el$ = _tmpl$5(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$5.nextSibling, _el$8 = _el$7.firstChild;
      _el$._$owner = getOwner();
      _el$2.slot = "trigger";
      _el$2.caret = true;
      _el$2._$owner = getOwner();
      _el$3.name = "telephone";
      _el$3._$owner = getOwner();
      insert(_el$2, () => props.phoneNumber, null);
      _el$4._$owner = getOwner();
      addEventListener(_el$5, "click", copyToClipboard);
      _el$5._$owner = getOwner();
      _el$6.name = "copy";
      _el$6._$owner = getOwner();
      addEventListener(_el$7, "click", triggerCall);
      _el$7._$owner = getOwner();
      _el$8.name = "telephone";
      _el$8._$owner = getOwner();
      return _el$;
    })();
  };

  // src/components/partials/Address.tsx
  var _tmpl$6 = /* @__PURE__ */ template(`<br>`);
  var Address = (props) => {
    return [createMemo(() => props.address), _tmpl$6(), createMemo(() => props.zip), " ", createMemo(() => props.muncipiality)];
  };

  // src/components/partials/BadgeButton.tsx
  var _tmpl$7 = /* @__PURE__ */ template(`<div><div class=text>`);
  var _tmpl$23 = /* @__PURE__ */ template(`<sl-button><span>`, true, false);
  var css4 = styler.css({
    button: {
      // width: "34px",
      marginTop: "5px",
      marginRight: "5px"
    },
    badge: {
      position: "absolute",
      top: "-2px",
      right: "-2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "12px",
      height: "12px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "5px",
      backgroundColor: "var(--sl-color-primary-50)",
      borderColor: "var(--sl-color-primary-200)",
      "& > .text": {
        fontSize: "8px",
        color: "var(--sl-color-primary-800)"
      }
    }
  });
  var BadgeButton = (props) => {
    return (() => {
      var _el$ = _tmpl$23(), _el$2 = _el$.firstChild;
      addEventListener(_el$, "click", props.onClick, true);
      _el$._$owner = getOwner();
      insert(_el$2, () => props.buttonLabel);
      insert(_el$, createComponent(Show, {
        get when() {
          return props.badgeLabel;
        },
        get children() {
          var _el$3 = _tmpl$7(), _el$4 = _el$3.firstChild;
          insert(_el$4, () => props.badgeLabel);
          createRenderEffect(() => className(_el$3, css4.badge));
          return _el$3;
        }
      }), null);
      createRenderEffect((_p$) => {
        var _v$ = props.size || "medium", _v$2 = props.isActive ? "primary" : "default", _v$3 = css4.button, _v$4 = props.disabled;
        _v$ !== _p$.e && (_el$.size = _p$.e = _v$);
        _v$2 !== _p$.t && (_el$.variant = _p$.t = _v$2);
        _v$3 !== _p$.a && className(_el$, _p$.a = _v$3);
        _v$4 !== _p$.o && (_el$.disabled = _p$.o = _v$4);
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0
      });
      return _el$;
    })();
  };
  delegateEvents(["click"]);

  // src/components/partials/ProductFilters.tsx
  var _tmpl$8 = /* @__PURE__ */ template(`<section><div></div><div>`);
  var css5 = styler.css({
    section: ({
      theme
    }) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: theme.spaceY
    }),
    filterValues: ({
      theme
    }) => ({
      display: "flex",
      overflowY: "hidden",
      overflowX: "scroll"
    })
  });
  var ProductFilters = (props) => {
    const {
      directory
    } = useService();
    return (() => {
      var _el$ = _tmpl$8(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      insert(_el$2, () => directory.indexLetters()?.map(({
        letter,
        count
      }) => createComponent(BadgeButton, {
        buttonLabel: letter,
        badgeLabel: count,
        get isActive() {
          return props.filterState.letter === letter;
        },
        get disabled() {
          return props.loading;
        },
        onClick: () => props.onFilterChange({
          letter
        })
      })));
      insert(_el$3, () => directory.tags()?.map(({
        key,
        name: name2,
        usages
      }) => createComponent(BadgeButton, {
        size: "small",
        get isActive() {
          return props.filterState.tag === key;
        },
        buttonLabel: name2,
        badgeLabel: usages,
        get disabled() {
          return props.loading;
        },
        onClick: () => {
          props.onFilterChange({
            tag: key
          });
        }
      })));
      createRenderEffect((_p$) => {
        var _v$ = css5.section, _v$2 = css5.filterValues, _v$3 = css5.filterValues;
        _v$ !== _p$.e && className(_el$, _p$.e = _v$);
        _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
        _v$3 !== _p$.a && className(_el$3, _p$.a = _v$3);
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0
      });
      return _el$;
    })();
  };

  // src/components/PageListings.tsx
  var _tmpl$9 = /* @__PURE__ */ template(`<section>`);
  var _tmpl$24 = /* @__PURE__ */ template(`<sl-card><div slot=header><div></div><div class=flex-middle></div><div></div></div><div><div><div></div><div></div></div><div>`, true, false);
  var _tmpl$32 = /* @__PURE__ */ template(`<span><br>`);
  var _tmpl$42 = /* @__PURE__ */ template(`<sl-tag>`, true, false);
  var css6 = styler.css({
    card: {
      "--border-radius": "15px",
      width: "100%",
      marginBottom: "1rem",
      "& .flex-middle > *": {
        justifySelf: "center"
      }
    },
    cardHeader: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      position: "relative",
      alignItems: "center",
      rowGap: "1rem",
      "> * ": {
        flex: "1 1 33.33%",
        minWidth: "200px",
        textAlign: "center",
        "@media (min-width: 700px)": {
          "&:first-child": {
            textAlign: "left"
          },
          "&:last-child": {
            textAlign: "right"
          }
        }
      }
    },
    cardBody: {
      display: "flex",
      justifyContent: "space-between"
    }
  });
  var PageListings = () => {
    const {
      directory
    } = useService();
    const {
      listings,
      filters,
      setFilters
    } = directory;
    const handleFilterChange = (next, mergeFilters) => setFilters((prev) => {
      const parsed = {};
      if (mergeFilters) {
        Object.assign(parsed, prev, next);
      } else {
        for (const key in next) {
          parsed[key] = prev[key] === next[key] ? "" : next[key];
        }
      }
      console.dir({
        filters: parsed
      });
      return parsed;
    });
    return (() => {
      var _el$ = _tmpl$9();
      insert(_el$, createComponent(ProductFilters, {
        get loading() {
          return listings.loading;
        },
        get filterState() {
          return filters();
        },
        onFilterChange: handleFilterChange
      }), null);
      insert(_el$, createComponent(Suspense, {
        get fallback() {
          return createComponent(Loading, {});
        },
        get children() {
          return listings()?.map(({
            title,
            description,
            links,
            tags,
            ...contact
          }) => (() => {
            var _el$2 = _tmpl$24(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling, _el$7 = _el$3.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$8.firstChild, _el$10 = _el$9.nextSibling, _el$11 = _el$8.nextSibling;
            _el$2._$owner = getOwner();
            insert(_el$4, title);
            insert(_el$5, createComponent(IconLabel, {
              label: "beskrivelse",
              icon: "info-circle",
              children: description
            }));
            insert(_el$6, createComponent(Phone, {
              get phoneNumber() {
                return contact.phone;
              }
            }));
            insert(_el$9, createComponent(Address, contact));
            insert(_el$10, () => links.map((link) => (() => {
              var _el$12 = _tmpl$32(), _el$13 = _el$12.firstChild;
              insert(_el$12, createComponent(WebLink, {
                link
              }), _el$13);
              return _el$12;
            })()));
            insert(_el$11, () => tags.map((tag) => (() => {
              var _el$14 = _tmpl$42();
              addEventListener(_el$14, "click", () => {
                handleFilterChange(
                  {
                    tag: tag.key
                  },
                  true
                  /* Use merge to keep in listing */
                );
              });
              _el$14.style.setProperty("cursor", "pointer");
              _el$14.variant = "primary";
              _el$14.size = "small";
              _el$14._$owner = getOwner();
              insert(_el$14, () => tag.name);
              return _el$14;
            })()));
            createRenderEffect((_p$) => {
              var _v$ = css6.card, _v$2 = css6.cardHeader, _v$3 = css6.title, _v$4 = css6.cardBody;
              _v$ !== _p$.e && className(_el$2, _p$.e = _v$);
              _v$2 !== _p$.t && className(_el$3, _p$.t = _v$2);
              _v$3 !== _p$.a && className(_el$4, _p$.a = _v$3);
              _v$4 !== _p$.o && className(_el$8, _p$.o = _v$4);
              return _p$;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0
            });
            return _el$2;
          })());
        }
      }), null);
      return _el$;
    })();
  };

  // src/components/Routes.tsx
  var Routes = (props) => {
    return createComponent(PageListings, {});
  };

  // src/components/App.tsx
  var _tmpl$10 = /* @__PURE__ */ template(`<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/themes/light.css>`);
  var _tmpl$25 = /* @__PURE__ */ template(`<style id=styler>`);
  loadFontFace("Playwrite HU", "url(https://fonts.gstatic.com/s/playwritehu/v1/A2BIn59A0g0xA3zDhFw-0vfPWJtlaFKmrETx1PL6TOg.woff2) format('woff2')", {
    "font-optical-sizing": "auto",
    "font-weight": "400",
    "font-style": "normal"
  });
  styler.setContext({
    prefix: "gifo",
    theme: {
      colorPrimary: "var(--gifo-color-primary)",
      colorOnPrimary: "var(--gifo-color-on-primary)",
      colorAccent: "var(--gifo-color-accent)",
      fontSizeLg: "2rem",
      fontSizeMd: "1.2rem",
      breakPointSm: "600px",
      spaceY: "var(--sl-spacing-medium)"
    }
  }).globals({
    ":root": ({
      theme
    }) => ({
      "--breakpoint-sm": theme.breakPointSmall
    }),
    /* Global scrollbar styles */
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px"
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      // Semi-transparent thumb
      borderRadius: "4px",
      // Rounded edges for the thumb
      transition: "background-color 0.2s"
      // Smooth transition
    },
    "::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)"
      // Darker thumb on hover
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "transparent"
      // Fully transparent track
    },
    /* Firefox-specific scrollbar styles */
    ".scrollable-element": {
      scrollbarWidth: "thin",
      // Thin scrollbar
      scrollbarColor: "rgba(0, 0, 0, 0.5) transparent"
      // Thumb and track colors
    },
    "a, a:hover, a:visited": ({
      theme
    }) => ({
      textDecoration: "none",
      color: theme.colorOnPrimary
    })
  });
  var App = (props) => {
    return [_tmpl$10(), (() => {
      var _el$2 = _tmpl$25();
      insert(_el$2, () => styler.resolveGlobals(), null);
      insert(_el$2, () => styler.resolveStyles(), null);
      return _el$2;
    })(), createComponent(ServiceProvider, {
      get namespace() {
        return props.namespace;
      },
      get database() {
        return props.database;
      },
      get datapoint() {
        return props.datapoint;
      },
      get children() {
        return createComponent(Layout, {
          get title() {
            return props.title;
          },
          get children() {
            return createComponent(Routes, {});
          }
        });
      }
    })];
  };
  var App_default = App;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3Y6SB6QS.js
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s4) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s4.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s4.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
  var library = {
    name: "default",
    resolver: (name2) => getBasePath(`assets/icons/${name2}.svg`)
  };
  var library_default_default = library;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
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
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name2) => {
      if (name2 in icons) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name2])}`;
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name2) {
    return registry.find((lib) => lib.name === name2);
  }

  // node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t6, e12, o10) {
      if (this._$cssResult$ = true, o10 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t6, this.t = e12;
    }
    get styleSheet() {
      let t6 = this.o;
      const s4 = this.t;
      if (e && void 0 === t6) {
        const e12 = void 0 !== s4 && 1 === s4.length;
        e12 && (t6 = o.get(s4)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && o.set(s4, t6));
      }
      return t6;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t6) => new n("string" == typeof t6 ? t6 : t6 + "", void 0, s);
  var i = (t6, ...e12) => {
    const o10 = 1 === t6.length ? t6[0] : e12.reduce((e13, s4, o11) => e13 + ((t7) => {
      if (true === t7._$cssResult$) return t7.cssText;
      if ("number" == typeof t7) return t7;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t7 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t6[o11 + 1], t6[0]);
    return new n(o10, t6, s);
  };
  var S = (s4, o10) => {
    if (e) s4.adoptedStyleSheets = o10.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
    else for (const e12 of o10) {
      const o11 = document.createElement("style"), n8 = t.litNonce;
      void 0 !== n8 && o11.setAttribute("nonce", n8), o11.textContent = e12.cssText, s4.appendChild(o11);
    }
  };
  var c = e ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
    let e12 = "";
    for (const s4 of t7.cssRules) e12 += s4.cssText;
    return r(e12);
  })(t6) : t6;

  // node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t6, s4) => t6;
  var u = { toAttribute(t6, s4) {
    switch (s4) {
      case Boolean:
        t6 = t6 ? l : null;
        break;
      case Object:
      case Array:
        t6 = null == t6 ? t6 : JSON.stringify(t6);
    }
    return t6;
  }, fromAttribute(t6, s4) {
    let i8 = t6;
    switch (s4) {
      case Boolean:
        i8 = null !== t6;
        break;
      case Number:
        i8 = null === t6 ? null : Number(t6);
        break;
      case Object:
      case Array:
        try {
          i8 = JSON.parse(t6);
        } catch (t7) {
          i8 = null;
        }
    }
    return i8;
  } };
  var f2 = (t6, s4) => !i2(t6, s4);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f2 };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t6) {
      this._$Ei(), (this.l ??= []).push(t6);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t6, s4 = y) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.elementProperties.set(t6, s4), !s4.noAccessor) {
        const i8 = Symbol(), r9 = this.getPropertyDescriptor(t6, i8, s4);
        void 0 !== r9 && e2(this.prototype, t6, r9);
      }
    }
    static getPropertyDescriptor(t6, s4, i8) {
      const { get: e12, set: h5 } = r2(this.prototype, t6) ?? { get() {
        return this[s4];
      }, set(t7) {
        this[s4] = t7;
      } };
      return { get() {
        return e12?.call(this);
      }, set(s5) {
        const r9 = e12?.call(this);
        h5.call(this, s5), this.requestUpdate(t6, r9, i8);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t6) {
      return this.elementProperties.get(t6) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t6 = n2(this);
      t6.finalize(), void 0 !== t6.l && (this.l = [...t6.l]), this.elementProperties = new Map(t6.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t7 = this.properties, s4 = [...h(t7), ...o2(t7)];
        for (const i8 of s4) this.createProperty(i8, t7[i8]);
      }
      const t6 = this[Symbol.metadata];
      if (null !== t6) {
        const s4 = litPropertyMetadata.get(t6);
        if (void 0 !== s4) for (const [t7, i8] of s4) this.elementProperties.set(t7, i8);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t7, s4] of this.elementProperties) {
        const i8 = this._$Eu(t7, s4);
        void 0 !== i8 && this._$Eh.set(i8, t7);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i8 = [];
      if (Array.isArray(s4)) {
        const e12 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e12) i8.unshift(c(s5));
      } else void 0 !== s4 && i8.push(c(s4));
      return i8;
    }
    static _$Eu(t6, s4) {
      const i8 = s4.attribute;
      return false === i8 ? void 0 : "string" == typeof i8 ? i8 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
    }
    addController(t6) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
    }
    removeController(t6) {
      this._$EO?.delete(t6);
    }
    _$E_() {
      const t6 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i8 of s4.keys()) this.hasOwnProperty(i8) && (t6.set(i8, this[i8]), delete this[i8]);
      t6.size > 0 && (this._$Ep = t6);
    }
    createRenderRoot() {
      const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t6, this.constructor.elementStyles), t6;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t6) => t6.hostConnected?.());
    }
    enableUpdating(t6) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t6) => t6.hostDisconnected?.());
    }
    attributeChangedCallback(t6, s4, i8) {
      this._$AK(t6, i8);
    }
    _$EC(t6, s4) {
      const i8 = this.constructor.elementProperties.get(t6), e12 = this.constructor._$Eu(t6, i8);
      if (void 0 !== e12 && true === i8.reflect) {
        const r9 = (void 0 !== i8.converter?.toAttribute ? i8.converter : u).toAttribute(s4, i8.type);
        this._$Em = t6, null == r9 ? this.removeAttribute(e12) : this.setAttribute(e12, r9), this._$Em = null;
      }
    }
    _$AK(t6, s4) {
      const i8 = this.constructor, e12 = i8._$Eh.get(t6);
      if (void 0 !== e12 && this._$Em !== e12) {
        const t7 = i8.getPropertyOptions(e12), r9 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== t7.converter?.fromAttribute ? t7.converter : u;
        this._$Em = e12, this[e12] = r9.fromAttribute(s4, t7.type), this._$Em = null;
      }
    }
    requestUpdate(t6, s4, i8) {
      if (void 0 !== t6) {
        if (i8 ??= this.constructor.getPropertyOptions(t6), !(i8.hasChanged ?? f2)(this[t6], s4)) return;
        this.P(t6, s4, i8);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t6, s4, i8) {
      this._$AL.has(t6) || this._$AL.set(t6, s4), true === i8.reflect && this._$Em !== t6 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t6);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t7) {
        Promise.reject(t7);
      }
      const t6 = this.scheduleUpdate();
      return null != t6 && await t6, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t8, s5] of this._$Ep) this[t8] = s5;
          this._$Ep = void 0;
        }
        const t7 = this.constructor.elementProperties;
        if (t7.size > 0) for (const [s5, i8] of t7) true !== i8.wrapped || this._$AL.has(s5) || void 0 === this[s5] || this.P(s5, this[s5], i8);
      }
      let t6 = false;
      const s4 = this._$AL;
      try {
        t6 = this.shouldUpdate(s4), t6 ? (this.willUpdate(s4), this._$EO?.forEach((t7) => t7.hostUpdate?.()), this.update(s4)) : this._$EU();
      } catch (s5) {
        throw t6 = false, this._$EU(), s5;
      }
      t6 && this._$AE(s4);
    }
    willUpdate(t6) {
    }
    _$AE(t6) {
      this._$EO?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t6) {
      return true;
    }
    update(t6) {
      this._$Ej &&= this._$Ej.forEach((t7) => this._$EC(t7, this[t7])), this._$EU();
    }
    updated(t6) {
    }
    firstUpdated(t6) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t6) => t6 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
  var a2 = Array.isArray;
  var u2 = (t6) => a2(t6) || "function" == typeof t6?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t6) => (i8, ...s4) => ({ _$litType$: t6, strings: i8, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t6, i8) {
    if (!a2(t6) || !t6.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i8) : i8;
  }
  var V = (t6, i8) => {
    const s4 = t6.length - 1, o10 = [];
    let r9, l5 = 2 === i8 ? "<svg>" : 3 === i8 ? "<math>" : "", c6 = f3;
    for (let i9 = 0; i9 < s4; i9++) {
      const s5 = t6[i9];
      let a4, u5, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c6.lastIndex = y3, u5 = c6.exec(s5), null !== u5); ) y3 = c6.lastIndex, c6 === f3 ? "!--" === u5[1] ? c6 = v : void 0 !== u5[1] ? c6 = _ : void 0 !== u5[2] ? ($.test(u5[2]) && (r9 = RegExp("</" + u5[2], "g")), c6 = m) : void 0 !== u5[3] && (c6 = m) : c6 === m ? ">" === u5[0] ? (c6 = r9 ?? f3, d3 = -1) : void 0 === u5[1] ? d3 = -2 : (d3 = c6.lastIndex - u5[2].length, a4 = u5[1], c6 = void 0 === u5[3] ? m : '"' === u5[3] ? g : p2) : c6 === g || c6 === p2 ? c6 = m : c6 === v || c6 === _ ? c6 = f3 : (c6 = m, r9 = void 0);
      const x2 = c6 === m && t6[i9 + 1].startsWith("/>") ? " " : "";
      l5 += c6 === f3 ? s5 + n3 : d3 >= 0 ? (o10.push(a4), s5.slice(0, d3) + e3 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i9 : x2);
    }
    return [P(t6, l5 + (t6[s4] || "<?>") + (2 === i8 ? "</svg>" : 3 === i8 ? "</math>" : "")), o10];
  };
  var N = class _N {
    constructor({ strings: t6, _$litType$: s4 }, n8) {
      let r9;
      this.parts = [];
      let c6 = 0, a4 = 0;
      const u5 = t6.length - 1, d3 = this.parts, [f6, v2] = V(t6, s4);
      if (this.el = _N.createElement(f6, n8), C.currentNode = this.el.content, 2 === s4 || 3 === s4) {
        const t7 = this.el.content.firstChild;
        t7.replaceWith(...t7.childNodes);
      }
      for (; null !== (r9 = C.nextNode()) && d3.length < u5; ) {
        if (1 === r9.nodeType) {
          if (r9.hasAttributes()) for (const t7 of r9.getAttributeNames()) if (t7.endsWith(e3)) {
            const i8 = v2[a4++], s5 = r9.getAttribute(t7).split(h2), e12 = /([.?@])?(.*)/.exec(i8);
            d3.push({ type: 1, index: c6, name: e12[2], strings: s5, ctor: "." === e12[1] ? H : "?" === e12[1] ? I : "@" === e12[1] ? L : k }), r9.removeAttribute(t7);
          } else t7.startsWith(h2) && (d3.push({ type: 6, index: c6 }), r9.removeAttribute(t7));
          if ($.test(r9.tagName)) {
            const t7 = r9.textContent.split(h2), s5 = t7.length - 1;
            if (s5 > 0) {
              r9.textContent = i3 ? i3.emptyScript : "";
              for (let i8 = 0; i8 < s5; i8++) r9.append(t7[i8], l2()), C.nextNode(), d3.push({ type: 2, index: ++c6 });
              r9.append(t7[s5], l2());
            }
          }
        } else if (8 === r9.nodeType) if (r9.data === o3) d3.push({ type: 2, index: c6 });
        else {
          let t7 = -1;
          for (; -1 !== (t7 = r9.data.indexOf(h2, t7 + 1)); ) d3.push({ type: 7, index: c6 }), t7 += h2.length - 1;
        }
        c6++;
      }
    }
    static createElement(t6, i8) {
      const s4 = r3.createElement("template");
      return s4.innerHTML = t6, s4;
    }
  };
  function S2(t6, i8, s4 = t6, e12) {
    if (i8 === T) return i8;
    let h5 = void 0 !== e12 ? s4._$Co?.[e12] : s4._$Cl;
    const o10 = c3(i8) ? void 0 : i8._$litDirective$;
    return h5?.constructor !== o10 && (h5?._$AO?.(false), void 0 === o10 ? h5 = void 0 : (h5 = new o10(t6), h5._$AT(t6, s4, e12)), void 0 !== e12 ? (s4._$Co ??= [])[e12] = h5 : s4._$Cl = h5), void 0 !== h5 && (i8 = S2(t6, h5._$AS(t6, i8.values), h5, e12)), i8;
  }
  var M = class {
    constructor(t6, i8) {
      this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = i8;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t6) {
      const { el: { content: i8 }, parts: s4 } = this._$AD, e12 = (t6?.creationScope ?? r3).importNode(i8, true);
      C.currentNode = e12;
      let h5 = C.nextNode(), o10 = 0, n8 = 0, l5 = s4[0];
      for (; void 0 !== l5; ) {
        if (o10 === l5.index) {
          let i9;
          2 === l5.type ? i9 = new R(h5, h5.nextSibling, this, t6) : 1 === l5.type ? i9 = new l5.ctor(h5, l5.name, l5.strings, this, t6) : 6 === l5.type && (i9 = new z2(h5, this, t6)), this._$AV.push(i9), l5 = s4[++n8];
        }
        o10 !== l5?.index && (h5 = C.nextNode(), o10++);
      }
      return C.currentNode = r3, e12;
    }
    p(t6) {
      let i8 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t6, s4, i8), i8 += s4.strings.length - 2) : s4._$AI(t6[i8])), i8++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t6, i8, s4, e12) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t6, this._$AB = i8, this._$AM = s4, this.options = e12, this._$Cv = e12?.isConnected ?? true;
    }
    get parentNode() {
      let t6 = this._$AA.parentNode;
      const i8 = this._$AM;
      return void 0 !== i8 && 11 === t6?.nodeType && (t6 = i8.parentNode), t6;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t6, i8 = this) {
      t6 = S2(this, t6, i8), c3(t6) ? t6 === E || null == t6 || "" === t6 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t6 !== this._$AH && t6 !== T && this._(t6) : void 0 !== t6._$litType$ ? this.$(t6) : void 0 !== t6.nodeType ? this.T(t6) : u2(t6) ? this.k(t6) : this._(t6);
    }
    O(t6) {
      return this._$AA.parentNode.insertBefore(t6, this._$AB);
    }
    T(t6) {
      this._$AH !== t6 && (this._$AR(), this._$AH = this.O(t6));
    }
    _(t6) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t6 : this.T(r3.createTextNode(t6)), this._$AH = t6;
    }
    $(t6) {
      const { values: i8, _$litType$: s4 } = t6, e12 = "number" == typeof s4 ? this._$AC(t6) : (void 0 === s4.el && (s4.el = N.createElement(P(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e12) this._$AH.p(i8);
      else {
        const t7 = new M(e12, this), s5 = t7.u(this.options);
        t7.p(i8), this.T(s5), this._$AH = t7;
      }
    }
    _$AC(t6) {
      let i8 = A.get(t6.strings);
      return void 0 === i8 && A.set(t6.strings, i8 = new N(t6)), i8;
    }
    k(t6) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i8 = this._$AH;
      let s4, e12 = 0;
      for (const h5 of t6) e12 === i8.length ? i8.push(s4 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s4 = i8[e12], s4._$AI(h5), e12++;
      e12 < i8.length && (this._$AR(s4 && s4._$AB.nextSibling, e12), i8.length = e12);
    }
    _$AR(t6 = this._$AA.nextSibling, i8) {
      for (this._$AP?.(false, true, i8); t6 && t6 !== this._$AB; ) {
        const i9 = t6.nextSibling;
        t6.remove(), t6 = i9;
      }
    }
    setConnected(t6) {
      void 0 === this._$AM && (this._$Cv = t6, this._$AP?.(t6));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t6, i8, s4, e12, h5) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t6, this.name = i8, this._$AM = e12, this.options = h5, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = E;
    }
    _$AI(t6, i8 = this, s4, e12) {
      const h5 = this.strings;
      let o10 = false;
      if (void 0 === h5) t6 = S2(this, t6, i8, 0), o10 = !c3(t6) || t6 !== this._$AH && t6 !== T, o10 && (this._$AH = t6);
      else {
        const e13 = t6;
        let n8, r9;
        for (t6 = h5[0], n8 = 0; n8 < h5.length - 1; n8++) r9 = S2(this, e13[s4 + n8], i8, n8), r9 === T && (r9 = this._$AH[n8]), o10 ||= !c3(r9) || r9 !== this._$AH[n8], r9 === E ? t6 = E : t6 !== E && (t6 += (r9 ?? "") + h5[n8 + 1]), this._$AH[n8] = r9;
      }
      o10 && !e12 && this.j(t6);
    }
    j(t6) {
      t6 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t6 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t6) {
      this.element[this.name] = t6 === E ? void 0 : t6;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t6) {
      this.element.toggleAttribute(this.name, !!t6 && t6 !== E);
    }
  };
  var L = class extends k {
    constructor(t6, i8, s4, e12, h5) {
      super(t6, i8, s4, e12, h5), this.type = 5;
    }
    _$AI(t6, i8 = this) {
      if ((t6 = S2(this, t6, i8, 0) ?? E) === T) return;
      const s4 = this._$AH, e12 = t6 === E && s4 !== E || t6.capture !== s4.capture || t6.once !== s4.once || t6.passive !== s4.passive, h5 = t6 !== E && (s4 === E || e12);
      e12 && this.element.removeEventListener(this.name, this, s4), h5 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
    }
    handleEvent(t6) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t6) : this._$AH.handleEvent(t6);
    }
  };
  var z2 = class {
    constructor(t6, i8, s4) {
      this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = i8, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t6) {
      S2(this, t6);
    }
  };
  var Z = { M: e3, P: h2, A: o3, C: 1, L: V, R: M, D: u2, V: S2, I: R, H: k, N: I, U: L, B: H, F: z2 };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ??= []).push("3.2.1");
  var B = (t6, i8, s4) => {
    const e12 = s4?.renderBefore ?? i8;
    let h5 = e12._$litPart$;
    if (void 0 === h5) {
      const t7 = s4?.renderBefore ?? null;
      e12._$litPart$ = h5 = new R(i8.insertBefore(l2(), t7), t7, void 0, s4 ?? {});
    }
    return h5._$AI(t6), h5;
  };

  // node_modules/.pnpm/lit-element@4.1.1/node_modules/lit-element/lit-element.js
  var r4 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t6 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t6.firstChild, t6;
    }
    update(t6) {
      const s4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this._$Do = B(s4, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  r4._$litElement$ = true, r4["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: r4 });
  var i4 = globalThis.litElementPolyfillSupport;
  i4?.({ LitElement: r4 });
  (globalThis.litElementVersions ??= []).push("4.1.1");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js
  var icon_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js
  var __defProp3 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp2.call(b3, prop))
        __defNormalProp(a4, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a4, prop, b3[prop]);
      }
    return a4;
  };
  var __spreadProps = (a4, b3) => __defProps(a4, __getOwnPropDescs(b3));
  var __decorateClass2 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
    for (var i8 = decorators.length - 1, decorator; i8 >= 0; i8--)
      if (decorator = decorators[i8])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp3(target, key, result);
    return result;
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update: update2 } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update2.call(this, changedProps);
      };
    };
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
  var component_styles_default = i`
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
`;

  // node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/property.js
  var o4 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f2 };
  var r5 = (t6 = o4, e12, r9) => {
    const { kind: n8, metadata: i8 } = r9;
    let s4 = globalThis.litPropertyMetadata.get(i8);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i8, s4 = /* @__PURE__ */ new Map()), s4.set(r9.name, t6), "accessor" === n8) {
      const { name: o10 } = r9;
      return { set(r10) {
        const n9 = e12.get.call(this);
        e12.set.call(this, r10), this.requestUpdate(o10, n9, t6);
      }, init(e13) {
        return void 0 !== e13 && this.P(o10, void 0, t6), e13;
      } };
    }
    if ("setter" === n8) {
      const { name: o10 } = r9;
      return function(r10) {
        const n9 = this[o10];
        e12.call(this, r10), this.requestUpdate(o10, n9, t6);
      };
    }
    throw Error("Unsupported decorator location: " + n8);
  };
  function n4(t6) {
    return (e12, o10) => "object" == typeof o10 ? r5(t6, e12, o10) : ((t7, e13, o11) => {
      const r9 = e13.hasOwnProperty(o11);
      return e13.constructor.createProperty(o11, r9 ? { ...t7, wrapped: true } : t7), r9 ? Object.getOwnPropertyDescriptor(e13, o11) : void 0;
    })(t6, e12, o10);
  }

  // node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/state.js
  function r6(r9) {
    return n4({ ...r9, state: true, attribute: false });
  }

  // node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/event-options.js
  function t3(t6) {
    return (n8, o10) => {
      const c6 = "function" == typeof n8 ? n8 : n8[o10];
      Object.assign(c6, t6);
    };
  }

  // node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/base.js
  var e4 = (e12, t6, c6) => (c6.configurable = true, c6.enumerable = true, Reflect.decorate && "object" != typeof t6 && Object.defineProperty(e12, t6, c6), c6);

  // node_modules/.pnpm/@lit+reactive-element@2.0.4/node_modules/@lit/reactive-element/decorators/query.js
  function e5(e12, r9) {
    return (n8, s4, i8) => {
      const o10 = (t6) => t6.renderRoot?.querySelector(e12) ?? null;
      if (r9) {
        const { get: e13, set: r10 } = "object" == typeof s4 ? n8 : i8 ?? (() => {
          const t6 = Symbol();
          return { get() {
            return this[t6];
          }, set(e14) {
            this[t6] = e14;
          } };
        })();
        return e4(n8, s4, { get() {
          let t6 = e13.call(this);
          return void 0 === t6 && (t6 = o10(this), (null !== t6 || this.hasUpdated) && r10.call(this, t6)), t6;
        } });
      }
      return e4(n8, s4, { get() {
        return o10(this);
      } });
    };
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EVP45OG4.js
  var _hasRecordedInitialProperties;
  var ShoelaceElement = class extends r4 {
    constructor() {
      super();
      __privateAdd(this, _hasRecordedInitialProperties, false);
      this.initialReflectedProperties = /* @__PURE__ */ new Map();
      Object.entries(this.constructor.dependencies).forEach(([name2, component]) => {
        this.constructor.define(name2, component);
      });
    }
    emit(name2, options) {
      const event = new CustomEvent(name2, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
    /* eslint-enable */
    static define(name2, elementConstructor = this, options = {}) {
      const currentlyRegisteredConstructor = customElements.get(name2);
      if (!currentlyRegisteredConstructor) {
        try {
          customElements.define(name2, elementConstructor, options);
        } catch (_err) {
          customElements.define(name2, class extends elementConstructor {
          }, options);
        }
        return;
      }
      let newVersion = " (unknown version)";
      let existingVersion = newVersion;
      if ("version" in elementConstructor && elementConstructor.version) {
        newVersion = " v" + elementConstructor.version;
      }
      if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
        existingVersion = " v" + currentlyRegisteredConstructor.version;
      }
      if (newVersion && existingVersion && newVersion === existingVersion) {
        return;
      }
      console.warn(
        `Attempted to register <${name2}>${newVersion}, but <${name2}>${existingVersion} has already been registered.`
      );
    }
    attributeChangedCallback(name2, oldValue, newValue) {
      if (!__privateGet(this, _hasRecordedInitialProperties)) {
        this.constructor.elementProperties.forEach(
          (obj, prop) => {
            if (obj.reflect && this[prop] != null) {
              this.initialReflectedProperties.set(prop, this[prop]);
            }
          }
        );
        __privateSet(this, _hasRecordedInitialProperties, true);
      }
      super.attributeChangedCallback(name2, oldValue, newValue);
    }
    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);
      this.initialReflectedProperties.forEach((value, prop) => {
        if (changedProperties.has(prop) && this[prop] == null) {
          this[prop] = value;
        }
      });
    }
  };
  _hasRecordedInitialProperties = /* @__PURE__ */ new WeakMap();
  ShoelaceElement.version = "2.19.0";
  ShoelaceElement.dependencies = {};
  __decorateClass2([
    n4()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass2([
    n4()
  ], ShoelaceElement.prototype, "lang", 2);

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/directive-helpers.js
  var { I: t4 } = Z;
  var e6 = (o10, t6) => void 0 === t6 ? void 0 !== o10?._$litType$ : o10?._$litType$ === t6;
  var f4 = (o10) => void 0 === o10.strings;
  var u3 = {};
  var m2 = (o10, t6 = u3) => o10._$AH = t6;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QCFOL4VF.js
  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = /* @__PURE__ */ new Map();
  var SlIcon = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.initialRender = false;
      this.svg = null;
      this.label = "";
      this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    async resolveIcon(url, library2) {
      var _a;
      let fileData;
      if (library2 == null ? void 0 : library2.spriteSheet) {
        this.svg = x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
        return this.svg;
      }
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch (e12) {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg") return CACHEABLE_ERROR;
        if (!parser) parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl) return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch (e12) {
        return CACHEABLE_ERROR;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.initialRender = true;
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library2 = getIconLibrary(this.library);
      if (this.name && library2) {
        return {
          url: library2.resolver(this.name),
          fromLibrary: true
        };
      }
      return {
        url: this.src,
        fromLibrary: false
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      var _a;
      const { url, fromLibrary } = this.getIconSource();
      const library2 = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library2);
        iconCache.set(url, iconResolver);
      }
      if (!this.initialRender) {
        return;
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (e6(svg)) {
        this.svg = svg;
        if (library2) {
          await this.updateComplete;
          const shadowSVG = this.shadowRoot.querySelector("[part='svg']");
          if (typeof library2.mutator === "function" && shadowSVG) {
            library2.mutator(shadowSVG);
          }
        }
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.emit("sl-error");
          break;
        default:
          this.svg = svg.cloneNode(true);
          (_a = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a.call(library2, this.svg);
          this.emit("sl-load");
      }
    }
    render() {
      return this.svg;
    }
  };
  SlIcon.styles = [component_styles_default, icon_styles_default];
  __decorateClass2([
    r6()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass2([
    n4()
  ], SlIcon.prototype, "src", 2);
  __decorateClass2([
    n4()
  ], SlIcon.prototype, "label", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass2([
    watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass2([
    watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EOK2IIOU.js
  SlIcon.define("sl-icon");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js
  var icon_button_styles_default = i`
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
`;

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/directive.js
  var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e7 = (t6) => (...e12) => ({ _$litDirective$: t6, values: e12 });
  var i5 = class {
    constructor(t6) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t6, e12, i8) {
      this._$Ct = t6, this._$AM = e12, this._$Ci = i8;
    }
    _$AS(t6, e12) {
      return this.update(t6, e12);
    }
    update(t6, e12) {
      return this.render(...e12);
    }
  };

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/directives/class-map.js
  var e8 = e7(class extends i5 {
    constructor(t6) {
      if (super(t6), t6.type !== t5.ATTRIBUTE || "class" !== t6.name || t6.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t6) {
      return " " + Object.keys(t6).filter((s4) => t6[s4]).join(" ") + " ";
    }
    update(s4, [i8]) {
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s4.strings && (this.nt = new Set(s4.strings.join(" ").split(/\s/).filter((t6) => "" !== t6)));
        for (const t6 in i8) i8[t6] && !this.nt?.has(t6) && this.st.add(t6);
        return this.render(i8);
      }
      const r9 = s4.element.classList;
      for (const t6 of this.st) t6 in i8 || (r9.remove(t6), this.st.delete(t6));
      for (const t6 in i8) {
        const s5 = !!i8[t6];
        s5 === this.st.has(t6) || this.nt?.has(t6) || (s5 ? (r9.add(t6), this.st.add(t6)) : (r9.remove(t6), this.st.delete(t6)));
      }
      return T;
    }
  });

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/static.js
  var a3 = Symbol.for("");
  var o5 = (t6) => {
    if (t6?.r === a3) return t6?._$litStatic$;
  };
  var i6 = (t6, ...r9) => ({ _$litStatic$: r9.reduce((r10, e12, a4) => r10 + ((t7) => {
    if (void 0 !== t7._$litStatic$) return t7._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t7}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e12) + t6[a4 + 1], t6[0]), r: a3 });
  var l3 = /* @__PURE__ */ new Map();
  var n5 = (t6) => (r9, ...e12) => {
    const a4 = e12.length;
    let s4, i8;
    const n8 = [], u5 = [];
    let c6, $3 = 0, f6 = false;
    for (; $3 < a4; ) {
      for (c6 = r9[$3]; $3 < a4 && void 0 !== (i8 = e12[$3], s4 = o5(i8)); ) c6 += s4 + r9[++$3], f6 = true;
      $3 !== a4 && u5.push(i8), n8.push(c6), $3++;
    }
    if ($3 === a4 && n8.push(r9[a4]), f6) {
      const t7 = n8.join("$$lit$$");
      void 0 === (r9 = l3.get(t7)) && (n8.raw = n8, l3.set(t7, r9 = n8)), e12 = u5;
    }
    return t6(r9, ...e12);
  };
  var u4 = n5(x);
  var c4 = n5(b2);
  var $2 = n5(w);

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/directives/if-defined.js
  var o6 = (o10) => o10 ?? E;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G6R7BW5E.js
  var SlIconButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasFocus = false;
      this.label = "";
      this.disabled = false;
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /** Simulates a click on the icon button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the icon button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the icon button. */
    blur() {
      this.button.blur();
    }
    render() {
      const isLink = this.href ? true : false;
      const tag = isLink ? i6`a` : i6`button`;
      return u4`
      <${tag}
        part="base"
        class=${e8({
        "icon-button": true,
        "icon-button--disabled": !isLink && this.disabled,
        "icon-button--focused": this.hasFocus
      })}
        ?disabled=${o6(isLink ? void 0 : this.disabled)}
        type=${o6(isLink ? void 0 : "button")}
        href=${o6(isLink ? this.href : void 0)}
        target=${o6(isLink ? this.target : void 0)}
        download=${o6(isLink ? this.download : void 0)}
        rel=${o6(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${o6(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${o6(this.name)}
          library=${o6(this.library)}
          src=${o6(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
    }
  };
  SlIconButton.styles = [component_styles_default, icon_button_styles_default];
  SlIconButton.dependencies = { "sl-icon": SlIcon };
  __decorateClass2([
    e5(".icon-button")
  ], SlIconButton.prototype, "button", 2);
  __decorateClass2([
    r6()
  ], SlIconButton.prototype, "hasFocus", 2);
  __decorateClass2([
    n4()
  ], SlIconButton.prototype, "name", 2);
  __decorateClass2([
    n4()
  ], SlIconButton.prototype, "library", 2);
  __decorateClass2([
    n4()
  ], SlIconButton.prototype, "src", 2);
  __decorateClass2([
    n4()
  ], SlIconButton.prototype, "href", 2);
  __decorateClass2([
    n4()
  ], SlIconButton.prototype, "target", 2);
  __decorateClass2([
    n4()
  ], SlIconButton.prototype, "download", 2);
  __decorateClass2([
    n4()
  ], SlIconButton.prototype, "label", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlIconButton.prototype, "disabled", 2);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js
  var defaultAnimationRegistry = /* @__PURE__ */ new Map();
  var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") {
      return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
      };
    }
    return animation;
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) {
      return getLogicalAnimation(customAnimation[animationName], options.dir);
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return getLogicalAnimation(defaultAnimation, options.dir);
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js
  function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(
      el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          animation.cancel();
          requestAnimationFrame(resolve);
        });
      })
    );
  }
  function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
    return keyframes.map((keyframe) => __spreadProps(__spreadValues({}, keyframe), {
      height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
    }));
  }

  // node_modules/.pnpm/@shoelace-style+localize@3.2.1/node_modules/@shoelace-style/localize/dist/index.js
  var connectedElements = /* @__PURE__ */ new Set();
  var translations = /* @__PURE__ */ new Map();
  var fallback;
  var documentDirection = "ltr";
  var documentLanguage = "en";
  var isClient = typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined";
  if (isClient) {
    const documentElementObserver = new MutationObserver(update);
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
    documentElementObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir", "lang"]
    });
  }
  function registerTranslation(...translation2) {
    translation2.map((t6) => {
      const code = t6.$code.toLowerCase();
      if (translations.has(code)) {
        translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t6));
      } else {
        translations.set(code, t6);
      }
      if (!fallback) {
        fallback = t6;
      }
    });
    update();
  }
  function update() {
    if (isClient) {
      documentDirection = document.documentElement.dir || "ltr";
      documentLanguage = document.documentElement.lang || navigator.language;
    }
    [...connectedElements.keys()].map((el) => {
      if (typeof el.requestUpdate === "function") {
        el.requestUpdate();
      }
    });
  }
  var LocalizeController = class {
    constructor(host) {
      this.host = host;
      this.host.addController(this);
    }
    hostConnected() {
      connectedElements.add(this.host);
    }
    hostDisconnected() {
      connectedElements.delete(this.host);
    }
    dir() {
      return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
      return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
      var _a, _b;
      const locale = new Intl.Locale(lang.replace(/_/g, "-"));
      const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
      const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
      const primary = translations.get(`${language}-${region}`);
      const secondary = translations.get(language);
      return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
      var _a;
      const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
      options = Object.assign({ includeFallback: false }, options);
      if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
        return true;
      }
      return false;
    }
    term(key, ...args) {
      const { primary, secondary } = this.getTranslationData(this.lang());
      let term;
      if (primary && primary[key]) {
        term = primary[key];
      } else if (secondary && secondary[key]) {
        term = secondary[key];
      } else if (fallback && fallback[key]) {
        term = fallback[key];
      } else {
        console.error(`No translation found for: ${String(key)}`);
        return String(key);
      }
      if (typeof term === "function") {
        return term(...args);
      }
      return term;
    }
    date(dateToFormat, options) {
      dateToFormat = new Date(dateToFormat);
      return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
      numberToFormat = Number(numberToFormat);
      return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
      return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
  };

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0) return "No options selected";
      if (num === 1) return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);
  var en_default = translation;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js
  var LocalizeController2 = class extends LocalizeController {
  };
  registerTranslation(en_default);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name2) {
      return this.host.querySelector(`:scope > [slot="${name2}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };
  function getTextContent(slot) {
    if (!slot) {
      return "";
    }
    const nodes = slot.assignedNodes({ flatten: true });
    let text = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text;
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.62HVOPEB.js
  var alert_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.D4YH5HPE.js
  var toastStack = Object.assign(document.createElement("div"), { className: "sl-toast-stack" });
  var SlAlert = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "icon", "suffix");
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.closable = false;
      this.variant = "primary";
      this.duration = Infinity;
      this.remainingTime = this.duration;
    }
    firstUpdated() {
      this.base.hidden = !this.open;
    }
    restartAutoHide() {
      this.handleCountdownChange();
      clearTimeout(this.autoHideTimeout);
      clearInterval(this.remainingTimeInterval);
      if (this.open && this.duration < Infinity) {
        this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
        this.remainingTime = this.duration;
        this.remainingTimeInterval = window.setInterval(() => {
          this.remainingTime -= 100;
        }, 100);
      }
    }
    pauseAutoHide() {
      var _a;
      (_a = this.countdownAnimation) == null ? void 0 : _a.pause();
      clearTimeout(this.autoHideTimeout);
      clearInterval(this.remainingTimeInterval);
    }
    resumeAutoHide() {
      var _a;
      if (this.duration < Infinity) {
        this.autoHideTimeout = window.setTimeout(() => this.hide(), this.remainingTime);
        this.remainingTimeInterval = window.setInterval(() => {
          this.remainingTime -= 100;
        }, 100);
        (_a = this.countdownAnimation) == null ? void 0 : _a.play();
      }
    }
    handleCountdownChange() {
      if (this.open && this.duration < Infinity && this.countdown) {
        const { countdownElement } = this;
        const start = "100%";
        const end = "0";
        this.countdownAnimation = countdownElement.animate([{ width: start }, { width: end }], {
          duration: this.duration,
          easing: "linear"
        });
      }
    }
    handleCloseClick() {
      this.hide();
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        if (this.duration < Infinity) {
          this.restartAutoHide();
        }
        await stopAnimations(this.base);
        this.base.hidden = false;
        const { keyframes, options } = getAnimation(this, "alert.show", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        clearTimeout(this.autoHideTimeout);
        clearInterval(this.remainingTimeInterval);
        await stopAnimations(this.base);
        const { keyframes, options } = getAnimation(this, "alert.hide", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.base.hidden = true;
        this.emit("sl-after-hide");
      }
    }
    handleDurationChange() {
      this.restartAutoHide();
    }
    /** Shows the alert. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the alert */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
     * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
     * calling this method again. The returned promise will resolve after the alert is hidden.
     */
    async toast() {
      return new Promise((resolve) => {
        this.handleCountdownChange();
        if (toastStack.parentElement === null) {
          document.body.append(toastStack);
        }
        toastStack.appendChild(this);
        requestAnimationFrame(() => {
          this.clientWidth;
          this.show();
        });
        this.addEventListener(
          "sl-after-hide",
          () => {
            toastStack.removeChild(this);
            resolve();
            if (toastStack.querySelector("sl-alert") === null) {
              toastStack.remove();
            }
          },
          { once: true }
        );
      });
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        alert: true,
        "alert--open": this.open,
        "alert--closable": this.closable,
        "alert--has-countdown": !!this.countdown,
        "alert--has-icon": this.hasSlotController.test("icon"),
        "alert--primary": this.variant === "primary",
        "alert--success": this.variant === "success",
        "alert--neutral": this.variant === "neutral",
        "alert--warning": this.variant === "warning",
        "alert--danger": this.variant === "danger"
      })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown ? x`
              <div
                class=${e8({
        alert__countdown: true,
        "alert__countdown--ltr": this.countdown === "ltr"
      })}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            ` : ""}
      </div>
    `;
    }
  };
  SlAlert.styles = [component_styles_default, alert_styles_default];
  SlAlert.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass2([
    e5('[part~="base"]')
  ], SlAlert.prototype, "base", 2);
  __decorateClass2([
    e5(".alert__countdown-elapsed")
  ], SlAlert.prototype, "countdownElement", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "open", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlAlert.prototype, "closable", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlAlert.prototype, "variant", 2);
  __decorateClass2([
    n4({ type: Number })
  ], SlAlert.prototype, "duration", 2);
  __decorateClass2([
    n4({ type: String, reflect: true })
  ], SlAlert.prototype, "countdown", 2);
  __decorateClass2([
    r6()
  ], SlAlert.prototype, "remainingTime", 2);
  __decorateClass2([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlAlert.prototype, "handleOpenChange", 1);
  __decorateClass2([
    watch("duration")
  ], SlAlert.prototype, "handleDurationChange", 1);
  setDefaultAnimation("alert.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("alert.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 250, easing: "ease" }
  });

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CPFZNL4.js
  SlAlert.define("sl-alert");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7DUCI5S4.js
  var spinner_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2V366PRZ.js
  var SlSpinner = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
    }
    render() {
      return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
  SlSpinner.styles = [component_styles_default, spinner_styles_default];

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3RPBFEDE.js
  var formCollections = /* @__PURE__ */ new WeakMap();
  var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
  var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
  var userInteractedControls = /* @__PURE__ */ new WeakSet();
  var interactions = /* @__PURE__ */ new WeakMap();
  var FormControlController = class {
    constructor(host, options) {
      this.handleFormData = (event) => {
        const disabled = this.options.disabled(this.host);
        const name2 = this.options.name(this.host);
        const value = this.options.value(this.host);
        const isButton = this.host.tagName.toLowerCase() === "sl-button";
        if (this.host.isConnected && !disabled && !isButton && typeof name2 === "string" && name2.length > 0 && typeof value !== "undefined") {
          if (Array.isArray(value)) {
            value.forEach((val) => {
              event.formData.append(name2, val.toString());
            });
          } else {
            event.formData.append(name2, value.toString());
          }
        }
      };
      this.handleFormSubmit = (event) => {
        var _a;
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate) {
          (_a = formCollections.get(this.form)) == null ? void 0 : _a.forEach((control) => {
            this.setUserInteracted(control, true);
          });
        }
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleFormReset = () => {
        this.options.setValue(this.host, this.options.defaultValue(this.host));
        this.setUserInteracted(this.host, false);
        interactions.set(this.host, []);
      };
      this.handleInteraction = (event) => {
        const emittedEvents = interactions.get(this.host);
        if (!emittedEvents.includes(event.type)) {
          emittedEvents.push(event.type);
        }
        if (emittedEvents.length === this.options.assumeInteractionOn.length) {
          this.setUserInteracted(this.host, true);
        }
      };
      this.checkFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.checkValidity === "function") {
              if (!element.checkValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      this.reportFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.reportValidity === "function") {
              if (!element.reportValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      (this.host = host).addController(this);
      this.options = __spreadValues({
        form: (input) => {
          const formId = input.form;
          if (formId) {
            const root2 = input.getRootNode();
            const form = root2.querySelector(`#${formId}`);
            if (form) {
              return form;
            }
          }
          return input.closest("form");
        },
        name: (input) => input.name,
        value: (input) => input.value,
        defaultValue: (input) => input.defaultValue,
        disabled: (input) => {
          var _a;
          return (_a = input.disabled) != null ? _a : false;
        },
        reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
        checkValidity: (input) => typeof input.checkValidity === "function" ? input.checkValidity() : true,
        setValue: (input, value) => input.value = value,
        assumeInteractionOn: ["sl-input"]
      }, options);
    }
    hostConnected() {
      const form = this.options.form(this.host);
      if (form) {
        this.attachForm(form);
      }
      interactions.set(this.host, []);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.addEventListener(event, this.handleInteraction);
      });
    }
    hostDisconnected() {
      this.detachForm();
      interactions.delete(this.host);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.removeEventListener(event, this.handleInteraction);
      });
    }
    hostUpdated() {
      const form = this.options.form(this.host);
      if (!form) {
        this.detachForm();
      }
      if (form && this.form !== form) {
        this.detachForm();
        this.attachForm(form);
      }
      if (this.host.hasUpdated) {
        this.setValidity(this.host.validity.valid);
      }
    }
    attachForm(form) {
      if (form) {
        this.form = form;
        if (formCollections.has(this.form)) {
          formCollections.get(this.form).add(this.host);
        } else {
          formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
        }
        this.form.addEventListener("formdata", this.handleFormData);
        this.form.addEventListener("submit", this.handleFormSubmit);
        this.form.addEventListener("reset", this.handleFormReset);
        if (!reportValidityOverloads.has(this.form)) {
          reportValidityOverloads.set(this.form, this.form.reportValidity);
          this.form.reportValidity = () => this.reportFormValidity();
        }
        if (!checkValidityOverloads.has(this.form)) {
          checkValidityOverloads.set(this.form, this.form.checkValidity);
          this.form.checkValidity = () => this.checkFormValidity();
        }
      } else {
        this.form = void 0;
      }
    }
    detachForm() {
      if (!this.form) return;
      const formCollection = formCollections.get(this.form);
      if (!formCollection) {
        return;
      }
      formCollection.delete(this.host);
      if (formCollection.size <= 0) {
        this.form.removeEventListener("formdata", this.handleFormData);
        this.form.removeEventListener("submit", this.handleFormSubmit);
        this.form.removeEventListener("reset", this.handleFormReset);
        if (reportValidityOverloads.has(this.form)) {
          this.form.reportValidity = reportValidityOverloads.get(this.form);
          reportValidityOverloads.delete(this.form);
        }
        if (checkValidityOverloads.has(this.form)) {
          this.form.checkValidity = checkValidityOverloads.get(this.form);
          checkValidityOverloads.delete(this.form);
        }
        this.form = void 0;
      }
    }
    setUserInteracted(el, hasInteracted) {
      if (hasInteracted) {
        userInteractedControls.add(el);
      } else {
        userInteractedControls.delete(el);
      }
      el.requestUpdate();
    }
    doAction(type, submitter) {
      if (this.form) {
        const button = document.createElement("button");
        button.type = type;
        button.style.position = "absolute";
        button.style.width = "0";
        button.style.height = "0";
        button.style.clipPath = "inset(50%)";
        button.style.overflow = "hidden";
        button.style.whiteSpace = "nowrap";
        if (submitter) {
          button.name = submitter.name;
          button.value = submitter.value;
          ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
            if (submitter.hasAttribute(attr)) {
              button.setAttribute(attr, submitter.getAttribute(attr));
            }
          });
        }
        this.form.append(button);
        button.click();
        button.remove();
      }
    }
    /** Returns the associated `<form>` element, if one exists. */
    getForm() {
      var _a;
      return (_a = this.form) != null ? _a : null;
    }
    /** Resets the form, restoring all the control to their default value */
    reset(submitter) {
      this.doAction("reset", submitter);
    }
    /** Submits the form, triggering validation and form data injection. */
    submit(submitter) {
      this.doAction("submit", submitter);
    }
    /**
     * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
     * the host element immediately, i.e. before Lit updates the component in the next update.
     */
    setValidity(isValid2) {
      const host = this.host;
      const hasInteracted = Boolean(userInteractedControls.has(host));
      const required = Boolean(host.required);
      host.toggleAttribute("data-required", required);
      host.toggleAttribute("data-optional", !required);
      host.toggleAttribute("data-invalid", !isValid2);
      host.toggleAttribute("data-valid", isValid2);
      host.toggleAttribute("data-user-invalid", !isValid2 && hasInteracted);
      host.toggleAttribute("data-user-valid", isValid2 && hasInteracted);
    }
    /**
     * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
     * that affects constraint validation changes so the component receives the correct validity states.
     */
    updateValidity() {
      const host = this.host;
      this.setValidity(host.validity.valid);
    }
    /**
     * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
     * If the `sl-invalid` event will be cancelled then the original `invalid`
     * event (which may have been passed as argument) will also be cancelled.
     * If no original `invalid` event has been passed then the `sl-invalid`
     * event will be cancelled before being dispatched.
     */
    emitInvalidEvent(originalInvalidEvent) {
      const slInvalidEvent = new CustomEvent("sl-invalid", {
        bubbles: false,
        composed: false,
        cancelable: true,
        detail: {}
      });
      if (!originalInvalidEvent) {
        slInvalidEvent.preventDefault();
      }
      if (!this.host.dispatchEvent(slInvalidEvent)) {
        originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
      }
    }
  };
  var validValidityState = Object.freeze({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  });
  var valueMissingValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    valueMissing: true
  }));
  var customErrorValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    customError: true
  }));

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAQXLKQ7.js
  var button_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.COXGQD2T.js
  var SlButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["click"]
      });
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.invalid = false;
      this.title = "";
      this.variant = "default";
      this.size = "medium";
      this.caret = false;
      this.disabled = false;
      this.loading = false;
      this.outline = false;
      this.pill = false;
      this.circle = false;
      this.type = "button";
      this.name = "";
      this.value = "";
      this.href = "";
      this.rel = "noreferrer noopener";
    }
    /** Gets the validity state object */
    get validity() {
      if (this.isButton()) {
        return this.button.validity;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      if (this.isButton()) {
        return this.button.validationMessage;
      }
      return "";
    }
    firstUpdated() {
      if (this.isButton()) {
        this.formControlController.updateValidity();
      }
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick() {
      if (this.type === "submit") {
        this.formControlController.submit(this);
      }
      if (this.type === "reset") {
        this.formControlController.reset(this);
      }
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    isButton() {
      return this.href ? false : true;
    }
    isLink() {
      return this.href ? true : false;
    }
    handleDisabledChange() {
      if (this.isButton()) {
        this.formControlController.setValidity(this.disabled);
      }
    }
    /** Simulates a click on the button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the button. */
    blur() {
      this.button.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      if (this.isButton()) {
        return this.button.checkValidity();
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      if (this.isButton()) {
        return this.button.reportValidity();
      }
      return true;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      if (this.isButton()) {
        this.button.setCustomValidity(message);
        this.formControlController.updateValidity();
      }
    }
    render() {
      const isLink = this.isLink();
      const tag = isLink ? i6`a` : i6`button`;
      return u4`
      <${tag}
        part="base"
        class=${e8({
        button: true,
        "button--default": this.variant === "default",
        "button--primary": this.variant === "primary",
        "button--success": this.variant === "success",
        "button--neutral": this.variant === "neutral",
        "button--warning": this.variant === "warning",
        "button--danger": this.variant === "danger",
        "button--text": this.variant === "text",
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--caret": this.caret,
        "button--circle": this.circle,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--loading": this.loading,
        "button--standard": !this.outline,
        "button--outline": this.outline,
        "button--pill": this.pill,
        "button--rtl": this.localize.dir() === "rtl",
        "button--has-label": this.hasSlotController.test("[default]"),
        "button--has-prefix": this.hasSlotController.test("prefix"),
        "button--has-suffix": this.hasSlotController.test("suffix")
      })}
        ?disabled=${o6(isLink ? void 0 : this.disabled)}
        type=${o6(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o6(isLink ? void 0 : this.name)}
        value=${o6(isLink ? void 0 : this.value)}
        href=${o6(isLink && !this.disabled ? this.href : void 0)}
        target=${o6(isLink ? this.target : void 0)}
        download=${o6(isLink ? this.download : void 0)}
        rel=${o6(isLink ? this.rel : void 0)}
        role=${o6(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? u4` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? u4`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${tag}>
    `;
    }
  };
  SlButton.styles = [component_styles_default, button_styles_default];
  SlButton.dependencies = {
    "sl-icon": SlIcon,
    "sl-spinner": SlSpinner
  };
  __decorateClass2([
    e5(".button")
  ], SlButton.prototype, "button", 2);
  __decorateClass2([
    r6()
  ], SlButton.prototype, "hasFocus", 2);
  __decorateClass2([
    r6()
  ], SlButton.prototype, "invalid", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "title", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlButton.prototype, "variant", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlButton.prototype, "size", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "caret", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "disabled", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "loading", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "outline", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "pill", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlButton.prototype, "circle", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "type", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "name", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "value", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "href", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "target", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "rel", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "download", 2);
  __decorateClass2([
    n4()
  ], SlButton.prototype, "form", 2);
  __decorateClass2([
    n4({ attribute: "formaction" })
  ], SlButton.prototype, "formAction", 2);
  __decorateClass2([
    n4({ attribute: "formenctype" })
  ], SlButton.prototype, "formEnctype", 2);
  __decorateClass2([
    n4({ attribute: "formmethod" })
  ], SlButton.prototype, "formMethod", 2);
  __decorateClass2([
    n4({ attribute: "formnovalidate", type: Boolean })
  ], SlButton.prototype, "formNoValidate", 2);
  __decorateClass2([
    n4({ attribute: "formtarget" })
  ], SlButton.prototype, "formTarget", 2);
  __decorateClass2([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlButton.prototype, "handleDisabledChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BOEMEVVW.js
  SlButton.define("sl-button");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GGT72J62.js
  var input_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js
  var defaultValue = (propertyName = "value") => (proto, key) => {
    const ctor = proto.constructor;
    const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
    ctor.prototype.attributeChangedCallback = function(name2, old, value) {
      var _a;
      const options = ctor.getPropertyOptions(propertyName);
      const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
      if (name2 === attributeName) {
        const converter = options.converter || u;
        const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : u.fromAttribute;
        const newValue = fromAttribute(value, options.type);
        if (this[propertyName] !== newValue) {
          this[key] = newValue;
        }
      }
      attributeChangedCallback.call(this, name2, old, value);
    };
  };

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js
  var form_control_styles_default = i`
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
`;

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/directives/live.js
  var l4 = e7(class extends i5 {
    constructor(r9) {
      if (super(r9), r9.type !== t5.PROPERTY && r9.type !== t5.ATTRIBUTE && r9.type !== t5.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
      if (!f4(r9)) throw Error("`live` bindings can only contain a single expression");
    }
    render(r9) {
      return r9;
    }
    update(i8, [t6]) {
      if (t6 === T || t6 === E) return t6;
      const o10 = i8.element, l5 = i8.name;
      if (i8.type === t5.PROPERTY) {
        if (t6 === o10[l5]) return T;
      } else if (i8.type === t5.BOOLEAN_ATTRIBUTE) {
        if (!!t6 === o10.hasAttribute(l5)) return T;
      } else if (i8.type === t5.ATTRIBUTE && o10.getAttribute(l5) === t6 + "") return T;
      return m2(i8), t6;
    }
  });

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UA4HYG7D.js
  var SlInput = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController2(this);
      this.hasFocus = false;
      this.title = "";
      this.__numberInput = Object.assign(document.createElement("input"), { type: "number" });
      this.__dateInput = Object.assign(document.createElement("input"), { type: "date" });
      this.type = "text";
      this.name = "";
      this.value = "";
      this.defaultValue = "";
      this.size = "medium";
      this.filled = false;
      this.pill = false;
      this.label = "";
      this.helpText = "";
      this.clearable = false;
      this.disabled = false;
      this.placeholder = "";
      this.readonly = false;
      this.passwordToggle = false;
      this.passwordVisible = false;
      this.noSpinButtons = false;
      this.form = "";
      this.required = false;
      this.spellcheck = true;
    }
    //
    // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
    // can be set before the component is rendered.
    //
    /**
     * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
     */
    get valueAsDate() {
      var _a;
      this.__dateInput.type = this.type;
      this.__dateInput.value = this.value;
      return ((_a = this.input) == null ? void 0 : _a.valueAsDate) || this.__dateInput.valueAsDate;
    }
    set valueAsDate(newValue) {
      this.__dateInput.type = this.type;
      this.__dateInput.valueAsDate = newValue;
      this.value = this.__dateInput.value;
    }
    /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
    get valueAsNumber() {
      var _a;
      this.__numberInput.value = this.value;
      return ((_a = this.input) == null ? void 0 : _a.valueAsNumber) || this.__numberInput.valueAsNumber;
    }
    set valueAsNumber(newValue) {
      this.__numberInput.valueAsNumber = newValue;
      this.value = this.__numberInput.value;
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleChange() {
      this.value = this.input.value;
      this.emit("sl-change");
    }
    handleClearClick(event) {
      event.preventDefault();
      if (this.value !== "") {
        this.value = "";
        this.emit("sl-clear");
        this.emit("sl-input");
        this.emit("sl-change");
      }
      this.input.focus();
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleInput() {
      this.value = this.input.value;
      this.formControlController.updateValidity();
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleKeyDown(event) {
      const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
      if (event.key === "Enter" && !hasModifier) {
        setTimeout(() => {
          if (!event.defaultPrevented && !event.isComposing) {
            this.formControlController.submit();
          }
        });
      }
    }
    handlePasswordToggle() {
      this.passwordVisible = !this.passwordVisible;
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleStepChange() {
      this.input.step = String(this.step);
      this.formControlController.updateValidity();
    }
    async handleValueChange() {
      await this.updateComplete;
      this.formControlController.updateValidity();
    }
    /** Sets focus on the input. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the input. */
    blur() {
      this.input.blur();
    }
    /** Selects all the text in the input. */
    select() {
      this.input.select();
    }
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
      this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    /** Replaces a range of text with a new string. */
    setRangeText(replacement, start, end, selectMode = "preserve") {
      const selectionStart = start != null ? start : this.input.selectionStart;
      const selectionEnd = end != null ? end : this.input.selectionEnd;
      this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
    showPicker() {
      if ("showPicker" in HTMLInputElement.prototype) {
        this.input.showPicker();
      }
    }
    /** Increments the value of a numeric input type by the value of the step attribute. */
    stepUp() {
      this.input.stepUp();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Decrements the value of a numeric input type by the value of the step attribute. */
    stepDown() {
      this.input.stepDown();
      if (this.value !== this.input.value) {
        this.value = this.input.value;
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const hasClearIcon = this.clearable && !this.disabled && !this.readonly;
      const isClearIconVisible = hasClearIcon && (typeof this.value === "number" || this.value.length > 0);
      return x`
      <div
        part="form-control"
        class=${e8({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e8({
        input: true,
        // Sizes
        "input--small": this.size === "small",
        "input--medium": this.size === "medium",
        "input--large": this.size === "large",
        // States
        "input--pill": this.pill,
        "input--standard": !this.filled,
        "input--filled": this.filled,
        "input--disabled": this.disabled,
        "input--focused": this.hasFocus,
        "input--empty": !this.value,
        "input--no-spin-buttons": this.noSpinButtons
      })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${o6(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o6(this.placeholder)}
              minlength=${o6(this.minlength)}
              maxlength=${o6(this.maxlength)}
              min=${o6(this.min)}
              max=${o6(this.max)}
              step=${o6(this.step)}
              .value=${l4(this.value)}
              autocapitalize=${o6(this.autocapitalize)}
              autocomplete=${o6(this.autocomplete)}
              autocorrect=${o6(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${o6(this.pattern)}
              enterkeyhint=${o6(this.enterkeyhint)}
              inputmode=${o6(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${isClearIconVisible ? x`
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
                ` : ""}
            ${this.passwordToggle && !this.disabled ? x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : x`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlInput.styles = [component_styles_default, form_control_styles_default, input_styles_default];
  SlInput.dependencies = { "sl-icon": SlIcon };
  __decorateClass2([
    e5(".input__control")
  ], SlInput.prototype, "input", 2);
  __decorateClass2([
    r6()
  ], SlInput.prototype, "hasFocus", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "title", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlInput.prototype, "type", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "name", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "value", 2);
  __decorateClass2([
    defaultValue()
  ], SlInput.prototype, "defaultValue", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlInput.prototype, "size", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlInput.prototype, "filled", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlInput.prototype, "pill", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "label", 2);
  __decorateClass2([
    n4({ attribute: "help-text" })
  ], SlInput.prototype, "helpText", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlInput.prototype, "clearable", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlInput.prototype, "disabled", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "placeholder", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlInput.prototype, "readonly", 2);
  __decorateClass2([
    n4({ attribute: "password-toggle", type: Boolean })
  ], SlInput.prototype, "passwordToggle", 2);
  __decorateClass2([
    n4({ attribute: "password-visible", type: Boolean })
  ], SlInput.prototype, "passwordVisible", 2);
  __decorateClass2([
    n4({ attribute: "no-spin-buttons", type: Boolean })
  ], SlInput.prototype, "noSpinButtons", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlInput.prototype, "form", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlInput.prototype, "required", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "pattern", 2);
  __decorateClass2([
    n4({ type: Number })
  ], SlInput.prototype, "minlength", 2);
  __decorateClass2([
    n4({ type: Number })
  ], SlInput.prototype, "maxlength", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "min", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "max", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "step", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "autocapitalize", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "autocorrect", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "autocomplete", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlInput.prototype, "autofocus", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "enterkeyhint", 2);
  __decorateClass2([
    n4({
      type: Boolean,
      converter: {
        // Allow "true|false" attribute values but keep the property boolean
        fromAttribute: (value) => !value || value === "false" ? false : true,
        toAttribute: (value) => value ? "true" : "false"
      }
    })
  ], SlInput.prototype, "spellcheck", 2);
  __decorateClass2([
    n4()
  ], SlInput.prototype, "inputmode", 2);
  __decorateClass2([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleDisabledChange", 1);
  __decorateClass2([
    watch("step", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleStepChange", 1);
  __decorateClass2([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlInput.prototype, "handleValueChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AYM4DUFB.js
  SlInput.define("sl-input");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K35GSB4N.js
  var avatar_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LC7H7NPQ.js
  var SlAvatar = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasError = false;
      this.image = "";
      this.label = "";
      this.initials = "";
      this.loading = "eager";
      this.shape = "circle";
    }
    handleImageChange() {
      this.hasError = false;
    }
    handleImageLoadError() {
      this.hasError = true;
      this.emit("sl-error");
    }
    render() {
      const avatarWithImage = x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
      let avatarWithoutImage = x``;
      if (this.initials) {
        avatarWithoutImage = x`<div part="initials" class="avatar__initials">${this.initials}</div>`;
      } else {
        avatarWithoutImage = x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `;
      }
      return x`
      <div
        part="base"
        class=${e8({
        avatar: true,
        "avatar--circle": this.shape === "circle",
        "avatar--rounded": this.shape === "rounded",
        "avatar--square": this.shape === "square"
      })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
    }
  };
  SlAvatar.styles = [component_styles_default, avatar_styles_default];
  SlAvatar.dependencies = {
    "sl-icon": SlIcon
  };
  __decorateClass2([
    r6()
  ], SlAvatar.prototype, "hasError", 2);
  __decorateClass2([
    n4()
  ], SlAvatar.prototype, "image", 2);
  __decorateClass2([
    n4()
  ], SlAvatar.prototype, "label", 2);
  __decorateClass2([
    n4()
  ], SlAvatar.prototype, "initials", 2);
  __decorateClass2([
    n4()
  ], SlAvatar.prototype, "loading", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlAvatar.prototype, "shape", 2);
  __decorateClass2([
    watch("image")
  ], SlAvatar.prototype, "handleImageChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VKUFXANV.js
  SlAvatar.define("sl-avatar");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IEJHVVJE.js
  SlSpinner.define("sl-spinner");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.A5D6FTFY.js
  var card_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VRMI7PZD.js
  var SlCard = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        card: true,
        "card--has-footer": this.hasSlotController.test("footer"),
        "card--has-image": this.hasSlotController.test("image"),
        "card--has-header": this.hasSlotController.test("header")
      })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
    }
  };
  SlCard.styles = [component_styles_default, card_styles_default];

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DRU75V4E.js
  SlCard.define("sl-card");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.J7PLVEQM.js
  var details_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KYPWTZAR.js
  var SlDetails = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.disabled = false;
    }
    firstUpdated() {
      this.body.style.height = this.open ? "auto" : "0";
      if (this.open) {
        this.details.open = true;
      }
      this.detailsObserver = new MutationObserver((changes) => {
        for (const change of changes) {
          if (change.type === "attributes" && change.attributeName === "open") {
            if (this.details.open) {
              this.show();
            } else {
              this.hide();
            }
          }
        }
      });
      this.detailsObserver.observe(this.details, { attributes: true });
    }
    disconnectedCallback() {
      var _a;
      super.disconnectedCallback();
      (_a = this.detailsObserver) == null ? void 0 : _a.disconnect();
    }
    handleSummaryClick(event) {
      event.preventDefault();
      if (!this.disabled) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
        this.header.focus();
      }
    }
    handleSummaryKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        this.hide();
      }
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        this.show();
      }
    }
    async handleOpenChange() {
      if (this.open) {
        this.details.open = true;
        const slShow = this.emit("sl-show", { cancelable: true });
        if (slShow.defaultPrevented) {
          this.open = false;
          this.details.open = false;
          return;
        }
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "details.show", { dir: this.localize.dir() });
        await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
        this.body.style.height = "auto";
        this.emit("sl-after-show");
      } else {
        const slHide = this.emit("sl-hide", { cancelable: true });
        if (slHide.defaultPrevented) {
          this.details.open = true;
          this.open = true;
          return;
        }
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "details.hide", { dir: this.localize.dir() });
        await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
        this.body.style.height = "auto";
        this.details.open = false;
        this.emit("sl-after-hide");
      }
    }
    /** Shows the details. */
    async show() {
      if (this.open || this.disabled) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the details */
    async hide() {
      if (!this.open || this.disabled) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return x`
      <details
        part="base"
        class=${e8({
        details: true,
        "details--open": this.open,
        "details--disabled": this.disabled,
        "details--rtl": isRtl
      })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
    }
  };
  SlDetails.styles = [component_styles_default, details_styles_default];
  SlDetails.dependencies = {
    "sl-icon": SlIcon
  };
  __decorateClass2([
    e5(".details")
  ], SlDetails.prototype, "details", 2);
  __decorateClass2([
    e5(".details__header")
  ], SlDetails.prototype, "header", 2);
  __decorateClass2([
    e5(".details__body")
  ], SlDetails.prototype, "body", 2);
  __decorateClass2([
    e5(".details__expand-icon-slot")
  ], SlDetails.prototype, "expandIconSlot", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlDetails.prototype, "open", 2);
  __decorateClass2([
    n4()
  ], SlDetails.prototype, "summary", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlDetails.prototype, "disabled", 2);
  __decorateClass2([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDetails.prototype, "handleOpenChange", 1);
  setDefaultAnimation("details.show", {
    keyframes: [
      { height: "0", opacity: "0" },
      { height: "auto", opacity: "1" }
    ],
    options: { duration: 250, easing: "linear" }
  });
  setDefaultAnimation("details.hide", {
    keyframes: [
      { height: "auto", opacity: "1" },
      { height: "0", opacity: "0" }
    ],
    options: { duration: 250, easing: "linear" }
  });

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BDXKNOIF.js
  SlDetails.define("sl-details");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SUSCR7CI.js
  var divider_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VSGEKCRE.js
  var SlDivider = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.vertical = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "separator");
    }
    handleVerticalChange() {
      this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
    }
  };
  SlDivider.styles = [component_styles_default, divider_styles_default];
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlDivider.prototype, "vertical", 2);
  __decorateClass2([
    watch("vertical")
  ], SlDivider.prototype, "handleVerticalChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QFMNHP3G.js
  SlDivider.define("sl-divider");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V2OL7VMD.js
  var tag_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KN3J5VWI.js
  var SlTag = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.variant = "neutral";
      this.size = "medium";
      this.pill = false;
      this.removable = false;
    }
    handleRemoveClick() {
      this.emit("sl-remove");
    }
    render() {
      return x`
      <span
        part="base"
        class=${e8({
        tag: true,
        // Types
        "tag--primary": this.variant === "primary",
        "tag--success": this.variant === "success",
        "tag--neutral": this.variant === "neutral",
        "tag--warning": this.variant === "warning",
        "tag--danger": this.variant === "danger",
        "tag--text": this.variant === "text",
        // Sizes
        "tag--small": this.size === "small",
        "tag--medium": this.size === "medium",
        "tag--large": this.size === "large",
        // Modifiers
        "tag--pill": this.pill,
        "tag--removable": this.removable
      })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? x`
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
            ` : ""}
      </span>
    `;
    }
  };
  SlTag.styles = [component_styles_default, tag_styles_default];
  SlTag.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass2([
    n4({ reflect: true })
  ], SlTag.prototype, "variant", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlTag.prototype, "size", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlTag.prototype, "pill", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlTag.prototype, "removable", 2);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.H5RLO2CN.js
  SlTag.define("sl-tag");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXP7GVU3.js
  var dropdown_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXDTFLWU.js
  var computedStyleMap = /* @__PURE__ */ new WeakMap();
  function getCachedComputedStyle(el) {
    let computedStyle = computedStyleMap.get(el);
    if (!computedStyle) {
      computedStyle = window.getComputedStyle(el, null);
      computedStyleMap.set(el, computedStyle);
    }
    return computedStyle;
  }
  function isVisible(el) {
    if (typeof el.checkVisibility === "function") {
      return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
    }
    const computedStyle = getCachedComputedStyle(el);
    return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
  }
  function isOverflowingAndTabbable(el) {
    const computedStyle = getCachedComputedStyle(el);
    const { overflowY, overflowX } = computedStyle;
    if (overflowY === "scroll" || overflowX === "scroll") {
      return true;
    }
    if (overflowY !== "auto" || overflowX !== "auto") {
      return false;
    }
    const isOverflowingY = el.scrollHeight > el.clientHeight;
    if (isOverflowingY && overflowY === "auto") {
      return true;
    }
    const isOverflowingX = el.scrollWidth > el.clientWidth;
    if (isOverflowingX && overflowX === "auto") {
      return true;
    }
    return false;
  }
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    const tabindex = Number(el.getAttribute("tabindex"));
    const hasTabindex = el.hasAttribute("tabindex");
    if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (el.closest("[inert]")) {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
      return false;
    }
    if (!isVisible(el)) {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    const isNativelyTabbable = [
      "button",
      "input",
      "select",
      "textarea",
      "a",
      "audio",
      "video",
      "summary",
      "iframe"
    ].includes(tag);
    if (isNativelyTabbable) {
      return true;
    }
    return isOverflowingAndTabbable(el);
  }
  function getTabbableBoundary(root2) {
    var _a, _b;
    const tabbableElements = getTabbableElements(root2);
    const start = (_a = tabbableElements[0]) != null ? _a : null;
    const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
    return { start, end };
  }
  function getSlottedChildrenOutsideRootElement(slotElement, root2) {
    var _a;
    return ((_a = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a.host) !== root2;
  }
  function getTabbableElements(root2) {
    const walkedEls = /* @__PURE__ */ new WeakMap();
    const tabbableElements = [];
    function walk(el) {
      if (el instanceof Element) {
        if (el.hasAttribute("inert") || el.closest("[inert]")) {
          return;
        }
        if (walkedEls.has(el)) {
          return;
        }
        walkedEls.set(el, true);
        if (!tabbableElements.includes(el) && isTabbable(el)) {
          tabbableElements.push(el);
        }
        if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root2)) {
          el.assignedElements({ flatten: true }).forEach((assignedEl) => {
            walk(assignedEl);
          });
        }
        if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      for (const e12 of el.children) {
        walk(e12);
      }
    }
    walk(root2);
    return tabbableElements.sort((a4, b3) => {
      const aTabindex = Number(a4.getAttribute("tabindex")) || 0;
      const bTabindex = Number(b3.getAttribute("tabindex")) || 0;
      return bTabindex - aTabindex;
    });
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3KSWVBQ5.js
  var popup_styles_default = i`
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
`;

  // node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v2) => ({
    x: v2,
    y: v2
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list2 = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list2 = list2.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list2 = list2.concat(list2.map(getOppositeAlignmentPlacement));
      }
    }
    return list2;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x: x2,
      y: y3,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y3,
      left: x2,
      right: x2 + width,
      bottom: y3 + height,
      x: x2,
      y: y3
    };
  }

  // node_modules/.pnpm/@floating-ui+core@1.6.8/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x2,
      y: y3
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i8 = 0; i8 < validMiddleware.length; i8++) {
      const {
        name: name2,
        fn
      } = validMiddleware[i8];
      const {
        x: nextX,
        y: nextY,
        data,
        reset: reset2
      } = await fn({
        x: x2,
        y: y3,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x2 = nextX != null ? nextX : x2;
      y3 = nextY != null ? nextY : y3;
      middlewareData = {
        ...middlewareData,
        [name2]: {
          ...middlewareData[name2],
          ...data
        }
      };
      if (reset2 && resetCount <= 50) {
        resetCount++;
        if (typeof reset2 === "object") {
          if (reset2.placement) {
            statefulPlacement = reset2.placement;
          }
          if (reset2.rects) {
            rects = reset2.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset2.rects;
          }
          ({
            x: x2,
            y: y3
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i8 = -1;
      }
    }
    return {
      x: x2,
      y: y3,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x2,
      y: y3,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x: x2,
      y: y3,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var arrow = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y3,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x: x2,
        y: y3
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset3 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset3,
          centerOffset: center - offset3 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d3) => d3.overflows[0] <= 0).sort((a4, b3) => a4.overflows[1] - b3.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d3) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d3.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d3) => [d3.placement, d3.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a4, b3) => a4[1] - b3[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x2,
          y: y3,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x2 + diffCoords.x,
          y: y3 + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x2,
          y: y3,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x3,
                y: y4
              } = _ref;
              return {
                x: x3,
                y: y4
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x: x2,
          y: y3
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x2,
            y: limitedCoords.y - y3,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  var size = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  // node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isTopLayer(element) {
    return [":popover-open", ":modal"].some((selector) => {
      try {
        return element.matches(selector);
      } catch (e12) {
        return false;
      }
    });
  }
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css7 = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return css7.transform !== "none" || css7.perspective !== "none" || (css7.containerType ? css7.containerType !== "normal" : false) || !webkit && (css7.backdropFilter ? css7.backdropFilter !== "none" : false) || !webkit && (css7.filter ? css7.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css7.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css7.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list2, traverseIframes) {
    var _node$ownerDocument2;
    if (list2 === void 0) {
      list2 = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list2.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list2.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  // node_modules/.pnpm/@floating-ui+dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css7 = getComputedStyle2(element);
    let width = parseFloat(css7.width) || 0;
    let height = parseFloat(css7.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $3
    } = getCssDimensions(domElement);
    let x2 = ($3 ? round(rect.width) : rect.width) / width;
    let y3 = ($3 ? round(rect.height) : rect.height) / height;
    if (!x2 || !Number.isFinite(x2)) {
      x2 = 1;
    }
    if (!y3 || !Number.isFinite(y3)) {
      y3 = 1;
    }
    return {
      x: x2,
      y: y3
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x2 = (clientRect.left + visualOffsets.x) / scale.x;
    let y3 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css7 = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css7.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css7.paddingTop)) * iframeScale.y;
        x2 *= iframeScale.x;
        y3 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x2 += left;
        y3 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x2,
      y: y3
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) {
      ignoreScrollbarX = false;
    }
    const htmlRect = documentElement.getBoundingClientRect();
    const x2 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
      // RTL <body> scrollbar.
      getWindowScrollBarX(documentElement, htmlRect)
    ));
    const y3 = htmlRect.top + scroll.scrollTop;
    return {
      x: x2,
      y: y3
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y3 = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x2 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x2 = 0;
    let y3 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y3 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x2 = left * scale.x;
    const y3 = top * scale.y;
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y3 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x2,
      y: y3,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle2(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root2 = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root2.clientWidth - (left + width));
      const insetBottom = floor(root2.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root2.ownerDocument
        });
      } catch (e12) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update2, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update2, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update2);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update2();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update2();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update2();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update2);
        ancestorResize && ancestor.removeEventListener("resize", update2);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var offset2 = offset;
  var shift2 = shift;
  var flip2 = flip;
  var size2 = size;
  var arrow2 = arrow;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  // node_modules/.pnpm/composed-offset-position@0.0.6_@floating-ui+utils@0.2.8/node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
  function e9(t6) {
    return i7(t6);
  }
  function r7(t6) {
    return t6.assignedSlot ? t6.assignedSlot : t6.parentNode instanceof ShadowRoot ? t6.parentNode.host : t6.parentNode;
  }
  function i7(e12) {
    for (let t6 = e12; t6; t6 = r7(t6)) if (t6 instanceof Element && "none" === getComputedStyle(t6).display) return null;
    for (let n8 = r7(e12); n8; n8 = r7(n8)) {
      if (!(n8 instanceof Element)) continue;
      const e13 = getComputedStyle(n8);
      if ("contents" !== e13.display) {
        if ("static" !== e13.position || isContainingBlock(e13)) return n8;
        if ("BODY" === n8.tagName) return n8;
      }
    }
    return null;
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AGN5FBOG.js
  function isVirtualElement(e12) {
    return e12 !== null && typeof e12 === "object" && "getBoundingClientRect" in e12 && ("contextElement" in e12 ? e12 instanceof Element : true);
  }
  var SlPopup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.active = false;
      this.placement = "top";
      this.strategy = "absolute";
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = "anchor";
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = "";
      this.flipFallbackStrategy = "best-fit";
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
      this.hoverBridge = false;
      this.updateHoverBridge = () => {
        if (this.hoverBridge && this.anchorEl) {
          const anchorRect = this.anchorEl.getBoundingClientRect();
          const popupRect = this.popup.getBoundingClientRect();
          const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
          let topLeftX = 0;
          let topLeftY = 0;
          let topRightX = 0;
          let topRightY = 0;
          let bottomLeftX = 0;
          let bottomLeftY = 0;
          let bottomRightX = 0;
          let bottomRightY = 0;
          if (isVertical) {
            if (anchorRect.top < popupRect.top) {
              topLeftX = anchorRect.left;
              topLeftY = anchorRect.bottom;
              topRightX = anchorRect.right;
              topRightY = anchorRect.bottom;
              bottomLeftX = popupRect.left;
              bottomLeftY = popupRect.top;
              bottomRightX = popupRect.right;
              bottomRightY = popupRect.top;
            } else {
              topLeftX = popupRect.left;
              topLeftY = popupRect.bottom;
              topRightX = popupRect.right;
              topRightY = popupRect.bottom;
              bottomLeftX = anchorRect.left;
              bottomLeftY = anchorRect.top;
              bottomRightX = anchorRect.right;
              bottomRightY = anchorRect.top;
            }
          } else {
            if (anchorRect.left < popupRect.left) {
              topLeftX = anchorRect.right;
              topLeftY = anchorRect.top;
              topRightX = popupRect.left;
              topRightY = popupRect.top;
              bottomLeftX = anchorRect.right;
              bottomLeftY = anchorRect.bottom;
              bottomRightX = popupRect.left;
              bottomRightY = popupRect.bottom;
            } else {
              topLeftX = popupRect.right;
              topLeftY = popupRect.top;
              topRightX = anchorRect.left;
              topRightY = anchorRect.top;
              bottomLeftX = popupRect.right;
              bottomLeftY = popupRect.bottom;
              bottomRightX = anchorRect.left;
              bottomRightY = anchorRect.bottom;
            }
          }
          this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
          this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
          this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
          this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
          this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
          this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
          this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
          this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
        }
      };
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stop();
    }
    async updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("active")) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProps.has("anchor")) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === "string") {
        const root2 = this.getRootNode();
        this.anchorEl = root2.getElementById(this.anchor);
      } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (this.anchorEl && this.active) {
        this.start();
      }
    }
    start() {
      if (!this.anchorEl || !this.active) {
        return;
      }
      this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise((resolve) => {
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute("data-current-placement");
          this.style.removeProperty("--auto-size-available-width");
          this.style.removeProperty("--auto-size-available-height");
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
    /** Forces the popup to recalculate and reposition itself. */
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
        // The offset middleware goes first
        offset2({ mainAxis: this.distance, crossAxis: this.skidding })
      ];
      if (this.sync) {
        middleware.push(
          size2({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
          })
        );
      } else {
        this.popup.style.width = "";
        this.popup.style.height = "";
      }
      if (this.flip) {
        middleware.push(
          flip2({
            boundary: this.flipBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
          })
        );
      }
      if (this.shift) {
        middleware.push(
          shift2({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding
          })
        );
      }
      if (this.autoSize) {
        middleware.push(
          size2({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
              } else {
                this.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
              } else {
                this.style.removeProperty("--auto-size-available-width");
              }
            }
          })
        );
      } else {
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
      }
      if (this.arrow) {
        middleware.push(
          arrow2({
            element: this.arrowEl,
            padding: this.arrowPadding
          })
        );
      }
      const getOffsetParent2 = this.strategy === "absolute" ? (element) => platform.getOffsetParent(element, e9) : platform.getOffsetParent;
      computePosition2(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
        platform: __spreadProps(__spreadValues({}, platform), {
          getOffsetParent: getOffsetParent2
        })
      }).then(({ x: x2, y: y3, middlewareData, placement }) => {
        const isRtl = this.localize.dir() === "rtl";
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        this.setAttribute("data-current-placement", placement);
        Object.assign(this.popup.style, {
          left: `${x2}px`,
          top: `${y3}px`
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? value : "";
            left = isRtl ? "" : value;
          } else if (this.arrowPlacement === "end") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? "" : value;
            left = isRtl ? value : "";
            bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          } else if (this.arrowPlacement === "center") {
            left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
            top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
          });
        }
      });
      requestAnimationFrame(() => this.updateHoverBridge());
      this.emit("sl-reposition");
    }
    render() {
      return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${e8({
        "popup-hover-bridge": true,
        "popup-hover-bridge--visible": this.hoverBridge && this.active
      })}
      ></span>

      <div
        part="popup"
        class=${e8({
        popup: true,
        "popup--active": this.active,
        "popup--fixed": this.strategy === "fixed",
        "popup--has-arrow": this.arrow
      })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
    }
  };
  SlPopup.styles = [component_styles_default, popup_styles_default];
  __decorateClass2([
    e5(".popup")
  ], SlPopup.prototype, "popup", 2);
  __decorateClass2([
    e5(".popup__arrow")
  ], SlPopup.prototype, "arrowEl", 2);
  __decorateClass2([
    n4()
  ], SlPopup.prototype, "anchor", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlPopup.prototype, "active", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlPopup.prototype, "placement", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlPopup.prototype, "strategy", 2);
  __decorateClass2([
    n4({ type: Number })
  ], SlPopup.prototype, "distance", 2);
  __decorateClass2([
    n4({ type: Number })
  ], SlPopup.prototype, "skidding", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlPopup.prototype, "arrow", 2);
  __decorateClass2([
    n4({ attribute: "arrow-placement" })
  ], SlPopup.prototype, "arrowPlacement", 2);
  __decorateClass2([
    n4({ attribute: "arrow-padding", type: Number })
  ], SlPopup.prototype, "arrowPadding", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlPopup.prototype, "flip", 2);
  __decorateClass2([
    n4({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (value) => {
          return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
        },
        toAttribute: (value) => {
          return value.join(" ");
        }
      }
    })
  ], SlPopup.prototype, "flipFallbackPlacements", 2);
  __decorateClass2([
    n4({ attribute: "flip-fallback-strategy" })
  ], SlPopup.prototype, "flipFallbackStrategy", 2);
  __decorateClass2([
    n4({ type: Object })
  ], SlPopup.prototype, "flipBoundary", 2);
  __decorateClass2([
    n4({ attribute: "flip-padding", type: Number })
  ], SlPopup.prototype, "flipPadding", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlPopup.prototype, "shift", 2);
  __decorateClass2([
    n4({ type: Object })
  ], SlPopup.prototype, "shiftBoundary", 2);
  __decorateClass2([
    n4({ attribute: "shift-padding", type: Number })
  ], SlPopup.prototype, "shiftPadding", 2);
  __decorateClass2([
    n4({ attribute: "auto-size" })
  ], SlPopup.prototype, "autoSize", 2);
  __decorateClass2([
    n4()
  ], SlPopup.prototype, "sync", 2);
  __decorateClass2([
    n4({ type: Object })
  ], SlPopup.prototype, "autoSizeBoundary", 2);
  __decorateClass2([
    n4({ attribute: "auto-size-padding", type: Number })
  ], SlPopup.prototype, "autoSizePadding", 2);
  __decorateClass2([
    n4({ attribute: "hover-bridge", type: Boolean })
  ], SlPopup.prototype, "hoverBridge", 2);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HW4ZDOHE.js
  var SlDropdown = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.placement = "bottom-start";
      this.disabled = false;
      this.stayOpenOnSelect = false;
      this.distance = 0;
      this.skidding = 0;
      this.hoist = false;
      this.sync = void 0;
      this.handleKeyDown = (event) => {
        if (this.open && event.key === "Escape") {
          event.stopPropagation();
          this.hide();
          this.focusOnTrigger();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        var _a;
        if (event.key === "Escape" && this.open && !this.closeWatcher) {
          event.stopPropagation();
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if (event.key === "Tab") {
          if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
            event.preventDefault();
            this.hide();
            this.focusOnTrigger();
            return;
          }
          setTimeout(() => {
            var _a2, _b, _c;
            const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
            if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
              this.hide();
            }
          });
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this.containingElement && !path.includes(this.containingElement)) {
          this.hide();
        }
      };
      this.handlePanelSelect = (event) => {
        const target = event.target;
        if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
          this.hide();
          this.focusOnTrigger();
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.containingElement) {
        this.containingElement = this;
      }
    }
    firstUpdated() {
      this.panel.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.popup.active = true;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeOpenListeners();
      this.hide();
    }
    focusOnTrigger() {
      const trigger = this.trigger.assignedElements({ flatten: true })[0];
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        trigger.focus();
      }
    }
    getMenu() {
      return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
    }
    handleTriggerClick() {
      if (this.open) {
        this.hide();
      } else {
        this.show();
        this.focusOnTrigger();
      }
    }
    async handleTriggerKeyDown(event) {
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.handleTriggerClick();
        return;
      }
      const menu = this.getMenu();
      if (menu) {
        const menuItems = menu.getAllItems();
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          if (!this.open) {
            this.show();
            await this.updateComplete;
          }
          if (menuItems.length > 0) {
            this.updateComplete.then(() => {
              if (event.key === "ArrowDown" || event.key === "Home") {
                menu.setCurrentItem(firstMenuItem);
                firstMenuItem.focus();
              }
              if (event.key === "ArrowUp" || event.key === "End") {
                menu.setCurrentItem(lastMenuItem);
                lastMenuItem.focus();
              }
            });
          }
        }
      }
    }
    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    //
    // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
    // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
    // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
    // a child of the slotted element, or an element in the slotted element's shadow root.
    //
    // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
    //
    // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
    //
    updateAccessibleTrigger() {
      const assignedElements = this.trigger.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
      let target;
      if (accessibleTrigger) {
        switch (accessibleTrigger.tagName.toLowerCase()) {
          // Shoelace buttons have to update the internal button so it's announced correctly by screen readers
          case "sl-button":
          case "sl-icon-button":
            target = accessibleTrigger.button;
            break;
          default:
            target = accessibleTrigger;
        }
        target.setAttribute("aria-haspopup", "true");
        target.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
    /** Shows the dropdown panel. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dropdown panel */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
     * is activated.
     */
    reposition() {
      this.popup.reposition();
    }
    addOpenListeners() {
      var _a;
      this.panel.addEventListener("sl-select", this.handlePanelSelect);
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => {
          this.hide();
          this.focusOnTrigger();
        };
      } else {
        this.panel.addEventListener("keydown", this.handleKeyDown);
      }
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      var _a;
      if (this.panel) {
        this.panel.removeEventListener("sl-select", this.handlePanelSelect);
        this.panel.removeEventListener("keydown", this.handleKeyDown);
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    }
    async handleOpenChange() {
      if (this.disabled) {
        this.open = false;
        return;
      }
      this.updateAccessibleTrigger();
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.panel.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.panel.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    render() {
      return x`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${o6(this.sync ? this.sync : void 0)}
        class=${e8({
        dropdown: true,
        "dropdown--open": this.open
      })}
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

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
    }
  };
  SlDropdown.styles = [component_styles_default, dropdown_styles_default];
  SlDropdown.dependencies = { "sl-popup": SlPopup };
  __decorateClass2([
    e5(".dropdown")
  ], SlDropdown.prototype, "popup", 2);
  __decorateClass2([
    e5(".dropdown__trigger")
  ], SlDropdown.prototype, "trigger", 2);
  __decorateClass2([
    e5(".dropdown__panel")
  ], SlDropdown.prototype, "panel", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "open", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlDropdown.prototype, "placement", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "disabled", 2);
  __decorateClass2([
    n4({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  ], SlDropdown.prototype, "stayOpenOnSelect", 2);
  __decorateClass2([
    n4({ attribute: false })
  ], SlDropdown.prototype, "containingElement", 2);
  __decorateClass2([
    n4({ type: Number })
  ], SlDropdown.prototype, "distance", 2);
  __decorateClass2([
    n4({ type: Number })
  ], SlDropdown.prototype, "skidding", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlDropdown.prototype, "hoist", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlDropdown.prototype, "sync", 2);
  __decorateClass2([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDropdown.prototype, "handleOpenChange", 1);
  setDefaultAnimation("dropdown.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("dropdown.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K4DMSZDN.js
  SlDropdown.define("sl-dropdown");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WQC6OWUE.js
  var badge_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.L4XPMVVI.js
  var SlBadge = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.variant = "primary";
      this.pill = false;
      this.pulse = false;
    }
    render() {
      return x`
      <span
        part="base"
        class=${e8({
        badge: true,
        "badge--primary": this.variant === "primary",
        "badge--success": this.variant === "success",
        "badge--neutral": this.variant === "neutral",
        "badge--warning": this.variant === "warning",
        "badge--danger": this.variant === "danger",
        "badge--pill": this.pill,
        "badge--pulse": this.pulse
      })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
    }
  };
  SlBadge.styles = [component_styles_default, badge_styles_default];
  __decorateClass2([
    n4({ reflect: true })
  ], SlBadge.prototype, "variant", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlBadge.prototype, "pill", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlBadge.prototype, "pulse", 2);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RNJRBJGZ.js
  SlBadge.define("sl-badge");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KZJNDGFO.js
  var menu_item_styles_default = i`
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
`;

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/async-directive.js
  var s3 = (i8, t6) => {
    const e12 = i8._$AN;
    if (void 0 === e12) return false;
    for (const i9 of e12) i9._$AO?.(t6, false), s3(i9, t6);
    return true;
  };
  var o7 = (i8) => {
    let t6, e12;
    do {
      if (void 0 === (t6 = i8._$AM)) break;
      e12 = t6._$AN, e12.delete(i8), i8 = t6;
    } while (0 === e12?.size);
  };
  var r8 = (i8) => {
    for (let t6; t6 = i8._$AM; i8 = t6) {
      let e12 = t6._$AN;
      if (void 0 === e12) t6._$AN = e12 = /* @__PURE__ */ new Set();
      else if (e12.has(i8)) break;
      e12.add(i8), c5(t6);
    }
  };
  function h3(i8) {
    void 0 !== this._$AN ? (o7(this), this._$AM = i8, r8(this)) : this._$AM = i8;
  }
  function n6(i8, t6 = false, e12 = 0) {
    const r9 = this._$AH, h5 = this._$AN;
    if (void 0 !== h5 && 0 !== h5.size) if (t6) if (Array.isArray(r9)) for (let i9 = e12; i9 < r9.length; i9++) s3(r9[i9], false), o7(r9[i9]);
    else null != r9 && (s3(r9, false), o7(r9));
    else s3(this, i8);
  }
  var c5 = (i8) => {
    i8.type == t5.CHILD && (i8._$AP ??= n6, i8._$AQ ??= h3);
  };
  var f5 = class extends i5 {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(i8, t6, e12) {
      super._$AT(i8, t6, e12), r8(this), this.isConnected = i8._$AU;
    }
    _$AO(i8, t6 = true) {
      i8 !== this.isConnected && (this.isConnected = i8, i8 ? this.reconnected?.() : this.disconnected?.()), t6 && (s3(this, i8), o7(this));
    }
    setValue(t6) {
      if (f4(this._$Ct)) this._$Ct._$AI(t6, this);
      else {
        const i8 = [...this._$Ct._$AH];
        i8[this._$Ci] = t6, this._$Ct._$AI(i8, this, 0);
      }
    }
    disconnected() {
    }
    reconnected() {
    }
  };

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/directives/ref.js
  var e10 = () => new h4();
  var h4 = class {
  };
  var o8 = /* @__PURE__ */ new WeakMap();
  var n7 = e7(class extends f5 {
    render(i8) {
      return E;
    }
    update(i8, [s4]) {
      const e12 = s4 !== this.Y;
      return e12 && void 0 !== this.Y && this.rt(void 0), (e12 || this.lt !== this.ct) && (this.Y = s4, this.ht = i8.options?.host, this.rt(this.ct = i8.element)), E;
    }
    rt(t6) {
      if (this.isConnected || (t6 = void 0), "function" == typeof this.Y) {
        const i8 = this.ht ?? globalThis;
        let s4 = o8.get(i8);
        void 0 === s4 && (s4 = /* @__PURE__ */ new WeakMap(), o8.set(i8, s4)), void 0 !== s4.get(this.Y) && this.Y.call(this.ht, void 0), s4.set(this.Y, t6), void 0 !== t6 && this.Y.call(this.ht, t6);
      } else this.Y.value = t6;
    }
    get lt() {
      return "function" == typeof this.Y ? o8.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
    }
    disconnected() {
      this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
      this.rt(this.ct);
    }
  });

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZLIGP6HZ.js
  var SubmenuController = class {
    constructor(host, hasSlotController) {
      this.popupRef = e10();
      this.enableSubmenuTimer = -1;
      this.isConnected = false;
      this.isPopupConnected = false;
      this.skidding = 0;
      this.submenuOpenDelay = 100;
      this.handleMouseMove = (event) => {
        this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
        this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
      };
      this.handleMouseOver = () => {
        if (this.hasSlotController.test("submenu")) {
          this.enableSubmenu();
        }
      };
      this.handleKeyDown = (event) => {
        switch (event.key) {
          case "Escape":
          case "Tab":
            this.disableSubmenu();
            break;
          case "ArrowLeft":
            if (event.target !== this.host) {
              event.preventDefault();
              event.stopPropagation();
              this.host.focus();
              this.disableSubmenu();
            }
            break;
          case "ArrowRight":
          case "Enter":
          case " ":
            this.handleSubmenuEntry(event);
            break;
          default:
            break;
        }
      };
      this.handleClick = (event) => {
        var _a;
        if (event.target === this.host) {
          event.preventDefault();
          event.stopPropagation();
        } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a = event.target.role) == null ? void 0 : _a.startsWith("menuitem")))) {
          this.disableSubmenu();
        }
      };
      this.handleFocusOut = (event) => {
        if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
          return;
        }
        this.disableSubmenu();
      };
      this.handlePopupMouseover = (event) => {
        event.stopPropagation();
      };
      this.handlePopupReposition = () => {
        const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
        const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "sl-menu")[0];
        const isRtl = getComputedStyle(this.host).direction === "rtl";
        if (!menu) {
          return;
        }
        const { left, top, width, height } = menu.getBoundingClientRect();
        this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
      };
      (this.host = host).addController(this);
      this.hasSlotController = hasSlotController;
    }
    hostConnected() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
      }
    }
    hostDisconnected() {
      this.removeListeners();
    }
    hostUpdated() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
        this.updateSkidding();
      } else {
        this.removeListeners();
      }
    }
    addListeners() {
      if (!this.isConnected) {
        this.host.addEventListener("mousemove", this.handleMouseMove);
        this.host.addEventListener("mouseover", this.handleMouseOver);
        this.host.addEventListener("keydown", this.handleKeyDown);
        this.host.addEventListener("click", this.handleClick);
        this.host.addEventListener("focusout", this.handleFocusOut);
        this.isConnected = true;
      }
      if (!this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = true;
        }
      }
    }
    removeListeners() {
      if (this.isConnected) {
        this.host.removeEventListener("mousemove", this.handleMouseMove);
        this.host.removeEventListener("mouseover", this.handleMouseOver);
        this.host.removeEventListener("keydown", this.handleKeyDown);
        this.host.removeEventListener("click", this.handleClick);
        this.host.removeEventListener("focusout", this.handleFocusOut);
        this.isConnected = false;
      }
      if (this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = false;
        }
      }
    }
    handleSubmenuEntry(event) {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      if (!submenuSlot) {
        console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
        return;
      }
      let menuItems = null;
      for (const elt of submenuSlot.assignedElements()) {
        menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
        if (menuItems.length !== 0) {
          break;
        }
      }
      if (!menuItems || menuItems.length === 0) {
        return;
      }
      menuItems[0].setAttribute("tabindex", "0");
      for (let i8 = 1; i8 !== menuItems.length; ++i8) {
        menuItems[i8].setAttribute("tabindex", "-1");
      }
      if (this.popupRef.value) {
        event.preventDefault();
        event.stopPropagation();
        if (this.popupRef.value.active) {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        } else {
          this.enableSubmenu(false);
          this.host.updateComplete.then(() => {
            if (menuItems[0] instanceof HTMLElement) {
              menuItems[0].focus();
            }
          });
          this.host.requestUpdate();
        }
      }
    }
    setSubmenuState(state) {
      if (this.popupRef.value) {
        if (this.popupRef.value.active !== state) {
          this.popupRef.value.active = state;
          this.host.requestUpdate();
        }
      }
    }
    // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
    // newly opened menu.
    enableSubmenu(delay = true) {
      if (delay) {
        window.clearTimeout(this.enableSubmenuTimer);
        this.enableSubmenuTimer = window.setTimeout(() => {
          this.setSubmenuState(true);
        }, this.submenuOpenDelay);
      } else {
        this.setSubmenuState(true);
      }
    }
    disableSubmenu() {
      window.clearTimeout(this.enableSubmenuTimer);
      this.setSubmenuState(false);
    }
    // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
    updateSkidding() {
      var _a;
      if (!((_a = this.host.parentElement) == null ? void 0 : _a.computedStyleMap)) {
        return;
      }
      const styleMap = this.host.parentElement.computedStyleMap();
      const attrs = ["padding-top", "border-top-width", "margin-top"];
      const skidding = attrs.reduce((accumulator, attr) => {
        var _a2;
        const styleValue = (_a2 = styleMap.get(attr)) != null ? _a2 : new CSSUnitValue(0, "px");
        const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
        const pxValue = unitValue.to("px");
        return accumulator - pxValue.value;
      }, 0);
      this.skidding = skidding;
    }
    isExpanded() {
      return this.popupRef.value ? this.popupRef.value.active : false;
    }
    renderSubmenu() {
      const isRtl = getComputedStyle(this.host).direction === "rtl";
      if (!this.isConnected) {
        return x` <slot name="submenu" hidden></slot> `;
      }
      return x`
      <sl-popup
        ${n7(this.popupRef)}
        placement=${isRtl ? "left-start" : "right-start"}
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
    `;
    }
  };

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GHG37OLZ.js
  var SlMenuItem = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.type = "normal";
      this.checked = false;
      this.value = "";
      this.loading = false;
      this.disabled = false;
      this.hasSlotController = new HasSlotController(this, "submenu");
      this.submenuController = new SubmenuController(this, this.hasSlotController);
      this.handleHostClick = (event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleMouseOver = (event) => {
        this.focus();
        event.stopPropagation();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener("click", this.handleHostClick);
      this.addEventListener("mouseover", this.handleMouseOver);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("click", this.handleHostClick);
      this.removeEventListener("mouseover", this.handleMouseOver);
    }
    handleDefaultSlotChange() {
      const textLabel = this.getTextLabel();
      if (typeof this.cachedTextLabel === "undefined") {
        this.cachedTextLabel = textLabel;
        return;
      }
      if (textLabel !== this.cachedTextLabel) {
        this.cachedTextLabel = textLabel;
        this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
      }
    }
    handleCheckedChange() {
      if (this.checked && this.type !== "checkbox") {
        this.checked = false;
        console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
        return;
      }
      if (this.type === "checkbox") {
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.removeAttribute("aria-checked");
      }
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleTypeChange() {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.setAttribute("role", "menuitem");
        this.removeAttribute("aria-checked");
      }
    }
    /** Returns a text label based on the contents of the menu item's default slot. */
    getTextLabel() {
      return getTextContent(this.defaultSlot);
    }
    isSubmenu() {
      return this.hasSlotController.test("submenu");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      const isSubmenuExpanded = this.submenuController.isExpanded();
      return x`
      <div
        id="anchor"
        part="base"
        class=${e8({
        "menu-item": true,
        "menu-item--rtl": isRtl,
        "menu-item--checked": this.checked,
        "menu-item--disabled": this.disabled,
        "menu-item--loading": this.loading,
        "menu-item--has-submenu": this.isSubmenu(),
        "menu-item--submenu-expanded": isSubmenuExpanded
      })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
    }
  };
  SlMenuItem.styles = [component_styles_default, menu_item_styles_default];
  SlMenuItem.dependencies = {
    "sl-icon": SlIcon,
    "sl-popup": SlPopup,
    "sl-spinner": SlSpinner
  };
  __decorateClass2([
    e5("slot:not([name])")
  ], SlMenuItem.prototype, "defaultSlot", 2);
  __decorateClass2([
    e5(".menu-item")
  ], SlMenuItem.prototype, "menuItem", 2);
  __decorateClass2([
    n4()
  ], SlMenuItem.prototype, "type", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "checked", 2);
  __decorateClass2([
    n4()
  ], SlMenuItem.prototype, "value", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "loading", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "disabled", 2);
  __decorateClass2([
    watch("checked")
  ], SlMenuItem.prototype, "handleCheckedChange", 1);
  __decorateClass2([
    watch("disabled")
  ], SlMenuItem.prototype, "handleDisabledChange", 1);
  __decorateClass2([
    watch("type")
  ], SlMenuItem.prototype, "handleTypeChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EKO3L6KO.js
  SlMenuItem.define("sl-menu-item");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VVA35HTY.js
  var menu_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UHA22HSA.js
  var SlMenu = class extends ShoelaceElement {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menu");
    }
    handleClick(event) {
      const menuItemTypes = ["menuitem", "menuitemcheckbox"];
      const composedPath = event.composedPath();
      const target = composedPath.find((el) => {
        var _a;
        return menuItemTypes.includes(((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) || "");
      });
      if (!target) return;
      const closestMenu = composedPath.find((el) => {
        var _a;
        return ((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) === "menu";
      });
      const clickHasSubmenu = closestMenu !== this;
      if (clickHasSubmenu) return;
      const item = target;
      if (item.type === "checkbox") {
        item.checked = !item.checked;
      }
      this.emit("sl-select", { detail: { item } });
    }
    handleKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        const item = this.getCurrentItem();
        event.preventDefault();
        event.stopPropagation();
        item == null ? void 0 : item.click();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        const items = this.getAllItems();
        const activeItem = this.getCurrentItem();
        let index2 = activeItem ? items.indexOf(activeItem) : 0;
        if (items.length > 0) {
          event.preventDefault();
          event.stopPropagation();
          if (event.key === "ArrowDown") {
            index2++;
          } else if (event.key === "ArrowUp") {
            index2--;
          } else if (event.key === "Home") {
            index2 = 0;
          } else if (event.key === "End") {
            index2 = items.length - 1;
          }
          if (index2 < 0) {
            index2 = items.length - 1;
          }
          if (index2 > items.length - 1) {
            index2 = 0;
          }
          this.setCurrentItem(items[index2]);
          items[index2].focus();
        }
      }
    }
    handleMouseDown(event) {
      const target = event.target;
      if (this.isMenuItem(target)) {
        this.setCurrentItem(target);
      }
    }
    handleSlotChange() {
      const items = this.getAllItems();
      if (items.length > 0) {
        this.setCurrentItem(items[0]);
      }
    }
    isMenuItem(item) {
      var _a;
      return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
    }
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems() {
      return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
        if (el.inert || !this.isMenuItem(el)) {
          return false;
        }
        return true;
      });
    }
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem() {
      return this.getAllItems().find((i8) => i8.getAttribute("tabindex") === "0");
    }
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item) {
      const items = this.getAllItems();
      items.forEach((i8) => {
        i8.setAttribute("tabindex", i8 === item ? "0" : "-1");
      });
    }
    render() {
      return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
  };
  SlMenu.styles = [component_styles_default, menu_styles_default];
  __decorateClass2([
    e5("slot")
  ], SlMenu.prototype, "defaultSlot", 2);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4KSSK4CB.js
  SlMenu.define("sl-menu");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XCHVWIJM.js
  SlIconButton.define("sl-icon-button");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2OUC42YY.js
  var button_group_styles_default = i`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GRDZU4DK.js
  var SlButtonGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.disableRole = false;
      this.label = "";
    }
    handleFocus(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", true);
    }
    handleBlur(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", false);
    }
    handleMouseOver(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", true);
    }
    handleMouseOut(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", false);
    }
    handleSlotChange() {
      const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
      slottedElements.forEach((el) => {
        const index2 = slottedElements.indexOf(el);
        const button = findButton(el);
        if (button) {
          button.toggleAttribute("data-sl-button-group__button", true);
          button.toggleAttribute("data-sl-button-group__button--first", index2 === 0);
          button.toggleAttribute("data-sl-button-group__button--inner", index2 > 0 && index2 < slottedElements.length - 1);
          button.toggleAttribute("data-sl-button-group__button--last", index2 === slottedElements.length - 1);
          button.toggleAttribute(
            "data-sl-button-group__button--radio",
            button.tagName.toLowerCase() === "sl-radio-button"
          );
        }
      });
    }
    render() {
      return x`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
    }
  };
  SlButtonGroup.styles = [component_styles_default, button_group_styles_default];
  __decorateClass2([
    e5("slot")
  ], SlButtonGroup.prototype, "defaultSlot", 2);
  __decorateClass2([
    r6()
  ], SlButtonGroup.prototype, "disableRole", 2);
  __decorateClass2([
    n4()
  ], SlButtonGroup.prototype, "label", 2);
  function findButton(el) {
    var _a;
    const selector = "sl-button, sl-radio-button";
    return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WLDLOEOA.js
  SlButtonGroup.define("sl-button-group");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XNOUITPX.js
  var select_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js
  function getOffset(element, parent) {
    return {
      top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
      left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
  }
  function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset3 = getOffset(element, container);
    const offsetTop = offset3.top + container.scrollTop;
    const offsetLeft = offset3.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
      if (offsetLeft < minX) {
        container.scrollTo({ left: offsetLeft, behavior });
      } else if (offsetLeft + element.clientWidth > maxX) {
        container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
      }
    }
    if (direction === "vertical" || direction === "both") {
      if (offsetTop < minY) {
        container.scrollTo({ top: offsetTop, behavior });
      } else if (offsetTop + element.clientHeight > maxY) {
        container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
      }
    }
  }

  // node_modules/.pnpm/lit-html@3.2.1/node_modules/lit-html/directives/unsafe-html.js
  var e11 = class extends i5 {
    constructor(i8) {
      if (super(i8), this.it = E, i8.type !== t5.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r9) {
      if (r9 === E || null == r9) return this._t = void 0, this.it = r9;
      if (r9 === T) return r9;
      if ("string" != typeof r9) throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r9 === this.it) return this._t;
      this.it = r9;
      const s4 = [r9];
      return s4.raw = s4, this._t = { _$litType$: this.constructor.resultType, strings: s4, values: [] };
    }
  };
  e11.directiveName = "unsafeHTML", e11.resultType = 1;
  var o9 = e7(e11);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NHYY7X64.js
  var SlSelect = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController2(this);
      this.typeToSelectString = "";
      this.hasFocus = false;
      this.displayLabel = "";
      this.selectedOptions = [];
      this.valueHasChanged = false;
      this.name = "";
      this._value = "";
      this.defaultValue = "";
      this.size = "medium";
      this.placeholder = "";
      this.multiple = false;
      this.maxOptionsVisible = 3;
      this.disabled = false;
      this.clearable = false;
      this.open = false;
      this.hoist = false;
      this.filled = false;
      this.pill = false;
      this.label = "";
      this.placement = "bottom";
      this.helpText = "";
      this.form = "";
      this.required = false;
      this.getTag = (option) => {
        return x`
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
        @sl-remove=${(event) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </sl-tag>
    `;
      };
      this.handleDocumentFocusIn = (event) => {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
          this.hide();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        const target = event.target;
        const isClearButton = target.closest(".select__clear") !== null;
        const isIconButton = target.closest("sl-icon-button") !== null;
        if (isClearButton || isIconButton) {
          return;
        }
        if (event.key === "Escape" && this.open && !this.closeWatcher) {
          event.preventDefault();
          event.stopPropagation();
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
        if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
          event.preventDefault();
          event.stopImmediatePropagation();
          if (!this.open) {
            this.show();
            return;
          }
          if (this.currentOption && !this.currentOption.disabled) {
            this.valueHasChanged = true;
            if (this.multiple) {
              this.toggleOptionSelection(this.currentOption);
            } else {
              this.setSelectedOptions(this.currentOption);
            }
            this.updateComplete.then(() => {
              this.emit("sl-input");
              this.emit("sl-change");
            });
            if (!this.multiple) {
              this.hide();
              this.displayInput.focus({ preventScroll: true });
            }
          }
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
          const allOptions = this.getAllOptions();
          const currentIndex = allOptions.indexOf(this.currentOption);
          let newIndex = Math.max(0, currentIndex);
          event.preventDefault();
          if (!this.open) {
            this.show();
            if (this.currentOption) {
              return;
            }
          }
          if (event.key === "ArrowDown") {
            newIndex = currentIndex + 1;
            if (newIndex > allOptions.length - 1) newIndex = 0;
          } else if (event.key === "ArrowUp") {
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = allOptions.length - 1;
          } else if (event.key === "Home") {
            newIndex = 0;
          } else if (event.key === "End") {
            newIndex = allOptions.length - 1;
          }
          this.setCurrentOption(allOptions[newIndex]);
        }
        if (event.key && event.key.length === 1 || event.key === "Backspace") {
          const allOptions = this.getAllOptions();
          if (event.metaKey || event.ctrlKey || event.altKey) {
            return;
          }
          if (!this.open) {
            if (event.key === "Backspace") {
              return;
            }
            this.show();
          }
          event.stopPropagation();
          event.preventDefault();
          clearTimeout(this.typeToSelectTimeout);
          this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
          if (event.key === "Backspace") {
            this.typeToSelectString = this.typeToSelectString.slice(0, -1);
          } else {
            this.typeToSelectString += event.key.toLowerCase();
          }
          for (const option of allOptions) {
            const label = option.getTextLabel().toLowerCase();
            if (label.startsWith(this.typeToSelectString)) {
              this.setCurrentOption(option);
              break;
            }
          }
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
          this.hide();
        }
      };
    }
    get value() {
      return this._value;
    }
    set value(val) {
      if (this.multiple) {
        val = Array.isArray(val) ? val : val.split(" ");
      } else {
        val = Array.isArray(val) ? val.join(" ") : val;
      }
      if (this._value === val) {
        return;
      }
      this.valueHasChanged = true;
      this._value = val;
    }
    /** Gets the validity state object */
    get validity() {
      return this.valueInput.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.valueInput.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback();
      setTimeout(() => {
        this.handleDefaultSlotChange();
      });
      this.open = false;
    }
    addOpenListeners() {
      var _a;
      document.addEventListener("focusin", this.handleDocumentFocusIn);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
      if (this.getRootNode() !== document) {
        this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
      }
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => {
          if (this.open) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        };
      }
    }
    removeOpenListeners() {
      var _a;
      document.removeEventListener("focusin", this.handleDocumentFocusIn);
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      if (this.getRootNode() !== document) {
        this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
      }
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    }
    handleFocus() {
      this.hasFocus = true;
      this.displayInput.setSelectionRange(0, 0);
      this.emit("sl-focus");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleLabelClick() {
      this.displayInput.focus();
    }
    handleComboboxMouseDown(event) {
      const path = event.composedPath();
      const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "sl-icon-button");
      if (this.disabled || isIconButton) {
        return;
      }
      event.preventDefault();
      this.displayInput.focus({ preventScroll: true });
      this.open = !this.open;
    }
    handleComboboxKeyDown(event) {
      if (event.key === "Tab") {
        return;
      }
      event.stopPropagation();
      this.handleDocumentKeyDown(event);
    }
    handleClearClick(event) {
      event.stopPropagation();
      this.valueHasChanged = true;
      if (this.value !== "") {
        this.setSelectedOptions([]);
        this.displayInput.focus({ preventScroll: true });
        this.updateComplete.then(() => {
          this.emit("sl-clear");
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
    }
    handleClearMouseDown(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    handleOptionClick(event) {
      const target = event.target;
      const option = target.closest("sl-option");
      const oldValue = this.value;
      if (option && !option.disabled) {
        this.valueHasChanged = true;
        if (this.multiple) {
          this.toggleOptionSelection(option);
        } else {
          this.setSelectedOptions(option);
        }
        this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
        if (this.value !== oldValue) {
          this.updateComplete.then(() => {
            this.emit("sl-input");
            this.emit("sl-change");
          });
        }
        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }
    }
    /* @internal - used by options to update labels */
    handleDefaultSlotChange() {
      if (!customElements.get("sl-option")) {
        customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
      }
      const allOptions = this.getAllOptions();
      const val = this.valueHasChanged ? this.value : this.defaultValue;
      const value = Array.isArray(val) ? val : [val];
      const values = [];
      allOptions.forEach((option) => values.push(option.value));
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    }
    handleTagRemove(event, option) {
      event.stopPropagation();
      this.valueHasChanged = true;
      if (!this.disabled) {
        this.toggleOptionSelection(option, false);
        this.updateComplete.then(() => {
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
    }
    // Gets an array of all <sl-option> elements
    getAllOptions() {
      return [...this.querySelectorAll("sl-option")];
    }
    // Gets the first <sl-option> element
    getFirstOption() {
      return this.querySelector("sl-option");
    }
    // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
    // option may be "current" at a time.
    setCurrentOption(option) {
      const allOptions = this.getAllOptions();
      allOptions.forEach((el) => {
        el.current = false;
        el.tabIndex = -1;
      });
      if (option) {
        this.currentOption = option;
        option.current = true;
        option.tabIndex = 0;
        option.focus();
      }
    }
    // Sets the selected option(s)
    setSelectedOptions(option) {
      const allOptions = this.getAllOptions();
      const newSelectedOptions = Array.isArray(option) ? option : [option];
      allOptions.forEach((el) => el.selected = false);
      if (newSelectedOptions.length) {
        newSelectedOptions.forEach((el) => el.selected = true);
      }
      this.selectionChanged();
    }
    // Toggles an option's selected state
    toggleOptionSelection(option, force) {
      if (force === true || force === false) {
        option.selected = force;
      } else {
        option.selected = !option.selected;
      }
      this.selectionChanged();
    }
    // This method must be called whenever the selection changes. It will update the selected options cache, the current
    // value, and the display value
    selectionChanged() {
      var _a, _b, _c;
      const options = this.getAllOptions();
      this.selectedOptions = options.filter((el) => el.selected);
      const cachedValueHasChanged = this.valueHasChanged;
      if (this.multiple) {
        this.value = this.selectedOptions.map((el) => el.value);
        if (this.placeholder && this.value.length === 0) {
          this.displayLabel = "";
        } else {
          this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
        }
      } else {
        const selectedOption = this.selectedOptions[0];
        this.value = (_a = selectedOption == null ? void 0 : selectedOption.value) != null ? _a : "";
        this.displayLabel = (_c = (_b = selectedOption == null ? void 0 : selectedOption.getTextLabel) == null ? void 0 : _b.call(selectedOption)) != null ? _c : "";
      }
      this.valueHasChanged = cachedValueHasChanged;
      this.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });
    }
    get tags() {
      return this.selectedOptions.map((option, index2) => {
        if (index2 < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
          const tag = this.getTag(option, index2);
          return x`<div @sl-remove=${(e12) => this.handleTagRemove(e12, option)}>
          ${typeof tag === "string" ? o9(tag) : tag}
        </div>`;
        } else if (index2 === this.maxOptionsVisible) {
          return x`<sl-tag size=${this.size}>+${this.selectedOptions.length - index2}</sl-tag>`;
        }
        return x``;
      });
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleDisabledChange() {
      if (this.disabled) {
        this.open = false;
        this.handleOpenChange();
      }
    }
    attributeChangedCallback(name2, oldVal, newVal) {
      super.attributeChangedCallback(name2, oldVal, newVal);
      if (name2 === "value") {
        const cachedValueHasChanged = this.valueHasChanged;
        this.value = this.defaultValue;
        this.valueHasChanged = cachedValueHasChanged;
      }
    }
    handleValueChange() {
      if (!this.valueHasChanged) {
        const cachedValueHasChanged = this.valueHasChanged;
        this.value = this.defaultValue;
        this.valueHasChanged = cachedValueHasChanged;
      }
      const allOptions = this.getAllOptions();
      const value = Array.isArray(this.value) ? this.value : [this.value];
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    }
    async handleOpenChange() {
      if (this.open && !this.disabled) {
        this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.listbox.hidden = false;
        this.popup.active = true;
        requestAnimationFrame(() => {
          this.setCurrentOption(this.currentOption);
        });
        const { keyframes, options } = getAnimation(this, "select.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        if (this.currentOption) {
          scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
        }
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "select.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.listbox.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    /** Shows the listbox. */
    async show() {
      if (this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the listbox. */
    async hide() {
      if (!this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.valueInput.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.valueInput.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.valueInput.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    /** Sets focus on the control. */
    focus(options) {
      this.displayInput.focus(options);
    }
    /** Removes focus from the control. */
    blur() {
      this.displayInput.blur();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
      const isPlaceholderVisible = this.placeholder && this.value && this.value.length <= 0;
      return x`
      <div
        part="form-control"
        class=${e8({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${e8({
        select: true,
        "select--standard": true,
        "select--filled": this.filled,
        "select--pill": this.pill,
        "select--open": this.open,
        "select--disabled": this.disabled,
        "select--multiple": this.multiple,
        "select--focused": this.hasFocus,
        "select--placeholder-visible": isPlaceholderVisible,
        "select--top": this.placement === "top",
        "select--bottom": this.placement === "bottom",
        "select--small": this.size === "small",
        "select--medium": this.size === "medium",
        "select--large": this.size === "large"
      })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
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
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? x`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon ? x`
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
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
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
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlSelect.styles = [component_styles_default, form_control_styles_default, select_styles_default];
  SlSelect.dependencies = {
    "sl-icon": SlIcon,
    "sl-popup": SlPopup,
    "sl-tag": SlTag
  };
  __decorateClass2([
    e5(".select")
  ], SlSelect.prototype, "popup", 2);
  __decorateClass2([
    e5(".select__combobox")
  ], SlSelect.prototype, "combobox", 2);
  __decorateClass2([
    e5(".select__display-input")
  ], SlSelect.prototype, "displayInput", 2);
  __decorateClass2([
    e5(".select__value-input")
  ], SlSelect.prototype, "valueInput", 2);
  __decorateClass2([
    e5(".select__listbox")
  ], SlSelect.prototype, "listbox", 2);
  __decorateClass2([
    r6()
  ], SlSelect.prototype, "hasFocus", 2);
  __decorateClass2([
    r6()
  ], SlSelect.prototype, "displayLabel", 2);
  __decorateClass2([
    r6()
  ], SlSelect.prototype, "currentOption", 2);
  __decorateClass2([
    r6()
  ], SlSelect.prototype, "selectedOptions", 2);
  __decorateClass2([
    r6()
  ], SlSelect.prototype, "valueHasChanged", 2);
  __decorateClass2([
    n4()
  ], SlSelect.prototype, "name", 2);
  __decorateClass2([
    r6()
  ], SlSelect.prototype, "value", 1);
  __decorateClass2([
    n4({ attribute: "value" })
  ], SlSelect.prototype, "defaultValue", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlSelect.prototype, "size", 2);
  __decorateClass2([
    n4()
  ], SlSelect.prototype, "placeholder", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "multiple", 2);
  __decorateClass2([
    n4({ attribute: "max-options-visible", type: Number })
  ], SlSelect.prototype, "maxOptionsVisible", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "disabled", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlSelect.prototype, "clearable", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "open", 2);
  __decorateClass2([
    n4({ type: Boolean })
  ], SlSelect.prototype, "hoist", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "filled", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "pill", 2);
  __decorateClass2([
    n4()
  ], SlSelect.prototype, "label", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlSelect.prototype, "placement", 2);
  __decorateClass2([
    n4({ attribute: "help-text" })
  ], SlSelect.prototype, "helpText", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlSelect.prototype, "form", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "required", 2);
  __decorateClass2([
    n4()
  ], SlSelect.prototype, "getTag", 2);
  __decorateClass2([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleDisabledChange", 1);
  __decorateClass2([
    watch(["defaultValue", "value"], { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleValueChange", 1);
  __decorateClass2([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleOpenChange", 1);
  setDefaultAnimation("select.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("select.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BDFXHH5V.js
  SlSelect.define("sl-select");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FXXKMG2P.js
  var option_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LHYNW26B.js
  var SlOption = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.current = false;
      this.selected = false;
      this.hasHover = false;
      this.value = "";
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "option");
      this.setAttribute("aria-selected", "false");
    }
    handleDefaultSlotChange() {
      customElements.whenDefined("sl-select").then(() => {
        const controller = this.closest("sl-select");
        if (controller) {
          controller.handleDefaultSlotChange();
        }
      });
    }
    handleMouseEnter() {
      this.hasHover = true;
    }
    handleMouseLeave() {
      this.hasHover = false;
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleSelectedChange() {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
    }
    handleValueChange() {
      if (typeof this.value !== "string") {
        this.value = String(this.value);
      }
      if (this.value.includes(" ")) {
        console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
        this.value = this.value.replace(/ /g, "_");
      }
    }
    /** Returns a plain text label based on the option's content. */
    getTextLabel() {
      const nodes = this.childNodes;
      let label = "";
      [...nodes].forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (!node.hasAttribute("slot")) {
            label += node.textContent;
          }
        }
        if (node.nodeType === Node.TEXT_NODE) {
          label += node.textContent;
        }
      });
      return label.trim();
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        option: true,
        "option--current": this.current,
        "option--disabled": this.disabled,
        "option--selected": this.selected,
        "option--hover": this.hasHover
      })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
    }
  };
  SlOption.styles = [component_styles_default, option_styles_default];
  SlOption.dependencies = { "sl-icon": SlIcon };
  __decorateClass2([
    e5(".option__label")
  ], SlOption.prototype, "defaultSlot", 2);
  __decorateClass2([
    r6()
  ], SlOption.prototype, "current", 2);
  __decorateClass2([
    r6()
  ], SlOption.prototype, "selected", 2);
  __decorateClass2([
    r6()
  ], SlOption.prototype, "hasHover", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlOption.prototype, "value", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlOption.prototype, "disabled", 2);
  __decorateClass2([
    watch("disabled")
  ], SlOption.prototype, "handleDisabledChange", 1);
  __decorateClass2([
    watch("selected")
  ], SlOption.prototype, "handleSelectedChange", 1);
  __decorateClass2([
    watch("value")
  ], SlOption.prototype, "handleValueChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MXB57G5B.js
  SlOption.define("sl-option");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XJU7WU2G.js
  var tab_group_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5VKIB4HA.js
  var resize_observer_styles_default = i`
  :host {
    display: contents;
  }
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CLFXSSNK.js
  var SlResizeObserver = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.observedElements = [];
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver((entries) => {
        this.emit("sl-resize", { detail: { entries } });
      });
      if (!this.disabled) {
        this.startObserver();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stopObserver();
    }
    handleSlotChange() {
      if (!this.disabled) {
        this.startObserver();
      }
    }
    startObserver() {
      const slot = this.shadowRoot.querySelector("slot");
      if (slot !== null) {
        const elements = slot.assignedElements({ flatten: true });
        this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
        this.observedElements = [];
        elements.forEach((el) => {
          this.resizeObserver.observe(el);
          this.observedElements.push(el);
        });
      }
    }
    stopObserver() {
      this.resizeObserver.disconnect();
    }
    handleDisabledChange() {
      if (this.disabled) {
        this.stopObserver();
      } else {
        this.startObserver();
      }
    }
    render() {
      return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
    }
  };
  SlResizeObserver.styles = [component_styles_default, resize_observer_styles_default];
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlResizeObserver.prototype, "disabled", 2);
  __decorateClass2([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlResizeObserver.prototype, "handleDisabledChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q2RKBAJQ.js
  var SlTabGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.tabs = [];
      this.focusableTabs = [];
      this.panels = [];
      this.localize = new LocalizeController2(this);
      this.hasScrollControls = false;
      this.shouldHideScrollStartButton = false;
      this.shouldHideScrollEndButton = false;
      this.placement = "top";
      this.activation = "auto";
      this.noScrollControls = false;
      this.fixedScrollControls = false;
      this.scrollOffset = 1;
    }
    connectedCallback() {
      const whenAllDefined = Promise.all([
        customElements.whenDefined("sl-tab"),
        customElements.whenDefined("sl-tab-panel")
      ]);
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver(() => {
        this.repositionIndicator();
        this.updateScrollControls();
      });
      this.mutationObserver = new MutationObserver((mutations) => {
        if (mutations.some((m3) => !["aria-labelledby", "aria-controls"].includes(m3.attributeName))) {
          setTimeout(() => this.setAriaLabels());
        }
        if (mutations.some((m3) => m3.attributeName === "disabled")) {
          this.syncTabsAndPanels();
        }
      });
      this.updateComplete.then(() => {
        this.syncTabsAndPanels();
        this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
        this.resizeObserver.observe(this.nav);
        whenAllDefined.then(() => {
          const intersectionObserver = new IntersectionObserver((entries, observer) => {
            var _a;
            if (entries[0].intersectionRatio > 0) {
              this.setAriaLabels();
              this.setActiveTab((_a = this.getActiveTab()) != null ? _a : this.tabs[0], { emitEvents: false });
              observer.unobserve(entries[0].target);
            }
          });
          intersectionObserver.observe(this.tabGroup);
        });
      });
    }
    disconnectedCallback() {
      var _a, _b;
      super.disconnectedCallback();
      (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
      if (this.nav) {
        (_b = this.resizeObserver) == null ? void 0 : _b.unobserve(this.nav);
      }
    }
    getAllTabs() {
      const slot = this.shadowRoot.querySelector('slot[name="nav"]');
      return slot.assignedElements();
    }
    getAllPanels() {
      return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === "sl-tab-panel");
    }
    getActiveTab() {
      return this.tabs.find((el) => el.active);
    }
    handleClick(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    handleKeyDown(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (["Enter", " "].includes(event.key)) {
        if (tab !== null) {
          this.setActiveTab(tab, { scrollBehavior: "smooth" });
          event.preventDefault();
        }
      }
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const activeEl = this.tabs.find((t6) => t6.matches(":focus"));
        const isRtl = this.localize.dir() === "rtl";
        let nextTab = null;
        if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "sl-tab") {
          if (event.key === "Home") {
            nextTab = this.focusableTabs[0];
          } else if (event.key === "End") {
            nextTab = this.focusableTabs[this.focusableTabs.length - 1];
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
            const currentIndex = this.tabs.findIndex((el) => el === activeEl);
            nextTab = this.findNextFocusableTab(currentIndex, "backward");
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
            const currentIndex = this.tabs.findIndex((el) => el === activeEl);
            nextTab = this.findNextFocusableTab(currentIndex, "forward");
          }
          if (!nextTab) {
            return;
          }
          nextTab.tabIndex = 0;
          nextTab.focus({ preventScroll: true });
          if (this.activation === "auto") {
            this.setActiveTab(nextTab, { scrollBehavior: "smooth" });
          } else {
            this.tabs.forEach((tabEl) => {
              tabEl.tabIndex = tabEl === nextTab ? 0 : -1;
            });
          }
          if (["top", "bottom"].includes(this.placement)) {
            scrollIntoView(nextTab, this.nav, "horizontal");
          }
          event.preventDefault();
        }
      }
    }
    handleScrollToStart() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    handleScrollToEnd() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    setActiveTab(tab, options) {
      options = __spreadValues({
        emitEvents: true,
        scrollBehavior: "auto"
      }, options);
      if (tab !== this.activeTab && !tab.disabled) {
        const previousTab = this.activeTab;
        this.activeTab = tab;
        this.tabs.forEach((el) => {
          el.active = el === this.activeTab;
          el.tabIndex = el === this.activeTab ? 0 : -1;
        });
        this.panels.forEach((el) => {
          var _a;
          return el.active = el.name === ((_a = this.activeTab) == null ? void 0 : _a.panel);
        });
        this.syncIndicator();
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
        }
        if (options.emitEvents) {
          if (previousTab) {
            this.emit("sl-tab-hide", { detail: { name: previousTab.panel } });
          }
          this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } });
        }
      }
    }
    setAriaLabels() {
      this.tabs.forEach((tab) => {
        const panel = this.panels.find((el) => el.name === tab.panel);
        if (panel) {
          tab.setAttribute("aria-controls", panel.getAttribute("id"));
          panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
        }
      });
    }
    repositionIndicator() {
      const currentTab = this.getActiveTab();
      if (!currentTab) {
        return;
      }
      const width = currentTab.clientWidth;
      const height = currentTab.clientHeight;
      const isRtl = this.localize.dir() === "rtl";
      const allTabs = this.getAllTabs();
      const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
      const offset3 = precedingTabs.reduce(
        (previous, current) => ({
          left: previous.left + current.clientWidth,
          top: previous.top + current.clientHeight
        }),
        { left: 0, top: 0 }
      );
      switch (this.placement) {
        case "top":
        case "bottom":
          this.indicator.style.width = `${width}px`;
          this.indicator.style.height = "auto";
          this.indicator.style.translate = isRtl ? `${-1 * offset3.left}px` : `${offset3.left}px`;
          break;
        case "start":
        case "end":
          this.indicator.style.width = "auto";
          this.indicator.style.height = `${height}px`;
          this.indicator.style.translate = `0 ${offset3.top}px`;
          break;
      }
    }
    // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
    syncTabsAndPanels() {
      this.tabs = this.getAllTabs();
      this.focusableTabs = this.tabs.filter((el) => !el.disabled);
      this.panels = this.getAllPanels();
      this.syncIndicator();
      this.updateComplete.then(() => this.updateScrollControls());
    }
    findNextFocusableTab(currentIndex, direction) {
      let nextTab = null;
      const iterator = direction === "forward" ? 1 : -1;
      let nextIndex = currentIndex + iterator;
      while (currentIndex < this.tabs.length) {
        nextTab = this.tabs[nextIndex] || null;
        if (nextTab === null) {
          if (direction === "forward") {
            nextTab = this.focusableTabs[0];
          } else {
            nextTab = this.focusableTabs[this.focusableTabs.length - 1];
          }
          break;
        }
        if (!nextTab.disabled) {
          break;
        }
        nextIndex += iterator;
      }
      return nextTab;
    }
    updateScrollButtons() {
      if (this.hasScrollControls && !this.fixedScrollControls) {
        this.shouldHideScrollStartButton = this.scrollFromStart() <= this.scrollOffset;
        this.shouldHideScrollEndButton = this.isScrolledToEnd();
      }
    }
    isScrolledToEnd() {
      return this.scrollFromStart() + this.nav.clientWidth >= this.nav.scrollWidth - this.scrollOffset;
    }
    scrollFromStart() {
      return this.localize.dir() === "rtl" ? -this.nav.scrollLeft : this.nav.scrollLeft;
    }
    updateScrollControls() {
      if (this.noScrollControls) {
        this.hasScrollControls = false;
      } else {
        this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1;
      }
      this.updateScrollButtons();
    }
    syncIndicator() {
      const tab = this.getActiveTab();
      if (tab) {
        this.indicator.style.display = "block";
        this.repositionIndicator();
      } else {
        this.indicator.style.display = "none";
      }
    }
    /** Shows the specified tab panel. */
    show(panel) {
      const tab = this.tabs.find((el) => el.panel === panel);
      if (tab) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return x`
      <div
        part="base"
        class=${e8({
        "tab-group": true,
        "tab-group--top": this.placement === "top",
        "tab-group--bottom": this.placement === "bottom",
        "tab-group--start": this.placement === "start",
        "tab-group--end": this.placement === "end",
        "tab-group--rtl": this.localize.dir() === "rtl",
        "tab-group--has-scroll-controls": this.hasScrollControls
      })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${e8({
        "tab-group__scroll-button": true,
        "tab-group__scroll-button--start": true,
        "tab-group__scroll-button--start--hidden": this.shouldHideScrollStartButton
      })}
                  name=${isRtl ? "chevron-right" : "chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${e8({
        "tab-group__scroll-button": true,
        "tab-group__scroll-button--end": true,
        "tab-group__scroll-button--end--hidden": this.shouldHideScrollEndButton
      })}
                  name=${isRtl ? "chevron-left" : "chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
    }
  };
  SlTabGroup.styles = [component_styles_default, tab_group_styles_default];
  SlTabGroup.dependencies = { "sl-icon-button": SlIconButton, "sl-resize-observer": SlResizeObserver };
  __decorateClass2([
    e5(".tab-group")
  ], SlTabGroup.prototype, "tabGroup", 2);
  __decorateClass2([
    e5(".tab-group__body")
  ], SlTabGroup.prototype, "body", 2);
  __decorateClass2([
    e5(".tab-group__nav")
  ], SlTabGroup.prototype, "nav", 2);
  __decorateClass2([
    e5(".tab-group__indicator")
  ], SlTabGroup.prototype, "indicator", 2);
  __decorateClass2([
    r6()
  ], SlTabGroup.prototype, "hasScrollControls", 2);
  __decorateClass2([
    r6()
  ], SlTabGroup.prototype, "shouldHideScrollStartButton", 2);
  __decorateClass2([
    r6()
  ], SlTabGroup.prototype, "shouldHideScrollEndButton", 2);
  __decorateClass2([
    n4()
  ], SlTabGroup.prototype, "placement", 2);
  __decorateClass2([
    n4()
  ], SlTabGroup.prototype, "activation", 2);
  __decorateClass2([
    n4({ attribute: "no-scroll-controls", type: Boolean })
  ], SlTabGroup.prototype, "noScrollControls", 2);
  __decorateClass2([
    n4({ attribute: "fixed-scroll-controls", type: Boolean })
  ], SlTabGroup.prototype, "fixedScrollControls", 2);
  __decorateClass2([
    t3({ passive: true })
  ], SlTabGroup.prototype, "updateScrollButtons", 1);
  __decorateClass2([
    watch("noScrollControls", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "updateScrollControls", 1);
  __decorateClass2([
    watch("placement", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "syncIndicator", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.H677XEBO.js
  SlTabGroup.define("sl-tab-group");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OQXPL73S.js
  var debounce = (fn, delay) => {
    let timerId = 0;
    return function(...args) {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        fn.call(this, ...args);
      }, delay);
    };
  };
  var decorate = (proto, method, decorateFn) => {
    const superFn = proto[method];
    proto[method] = function(...args) {
      superFn.call(this, ...args);
      decorateFn.call(this, superFn, ...args);
    };
  };
  var isSupported = "onscrollend" in window;
  if (!isSupported) {
    const pointers = /* @__PURE__ */ new Set();
    const scrollHandlers = /* @__PURE__ */ new WeakMap();
    const handlePointerDown = (event) => {
      for (const touch of event.changedTouches) {
        pointers.add(touch.identifier);
      }
    };
    const handlePointerUp = (event) => {
      for (const touch of event.changedTouches) {
        pointers.delete(touch.identifier);
      }
    };
    document.addEventListener("touchstart", handlePointerDown, true);
    document.addEventListener("touchend", handlePointerUp, true);
    document.addEventListener("touchcancel", handlePointerUp, true);
    decorate(EventTarget.prototype, "addEventListener", function(addEventListener2, type) {
      if (type !== "scrollend") return;
      const handleScrollEnd = debounce(() => {
        if (!pointers.size) {
          this.dispatchEvent(new Event("scrollend"));
        } else {
          handleScrollEnd();
        }
      }, 100);
      addEventListener2.call(this, "scroll", handleScrollEnd, { passive: true });
      scrollHandlers.set(this, handleScrollEnd);
    });
    decorate(EventTarget.prototype, "removeEventListener", function(removeEventListener, type) {
      if (type !== "scrollend") return;
      const scrollHandler = scrollHandlers.get(this);
      if (scrollHandler) {
        removeEventListener.call(this, "scroll", scrollHandler, { passive: true });
      }
    });
  }

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CNMNUZLG.js
  var tab_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3A7IH3I2.js
  var id2 = 0;
  var SlTab = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.attrId = ++id2;
      this.componentId = `sl-tab-${this.attrId}`;
      this.panel = "";
      this.active = false;
      this.closable = false;
      this.disabled = false;
      this.tabIndex = 0;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "tab");
    }
    handleCloseClick(event) {
      event.stopPropagation();
      this.emit("sl-close");
    }
    handleActiveChange() {
      this.setAttribute("aria-selected", this.active ? "true" : "false");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      if (this.disabled && !this.active) {
        this.tabIndex = -1;
      } else {
        this.tabIndex = 0;
      }
    }
    render() {
      this.id = this.id.length > 0 ? this.id : this.componentId;
      return x`
      <div
        part="base"
        class=${e8({
        tab: true,
        "tab--active": this.active,
        "tab--closable": this.closable,
        "tab--disabled": this.disabled
      })}
      >
        <slot></slot>
        ${this.closable ? x`
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
            ` : ""}
      </div>
    `;
    }
  };
  SlTab.styles = [component_styles_default, tab_styles_default];
  SlTab.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass2([
    e5(".tab")
  ], SlTab.prototype, "tab", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlTab.prototype, "panel", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlTab.prototype, "active", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlTab.prototype, "closable", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlTab.prototype, "disabled", 2);
  __decorateClass2([
    n4({ type: Number, reflect: true })
  ], SlTab.prototype, "tabIndex", 2);
  __decorateClass2([
    watch("active")
  ], SlTab.prototype, "handleActiveChange", 1);
  __decorateClass2([
    watch("disabled")
  ], SlTab.prototype, "handleDisabledChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q4RQY3NF.js
  SlTab.define("sl-tab");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BQSEJD7X.js
  var tab_panel_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BOQAU5BC.js
  var id3 = 0;
  var SlTabPanel = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.attrId = ++id3;
      this.componentId = `sl-tab-panel-${this.attrId}`;
      this.name = "";
      this.active = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.id = this.id.length > 0 ? this.id : this.componentId;
      this.setAttribute("role", "tabpanel");
    }
    handleActiveChange() {
      this.setAttribute("aria-hidden", this.active ? "false" : "true");
    }
    render() {
      return x`
      <slot
        part="base"
        class=${e8({
        "tab-panel": true,
        "tab-panel--active": this.active
      })}
      ></slot>
    `;
    }
  };
  SlTabPanel.styles = [component_styles_default, tab_panel_styles_default];
  __decorateClass2([
    n4({ reflect: true })
  ], SlTabPanel.prototype, "name", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlTabPanel.prototype, "active", 2);
  __decorateClass2([
    watch("active")
  ], SlTabPanel.prototype, "handleActiveChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.REUF334Y.js
  SlTabPanel.define("sl-tab-panel");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B63YXDJO.js
  var radio_group_styles_default = i`
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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YRC2LFOR.js
  var SlRadioGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this);
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.customValidityMessage = "";
      this.hasButtonGroup = false;
      this.errorMessage = "";
      this.defaultValue = "";
      this.label = "";
      this.helpText = "";
      this.name = "option";
      this.value = "";
      this.size = "medium";
      this.form = "";
      this.required = false;
    }
    /** Gets the validity state object */
    get validity() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (hasCustomValidityMessage) {
        return customErrorValidityState;
      } else if (isRequiredAndEmpty) {
        return valueMissingValidityState;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (hasCustomValidityMessage) {
        return this.customValidityMessage;
      } else if (isRequiredAndEmpty) {
        return this.validationInput.validationMessage;
      }
      return "";
    }
    connectedCallback() {
      super.connectedCallback();
      this.defaultValue = this.value;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    getAllRadios() {
      return [...this.querySelectorAll("sl-radio, sl-radio-button")];
    }
    handleRadioClick(event) {
      const target = event.target.closest("sl-radio, sl-radio-button");
      const radios = this.getAllRadios();
      const oldValue = this.value;
      if (!target || target.disabled) {
        return;
      }
      this.value = target.value;
      radios.forEach((radio) => radio.checked = radio === target);
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleKeyDown(event) {
      var _a;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
        return;
      }
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
      const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      const oldValue = this.value;
      let index2 = radios.indexOf(checkedRadio) + incr;
      if (index2 < 0) {
        index2 = radios.length - 1;
      }
      if (index2 > radios.length - 1) {
        index2 = 0;
      }
      this.getAllRadios().forEach((radio) => {
        radio.checked = false;
        if (!this.hasButtonGroup) {
          radio.setAttribute("tabindex", "-1");
        }
      });
      this.value = radios[index2].value;
      radios[index2].checked = true;
      if (!this.hasButtonGroup) {
        radios[index2].setAttribute("tabindex", "0");
        radios[index2].focus();
      } else {
        radios[index2].shadowRoot.querySelector("button").focus();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
      event.preventDefault();
    }
    handleLabelClick() {
      this.focus();
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    async syncRadioElements() {
      var _a, _b;
      const radios = this.getAllRadios();
      await Promise.all(
        // Sync the checked state and size
        radios.map(async (radio) => {
          await radio.updateComplete;
          radio.checked = radio.value === this.value;
          radio.size = this.size;
        })
      );
      this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "sl-radio-button");
      if (radios.length > 0 && !radios.some((radio) => radio.checked)) {
        if (this.hasButtonGroup) {
          const buttonRadio = (_a = radios[0].shadowRoot) == null ? void 0 : _a.querySelector("button");
          if (buttonRadio) {
            buttonRadio.setAttribute("tabindex", "0");
          }
        } else {
          radios[0].setAttribute("tabindex", "0");
        }
      }
      if (this.hasButtonGroup) {
        const buttonGroup = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector("sl-button-group");
        if (buttonGroup) {
          buttonGroup.disableRole = true;
        }
      }
    }
    syncRadios() {
      if (customElements.get("sl-radio") && customElements.get("sl-radio-button")) {
        this.syncRadioElements();
        return;
      }
      if (customElements.get("sl-radio")) {
        this.syncRadioElements();
      } else {
        customElements.whenDefined("sl-radio").then(() => this.syncRadios());
      }
      if (customElements.get("sl-radio-button")) {
        this.syncRadioElements();
      } else {
        customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
      }
    }
    updateCheckedRadio() {
      const radios = this.getAllRadios();
      radios.forEach((radio) => radio.checked = radio.value === this.value);
      this.formControlController.setValidity(this.validity.valid);
    }
    handleSizeChange() {
      this.syncRadios();
    }
    handleValueChange() {
      if (this.hasUpdated) {
        this.updateCheckedRadio();
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (isRequiredAndEmpty || hasCustomValidityMessage) {
        this.formControlController.emitInvalidEvent();
        return false;
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      const isValid2 = this.validity.valid;
      this.errorMessage = this.customValidityMessage || isValid2 ? "" : this.validationInput.validationMessage;
      this.formControlController.setValidity(isValid2);
      this.validationInput.hidden = true;
      clearTimeout(this.validationTimeout);
      if (!isValid2) {
        this.validationInput.hidden = false;
        this.validationInput.reportValidity();
        this.validationTimeout = setTimeout(() => this.validationInput.hidden = true, 1e4);
      }
      return isValid2;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message = "") {
      this.customValidityMessage = message;
      this.errorMessage = message;
      this.validationInput.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    /** Sets focus on the radio-group. */
    focus(options) {
      const radios = this.getAllRadios();
      const checked = radios.find((radio) => radio.checked);
      const firstEnabledRadio = radios.find((radio) => !radio.disabled);
      const radioToFocus = checked || firstEnabledRadio;
      if (radioToFocus) {
        radioToFocus.focus(options);
      }
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const defaultSlot = x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
      return x`
      <fieldset
        part="form-control"
        class=${e8({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--radio-group": true,
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
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

          ${this.hasButtonGroup ? x`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${defaultSlot}
                </sl-button-group>
              ` : defaultSlot}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
    }
  };
  SlRadioGroup.styles = [component_styles_default, form_control_styles_default, radio_group_styles_default];
  SlRadioGroup.dependencies = { "sl-button-group": SlButtonGroup };
  __decorateClass2([
    e5("slot:not([name])")
  ], SlRadioGroup.prototype, "defaultSlot", 2);
  __decorateClass2([
    e5(".radio-group__validation-input")
  ], SlRadioGroup.prototype, "validationInput", 2);
  __decorateClass2([
    r6()
  ], SlRadioGroup.prototype, "hasButtonGroup", 2);
  __decorateClass2([
    r6()
  ], SlRadioGroup.prototype, "errorMessage", 2);
  __decorateClass2([
    r6()
  ], SlRadioGroup.prototype, "defaultValue", 2);
  __decorateClass2([
    n4()
  ], SlRadioGroup.prototype, "label", 2);
  __decorateClass2([
    n4({ attribute: "help-text" })
  ], SlRadioGroup.prototype, "helpText", 2);
  __decorateClass2([
    n4()
  ], SlRadioGroup.prototype, "name", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlRadioGroup.prototype, "value", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlRadioGroup.prototype, "size", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlRadioGroup.prototype, "form", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlRadioGroup.prototype, "required", 2);
  __decorateClass2([
    watch("size", { waitUntilFirstUpdate: true })
  ], SlRadioGroup.prototype, "handleSizeChange", 1);
  __decorateClass2([
    watch("value")
  ], SlRadioGroup.prototype, "handleValueChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.T6N3KRRV.js
  SlRadioGroup.define("sl-radio-group");

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2P5EQCYK.js
  var radio_button_styles_default = i`
  ${button_styles_default}

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
`;

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OCZMYLNR.js
  var SlRadioButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.hasFocus = false;
      this.checked = false;
      this.disabled = false;
      this.size = "medium";
      this.pill = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "presentation");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleClick(e12) {
      if (this.disabled) {
        e12.preventDefault();
        e12.stopPropagation();
        return;
      }
      this.checked = true;
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    /** Sets focus on the radio button. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the radio button. */
    blur() {
      this.input.blur();
    }
    render() {
      return u4`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${e8({
        button: true,
        "button--default": true,
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--checked": this.checked,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--outline": true,
        "button--pill": this.pill,
        "button--has-label": this.hasSlotController.test("[default]"),
        "button--has-prefix": this.hasSlotController.test("prefix"),
        "button--has-suffix": this.hasSlotController.test("suffix")
      })}
          aria-disabled=${this.disabled}
          type="button"
          value=${o6(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
    }
  };
  SlRadioButton.styles = [component_styles_default, radio_button_styles_default];
  __decorateClass2([
    e5(".button")
  ], SlRadioButton.prototype, "input", 2);
  __decorateClass2([
    e5(".hidden-input")
  ], SlRadioButton.prototype, "hiddenInput", 2);
  __decorateClass2([
    r6()
  ], SlRadioButton.prototype, "hasFocus", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "checked", 2);
  __decorateClass2([
    n4()
  ], SlRadioButton.prototype, "value", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "disabled", 2);
  __decorateClass2([
    n4({ reflect: true })
  ], SlRadioButton.prototype, "size", 2);
  __decorateClass2([
    n4({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "pill", 2);
  __decorateClass2([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlRadioButton.prototype, "handleDisabledChange", 1);

  // node_modules/.pnpm/@shoelace-style+shoelace@2.19.0_@floating-ui+utils@0.2.8_@types+react@18.3.14/node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QNHJ67FH.js
  SlRadioButton.define("sl-radio-button");

  // src/lib/shoelace-setup.ts
  setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/dist");

  // src/main.ts
  customElement("gul-info", {
    // Attrs, hyphenated (kebab-case) and lowercase, => props
    title: "<title>",
    namespace: "<namespace>",
    database: "<database>",
    datapoint: "<datapoint>"
  }, App_default);
})();
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
