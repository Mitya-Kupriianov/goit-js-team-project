function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o.register("9QQ9J",(function(t,n){var r,i,s;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e})),e(t.exports,"SourceMapConsumer",(function(){return i}),(function(e){return i=e})),e(t.exports,"SourceNode",(function(){return s}),(function(e){return s=e})),r=o("ic7WM").SourceMapGenerator,i=o("lbXUp").SourceMapConsumer,s=o("Tx9qF").SourceNode})),o.register("ic7WM",(function(t,n){var r;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e}));var i=o("duvZU"),s=o("dQK2c"),a=o("lSTHk").ArraySet,u=o("2EyUB").MappingList;function c(e){e||(e={}),this._file=s.getArg(e,"file",null),this._sourceRoot=s.getArg(e,"sourceRoot",null),this._skipValidation=s.getArg(e,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new u,this._sourcesContents=null}c.prototype._version=3,c.fromSourceMap=function(e){var t=e.sourceRoot,n=new c({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=s.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var i=r;null!==t&&(i=s.relative(t,r)),n._sources.has(i)||n._sources.add(i);var o=e.sourceContentFor(r);null!=o&&n.setSourceContent(r,o)})),n},c.prototype.addMapping=function(e){var t=s.getArg(e,"generated"),n=s.getArg(e,"original",null),r=s.getArg(e,"source",null),i=s.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},c.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=s.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[s.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[s.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},c.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=s.relative(i,r));var o=new a,u=new a;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(t.source=a.source,null!=n&&(t.source=s.join(n,t.source)),null!=i&&(t.source=s.relative(i,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var c=t.source;null==c||o.has(c)||o.add(c);var l=t.name;null==l||u.has(l)||u.add(l)}),this),this._sources=o,this._names=u,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=s.join(n,t)),null!=i&&(t=s.relative(i,t)),this.setSourceContent(t,r))}),this)},c.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},c.prototype._serializeMappings=function(){for(var e,t,n,r,o=0,a=1,u=0,c=0,l=0,h=0,f="",d=this._mappings.toArray(),p=0,g=d.length;p<g;p++){if(e="",(t=d[p]).generatedLine!==a)for(o=0;t.generatedLine!==a;)e+=";",a++;else if(p>0){if(!s.compareByGeneratedPositionsInflated(t,d[p-1]))continue;e+=","}e+=i.encode(t.generatedColumn-o),o=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-h),h=r,e+=i.encode(t.originalLine-1-c),c=t.originalLine-1,e+=i.encode(t.originalColumn-u),u=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-l),l=n)),f+=e}return f},c.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=s.relative(t,e));var n=s.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},c.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},c.prototype.toString=function(){return JSON.stringify(this.toJSON())},r=c})),o.register("duvZU",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var s=o("iJ1ZV");r=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=s.encode(t)}while(r>0);return n},i=function(e,t,n){var r,i,o,a,u=e.length,c=0,l=0;do{if(t>=u)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=s.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&i),c+=(i&=31)<<l,l+=5}while(r);n.value=(a=(o=c)>>1,1==(1&o)?-a:a),n.rest=t}})),o.register("iJ1ZV",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r=function(e){if(0<=e&&e<o.length)return o[e];throw new TypeError("Must be between 0 and 63: "+e)},i=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})),o.register("dQK2c",(function(t,n){var r,i,o,s,a,u,c,l,h,f,d,p,g;e(t.exports,"getArg",(function(){return r}),(function(e){return r=e})),e(t.exports,"urlParse",(function(){return i}),(function(e){return i=e})),e(t.exports,"isAbsolute",(function(){return a}),(function(e){return a=e})),e(t.exports,"normalize",(function(){return o}),(function(e){return o=e})),e(t.exports,"join",(function(){return s}),(function(e){return s=e})),e(t.exports,"relative",(function(){return u}),(function(e){return u=e})),e(t.exports,"toSetString",(function(){return c}),(function(e){return c=e})),e(t.exports,"fromSetString",(function(){return l}),(function(e){return l=e})),e(t.exports,"compareByOriginalPositions",(function(){return h}),(function(e){return h=e})),e(t.exports,"compareByGeneratedPositionsDeflated",(function(){return f}),(function(e){return f=e})),e(t.exports,"compareByGeneratedPositionsInflated",(function(){return d}),(function(e){return d=e})),e(t.exports,"parseSourceMapInput",(function(){return p}),(function(e){return p=e})),e(t.exports,"computeSourceURL",(function(){return g}),(function(e){return g=e})),r=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var m=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,_=/^data:.+\,.+$/;function v(e){var t=e.match(m);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function y(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function b(e){var t=e,n=v(e);if(n){if(!n.path)return e;t=n.path}for(var r,i=a(t),o=t.split(/\/+/),s=0,u=o.length-1;u>=0;u--)"."===(r=o[u])?o.splice(u,1):".."===r?s++:s>0&&(""===r?(o.splice(u+1,s),s=0):(o.splice(u,2),s--));return""===(t=o.join("/"))&&(t=i?"/":"."),n?(n.path=t,y(n)):t}function w(e,t){""===e&&(e="."),""===t&&(t=".");var n=v(t),r=v(e);if(r&&(e=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),y(n);if(n||t.match(_))return t;if(r&&!r.host&&!r.path)return r.host=t,y(r);var i="/"===t.charAt(0)?t:b(e.replace(/\/+$/,"")+"/"+t);return r?(r.path=i,y(r)):i}i=v,o=b,s=w,a=function(e){return"/"===e.charAt(0)||m.test(e)},u=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var k=!("__proto__"in Object.create(null));function S(e){return e}function E(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function C(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}c=k?S:function(e){return E(e)?"$"+e:e},l=k?S:function(e){return E(e)?e.slice(1):e},h=function(e,t,n){var r=C(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:C(e.name,t.name)},f=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=C(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:C(e.name,t.name)},d=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=C(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:C(e.name,t.name)},p=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},g=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=v(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}t=w(y(r),t)}return b(t)}})),o.register("lSTHk",(function(t,n){var r;e(t.exports,"ArraySet",(function(){return r}),(function(e){return r=e}));var i=o("dQK2c"),s=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function u(){this._array=[],this._set=a?new Map:Object.create(null)}u.fromArray=function(e,t){for(var n=new u,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},u.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},u.prototype.add=function(e,t){var n=a?e:i.toSetString(e),r=a?this.has(e):s.call(this._set,n),o=this._array.length;r&&!t||this._array.push(e),r||(a?this._set.set(e,o):this._set[n]=o)},u.prototype.has=function(e){if(a)return this._set.has(e);var t=i.toSetString(e);return s.call(this._set,t)},u.prototype.indexOf=function(e){if(a){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(s.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},u.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},u.prototype.toArray=function(){return this._array.slice()},r=u})),o.register("2EyUB",(function(t,n){var r;e(t.exports,"MappingList",(function(){return r}),(function(e){return r=e}));var i=o("dQK2c");function s(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}s.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},s.prototype.add=function(e){var t,n,r,o,s,a;t=this._last,n=e,r=t.generatedLine,o=n.generatedLine,s=t.generatedColumn,a=n.generatedColumn,o>r||o==r&&a>=s||i.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},s.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},r=s})),o.register("lbXUp",(function(t,n){var r;e(t.exports,"SourceMapConsumer",(function(){return r}),(function(e){return r=e}));var i=o("dQK2c"),s=o("bTtvB"),a=o("lSTHk").ArraySet,u=o("duvZU"),c=o("76ffZ").quickSort;function l(e,t){var n=e;return"string"==typeof e&&(n=i.parseSourceMapInput(e)),null!=n.sections?new d(n,t):new h(n,t)}function h(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),o=i.getArg(n,"sources"),s=i.getArg(n,"names",[]),u=i.getArg(n,"sourceRoot",null),c=i.getArg(n,"sourcesContent",null),l=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);u&&(u=i.normalize(u)),o=o.map(String).map(i.normalize).map((function(e){return u&&i.isAbsolute(u)&&i.isAbsolute(e)?i.relative(u,e):e})),this._names=a.fromArray(s.map(String),!0),this._sources=a.fromArray(o,!0),this._absoluteSources=this._sources.toArray().map((function(e){return i.computeSourceURL(u,e,t)})),this.sourceRoot=u,this.sourcesContent=c,this._mappings=l,this._sourceMapURL=t,this.file=h}function f(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function d(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),o=i.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var s={line:-1,column:0};this._sections=o.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var n=i.getArg(e,"offset"),r=i.getArg(n,"line"),o=i.getArg(n,"column");if(r<s.line||r===s.line&&o<s.column)throw new Error("Section offsets must be ordered and non-overlapping.");return s=n,{generatedOffset:{generatedLine:r+1,generatedColumn:o+1},consumer:new l(i.getArg(e,"map"),t)}}))}l.fromSourceMap=function(e,t){return h.fromSourceMap(e,t)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,n){var r,o=t||null;switch(n||l.GENERATED_ORDER){case l.GENERATED_ORDER:r=this._generatedMappings;break;case l.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var s=this.sourceRoot;r.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=i.computeSourceURL(s,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,o)},l.prototype.allGeneratedPositionsFor=function(e){var t=i.getArg(e,"line"),n={source:i.getArg(e,"source"),originalLine:t,originalColumn:i.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],o=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,s.LEAST_UPPER_BOUND);if(o>=0){var a=this._originalMappings[o];if(void 0===e.column)for(var u=a.originalLine;a&&a.originalLine===u;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o];else for(var c=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==c;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++o]}return r},r=l,h.prototype=Object.create(l.prototype),h.prototype.consumer=l,h.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},h.fromSourceMap=function(e,t){var n=Object.create(h.prototype),r=n._names=a.fromArray(e._names.toArray(),!0),o=n._sources=a.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map((function(e){return i.computeSourceURL(n.sourceRoot,e,t)}));for(var s=e._mappings.toArray().slice(),u=n.__generatedMappings=[],l=n.__originalMappings=[],d=0,p=s.length;d<p;d++){var g=s[d],m=new f;m.generatedLine=g.generatedLine,m.generatedColumn=g.generatedColumn,g.source&&(m.source=o.indexOf(g.source),m.originalLine=g.originalLine,m.originalColumn=g.originalColumn,g.name&&(m.name=r.indexOf(g.name)),l.push(m)),u.push(m)}return c(n.__originalMappings,i.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(e,t){for(var n,r,o,s,a,l=1,h=0,d=0,p=0,g=0,m=0,_=e.length,v=0,y={},b={},w=[],k=[];v<_;)if(";"===e.charAt(v))l++,v++,h=0;else if(","===e.charAt(v))v++;else{for((n=new f).generatedLine=l,s=v;s<_&&!this._charIsMappingSeparator(e,s);s++);if(o=y[r=e.slice(v,s)])v+=r.length;else{for(o=[];v<s;)u.decode(e,v,b),a=b.value,v=b.rest,o.push(a);if(2===o.length)throw new Error("Found a source, but no line and column");if(3===o.length)throw new Error("Found a source and line, but no column");y[r]=o}n.generatedColumn=h+o[0],h=n.generatedColumn,o.length>1&&(n.source=g+o[1],g+=o[1],n.originalLine=d+o[2],d=n.originalLine,n.originalLine+=1,n.originalColumn=p+o[3],p=n.originalColumn,o.length>4&&(n.name=m+o[4],m+=o[4])),k.push(n),"number"==typeof n.originalLine&&w.push(n)}c(k,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=k,c(w,i.compareByOriginalPositions),this.__originalMappings=w},h.prototype._findMapping=function(e,t,n,r,i,o){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return s.search(e,t,i,o)},h.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===t.generatedLine){var o=i.getArg(r,"source",null);null!==o&&(o=this._sources.at(o),o=i.computeSourceURL(this.sourceRoot,o,this._sourceMapURL));var s=i.getArg(r,"name",null);return null!==s&&(s=this._names.at(s)),{source:o,line:i.getArg(r,"originalLine",null),column:i.getArg(r,"originalColumn",null),name:s}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},h.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var r,o=e;if(null!=this.sourceRoot&&(o=i.relative(this.sourceRoot,o)),null!=this.sourceRoot&&(r=i.urlParse(this.sourceRoot))){var s=o.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(s))return this.sourcesContent[this._sources.indexOf(s)];if((!r.path||"/"==r.path)&&this._sources.has("/"+o))return this.sourcesContent[this._sources.indexOf("/"+o)]}if(t)return null;throw new Error('"'+o+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(e){var t=i.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:i.getArg(e,"line"),originalColumn:i.getArg(e,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var o=this._originalMappings[r];if(o.source===n.source)return{line:i.getArg(o,"generatedLine",null),column:i.getArg(o,"generatedColumn",null),lastColumn:i.getArg(o,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},d.prototype=Object.create(l.prototype),d.prototype.constructor=l,d.prototype._version=3,Object.defineProperty(d.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),d.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=s.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},d.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},d.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},d.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer._findSourceIndex(i.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},d.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],o=r.consumer._generatedMappings,s=0;s<o.length;s++){var a=o[s],u=r.consumer._sources.at(a.source);u=i.computeSourceURL(r.consumer.sourceRoot,u,this._sourceMapURL),this._sources.add(u),u=this._sources.indexOf(u);var l=null;a.name&&(l=r.consumer._names.at(a.name),this._names.add(l),l=this._names.indexOf(l));var h={source:u,generatedLine:a.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(r.generatedOffset.generatedLine===a.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:l};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}c(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),c(this.__originalMappings,i.compareByOriginalPositions)}})),o.register("bTtvB",(function(t,n){var r,i,o;function s(e,t,n,r,o,a){var u=Math.floor((t-e)/2)+e,c=o(n,r[u],!0);return 0===c?u:c>0?t-u>1?s(u,t,n,r,o,a):a==i?t<r.length?t:-1:u:u-e>1?s(e,u,n,r,o,a):a==i?u:e<0?-1:e}e(t.exports,"GREATEST_LOWER_BOUND",(function(){return r}),(function(e){return r=e})),e(t.exports,"LEAST_UPPER_BOUND",(function(){return i}),(function(e){return i=e})),e(t.exports,"search",(function(){return o}),(function(e){return o=e})),r=1,i=2,o=function(e,t,n,i){if(0===t.length)return-1;var o=s(-1,t.length,e,t,n,i||r);if(o<0)return-1;for(;o-1>=0&&0===n(t[o],t[o-1],!0);)--o;return o}})),o.register("76ffZ",(function(t,n){var r;function i(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function o(e,t,n,r){if(n<r){var s=n-1;i(e,(l=n,h=r,Math.round(l+Math.random()*(h-l))),r);for(var a=e[r],u=n;u<r;u++)t(e[u],a)<=0&&i(e,s+=1,u);i(e,s+1,u);var c=s+1;o(e,t,n,c-1),o(e,t,c+1,r)}var l,h}e(t.exports,"quickSort",(function(){return r}),(function(e){return r=e})),r=function(e,t){o(e,t,0,e.length-1)}})),o.register("Tx9qF",(function(t,n){var r;e(t.exports,"SourceNode",(function(){return r}),(function(e){return r=e}));var i=o("ic7WM").SourceMapGenerator,s=o("dQK2c"),a=/(\r?\n)/;function u(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this.$$$isSourceNode$$$=!0,null!=r&&this.add(r)}u.fromStringWithSourceMap=function(e,t,n){var r=new u,i=e.split(a),o=0,c=function(){return e()+(e()||"");function e(){return o<i.length?i[o++]:void 0}},l=1,h=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(l<e.generatedLine)){var t=(n=i[o]||"").substr(0,e.generatedColumn-h);return i[o]=n.substr(e.generatedColumn-h),h=e.generatedColumn,d(f,t),void(f=e)}d(f,c()),l++,h=0}for(;l<e.generatedLine;)r.add(c()),l++;if(h<e.generatedColumn){var n=i[o]||"";r.add(n.substr(0,e.generatedColumn)),i[o]=n.substr(e.generatedColumn),h=e.generatedColumn}f=e}),this),o<i.length&&(f&&d(f,c()),r.add(i.splice(o).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=s.join(n,e)),r.setSourceContent(e,i))})),r;function d(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?s.join(n,e.source):e.source;r.add(new u(e.originalLine,e.originalColumn,i,t,e.name))}}},u.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},u.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},u.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n]).$$$isSourceNode$$$?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},u.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},u.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n.$$$isSourceNode$$$?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},u.prototype.setSourceContent=function(e,t){this.sourceContents[s.toSetString(e)]=t},u.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].$$$isSourceNode$$$&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(s.fromSetString(r[t]),this.sourceContents[r[t]])},u.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},u.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,o=null,s=null,a=null,u=null;return this.walk((function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(o===i.source&&s===i.line&&a===i.column&&u===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),o=i.source,s=i.line,a=i.column,u=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),o=null,r=!1);for(var c=0,l=e.length;c<l;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===l?(o=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},r=u})),o.register("5Io6y",(function(e,t){})),o.register("bRlFp",(function(e,t){var n=o("2bBga"),r=o("djt5d"),i=o("6zSb1"),s=o("d0EKm");var a=function e(t){var o=new i(t),a=r(i.prototype.request,o);return n.extend(a,i.prototype,o),n.extend(a,o),a.create=function(n){return e(s(t,n))},a}(o("hqlPG"));a.Axios=i,a.CanceledError=o("83xK9"),a.CancelToken=o("2sjhC"),a.isCancel=o("ksuZT"),a.VERSION=o("50GW0").version,a.toFormData=o("aewVa"),a.AxiosError=o("121rJ"),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=o("av9gA"),a.isAxiosError=o("gNhGc"),e.exports=a,e.exports.default=a})),o.register("2bBga",(function(e,t){var n,r=o("djt5d"),i=Object.prototype.toString,s=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=a("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=a("Date"),p=a("File"),g=a("Blob"),m=a("FileList");function _(e){return"[object Function]"===i.call(e)}var v=a("URLSearchParams");function y(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||_(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:g,isFunction:_,isStream:function(e){return h(e)&&_(e.pipe)},isURLSearchParams:v,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:y,merge:function e(){var t={};function n(n,r){f(t[r])&&f(n)?t[r]=e(t[r],n):f(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)y(arguments[r],n);return t},extend:function(e,t,n){return y(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,o,s={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)s[o=r[i]]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:m}})),o.register("djt5d",(function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),o.register("6zSb1",(function(e,t){var n=o("2bBga"),r=o("2RNjJ"),i=o("5Dm7L"),s=o("eQ5d8"),a=o("d0EKm"),u=o("1ZTQa"),c=o("6zj0X"),l=c.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var h=[s,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(u),o=Promise.resolve(t);h.length;)o=o.then(h.shift(),h.shift());return o}for(var f=t;r.length;){var d=r.shift(),p=r.shift();try{f=d(f)}catch(e){p(e);break}}try{o=s(f)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},h.prototype.getUri=function(e){e=a(this.defaults,e);var t=u(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(a(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),o.register("2RNjJ",(function(e,t){var n=o("2bBga");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(n.isURLSearchParams(t))o=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("5Dm7L",(function(e,t){var n=o("2bBga");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),o.register("eQ5d8",(function(e,t){var n=o("2bBga"),r=o("bhEpd"),i=o("ksuZT"),s=o("hqlPG"),a=o("83xK9");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("bhEpd",(function(e,t){var n=o("2bBga"),r=o("hqlPG");e.exports=function(e,t,i){var o=this||r;return n.forEach(i,(function(n){e=n.call(o,e,t)})),e}})),o.register("hqlPG",(function(e,t){var n=o("4TNnu"),r=o("2bBga"),i=o("i16eu"),s=o("121rJ"),a=o("2wfLM"),u=o("aewVa"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,f={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=o("9VVcb")),h),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=r.isObject(e),s=t&&t["Content-Type"];if((n=r.isFileList(e))||o&&"multipart/form-data"===s){var a=this.env&&this.env.FormData;return u(n?{"files[]":e}:e,a&&new a)}return o||"application/json"===s?(l(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s.from(e,s.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("1gvAv")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(c)})),e.exports=f})),o.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&d())}function d(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++h<t;)u&&u[h].run();h=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("i16eu",(function(e,t){var n=o("2bBga");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),o.register("121rJ",(function(e,t){var n=o("2bBga");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(r,s),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,o,s,a,u){var c=Object.create(i);return n.toFlatObject(e,c,(function(e){return e!==Error.prototype})),r.call(c,e.message,t,o,s,a),c.name=e.name,u&&Object.assign(c,u),c},e.exports=r})),o.register("2wfLM",(function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("aewVa",(function(e,t){var n=o("ihoyg").Buffer,r=o("2bBga");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,s){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+s);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var a,u=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),i.pop()}else t.append(s,o(n))}(e),t}})),o.register("ihoyg",(function(t,n){var r,i;e(t.exports,"Buffer",(function(){return r}),(function(e){return r=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var s=o("hqZtu"),a=o("5WQj6");const u="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const c=2147483647;function l(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return f(e,t,n)}function f(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|v(e,t);let r=l(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(X(e,Uint8Array)){const t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return g(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(X(e,ArrayBuffer)||e&&X(e.buffer,ArrayBuffer))return m(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(X(e,SharedArrayBuffer)||e&&X(e.buffer,SharedArrayBuffer)))return m(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return h.from(r,t,n);const i=function(e){if(h.isBuffer(e)){const t=0|_(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?l(0):g(e);if("Buffer"===e.type&&Array.isArray(e.data))return g(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return d(e),l(e<0?0:0|_(e))}function g(e){const t=e.length<0?0:0|_(e.length),n=l(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function m(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,h.prototype),r}function _(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function v(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||X(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return J(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Y(e).length;default:if(i)return r?-1:J(e).length;t=(""+t).toLowerCase(),i=!0}}function y(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return x(this,t,n);case"utf8":case"utf-8":return R(this,t,n);case"ascii":return O(this,t,n);case"latin1":case"binary":return N(this,t,n);case"base64":return P(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=h.from(t,r)),h.isBuffer(t))return 0===t.length?-1:k(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):k(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function k(e,t,n,r,i){let o,s=1,a=e.length,u=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let r=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===r?0:o-r)){if(-1===r&&(r=o),o-r+1===u)return r*s}else-1!==r&&(o-=o-r),r=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){let n=!0;for(let r=0;r<u;r++)if(c(e,o+r)!==c(t,r)){n=!1;break}if(n)return o}return-1}function S(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const o=t.length;let s;for(r>o/2&&(r=o/2),s=0;s<r;++s){const r=parseInt(t.substr(2*s,2),16);if(Z(r))return s;e[n+s]=r}return s}function E(e,t,n,r){return Q(J(t,e.length-n),e,n,r)}function C(e,t,n,r){return Q(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function I(e,t,n,r){return Q(Y(t),e,n,r)}function T(e,t,n,r){return Q(function(e,t){let n,r,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(t,e.length-n),e,n,r)}function P(e,t,n){return 0===t&&n===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,n))}function R(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=n){let n,r,a,u;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[i+1],128==(192&n)&&(u=(31&t)<<6|63&n,u>127&&(o=u));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(u=(15&t)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(u=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,r.push(o>>>10&1023|55296),o=56320|1023&o),r.push(o),i+=s}return function(e){const t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=A));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return f(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return d(e),e<=0?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),X(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=h.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(X(t,Uint8Array))i+t.length>r.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?R(this,0,e):y.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},u&&(h.prototype[u]=h.prototype.inspect),h.prototype.compare=function(e,t,n,r,i){if(X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),u=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(u[e]!==c[e]){o=u[e],s=c[e];break}return o<s?-1:s<o?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},h.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let o=!1;for(;;)switch(r){case"hex":return S(this,e,t,n);case"utf8":case"utf-8":return E(this,e,t,n);case"ascii":case"latin1":case"binary":return C(this,e,t,n);case"base64":return I(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function O(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function N(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function x(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=ee[e[r]];return i}function L(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function M(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,n,r,i,o){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function B(e,t,n,r,i){z(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function U(e,t,n,r,i){z(t,r,i,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function j(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function F(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function $(e,t,n,r,i){return t=+t,n>>>=0,i||j(e,0,n,8),a.write(e,t,n,r,52,8),n+8}h.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=this[e],i=1,o=0;for(;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||M(e,t,this.length);let r=t,i=1,o=this[e+--r];for(;r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},h.prototype.readInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||M(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),h.prototype.readBigInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);D(this,e,t,n,r-1,-r)}let i=0,o=1,s=0;for(this[t]=255&e;++i<n&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},h.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);D(this,e,t,n,r-1,-r)}let i=n-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(e,t,n){return F(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return F(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return $(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return $(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,r){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},h.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const o=h.isBuffer(e)?e:h.from(e,r),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=o[i%s]}return this};const q={};function W(e,t,n){q[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function H(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function z(e,t,n,r,i,o){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(o+1)}${r}`:`>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new q.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){V(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||K(t,e.length-(n+1))}(r,i,o)}function V(e,t){if("number"!=typeof e)throw new q.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,n){if(Math.floor(e)!==e)throw V(e,n),new q.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}W("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),W("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),W("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=H(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=H(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const G=/[^+/0-9A-Za-z-_]/g;function J(e,t){let n;t=t||1/0;const r=e.length;let i=null;const o=[];for(let s=0;s<r;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Y(e){return s.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Q(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function X(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),o.register("hqZtu",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=h(e),i=r[0],o=r[1],u=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,o)),c=0,l=o>0?i-4:i;for(n=0;n<l;n+=4)t=s[e.charCodeAt(n)]<<18|s[e.charCodeAt(n+1)]<<12|s[e.charCodeAt(n+2)]<<6|s[e.charCodeAt(n+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=s[e.charCodeAt(n)]<<2|s[e.charCodeAt(n+1)]>>4,u[c++]=255&t);1===o&&(t=s[e.charCodeAt(n)]<<10|s[e.charCodeAt(n+1)]<<4|s[e.charCodeAt(n+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,a=0,u=n-r;a<u;a+=s)i.push(f(e,a,a+s>u?u:a+s));1===r?(t=e[n-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],s[u.charCodeAt(c)]=c;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var r,i,s=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(o[(i=r)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return s.join("")}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63})),o.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,h=n?i-1:0,f=n?-1:1,d=e[t+h];for(h+=f,o=d&(1<<-l)-1,d>>=-l,l+=a;l>0;o=256*o+e[t+h],h+=f,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+e[t+h],h+=f,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,r),o-=c}return(d?-1:1)*s*Math.pow(2,o-r)},i=function(e,t,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),(t+=s+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(s++,u/=2),s+h>=l?(a=0,s=l):s+h>=1?(a=(t*u-1)*Math.pow(2,i),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[n+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+d]=255&s,d+=p,s/=256,c-=8);e[n+d-p]|=128*g}})),o.register("9VVcb",(function(e,t){var n=o("2bBga"),r=o("1TQad"),i=o("kTwUV"),s=o("2RNjJ"),a=o("1ZTQa"),u=o("9cPEm"),c=o("g3yOT"),l=o("2wfLM"),h=o("121rJ"),f=o("83xK9"),d=o("8wMQb");e.exports=function(e){return new Promise((function(t,o){var p,g=e.data,m=e.headers,_=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(g)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+w)}var k=a(e.baseURL,e.url);function S(){if(y){var n="getAllResponseHeaders"in y?u(y.getAllResponseHeaders()):null,i={data:_&&"text"!==_&&"json"!==_?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:n,config:e,request:y};r((function(e){t(e),v()}),(function(e){o(e),v()}),i),y=null}}if(y.open(e.method.toUpperCase(),s(k,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,"onloadend"in y?y.onloadend=S:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(S)},y.onabort=function(){y&&(o(new h("Request aborted",h.ECONNABORTED,e,y)),y=null)},y.onerror=function(){o(new h("Network Error",h.ERR_NETWORK,e,y,y)),y=null},y.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,y)),y=null},n.isStandardBrowserEnv()){var E=(e.withCredentials||c(k))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in y&&n.forEach(m,(function(e,t){void 0===g&&"content-type"===t.toLowerCase()?delete m[t]:y.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),_&&"json"!==_&&(y.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){y&&(o(!e||e&&e.type?new f:e),y.abort(),y=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),g||(g=null);var C=d(k);C&&-1===["http","https","file"].indexOf(C)?o(new h("Unsupported protocol "+C+":",h.ERR_BAD_REQUEST,e)):y.send(g)}))}})),o.register("1TQad",(function(e,t){var n=o("121rJ");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),o.register("kTwUV",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("1ZTQa",(function(e,t){var n=o("iUwU6"),r=o("91vFE");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),o.register("iUwU6",(function(e,t){e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("91vFE",(function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("9cPEm",(function(e,t){var n=o("2bBga"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,s={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),i=n.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([i]):s[t]?s[t]+", "+i:i}})),s):s}})),o.register("g3yOT",(function(e,t){var n=o("2bBga");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),o.register("83xK9",(function(e,t){var n=o("121rJ");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("2bBga").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),o.register("8wMQb",(function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("1gvAv",(function(e,t){e.exports=null})),o.register("ksuZT",(function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("d0EKm",(function(e,t){var n=o("2bBga");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function u(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);n.isUndefined(i)&&t!==u||(r[e]=i)})),r}})),o.register("6zj0X",(function(e,t){var n=o("50GW0").version,r=o("121rJ"),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};i.transitional=function(e,t,i){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(i?". "+i:"")}return function(n,i,a){if(!1===e)throw new r(o(i," has been removed"+(t?" in "+t:"")),r.ERR_DEPRECATED);return t&&!s[i]&&(s[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),o=i.length;o-- >0;){var s=i[o],a=t[s];if(a){var u=e[s],c=void 0===u||a(u,s,e);if(!0!==c)throw new r("option "+s+" must be "+c,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+s,r.ERR_BAD_OPTION)}},validators:i}})),o.register("50GW0",(function(e,t){e.exports={version:"0.27.2"}})),o.register("2sjhC",(function(e,t){var n=o("83xK9");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),o.register("av9gA",(function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("gNhGc",(function(e,t){var n=o("2bBga");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o.register("kEUo3",(function(e,n){(function(){var r,i="Expected a function",o="__lodash_hash_undefined__",s="__lodash_placeholder__",a=16,u=32,c=64,l=128,h=256,f=1/0,d=9007199254740991,p=NaN,g=4294967295,m=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",u],["partialRight",c],["rearg",h]],_="[object Arguments]",v="[object Array]",y="[object Boolean]",b="[object Date]",w="[object Error]",k="[object Function]",S="[object GeneratorFunction]",E="[object Map]",C="[object Number]",I="[object Object]",T="[object Promise]",P="[object RegExp]",R="[object Set]",A="[object String]",O="[object Symbol]",N="[object WeakMap]",x="[object ArrayBuffer]",L="[object DataView]",M="[object Float32Array]",D="[object Float64Array]",B="[object Int8Array]",U="[object Int16Array]",j="[object Int32Array]",F="[object Uint8Array]",$="[object Uint8ClampedArray]",q="[object Uint16Array]",W="[object Uint32Array]",H=/\b__p \+= '';/g,z=/\b(__p \+=) '' \+/g,V=/(__e\(.*?\)|\b__t\)) \+\n'';/g,K=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,J=RegExp(K.source),Y=RegExp(G.source),Q=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/,ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(re.source),oe=/^\s+/,se=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ue=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,le=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,he=/[()=,{}\[\]\/\s]/,fe=/\\(\\)?/g,de=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pe=/\w*$/,ge=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,_e=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,ye=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,ke=/['\n\r\u2028\u2029\\]/g,Se="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ee="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Ie="A-Z\\xc0-\\xd6\\xd8-\\xde",Te="\\ufe0e\\ufe0f",Pe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="['’]",Ae="[\ud800-\udfff]",Oe="["+Pe+"]",Ne="["+Se+"]",xe="\\d+",Le="[\\u2700-\\u27bf]",Me="["+Ce+"]",De="[^\ud800-\udfff"+Pe+xe+Ee+Ce+Ie+"]",Be="[^\ud800-\udfff]",Ue="(?:\ud83c[\udde6-\uddff]){2}",je="[\ud800-\udbff][\udc00-\udfff]",Fe="["+Ie+"]",$e="(?:"+Me+"|"+De+")",qe="(?:"+Fe+"|"+De+")",We="(?:['’](?:d|ll|m|re|s|t|ve))?",He="(?:['’](?:D|LL|M|RE|S|T|VE))?",ze="(?:"+Ne+"|"+"\ud83c[\udffb-\udfff])"+"?",Ve="[\\ufe0e\\ufe0f]?",Ke=Ve+ze+("(?:\\u200d(?:"+[Be,Ue,je].join("|")+")"+Ve+ze+")*"),Ge="(?:"+[Le,Ue,je].join("|")+")"+Ke,Je="(?:"+[Be+Ne+"?",Ne,Ue,je,Ae].join("|")+")",Ye=RegExp(Re,"g"),Qe=RegExp(Ne,"g"),Xe=RegExp("\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|"+Je+Ke,"g"),Ze=RegExp([Fe+"?"+Me+"+"+We+"(?="+[Oe,Fe,"$"].join("|")+")",qe+"+"+He+"(?="+[Oe,Fe+$e,"$"].join("|")+")",Fe+"?"+$e+"+"+We,Fe+"+"+He,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xe,Ge].join("|"),"g"),et=RegExp("[\\u200d\ud800-\udfff"+Se+Te+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[M]=it[D]=it[B]=it[U]=it[j]=it[F]=it[$]=it[q]=it[W]=!0,it[_]=it[v]=it[x]=it[y]=it[L]=it[b]=it[w]=it[k]=it[E]=it[C]=it[I]=it[P]=it[R]=it[A]=it[N]=!1;var ot={};ot[_]=ot[v]=ot[x]=ot[L]=ot[y]=ot[b]=ot[M]=ot[D]=ot[B]=ot[U]=ot[j]=ot[E]=ot[C]=ot[I]=ot[P]=ot[R]=ot[A]=ot[O]=ot[F]=ot[$]=ot[q]=ot[W]=!0,ot[w]=ot[k]=ot[N]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},at=parseFloat,ut=parseInt,ct="object"==typeof t&&t&&t.Object===Object&&t,lt="object"==typeof self&&self&&self.Object===Object&&self,ht=ct||lt||Function("return this")(),ft=n&&!n.nodeType&&n,dt=ft&&e&&!e.nodeType&&e,pt=dt&&dt.exports===ft,gt=pt&&ct.process,mt=function(){try{var e=dt&&dt.require&&dt.require("util").types;return e||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),_t=mt&&mt.isArrayBuffer,vt=mt&&mt.isDate,yt=mt&&mt.isMap,bt=mt&&mt.isRegExp,wt=mt&&mt.isSet,kt=mt&&mt.isTypedArray;function St(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Et(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i];t(r,s,n(s),e)}return r}function Ct(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function It(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Pt(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function Rt(e,t){return!!(null==e?0:e.length)&&jt(e,t,0)>-1}function At(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Ot(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Nt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function xt(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function Lt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Mt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Dt=Wt("length");function Bt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Ut(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function jt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Ut(e,$t,n)}function Ft(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function $t(e){return e!=e}function qt(e,t){var n=null==e?0:e.length;return n?Vt(e,t)/n:p}function Wt(e){return function(t){return null==t?r:t[e]}}function Ht(e){return function(t){return null==e?r:e[t]}}function zt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Vt(e,t){for(var n,i=-1,o=e.length;++i<o;){var s=t(e[i]);s!==r&&(n=n===r?s:n+s)}return n}function Kt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Gt(e){return e?e.slice(0,fn(e)+1).replace(oe,""):e}function Jt(e){return function(t){return e(t)}}function Yt(e,t){return Ot(t,(function(t){return e[t]}))}function Qt(e,t){return e.has(t)}function Xt(e,t){for(var n=-1,r=e.length;++n<r&&jt(t,e[n],0)>-1;);return n}function Zt(e,t){for(var n=e.length;n--&&jt(t,e[n],0)>-1;);return n}function en(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var tn=Ht({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nn=Ht({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rn(e){return"\\"+st[e]}function on(e){return et.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function an(e,t){return function(n){return e(t(n))}}function un(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n];a!==t&&a!==s||(e[n]=s,o[i++]=n)}return o}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function ln(e){return on(e)?function(e){var t=Xe.lastIndex=0;for(;Xe.test(e);)++t;return t}(e):Dt(e)}function hn(e){return on(e)?function(e){return e.match(Xe)||[]}(e):function(e){return e.split("")}(e)}function fn(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var dn=Ht({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var pn=function e(t){var n,se=(t=null==t?ht:pn.defaults(ht.Object(),t,pn.pick(ht,nt))).Array,Se=t.Date,Ee=t.Error,Ce=t.Function,Ie=t.Math,Te=t.Object,Pe=t.RegExp,Re=t.String,Ae=t.TypeError,Oe=se.prototype,Ne=Ce.prototype,xe=Te.prototype,Le=t["__core-js_shared__"],Me=Ne.toString,De=xe.hasOwnProperty,Be=0,Ue=(n=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",je=xe.toString,Fe=Me.call(Te),$e=ht._,qe=Pe("^"+Me.call(De).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=pt?t.Buffer:r,He=t.Symbol,ze=t.Uint8Array,Ve=We?We.allocUnsafe:r,Ke=an(Te.getPrototypeOf,Te),Ge=Te.create,Je=xe.propertyIsEnumerable,Xe=Oe.splice,et=He?He.isConcatSpreadable:r,st=He?He.iterator:r,ct=He?He.toStringTag:r,lt=function(){try{var e=fo(Te,"defineProperty");return e({},"",{}),e}catch(e){}}(),ft=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,dt=Se&&Se.now!==ht.Date.now&&Se.now,gt=t.setTimeout!==ht.setTimeout&&t.setTimeout,mt=Ie.ceil,Dt=Ie.floor,Ht=Te.getOwnPropertySymbols,gn=We?We.isBuffer:r,mn=t.isFinite,_n=Oe.join,vn=an(Te.keys,Te),yn=Ie.max,bn=Ie.min,wn=Se.now,kn=t.parseInt,Sn=Ie.random,En=Oe.reverse,Cn=fo(t,"DataView"),In=fo(t,"Map"),Tn=fo(t,"Promise"),Pn=fo(t,"Set"),Rn=fo(t,"WeakMap"),An=fo(Te,"create"),On=Rn&&new Rn,Nn={},xn=Fo(Cn),Ln=Fo(In),Mn=Fo(Tn),Dn=Fo(Pn),Bn=Fo(Rn),Un=He?He.prototype:r,jn=Un?Un.valueOf:r,Fn=Un?Un.toString:r;function $n(e){if(ra(e)&&!Vs(e)&&!(e instanceof zn)){if(e instanceof Hn)return e;if(De.call(e,"__wrapped__"))return $o(e)}return new Hn(e)}var qn=function(){function e(){}return function(t){if(!na(t))return{};if(Ge)return Ge(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Wn(){}function Hn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function zn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Vn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Jn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Gn;++t<n;)this.add(e[t])}function Yn(e){var t=this.__data__=new Kn(e);this.size=t.size}function Qn(e,t){var n=Vs(e),r=!n&&zs(e),i=!n&&!r&&Ys(e),o=!n&&!r&&!i&&ha(e),s=n||r||i||o,a=s?Kt(e.length,Re):[],u=a.length;for(var c in e)!t&&!De.call(e,c)||s&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||bo(c,u))||a.push(c);return a}function Xn(e){var t=e.length;return t?e[Jr(0,t-1)]:r}function Zn(e,t){return Bo(Ai(e),ur(t,0,e.length))}function er(e){return Bo(Ai(e))}function tr(e,t,n){(n!==r&&!qs(e[t],n)||n===r&&!(t in e))&&sr(e,t,n)}function nr(e,t,n){var i=e[t];De.call(e,t)&&qs(i,n)&&(n!==r||t in e)||sr(e,t,n)}function rr(e,t){for(var n=e.length;n--;)if(qs(e[n][0],t))return n;return-1}function ir(e,t,n,r){return dr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function or(e,t){return e&&Oi(t,xa(t),e)}function sr(e,t,n){"__proto__"==t&&lt?lt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(e,t){for(var n=-1,i=t.length,o=se(i),s=null==e;++n<i;)o[n]=s?r:Pa(e,t[n]);return o}function ur(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function cr(e,t,n,i,o,s){var a,u=1&t,c=2&t,l=4&t;if(n&&(a=o?n(e,i,o,s):n(e)),a!==r)return a;if(!na(e))return e;var h=Vs(e);if(h){if(a=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&De.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!u)return Ai(e,a)}else{var f=mo(e),d=f==k||f==S;if(Ys(e))return Ei(e,u);if(f==I||f==_||d&&!o){if(a=c||d?{}:vo(e),!u)return c?function(e,t){return Oi(e,go(e),t)}(e,function(e,t){return e&&Oi(t,La(t),e)}(a,e)):function(e,t){return Oi(e,po(e),t)}(e,or(a,e))}else{if(!ot[f])return o?e:{};a=function(e,t,n){var r=e.constructor;switch(t){case x:return Ci(e);case y:case b:return new r(+e);case L:return function(e,t){var n=t?Ci(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case M:case D:case B:case U:case j:case F:case $:case q:case W:return Ii(e,n);case E:return new r;case C:case A:return new r(e);case P:return function(e){var t=new e.constructor(e.source,pe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case R:return new r;case O:return i=e,jn?Te(jn.call(i)):{}}var i}(e,f,u)}}s||(s=new Yn);var p=s.get(e);if(p)return p;s.set(e,a),ua(e)?e.forEach((function(r){a.add(cr(r,t,n,r,e,s))})):ia(e)&&e.forEach((function(r,i){a.set(i,cr(r,t,n,i,e,s))}));var g=h?r:(l?c?oo:io:c?La:xa)(e);return Ct(g||e,(function(r,i){g&&(r=e[i=r]),nr(a,i,cr(r,t,n,i,e,s))})),a}function lr(e,t,n){var i=n.length;if(null==e)return!i;for(e=Te(e);i--;){var o=n[i],s=t[o],a=e[o];if(a===r&&!(o in e)||!s(a))return!1}return!0}function hr(e,t,n){if("function"!=typeof e)throw new Ae(i);return xo((function(){e.apply(r,n)}),t)}function fr(e,t,n,r){var i=-1,o=Rt,s=!0,a=e.length,u=[],c=t.length;if(!a)return u;n&&(t=Ot(t,Jt(n))),r?(o=At,s=!1):t.length>=200&&(o=Qt,s=!1,t=new Jn(t));e:for(;++i<a;){var l=e[i],h=null==n?l:n(l);if(l=r||0!==l?l:0,s&&h==h){for(var f=c;f--;)if(t[f]===h)continue e;u.push(l)}else o(t,h,r)||u.push(l)}return u}$n.templateSettings={escape:Q,evaluate:X,interpolate:Z,variable:"",imports:{_:$n}},$n.prototype=Wn.prototype,$n.prototype.constructor=$n,Hn.prototype=qn(Wn.prototype),Hn.prototype.constructor=Hn,zn.prototype=qn(Wn.prototype),zn.prototype.constructor=zn,Vn.prototype.clear=function(){this.__data__=An?An(null):{},this.size=0},Vn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vn.prototype.get=function(e){var t=this.__data__;if(An){var n=t[e];return n===o?r:n}return De.call(t,e)?t[e]:r},Vn.prototype.has=function(e){var t=this.__data__;return An?t[e]!==r:De.call(t,e)},Vn.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=An&&t===r?o:t,this},Kn.prototype.clear=function(){this.__data__=[],this.size=0},Kn.prototype.delete=function(e){var t=this.__data__,n=rr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xe.call(t,n,1),--this.size,!0)},Kn.prototype.get=function(e){var t=this.__data__,n=rr(t,e);return n<0?r:t[n][1]},Kn.prototype.has=function(e){return rr(this.__data__,e)>-1},Kn.prototype.set=function(e,t){var n=this.__data__,r=rr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Gn.prototype.clear=function(){this.size=0,this.__data__={hash:new Vn,map:new(In||Kn),string:new Vn}},Gn.prototype.delete=function(e){var t=lo(this,e).delete(e);return this.size-=t?1:0,t},Gn.prototype.get=function(e){return lo(this,e).get(e)},Gn.prototype.has=function(e){return lo(this,e).has(e)},Gn.prototype.set=function(e,t){var n=lo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Jn.prototype.add=Jn.prototype.push=function(e){return this.__data__.set(e,o),this},Jn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.clear=function(){this.__data__=new Kn,this.size=0},Yn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Yn.prototype.get=function(e){return this.__data__.get(e)},Yn.prototype.has=function(e){return this.__data__.has(e)},Yn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Kn){var r=n.__data__;if(!In||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Gn(r)}return n.set(e,t),this.size=n.size,this};var dr=Li(wr),pr=Li(kr,!0);function gr(e,t){var n=!0;return dr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function mr(e,t,n){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s);if(null!=a&&(u===r?a==a&&!la(a):n(a,u)))var u=a,c=s}return c}function _r(e,t){var n=[];return dr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function vr(e,t,n,r,i){var o=-1,s=e.length;for(n||(n=yo),i||(i=[]);++o<s;){var a=e[o];t>0&&n(a)?t>1?vr(a,t-1,n,r,i):Nt(i,a):r||(i[i.length]=a)}return i}var yr=Mi(),br=Mi(!0);function wr(e,t){return e&&yr(e,t,xa)}function kr(e,t){return e&&br(e,t,xa)}function Sr(e,t){return Pt(t,(function(t){return Zs(e[t])}))}function Er(e,t){for(var n=0,i=(t=bi(t,e)).length;null!=e&&n<i;)e=e[jo(t[n++])];return n&&n==i?e:r}function Cr(e,t,n){var r=t(e);return Vs(e)?r:Nt(r,n(e))}function Ir(e){return null==e?e===r?"[object Undefined]":"[object Null]":ct&&ct in Te(e)?function(e){var t=De.call(e,ct),n=e[ct];try{e[ct]=r;var i=!0}catch(e){}var o=je.call(e);i&&(t?e[ct]=n:delete e[ct]);return o}(e):function(e){return je.call(e)}(e)}function Tr(e,t){return e>t}function Pr(e,t){return null!=e&&De.call(e,t)}function Rr(e,t){return null!=e&&t in Te(e)}function Ar(e,t,n){for(var i=n?At:Rt,o=e[0].length,s=e.length,a=s,u=se(s),c=1/0,l=[];a--;){var h=e[a];a&&t&&(h=Ot(h,Jt(t))),c=bn(h.length,c),u[a]=!n&&(t||o>=120&&h.length>=120)?new Jn(a&&h):r}h=e[0];var f=-1,d=u[0];e:for(;++f<o&&l.length<c;){var p=h[f],g=t?t(p):p;if(p=n||0!==p?p:0,!(d?Qt(d,g):i(l,g,n))){for(a=s;--a;){var m=u[a];if(!(m?Qt(m,g):i(e[a],g,n)))continue e}d&&d.push(g),l.push(p)}}return l}function Or(e,t,n){var i=null==(e=Ro(e,t=bi(t,e)))?e:e[jo(Xo(t))];return null==i?r:St(i,e,n)}function Nr(e){return ra(e)&&Ir(e)==_}function xr(e,t,n,i,o){return e===t||(null==e||null==t||!ra(e)&&!ra(t)?e!=e&&t!=t:function(e,t,n,i,o,s){var a=Vs(e),u=Vs(t),c=a?v:mo(e),l=u?v:mo(t),h=(c=c==_?I:c)==I,f=(l=l==_?I:l)==I,d=c==l;if(d&&Ys(e)){if(!Ys(t))return!1;a=!0,h=!1}if(d&&!h)return s||(s=new Yn),a||ha(e)?no(e,t,n,i,o,s):function(e,t,n,r,i,o,s){switch(n){case L:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case x:return!(e.byteLength!=t.byteLength||!o(new ze(e),new ze(t)));case y:case b:case C:return qs(+e,+t);case w:return e.name==t.name&&e.message==t.message;case P:case A:return e==t+"";case E:var a=sn;case R:var u=1&r;if(a||(a=cn),e.size!=t.size&&!u)return!1;var c=s.get(e);if(c)return c==t;r|=2,s.set(e,t);var l=no(a(e),a(t),r,i,o,s);return s.delete(e),l;case O:if(jn)return jn.call(e)==jn.call(t)}return!1}(e,t,c,n,i,o,s);if(!(1&n)){var p=h&&De.call(e,"__wrapped__"),g=f&&De.call(t,"__wrapped__");if(p||g){var m=p?e.value():e,k=g?t.value():t;return s||(s=new Yn),o(m,k,n,i,s)}}return!!d&&(s||(s=new Yn),function(e,t,n,i,o,s){var a=1&n,u=io(e),c=u.length,l=io(t).length;if(c!=l&&!a)return!1;var h=c;for(;h--;){var f=u[h];if(!(a?f in t:De.call(t,f)))return!1}var d=s.get(e),p=s.get(t);if(d&&p)return d==t&&p==e;var g=!0;s.set(e,t),s.set(t,e);var m=a;for(;++h<c;){var _=e[f=u[h]],v=t[f];if(i)var y=a?i(v,_,f,t,e,s):i(_,v,f,e,t,s);if(!(y===r?_===v||o(_,v,n,i,s):y)){g=!1;break}m||(m="constructor"==f)}if(g&&!m){var b=e.constructor,w=t.constructor;b==w||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w||(g=!1)}return s.delete(e),s.delete(t),g}(e,t,n,i,o,s))}(e,t,n,i,xr,o))}function Lr(e,t,n,i){var o=n.length,s=o,a=!i;if(null==e)return!s;for(e=Te(e);o--;){var u=n[o];if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<s;){var c=(u=n[o])[0],l=e[c],h=u[1];if(a&&u[2]){if(l===r&&!(c in e))return!1}else{var f=new Yn;if(i)var d=i(l,h,c,e,t,f);if(!(d===r?xr(h,l,3,i,f):d))return!1}}return!0}function Mr(e){return!(!na(e)||(t=e,Ue&&Ue in t))&&(Zs(e)?qe:_e).test(Fo(e));var t}function Dr(e){return"function"==typeof e?e:null==e?ou:"object"==typeof e?Vs(e)?qr(e[0],e[1]):$r(e):pu(e)}function Br(e){if(!Co(e))return vn(e);var t=[];for(var n in Te(e))De.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Ur(e){if(!na(e))return function(e){var t=[];if(null!=e)for(var n in Te(e))t.push(n);return t}(e);var t=Co(e),n=[];for(var r in e)("constructor"!=r||!t&&De.call(e,r))&&n.push(r);return n}function jr(e,t){return e<t}function Fr(e,t){var n=-1,r=Gs(e)?se(e.length):[];return dr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function $r(e){var t=ho(e);return 1==t.length&&t[0][2]?To(t[0][0],t[0][1]):function(n){return n===e||Lr(n,e,t)}}function qr(e,t){return ko(e)&&Io(t)?To(jo(e),t):function(n){var i=Pa(n,e);return i===r&&i===t?Ra(n,e):xr(t,i,3)}}function Wr(e,t,n,i,o){e!==t&&yr(t,(function(s,a){if(o||(o=new Yn),na(s))!function(e,t,n,i,o,s,a){var u=Oo(e,n),c=Oo(t,n),l=a.get(c);if(l)return void tr(e,n,l);var h=s?s(u,c,n+"",e,t,a):r,f=h===r;if(f){var d=Vs(c),p=!d&&Ys(c),g=!d&&!p&&ha(c);h=c,d||p||g?Vs(u)?h=u:Js(u)?h=Ai(u):p?(f=!1,h=Ei(c,!0)):g?(f=!1,h=Ii(c,!0)):h=[]:sa(c)||zs(c)?(h=u,zs(u)?h=ya(u):na(u)&&!Zs(u)||(h=vo(c))):f=!1}f&&(a.set(c,h),o(h,c,i,s,a),a.delete(c));tr(e,n,h)}(e,t,a,n,Wr,i,o);else{var u=i?i(Oo(e,a),s,a+"",e,t,o):r;u===r&&(u=s),tr(e,a,u)}}),La)}function Hr(e,t){var n=e.length;if(n)return bo(t+=t<0?n:0,n)?e[t]:r}function zr(e,t,n){t=t.length?Ot(t,(function(e){return Vs(e)?function(t){return Er(t,1===e.length?e[0]:e)}:e})):[ou];var r=-1;t=Ot(t,Jt(co()));var i=Fr(e,(function(e,n,i){var o=Ot(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,o=t.criteria,s=i.length,a=n.length;for(;++r<s;){var u=Ti(i[r],o[r]);if(u)return r>=a?u:u*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Vr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var s=t[r],a=Er(e,s);n(a,s)&&ei(o,bi(s,e),a)}return o}function Kr(e,t,n,r){var i=r?Ft:jt,o=-1,s=t.length,a=e;for(e===t&&(t=Ai(t)),n&&(a=Ot(e,Jt(n)));++o<s;)for(var u=0,c=t[o],l=n?n(c):c;(u=i(a,l,u,r))>-1;)a!==e&&Xe.call(a,u,1),Xe.call(e,u,1);return e}function Gr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;bo(i)?Xe.call(e,i,1):fi(e,i)}}return e}function Jr(e,t){return e+Dt(Sn()*(t-e+1))}function Yr(e,t){var n="";if(!e||t<1||t>d)return n;do{t%2&&(n+=e),(t=Dt(t/2))&&(e+=e)}while(t);return n}function Qr(e,t){return Lo(Po(e,t,ou),e+"")}function Xr(e){return Xn(qa(e))}function Zr(e,t){var n=qa(e);return Bo(n,ur(t,0,n.length))}function ei(e,t,n,i){if(!na(e))return e;for(var o=-1,s=(t=bi(t,e)).length,a=s-1,u=e;null!=u&&++o<s;){var c=jo(t[o]),l=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=a){var h=u[c];(l=i?i(h,c,u):r)===r&&(l=na(h)?h:bo(t[o+1])?[]:{})}nr(u,c,l),u=u[c]}return e}var ti=On?function(e,t){return On.set(e,t),e}:ou,ni=lt?function(e,t){return lt(e,"toString",{configurable:!0,enumerable:!1,value:nu(t),writable:!0})}:ou;function ri(e){return Bo(qa(e))}function ii(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=se(i);++r<i;)o[r]=e[r+t];return o}function oi(e,t){var n;return dr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function si(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,s=e[o];null!==s&&!la(s)&&(n?s<=t:s<t)?r=o+1:i=o}return i}return ai(e,t,ou,n)}function ai(e,t,n,i){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var a=(t=n(t))!=t,u=null===t,c=la(t),l=t===r;o<s;){var h=Dt((o+s)/2),f=n(e[h]),d=f!==r,p=null===f,g=f==f,m=la(f);if(a)var _=i||g;else _=l?g&&(i||d):u?g&&d&&(i||!p):c?g&&d&&!p&&(i||!m):!p&&!m&&(i?f<=t:f<t);_?o=h+1:s=h}return bn(s,4294967294)}function ui(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n],a=t?t(s):s;if(!n||!qs(a,u)){var u=a;o[i++]=0===s?0:s}}return o}function ci(e){return"number"==typeof e?e:la(e)?p:+e}function li(e){if("string"==typeof e)return e;if(Vs(e))return Ot(e,li)+"";if(la(e))return Fn?Fn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function hi(e,t,n){var r=-1,i=Rt,o=e.length,s=!0,a=[],u=a;if(n)s=!1,i=At;else if(o>=200){var c=t?null:Yi(e);if(c)return cn(c);s=!1,i=Qt,u=new Jn}else u=t?[]:a;e:for(;++r<o;){var l=e[r],h=t?t(l):l;if(l=n||0!==l?l:0,s&&h==h){for(var f=u.length;f--;)if(u[f]===h)continue e;t&&u.push(h),a.push(l)}else i(u,h,n)||(u!==a&&u.push(h),a.push(l))}return a}function fi(e,t){return null==(e=Ro(e,t=bi(t,e)))||delete e[jo(Xo(t))]}function di(e,t,n,r){return ei(e,t,n(Er(e,t)),r)}function pi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ii(e,r?0:o,r?o+1:i):ii(e,r?o+1:0,r?i:o)}function gi(e,t){var n=e;return n instanceof zn&&(n=n.value()),xt(t,(function(e,t){return t.func.apply(t.thisArg,Nt([e],t.args))}),n)}function mi(e,t,n){var r=e.length;if(r<2)return r?hi(e[0]):[];for(var i=-1,o=se(r);++i<r;)for(var s=e[i],a=-1;++a<r;)a!=i&&(o[i]=fr(o[i]||s,e[a],t,n));return hi(vr(o,1),t,n)}function _i(e,t,n){for(var i=-1,o=e.length,s=t.length,a={};++i<o;){var u=i<s?t[i]:r;n(a,e[i],u)}return a}function vi(e){return Js(e)?e:[]}function yi(e){return"function"==typeof e?e:ou}function bi(e,t){return Vs(e)?e:ko(e,t)?[e]:Uo(ba(e))}var wi=Qr;function ki(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ii(e,t,n)}var Si=ft||function(e){return ht.clearTimeout(e)};function Ei(e,t){if(t)return e.slice();var n=e.length,r=Ve?Ve(n):new e.constructor(n);return e.copy(r),r}function Ci(e){var t=new e.constructor(e.byteLength);return new ze(t).set(new ze(e)),t}function Ii(e,t){var n=t?Ci(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ti(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,s=la(e),a=t!==r,u=null===t,c=t==t,l=la(t);if(!u&&!l&&!s&&e>t||s&&a&&c&&!u&&!l||i&&a&&c||!n&&c||!o)return 1;if(!i&&!s&&!l&&e<t||l&&n&&o&&!i&&!s||u&&n&&o||!a&&o||!c)return-1}return 0}function Pi(e,t,n,r){for(var i=-1,o=e.length,s=n.length,a=-1,u=t.length,c=yn(o-s,0),l=se(u+c),h=!r;++a<u;)l[a]=t[a];for(;++i<s;)(h||i<o)&&(l[n[i]]=e[i]);for(;c--;)l[a++]=e[i++];return l}function Ri(e,t,n,r){for(var i=-1,o=e.length,s=-1,a=n.length,u=-1,c=t.length,l=yn(o-a,0),h=se(l+c),f=!r;++i<l;)h[i]=e[i];for(var d=i;++u<c;)h[d+u]=t[u];for(;++s<a;)(f||i<o)&&(h[d+n[s]]=e[i++]);return h}function Ai(e,t){var n=-1,r=e.length;for(t||(t=se(r));++n<r;)t[n]=e[n];return t}function Oi(e,t,n,i){var o=!n;n||(n={});for(var s=-1,a=t.length;++s<a;){var u=t[s],c=i?i(n[u],e[u],u,n,e):r;c===r&&(c=e[u]),o?sr(n,u,c):nr(n,u,c)}return n}function Ni(e,t){return function(n,r){var i=Vs(n)?Et:ir,o=t?t():{};return i(n,e,co(r,2),o)}}function xi(e){return Qr((function(t,n){var i=-1,o=n.length,s=o>1?n[o-1]:r,a=o>2?n[2]:r;for(s=e.length>3&&"function"==typeof s?(o--,s):r,a&&wo(n[0],n[1],a)&&(s=o<3?r:s,o=1),t=Te(t);++i<o;){var u=n[i];u&&e(t,u,i,s)}return t}))}function Li(e,t){return function(n,r){if(null==n)return n;if(!Gs(n))return e(n,r);for(var i=n.length,o=t?i:-1,s=Te(n);(t?o--:++o<i)&&!1!==r(s[o],o,s););return n}}function Mi(e){return function(t,n,r){for(var i=-1,o=Te(t),s=r(t),a=s.length;a--;){var u=s[e?a:++i];if(!1===n(o[u],u,o))break}return t}}function Di(e){return function(t){var n=on(t=ba(t))?hn(t):r,i=n?n[0]:t.charAt(0),o=n?ki(n,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return xt(Za(za(t).replace(Ye,"")),e,"")}}function Ui(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=qn(e.prototype),r=e.apply(n,t);return na(r)?r:n}}function ji(e){return function(t,n,i){var o=Te(t);if(!Gs(t)){var s=co(n,3);t=xa(t),n=function(e){return s(o[e],e,o)}}var a=e(t,n,i);return a>-1?o[s?t[a]:a]:r}}function Fi(e){return ro((function(t){var n=t.length,o=n,s=Hn.prototype.thru;for(e&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new Ae(i);if(s&&!u&&"wrapper"==ao(a))var u=new Hn([],!0)}for(o=u?o:n;++o<n;){var c=ao(a=t[o]),l="wrapper"==c?so(a):r;u=l&&So(l[0])&&424==l[1]&&!l[4].length&&1==l[9]?u[ao(l[0])].apply(u,l[3]):1==a.length&&So(a)?u[c]():u.thru(a)}return function(){var e=arguments,r=e[0];if(u&&1==e.length&&Vs(r))return u.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}}))}function $i(e,t,n,i,o,s,a,u,c,h){var f=t&l,d=1&t,p=2&t,g=24&t,m=512&t,_=p?r:Ui(e);return function r(){for(var l=arguments.length,v=se(l),y=l;y--;)v[y]=arguments[y];if(g)var b=uo(r),w=en(v,b);if(i&&(v=Pi(v,i,o,g)),s&&(v=Ri(v,s,a,g)),l-=w,g&&l<h){var k=un(v,b);return Gi(e,t,$i,r.placeholder,n,v,k,u,c,h-l)}var S=d?n:this,E=p?S[e]:e;return l=v.length,u?v=Ao(v,u):m&&l>1&&v.reverse(),f&&c<l&&(v.length=c),this&&this!==ht&&this instanceof r&&(E=_||Ui(E)),E.apply(S,v)}}function qi(e,t){return function(n,r){return function(e,t,n,r){return wr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Wi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=li(n),i=li(i)):(n=ci(n),i=ci(i)),o=e(n,i)}return o}}function Hi(e){return ro((function(t){return t=Ot(t,Jt(co())),Qr((function(n){var r=this;return e(t,(function(e){return St(e,r,n)}))}))}))}function zi(e,t){var n=(t=t===r?" ":li(t)).length;if(n<2)return n?Yr(t,e):t;var i=Yr(t,mt(e/ln(t)));return on(t)?ki(hn(i),0,e).join(""):i.slice(0,e)}function Vi(e){return function(t,n,i){return i&&"number"!=typeof i&&wo(t,n,i)&&(n=i=r),t=ga(t),n===r?(n=t,t=0):n=ga(n),function(e,t,n,r){for(var i=-1,o=yn(mt((t-e)/(n||1)),0),s=se(o);o--;)s[r?o:++i]=e,e+=n;return s}(t,n,i=i===r?t<n?1:-1:ga(i),e)}}function Ki(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=va(t),n=va(n)),e(t,n)}}function Gi(e,t,n,i,o,s,a,l,h,f){var d=8&t;t|=d?u:c,4&(t&=~(d?c:u))||(t&=-4);var p=[e,t,o,d?s:r,d?a:r,d?r:s,d?r:a,l,h,f],g=n.apply(r,p);return So(e)&&No(g,p),g.placeholder=i,Mo(g,e,t)}function Ji(e){var t=Ie[e];return function(e,n){if(e=va(e),(n=null==n?0:bn(ma(n),292))&&mn(e)){var r=(ba(e)+"e").split("e");return+((r=(ba(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Yi=Pn&&1/cn(new Pn([,-0]))[1]==f?function(e){return new Pn(e)}:lu;function Qi(e){return function(t){var n=mo(t);return n==E?sn(t):n==R?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(t):function(e,t){return Ot(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xi(e,t,n,o,f,d,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Ae(i);var _=o?o.length:0;if(_||(t&=-97,o=f=r),p=p===r?p:yn(ma(p),0),g=g===r?g:ma(g),_-=f?f.length:0,t&c){var v=o,y=f;o=f=r}var b=m?r:so(e),w=[e,t,n,o,f,v,y,d,p,g];if(b&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,a=r==l&&8==n||r==l&&n==h&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!a)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var u=t[3];if(u){var c=e[3];e[3]=c?Pi(c,u,t[4]):u,e[4]=c?un(e[3],s):t[4]}(u=t[5])&&(c=e[5],e[5]=c?Ri(c,u,t[6]):u,e[6]=c?un(e[5],s):t[6]);(u=t[7])&&(e[7]=u);r&l&&(e[8]=null==e[8]?t[8]:bn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,b),e=w[0],t=w[1],n=w[2],o=w[3],f=w[4],!(g=w[9]=w[9]===r?m?0:e.length:yn(w[9]-_,0))&&24&t&&(t&=-25),t&&1!=t)k=8==t||t==a?function(e,t,n){var i=Ui(e);return function o(){for(var s=arguments.length,a=se(s),u=s,c=uo(o);u--;)a[u]=arguments[u];var l=s<3&&a[0]!==c&&a[s-1]!==c?[]:un(a,c);return(s-=l.length)<n?Gi(e,t,$i,o.placeholder,r,a,l,r,r,n-s):St(this&&this!==ht&&this instanceof o?i:e,this,a)}}(e,t,g):t!=u&&33!=t||f.length?$i.apply(r,w):function(e,t,n,r){var i=1&t,o=Ui(e);return function t(){for(var s=-1,a=arguments.length,u=-1,c=r.length,l=se(c+a),h=this&&this!==ht&&this instanceof t?o:e;++u<c;)l[u]=r[u];for(;a--;)l[u++]=arguments[++s];return St(h,i?n:this,l)}}(e,t,n,o);else var k=function(e,t,n){var r=1&t,i=Ui(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,n);return Mo((b?ti:No)(k,w),e,t)}function Zi(e,t,n,i){return e===r||qs(e,xe[n])&&!De.call(i,n)?t:e}function eo(e,t,n,i,o,s){return na(e)&&na(t)&&(s.set(t,e),Wr(e,t,r,eo,s),s.delete(t)),e}function to(e){return sa(e)?r:e}function no(e,t,n,i,o,s){var a=1&n,u=e.length,c=t.length;if(u!=c&&!(a&&c>u))return!1;var l=s.get(e),h=s.get(t);if(l&&h)return l==t&&h==e;var f=-1,d=!0,p=2&n?new Jn:r;for(s.set(e,t),s.set(t,e);++f<u;){var g=e[f],m=t[f];if(i)var _=a?i(m,g,f,t,e,s):i(g,m,f,e,t,s);if(_!==r){if(_)continue;d=!1;break}if(p){if(!Mt(t,(function(e,t){if(!Qt(p,t)&&(g===e||o(g,e,n,i,s)))return p.push(t)}))){d=!1;break}}else if(g!==m&&!o(g,m,n,i,s)){d=!1;break}}return s.delete(e),s.delete(t),d}function ro(e){return Lo(Po(e,r,Ko),e+"")}function io(e){return Cr(e,xa,po)}function oo(e){return Cr(e,La,go)}var so=On?function(e){return On.get(e)}:lu;function ao(e){for(var t=e.name+"",n=Nn[t],r=De.call(Nn,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function uo(e){return(De.call($n,"placeholder")?$n:e).placeholder}function co(){var e=$n.iteratee||su;return e=e===su?Dr:e,arguments.length?e(arguments[0],arguments[1]):e}function lo(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function ho(e){for(var t=xa(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Io(i)]}return t}function fo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return Mr(n)?n:r}var po=Ht?function(e){return null==e?[]:(e=Te(e),Pt(Ht(e),(function(t){return Je.call(e,t)})))}:_u,go=Ht?function(e){for(var t=[];e;)Nt(t,po(e)),e=Ke(e);return t}:_u,mo=Ir;function _o(e,t,n){for(var r=-1,i=(t=bi(t,e)).length,o=!1;++r<i;){var s=jo(t[r]);if(!(o=null!=e&&n(e,s)))break;e=e[s]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&ta(i)&&bo(s,i)&&(Vs(e)||zs(e))}function vo(e){return"function"!=typeof e.constructor||Co(e)?{}:qn(Ke(e))}function yo(e){return Vs(e)||zs(e)||!!(et&&e&&e[et])}function bo(e,t){var n=typeof e;return!!(t=null==t?d:t)&&("number"==n||"symbol"!=n&&ye.test(e))&&e>-1&&e%1==0&&e<t}function wo(e,t,n){if(!na(n))return!1;var r=typeof t;return!!("number"==r?Gs(n)&&bo(t,n.length):"string"==r&&t in n)&&qs(n[t],e)}function ko(e,t){if(Vs(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!la(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Te(t))}function So(e){var t=ao(e),n=$n[t];if("function"!=typeof n||!(t in zn.prototype))return!1;if(e===n)return!0;var r=so(n);return!!r&&e===r[0]}(Cn&&mo(new Cn(new ArrayBuffer(1)))!=L||In&&mo(new In)!=E||Tn&&mo(Tn.resolve())!=T||Pn&&mo(new Pn)!=R||Rn&&mo(new Rn)!=N)&&(mo=function(e){var t=Ir(e),n=t==I?e.constructor:r,i=n?Fo(n):"";if(i)switch(i){case xn:return L;case Ln:return E;case Mn:return T;case Dn:return R;case Bn:return N}return t});var Eo=Le?Zs:vu;function Co(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||xe)}function Io(e){return e==e&&!na(e)}function To(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in Te(n)))}}function Po(e,t,n){return t=yn(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=yn(r.length-t,0),s=se(o);++i<o;)s[i]=r[t+i];i=-1;for(var a=se(t+1);++i<t;)a[i]=r[i];return a[t]=n(s),St(e,this,a)}}function Ro(e,t){return t.length<2?e:Er(e,ii(t,0,-1))}function Ao(e,t){for(var n=e.length,i=bn(t.length,n),o=Ai(e);i--;){var s=t[i];e[i]=bo(s,n)?o[s]:r}return e}function Oo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var No=Do(ti),xo=gt||function(e,t){return ht.setTimeout(e,t)},Lo=Do(ni);function Mo(e,t,n){var r=t+"";return Lo(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ct(m,(function(n){var r="_."+n[0];t&n[1]&&!Rt(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ue);return t?t[1].split(ce):[]}(r),n)))}function Do(e){var t=0,n=0;return function(){var i=wn(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Bo(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var s=Jr(n,o),a=e[s];e[s]=e[n],e[n]=a}return e.length=t,e}var Uo=function(e){var t=Ds(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ne,(function(e,n,r,i){t.push(r?i.replace(fe,"$1"):n||e)})),t}));function jo(e){if("string"==typeof e||la(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Fo(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function $o(e){if(e instanceof zn)return e.clone();var t=new Hn(e.__wrapped__,e.__chain__);return t.__actions__=Ai(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var qo=Qr((function(e,t){return Js(e)?fr(e,vr(t,1,Js,!0)):[]})),Wo=Qr((function(e,t){var n=Xo(t);return Js(n)&&(n=r),Js(e)?fr(e,vr(t,1,Js,!0),co(n,2)):[]})),Ho=Qr((function(e,t){var n=Xo(t);return Js(n)&&(n=r),Js(e)?fr(e,vr(t,1,Js,!0),r,n):[]}));function zo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ma(n);return i<0&&(i=yn(r+i,0)),Ut(e,co(t,3),i)}function Vo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ma(n),o=n<0?yn(i+o,0):bn(o,i-1)),Ut(e,co(t,3),o,!0)}function Ko(e){return(null==e?0:e.length)?vr(e,1):[]}function Go(e){return e&&e.length?e[0]:r}var Jo=Qr((function(e){var t=Ot(e,vi);return t.length&&t[0]===e[0]?Ar(t):[]})),Yo=Qr((function(e){var t=Xo(e),n=Ot(e,vi);return t===Xo(n)?t=r:n.pop(),n.length&&n[0]===e[0]?Ar(n,co(t,2)):[]})),Qo=Qr((function(e){var t=Xo(e),n=Ot(e,vi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?Ar(n,r,t):[]}));function Xo(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Zo=Qr(es);function es(e,t){return e&&e.length&&t&&t.length?Kr(e,t):e}var ts=ro((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Gr(e,Ot(t,(function(e){return bo(e,n)?+e:e})).sort(Ti)),r}));function ns(e){return null==e?e:En.call(e)}var rs=Qr((function(e){return hi(vr(e,1,Js,!0))})),is=Qr((function(e){var t=Xo(e);return Js(t)&&(t=r),hi(vr(e,1,Js,!0),co(t,2))})),os=Qr((function(e){var t=Xo(e);return t="function"==typeof t?t:r,hi(vr(e,1,Js,!0),r,t)}));function ss(e){if(!e||!e.length)return[];var t=0;return e=Pt(e,(function(e){if(Js(e))return t=yn(e.length,t),!0})),Kt(t,(function(t){return Ot(e,Wt(t))}))}function as(e,t){if(!e||!e.length)return[];var n=ss(e);return null==t?n:Ot(n,(function(e){return St(t,r,e)}))}var us=Qr((function(e,t){return Js(e)?fr(e,t):[]})),cs=Qr((function(e){return mi(Pt(e,Js))})),ls=Qr((function(e){var t=Xo(e);return Js(t)&&(t=r),mi(Pt(e,Js),co(t,2))})),hs=Qr((function(e){var t=Xo(e);return t="function"==typeof t?t:r,mi(Pt(e,Js),r,t)})),fs=Qr(ss);var ds=Qr((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,as(e,n)}));function ps(e){var t=$n(e);return t.__chain__=!0,t}function gs(e,t){return t(e)}var ms=ro((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return ar(t,e)};return!(t>1||this.__actions__.length)&&i instanceof zn&&bo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:gs,args:[o],thisArg:r}),new Hn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var _s=Ni((function(e,t,n){De.call(e,n)?++e[n]:sr(e,n,1)}));var vs=ji(zo),ys=ji(Vo);function bs(e,t){return(Vs(e)?Ct:dr)(e,co(t,3))}function ws(e,t){return(Vs(e)?It:pr)(e,co(t,3))}var ks=Ni((function(e,t,n){De.call(e,n)?e[n].push(t):sr(e,n,[t])}));var Ss=Qr((function(e,t,n){var r=-1,i="function"==typeof t,o=Gs(e)?se(e.length):[];return dr(e,(function(e){o[++r]=i?St(t,e,n):Or(e,t,n)})),o})),Es=Ni((function(e,t,n){sr(e,n,t)}));function Cs(e,t){return(Vs(e)?Ot:Fr)(e,co(t,3))}var Is=Ni((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var Ts=Qr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&wo(e,t[0],t[1])?t=[]:n>2&&wo(t[0],t[1],t[2])&&(t=[t[0]]),zr(e,vr(t,1),[])})),Ps=dt||function(){return ht.Date.now()};function Rs(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Xi(e,l,r,r,r,r,t)}function As(e,t){var n;if("function"!=typeof t)throw new Ae(i);return e=ma(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=r),n}}var Os=Qr((function(e,t,n){var r=1;if(n.length){var i=un(n,uo(Os));r|=u}return Xi(e,r,t,n,i)})),Ns=Qr((function(e,t,n){var r=3;if(n.length){var i=un(n,uo(Ns));r|=u}return Xi(t,r,e,n,i)}));function xs(e,t,n){var o,s,a,u,c,l,h=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new Ae(i);function g(t){var n=o,i=s;return o=s=r,h=t,u=e.apply(i,n)}function m(e){return h=e,c=xo(v,t),f?g(e):u}function _(e){var n=e-l;return l===r||n>=t||n<0||d&&e-h>=a}function v(){var e=Ps();if(_(e))return y(e);c=xo(v,function(e){var n=t-(e-l);return d?bn(n,a-(e-h)):n}(e))}function y(e){return c=r,p&&o?g(e):(o=s=r,u)}function b(){var e=Ps(),n=_(e);if(o=arguments,s=this,l=e,n){if(c===r)return m(l);if(d)return Si(c),c=xo(v,t),g(l)}return c===r&&(c=xo(v,t)),u}return t=va(t)||0,na(n)&&(f=!!n.leading,a=(d="maxWait"in n)?yn(va(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),b.cancel=function(){c!==r&&Si(c),h=0,o=l=s=c=r},b.flush=function(){return c===r?u:y(Ps())},b}var Ls=Qr((function(e,t){return hr(e,1,t)})),Ms=Qr((function(e,t,n){return hr(e,va(t)||0,n)}));function Ds(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ae(i);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Ds.Cache||Gn),n}function Bs(e){if("function"!=typeof e)throw new Ae(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ds.Cache=Gn;var Us=wi((function(e,t){var n=(t=1==t.length&&Vs(t[0])?Ot(t[0],Jt(co())):Ot(vr(t,1),Jt(co()))).length;return Qr((function(r){for(var i=-1,o=bn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return St(e,this,r)}))})),js=Qr((function(e,t){var n=un(t,uo(js));return Xi(e,u,r,t,n)})),Fs=Qr((function(e,t){var n=un(t,uo(Fs));return Xi(e,c,r,t,n)})),$s=ro((function(e,t){return Xi(e,h,r,r,r,t)}));function qs(e,t){return e===t||e!=e&&t!=t}var Ws=Ki(Tr),Hs=Ki((function(e,t){return e>=t})),zs=Nr(function(){return arguments}())?Nr:function(e){return ra(e)&&De.call(e,"callee")&&!Je.call(e,"callee")},Vs=se.isArray,Ks=_t?Jt(_t):function(e){return ra(e)&&Ir(e)==x};function Gs(e){return null!=e&&ta(e.length)&&!Zs(e)}function Js(e){return ra(e)&&Gs(e)}var Ys=gn||vu,Qs=vt?Jt(vt):function(e){return ra(e)&&Ir(e)==b};function Xs(e){if(!ra(e))return!1;var t=Ir(e);return t==w||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!sa(e)}function Zs(e){if(!na(e))return!1;var t=Ir(e);return t==k||t==S||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ea(e){return"number"==typeof e&&e==ma(e)}function ta(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=d}function na(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ra(e){return null!=e&&"object"==typeof e}var ia=yt?Jt(yt):function(e){return ra(e)&&mo(e)==E};function oa(e){return"number"==typeof e||ra(e)&&Ir(e)==C}function sa(e){if(!ra(e)||Ir(e)!=I)return!1;var t=Ke(e);if(null===t)return!0;var n=De.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Me.call(n)==Fe}var aa=bt?Jt(bt):function(e){return ra(e)&&Ir(e)==P};var ua=wt?Jt(wt):function(e){return ra(e)&&mo(e)==R};function ca(e){return"string"==typeof e||!Vs(e)&&ra(e)&&Ir(e)==A}function la(e){return"symbol"==typeof e||ra(e)&&Ir(e)==O}var ha=kt?Jt(kt):function(e){return ra(e)&&ta(e.length)&&!!it[Ir(e)]};var fa=Ki(jr),da=Ki((function(e,t){return e<=t}));function pa(e){if(!e)return[];if(Gs(e))return ca(e)?hn(e):Ai(e);if(st&&e[st])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[st]());var t=mo(e);return(t==E?sn:t==R?cn:qa)(e)}function ga(e){return e?(e=va(e))===f||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ma(e){var t=ga(e),n=t%1;return t==t?n?t-n:t:0}function _a(e){return e?ur(ma(e),0,g):0}function va(e){if("number"==typeof e)return e;if(la(e))return p;if(na(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=na(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var n=me.test(e);return n||ve.test(e)?ut(e.slice(2),n?2:8):ge.test(e)?p:+e}function ya(e){return Oi(e,La(e))}function ba(e){return null==e?"":li(e)}var wa=xi((function(e,t){if(Co(t)||Gs(t))Oi(t,xa(t),e);else for(var n in t)De.call(t,n)&&nr(e,n,t[n])})),ka=xi((function(e,t){Oi(t,La(t),e)})),Sa=xi((function(e,t,n,r){Oi(t,La(t),e,r)})),Ea=xi((function(e,t,n,r){Oi(t,xa(t),e,r)})),Ca=ro(ar);var Ia=Qr((function(e,t){e=Te(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&wo(t[0],t[1],o)&&(i=1);++n<i;)for(var s=t[n],a=La(s),u=-1,c=a.length;++u<c;){var l=a[u],h=e[l];(h===r||qs(h,xe[l])&&!De.call(e,l))&&(e[l]=s[l])}return e})),Ta=Qr((function(e){return e.push(r,eo),St(Da,r,e)}));function Pa(e,t,n){var i=null==e?r:Er(e,t);return i===r?n:i}function Ra(e,t){return null!=e&&_o(e,t,Rr)}var Aa=qi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),e[t]=n}),nu(ou)),Oa=qi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),De.call(e,t)?e[t].push(n):e[t]=[n]}),co),Na=Qr(Or);function xa(e){return Gs(e)?Qn(e):Br(e)}function La(e){return Gs(e)?Qn(e,!0):Ur(e)}var Ma=xi((function(e,t,n){Wr(e,t,n)})),Da=xi((function(e,t,n,r){Wr(e,t,n,r)})),Ba=ro((function(e,t){var n={};if(null==e)return n;var r=!1;t=Ot(t,(function(t){return t=bi(t,e),r||(r=t.length>1),t})),Oi(e,oo(e),n),r&&(n=cr(n,7,to));for(var i=t.length;i--;)fi(n,t[i]);return n}));var Ua=ro((function(e,t){return null==e?{}:function(e,t){return Vr(e,t,(function(t,n){return Ra(e,n)}))}(e,t)}));function ja(e,t){if(null==e)return{};var n=Ot(oo(e),(function(e){return[e]}));return t=co(t),Vr(e,n,(function(e,n){return t(e,n[0])}))}var Fa=Qi(xa),$a=Qi(La);function qa(e){return null==e?[]:Yt(e,xa(e))}var Wa=Bi((function(e,t,n){return t=t.toLowerCase(),e+(n?Ha(t):t)}));function Ha(e){return Xa(ba(e).toLowerCase())}function za(e){return(e=ba(e))&&e.replace(be,tn).replace(Qe,"")}var Va=Bi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ka=Bi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Ga=Di("toLowerCase");var Ja=Bi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var Ya=Bi((function(e,t,n){return e+(n?" ":"")+Xa(t)}));var Qa=Bi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Xa=Di("toUpperCase");function Za(e,t,n){return e=ba(e),(t=n?r:t)===r?function(e){return tt.test(e)}(e)?function(e){return e.match(Ze)||[]}(e):function(e){return e.match(le)||[]}(e):e.match(t)||[]}var eu=Qr((function(e,t){try{return St(e,r,t)}catch(e){return Xs(e)?e:new Ee(e)}})),tu=ro((function(e,t){return Ct(t,(function(t){t=jo(t),sr(e,t,Os(e[t],e))})),e}));function nu(e){return function(){return e}}var ru=Fi(),iu=Fi(!0);function ou(e){return e}function su(e){return Dr("function"==typeof e?e:cr(e,1))}var au=Qr((function(e,t){return function(n){return Or(n,e,t)}})),uu=Qr((function(e,t){return function(n){return Or(e,n,t)}}));function cu(e,t,n){var r=xa(t),i=Sr(t,r);null!=n||na(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=Sr(t,xa(t)));var o=!(na(n)&&"chain"in n&&!n.chain),s=Zs(e);return Ct(i,(function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=Ai(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Nt([this.value()],arguments))})})),e}function lu(){}var hu=Hi(Ot),fu=Hi(Tt),du=Hi(Mt);function pu(e){return ko(e)?Wt(jo(e)):function(e){return function(t){return Er(t,e)}}(e)}var gu=Vi(),mu=Vi(!0);function _u(){return[]}function vu(){return!1}var yu=Wi((function(e,t){return e+t}),0),bu=Ji("ceil"),wu=Wi((function(e,t){return e/t}),1),ku=Ji("floor");var Su,Eu=Wi((function(e,t){return e*t}),1),Cu=Ji("round"),Iu=Wi((function(e,t){return e-t}),0);return $n.after=function(e,t){if("function"!=typeof t)throw new Ae(i);return e=ma(e),function(){if(--e<1)return t.apply(this,arguments)}},$n.ary=Rs,$n.assign=wa,$n.assignIn=ka,$n.assignInWith=Sa,$n.assignWith=Ea,$n.at=Ca,$n.before=As,$n.bind=Os,$n.bindAll=tu,$n.bindKey=Ns,$n.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Vs(e)?e:[e]},$n.chain=ps,$n.chunk=function(e,t,n){t=(n?wo(e,t,n):t===r)?1:yn(ma(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,s=0,a=se(mt(i/t));o<i;)a[s++]=ii(e,o,o+=t);return a},$n.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},$n.concat=function(){var e=arguments.length;if(!e)return[];for(var t=se(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Nt(Vs(n)?Ai(n):[n],vr(t,1))},$n.cond=function(e){var t=null==e?0:e.length,n=co();return e=t?Ot(e,(function(e){if("function"!=typeof e[1])throw new Ae(i);return[n(e[0]),e[1]]})):[],Qr((function(n){for(var r=-1;++r<t;){var i=e[r];if(St(i[0],this,n))return St(i[1],this,n)}}))},$n.conforms=function(e){return function(e){var t=xa(e);return function(n){return lr(n,e,t)}}(cr(e,1))},$n.constant=nu,$n.countBy=_s,$n.create=function(e,t){var n=qn(e);return null==t?n:or(n,t)},$n.curry=function e(t,n,i){var o=Xi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},$n.curryRight=function e(t,n,i){var o=Xi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},$n.debounce=xs,$n.defaults=Ia,$n.defaultsDeep=Ta,$n.defer=Ls,$n.delay=Ms,$n.difference=qo,$n.differenceBy=Wo,$n.differenceWith=Ho,$n.drop=function(e,t,n){var i=null==e?0:e.length;return i?ii(e,(t=n||t===r?1:ma(t))<0?0:t,i):[]},$n.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ii(e,0,(t=i-(t=n||t===r?1:ma(t)))<0?0:t):[]},$n.dropRightWhile=function(e,t){return e&&e.length?pi(e,co(t,3),!0,!0):[]},$n.dropWhile=function(e,t){return e&&e.length?pi(e,co(t,3),!0):[]},$n.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&wo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=ma(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ma(i))<0&&(i+=o),i=n>i?0:_a(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},$n.filter=function(e,t){return(Vs(e)?Pt:_r)(e,co(t,3))},$n.flatMap=function(e,t){return vr(Cs(e,t),1)},$n.flatMapDeep=function(e,t){return vr(Cs(e,t),f)},$n.flatMapDepth=function(e,t,n){return n=n===r?1:ma(n),vr(Cs(e,t),n)},$n.flatten=Ko,$n.flattenDeep=function(e){return(null==e?0:e.length)?vr(e,f):[]},$n.flattenDepth=function(e,t){return(null==e?0:e.length)?vr(e,t=t===r?1:ma(t)):[]},$n.flip=function(e){return Xi(e,512)},$n.flow=ru,$n.flowRight=iu,$n.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},$n.functions=function(e){return null==e?[]:Sr(e,xa(e))},$n.functionsIn=function(e){return null==e?[]:Sr(e,La(e))},$n.groupBy=ks,$n.initial=function(e){return(null==e?0:e.length)?ii(e,0,-1):[]},$n.intersection=Jo,$n.intersectionBy=Yo,$n.intersectionWith=Qo,$n.invert=Aa,$n.invertBy=Oa,$n.invokeMap=Ss,$n.iteratee=su,$n.keyBy=Es,$n.keys=xa,$n.keysIn=La,$n.map=Cs,$n.mapKeys=function(e,t){var n={};return t=co(t,3),wr(e,(function(e,r,i){sr(n,t(e,r,i),e)})),n},$n.mapValues=function(e,t){var n={};return t=co(t,3),wr(e,(function(e,r,i){sr(n,r,t(e,r,i))})),n},$n.matches=function(e){return $r(cr(e,1))},$n.matchesProperty=function(e,t){return qr(e,cr(t,1))},$n.memoize=Ds,$n.merge=Ma,$n.mergeWith=Da,$n.method=au,$n.methodOf=uu,$n.mixin=cu,$n.negate=Bs,$n.nthArg=function(e){return e=ma(e),Qr((function(t){return Hr(t,e)}))},$n.omit=Ba,$n.omitBy=function(e,t){return ja(e,Bs(co(t)))},$n.once=function(e){return As(2,e)},$n.orderBy=function(e,t,n,i){return null==e?[]:(Vs(t)||(t=null==t?[]:[t]),Vs(n=i?r:n)||(n=null==n?[]:[n]),zr(e,t,n))},$n.over=hu,$n.overArgs=Us,$n.overEvery=fu,$n.overSome=du,$n.partial=js,$n.partialRight=Fs,$n.partition=Is,$n.pick=Ua,$n.pickBy=ja,$n.property=pu,$n.propertyOf=function(e){return function(t){return null==e?r:Er(e,t)}},$n.pull=Zo,$n.pullAll=es,$n.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Kr(e,t,co(n,2)):e},$n.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Kr(e,t,r,n):e},$n.pullAt=ts,$n.range=gu,$n.rangeRight=mu,$n.rearg=$s,$n.reject=function(e,t){return(Vs(e)?Pt:_r)(e,Bs(co(t,3)))},$n.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=co(t,3);++r<o;){var s=e[r];t(s,r,e)&&(n.push(s),i.push(r))}return Gr(e,i),n},$n.rest=function(e,t){if("function"!=typeof e)throw new Ae(i);return Qr(e,t=t===r?t:ma(t))},$n.reverse=ns,$n.sampleSize=function(e,t,n){return t=(n?wo(e,t,n):t===r)?1:ma(t),(Vs(e)?Zn:Zr)(e,t)},$n.set=function(e,t,n){return null==e?e:ei(e,t,n)},$n.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:ei(e,t,n,i)},$n.shuffle=function(e){return(Vs(e)?er:ri)(e)},$n.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&wo(e,t,n)?(t=0,n=i):(t=null==t?0:ma(t),n=n===r?i:ma(n)),ii(e,t,n)):[]},$n.sortBy=Ts,$n.sortedUniq=function(e){return e&&e.length?ui(e):[]},$n.sortedUniqBy=function(e,t){return e&&e.length?ui(e,co(t,2)):[]},$n.split=function(e,t,n){return n&&"number"!=typeof n&&wo(e,t,n)&&(t=n=r),(n=n===r?g:n>>>0)?(e=ba(e))&&("string"==typeof t||null!=t&&!aa(t))&&!(t=li(t))&&on(e)?ki(hn(e),0,n):e.split(t,n):[]},$n.spread=function(e,t){if("function"!=typeof e)throw new Ae(i);return t=null==t?0:yn(ma(t),0),Qr((function(n){var r=n[t],i=ki(n,0,t);return r&&Nt(i,r),St(e,this,i)}))},$n.tail=function(e){var t=null==e?0:e.length;return t?ii(e,1,t):[]},$n.take=function(e,t,n){return e&&e.length?ii(e,0,(t=n||t===r?1:ma(t))<0?0:t):[]},$n.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ii(e,(t=i-(t=n||t===r?1:ma(t)))<0?0:t,i):[]},$n.takeRightWhile=function(e,t){return e&&e.length?pi(e,co(t,3),!1,!0):[]},$n.takeWhile=function(e,t){return e&&e.length?pi(e,co(t,3)):[]},$n.tap=function(e,t){return t(e),e},$n.throttle=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new Ae(i);return na(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),xs(e,t,{leading:r,maxWait:t,trailing:o})},$n.thru=gs,$n.toArray=pa,$n.toPairs=Fa,$n.toPairsIn=$a,$n.toPath=function(e){return Vs(e)?Ot(e,jo):la(e)?[e]:Ai(Uo(ba(e)))},$n.toPlainObject=ya,$n.transform=function(e,t,n){var r=Vs(e),i=r||Ys(e)||ha(e);if(t=co(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:na(e)&&Zs(o)?qn(Ke(e)):{}}return(i?Ct:wr)(e,(function(e,r,i){return t(n,e,r,i)})),n},$n.unary=function(e){return Rs(e,1)},$n.union=rs,$n.unionBy=is,$n.unionWith=os,$n.uniq=function(e){return e&&e.length?hi(e):[]},$n.uniqBy=function(e,t){return e&&e.length?hi(e,co(t,2)):[]},$n.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?hi(e,r,t):[]},$n.unset=function(e,t){return null==e||fi(e,t)},$n.unzip=ss,$n.unzipWith=as,$n.update=function(e,t,n){return null==e?e:di(e,t,yi(n))},$n.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:di(e,t,yi(n),i)},$n.values=qa,$n.valuesIn=function(e){return null==e?[]:Yt(e,La(e))},$n.without=us,$n.words=Za,$n.wrap=function(e,t){return js(yi(t),e)},$n.xor=cs,$n.xorBy=ls,$n.xorWith=hs,$n.zip=fs,$n.zipObject=function(e,t){return _i(e||[],t||[],nr)},$n.zipObjectDeep=function(e,t){return _i(e||[],t||[],ei)},$n.zipWith=ds,$n.entries=Fa,$n.entriesIn=$a,$n.extend=ka,$n.extendWith=Sa,cu($n,$n),$n.add=yu,$n.attempt=eu,$n.camelCase=Wa,$n.capitalize=Ha,$n.ceil=bu,$n.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=va(n))==n?n:0),t!==r&&(t=(t=va(t))==t?t:0),ur(va(e),t,n)},$n.clone=function(e){return cr(e,4)},$n.cloneDeep=function(e){return cr(e,5)},$n.cloneDeepWith=function(e,t){return cr(e,5,t="function"==typeof t?t:r)},$n.cloneWith=function(e,t){return cr(e,4,t="function"==typeof t?t:r)},$n.conformsTo=function(e,t){return null==t||lr(e,t,xa(t))},$n.deburr=za,$n.defaultTo=function(e,t){return null==e||e!=e?t:e},$n.divide=wu,$n.endsWith=function(e,t,n){e=ba(e),t=li(t);var i=e.length,o=n=n===r?i:ur(ma(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},$n.eq=qs,$n.escape=function(e){return(e=ba(e))&&Y.test(e)?e.replace(G,nn):e},$n.escapeRegExp=function(e){return(e=ba(e))&&ie.test(e)?e.replace(re,"\\$&"):e},$n.every=function(e,t,n){var i=Vs(e)?Tt:gr;return n&&wo(e,t,n)&&(t=r),i(e,co(t,3))},$n.find=vs,$n.findIndex=zo,$n.findKey=function(e,t){return Bt(e,co(t,3),wr)},$n.findLast=ys,$n.findLastIndex=Vo,$n.findLastKey=function(e,t){return Bt(e,co(t,3),kr)},$n.floor=ku,$n.forEach=bs,$n.forEachRight=ws,$n.forIn=function(e,t){return null==e?e:yr(e,co(t,3),La)},$n.forInRight=function(e,t){return null==e?e:br(e,co(t,3),La)},$n.forOwn=function(e,t){return e&&wr(e,co(t,3))},$n.forOwnRight=function(e,t){return e&&kr(e,co(t,3))},$n.get=Pa,$n.gt=Ws,$n.gte=Hs,$n.has=function(e,t){return null!=e&&_o(e,t,Pr)},$n.hasIn=Ra,$n.head=Go,$n.identity=ou,$n.includes=function(e,t,n,r){e=Gs(e)?e:qa(e),n=n&&!r?ma(n):0;var i=e.length;return n<0&&(n=yn(i+n,0)),ca(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&jt(e,t,n)>-1},$n.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ma(n);return i<0&&(i=yn(r+i,0)),jt(e,t,i)},$n.inRange=function(e,t,n){return t=ga(t),n===r?(n=t,t=0):n=ga(n),function(e,t,n){return e>=bn(t,n)&&e<yn(t,n)}(e=va(e),t,n)},$n.invoke=Na,$n.isArguments=zs,$n.isArray=Vs,$n.isArrayBuffer=Ks,$n.isArrayLike=Gs,$n.isArrayLikeObject=Js,$n.isBoolean=function(e){return!0===e||!1===e||ra(e)&&Ir(e)==y},$n.isBuffer=Ys,$n.isDate=Qs,$n.isElement=function(e){return ra(e)&&1===e.nodeType&&!sa(e)},$n.isEmpty=function(e){if(null==e)return!0;if(Gs(e)&&(Vs(e)||"string"==typeof e||"function"==typeof e.splice||Ys(e)||ha(e)||zs(e)))return!e.length;var t=mo(e);if(t==E||t==R)return!e.size;if(Co(e))return!Br(e).length;for(var n in e)if(De.call(e,n))return!1;return!0},$n.isEqual=function(e,t){return xr(e,t)},$n.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?xr(e,t,r,n):!!i},$n.isError=Xs,$n.isFinite=function(e){return"number"==typeof e&&mn(e)},$n.isFunction=Zs,$n.isInteger=ea,$n.isLength=ta,$n.isMap=ia,$n.isMatch=function(e,t){return e===t||Lr(e,t,ho(t))},$n.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Lr(e,t,ho(t),n)},$n.isNaN=function(e){return oa(e)&&e!=+e},$n.isNative=function(e){if(Eo(e))throw new Ee("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Mr(e)},$n.isNil=function(e){return null==e},$n.isNull=function(e){return null===e},$n.isNumber=oa,$n.isObject=na,$n.isObjectLike=ra,$n.isPlainObject=sa,$n.isRegExp=aa,$n.isSafeInteger=function(e){return ea(e)&&e>=-9007199254740991&&e<=d},$n.isSet=ua,$n.isString=ca,$n.isSymbol=la,$n.isTypedArray=ha,$n.isUndefined=function(e){return e===r},$n.isWeakMap=function(e){return ra(e)&&mo(e)==N},$n.isWeakSet=function(e){return ra(e)&&"[object WeakSet]"==Ir(e)},$n.join=function(e,t){return null==e?"":_n.call(e,t)},$n.kebabCase=Va,$n.last=Xo,$n.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ma(n))<0?yn(i+o,0):bn(o,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):Ut(e,$t,o,!0)},$n.lowerCase=Ka,$n.lowerFirst=Ga,$n.lt=fa,$n.lte=da,$n.max=function(e){return e&&e.length?mr(e,ou,Tr):r},$n.maxBy=function(e,t){return e&&e.length?mr(e,co(t,2),Tr):r},$n.mean=function(e){return qt(e,ou)},$n.meanBy=function(e,t){return qt(e,co(t,2))},$n.min=function(e){return e&&e.length?mr(e,ou,jr):r},$n.minBy=function(e,t){return e&&e.length?mr(e,co(t,2),jr):r},$n.stubArray=_u,$n.stubFalse=vu,$n.stubObject=function(){return{}},$n.stubString=function(){return""},$n.stubTrue=function(){return!0},$n.multiply=Eu,$n.nth=function(e,t){return e&&e.length?Hr(e,ma(t)):r},$n.noConflict=function(){return ht._===this&&(ht._=$e),this},$n.noop=lu,$n.now=Ps,$n.pad=function(e,t,n){e=ba(e);var r=(t=ma(t))?ln(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return zi(Dt(i),n)+e+zi(mt(i),n)},$n.padEnd=function(e,t,n){e=ba(e);var r=(t=ma(t))?ln(e):0;return t&&r<t?e+zi(t-r,n):e},$n.padStart=function(e,t,n){e=ba(e);var r=(t=ma(t))?ln(e):0;return t&&r<t?zi(t-r,n)+e:e},$n.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),kn(ba(e).replace(oe,""),t||0)},$n.random=function(e,t,n){if(n&&"boolean"!=typeof n&&wo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=ga(e),t===r?(t=e,e=0):t=ga(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=Sn();return bn(e+o*(t-e+at("1e-"+((o+"").length-1))),t)}return Jr(e,t)},$n.reduce=function(e,t,n){var r=Vs(e)?xt:zt,i=arguments.length<3;return r(e,co(t,4),n,i,dr)},$n.reduceRight=function(e,t,n){var r=Vs(e)?Lt:zt,i=arguments.length<3;return r(e,co(t,4),n,i,pr)},$n.repeat=function(e,t,n){return t=(n?wo(e,t,n):t===r)?1:ma(t),Yr(ba(e),t)},$n.replace=function(){var e=arguments,t=ba(e[0]);return e.length<3?t:t.replace(e[1],e[2])},$n.result=function(e,t,n){var i=-1,o=(t=bi(t,e)).length;for(o||(o=1,e=r);++i<o;){var s=null==e?r:e[jo(t[i])];s===r&&(i=o,s=n),e=Zs(s)?s.call(e):s}return e},$n.round=Cu,$n.runInContext=e,$n.sample=function(e){return(Vs(e)?Xn:Xr)(e)},$n.size=function(e){if(null==e)return 0;if(Gs(e))return ca(e)?ln(e):e.length;var t=mo(e);return t==E||t==R?e.size:Br(e).length},$n.snakeCase=Ja,$n.some=function(e,t,n){var i=Vs(e)?Mt:oi;return n&&wo(e,t,n)&&(t=r),i(e,co(t,3))},$n.sortedIndex=function(e,t){return si(e,t)},$n.sortedIndexBy=function(e,t,n){return ai(e,t,co(n,2))},$n.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=si(e,t);if(r<n&&qs(e[r],t))return r}return-1},$n.sortedLastIndex=function(e,t){return si(e,t,!0)},$n.sortedLastIndexBy=function(e,t,n){return ai(e,t,co(n,2),!0)},$n.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=si(e,t,!0)-1;if(qs(e[n],t))return n}return-1},$n.startCase=Ya,$n.startsWith=function(e,t,n){return e=ba(e),n=null==n?0:ur(ma(n),0,e.length),t=li(t),e.slice(n,n+t.length)==t},$n.subtract=Iu,$n.sum=function(e){return e&&e.length?Vt(e,ou):0},$n.sumBy=function(e,t){return e&&e.length?Vt(e,co(t,2)):0},$n.template=function(e,t,n){var i=$n.templateSettings;n&&wo(e,t,n)&&(t=r),e=ba(e),t=Sa({},t,i,Zi);var o,s,a=Sa({},t.imports,i.imports,Zi),u=xa(a),c=Yt(a,u),l=0,h=t.interpolate||we,f="__p += '",d=Pe((t.escape||we).source+"|"+h.source+"|"+(h===Z?de:we).source+"|"+(t.evaluate||we).source+"|$","g"),p="//# sourceURL="+(De.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";e.replace(d,(function(t,n,r,i,a,u){return r||(r=i),f+=e.slice(l,u).replace(ke,rn),n&&(o=!0,f+="' +\n__e("+n+") +\n'"),a&&(s=!0,f+="';\n"+a+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=u+t.length,t})),f+="';\n";var g=De.call(t,"variable")&&t.variable;if(g){if(he.test(g))throw new Ee("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(s?f.replace(H,""):f).replace(z,"$1").replace(V,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=eu((function(){return Ce(u,p+"return "+f).apply(r,c)}));if(m.source=f,Xs(m))throw m;return m},$n.times=function(e,t){if((e=ma(e))<1||e>d)return[];var n=g,r=bn(e,g);t=co(t),e-=g;for(var i=Kt(r,t);++n<e;)t(n);return i},$n.toFinite=ga,$n.toInteger=ma,$n.toLength=_a,$n.toLower=function(e){return ba(e).toLowerCase()},$n.toNumber=va,$n.toSafeInteger=function(e){return e?ur(ma(e),-9007199254740991,d):0===e?e:0},$n.toString=ba,$n.toUpper=function(e){return ba(e).toUpperCase()},$n.trim=function(e,t,n){if((e=ba(e))&&(n||t===r))return Gt(e);if(!e||!(t=li(t)))return e;var i=hn(e),o=hn(t);return ki(i,Xt(i,o),Zt(i,o)+1).join("")},$n.trimEnd=function(e,t,n){if((e=ba(e))&&(n||t===r))return e.slice(0,fn(e)+1);if(!e||!(t=li(t)))return e;var i=hn(e);return ki(i,0,Zt(i,hn(t))+1).join("")},$n.trimStart=function(e,t,n){if((e=ba(e))&&(n||t===r))return e.replace(oe,"");if(!e||!(t=li(t)))return e;var i=hn(e);return ki(i,Xt(i,hn(t))).join("")},$n.truncate=function(e,t){var n=30,i="...";if(na(t)){var o="separator"in t?t.separator:o;n="length"in t?ma(t.length):n,i="omission"in t?li(t.omission):i}var s=(e=ba(e)).length;if(on(e)){var a=hn(e);s=a.length}if(n>=s)return e;var u=n-ln(i);if(u<1)return i;var c=a?ki(a,0,u).join(""):e.slice(0,u);if(o===r)return c+i;if(a&&(u+=c.length-u),aa(o)){if(e.slice(u).search(o)){var l,h=c;for(o.global||(o=Pe(o.source,ba(pe.exec(o))+"g")),o.lastIndex=0;l=o.exec(h);)var f=l.index;c=c.slice(0,f===r?u:f)}}else if(e.indexOf(li(o),u)!=u){var d=c.lastIndexOf(o);d>-1&&(c=c.slice(0,d))}return c+i},$n.unescape=function(e){return(e=ba(e))&&J.test(e)?e.replace(K,dn):e},$n.uniqueId=function(e){var t=++Be;return ba(e)+t},$n.upperCase=Qa,$n.upperFirst=Xa,$n.each=bs,$n.eachRight=ws,$n.first=Go,cu($n,(Su={},wr($n,(function(e,t){De.call($n.prototype,t)||(Su[t]=e)})),Su),{chain:!1}),$n.VERSION="4.17.21",Ct(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){$n[e].placeholder=$n})),Ct(["drop","take"],(function(e,t){zn.prototype[e]=function(n){n=n===r?1:yn(ma(n),0);var i=this.__filtered__&&!t?new zn(this):this.clone();return i.__filtered__?i.__takeCount__=bn(n,i.__takeCount__):i.__views__.push({size:bn(n,g),type:e+(i.__dir__<0?"Right":"")}),i},zn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ct(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;zn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:co(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ct(["head","last"],(function(e,t){var n="take"+(t?"Right":"");zn.prototype[e]=function(){return this[n](1).value()[0]}})),Ct(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");zn.prototype[e]=function(){return this.__filtered__?new zn(this):this[n](1)}})),zn.prototype.compact=function(){return this.filter(ou)},zn.prototype.find=function(e){return this.filter(e).head()},zn.prototype.findLast=function(e){return this.reverse().find(e)},zn.prototype.invokeMap=Qr((function(e,t){return"function"==typeof e?new zn(this):this.map((function(n){return Or(n,e,t)}))})),zn.prototype.reject=function(e){return this.filter(Bs(co(e)))},zn.prototype.slice=function(e,t){e=ma(e);var n=this;return n.__filtered__&&(e>0||t<0)?new zn(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=ma(t))<0?n.dropRight(-t):n.take(t-e)),n)},zn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},zn.prototype.toArray=function(){return this.take(g)},wr(zn.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=$n[i?"take"+("last"==t?"Right":""):t],s=i||/^find/.test(t);o&&($n.prototype[t]=function(){var t=this.__wrapped__,a=i?[1]:arguments,u=t instanceof zn,c=a[0],l=u||Vs(t),h=function(e){var t=o.apply($n,Nt([e],a));return i&&f?t[0]:t};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var f=this.__chain__,d=!!this.__actions__.length,p=s&&!f,g=u&&!d;if(!s&&l){t=g?t:new zn(this);var m=e.apply(t,a);return m.__actions__.push({func:gs,args:[h],thisArg:r}),new Hn(m,f)}return p&&g?e.apply(this,a):(m=this.thru(h),p?i?m.value()[0]:m.value():m)})})),Ct(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);$n.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Vs(i)?i:[],e)}return this[n]((function(n){return t.apply(Vs(n)?n:[],e)}))}})),wr(zn.prototype,(function(e,t){var n=$n[t];if(n){var r=n.name+"";De.call(Nn,r)||(Nn[r]=[]),Nn[r].push({name:t,func:n})}})),Nn[$i(r,2).name]=[{name:"wrapper",func:r}],zn.prototype.clone=function(){var e=new zn(this.__wrapped__);return e.__actions__=Ai(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ai(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ai(this.__views__),e},zn.prototype.reverse=function(){if(this.__filtered__){var e=new zn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},zn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Vs(e),r=t<0,i=n?e.length:0,o=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var o=n[r],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=bn(t,e+s);break;case"takeRight":e=yn(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,u=a-s,c=r?a:s-1,l=this.__iteratees__,h=l.length,f=0,d=bn(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return gi(e,this.__actions__);var p=[];e:for(;u--&&f<d;){for(var g=-1,m=e[c+=t];++g<h;){var _=l[g],v=_.iteratee,y=_.type,b=v(m);if(2==y)m=b;else if(!b){if(1==y)continue e;break e}}p[f++]=m}return p},$n.prototype.at=ms,$n.prototype.chain=function(){return ps(this)},$n.prototype.commit=function(){return new Hn(this.value(),this.__chain__)},$n.prototype.next=function(){this.__values__===r&&(this.__values__=pa(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},$n.prototype.plant=function(e){for(var t,n=this;n instanceof Wn;){var i=$o(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},$n.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof zn){var t=e;return this.__actions__.length&&(t=new zn(this)),(t=t.reverse()).__actions__.push({func:gs,args:[ns],thisArg:r}),new Hn(t,this.__chain__)}return this.thru(ns)},$n.prototype.toJSON=$n.prototype.valueOf=$n.prototype.value=function(){return gi(this.__wrapped__,this.__actions__)},$n.prototype.first=$n.prototype.head,st&&($n.prototype[st]=function(){return this}),$n}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ht._=pn,define((function(){return pn}))):dt?((dt.exports=pn)._=pn,ft._=pn):ht._=pn}).call(this)})),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuBtns:document.querySelector("[data-menu-btn]")};function t(){e.menu.classList.toggle("is-open"),e.menuBtns.classList.toggle("display-none")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})();var s,a={};function u(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var c={};function l(e){return e&&e.__esModule?e:{default:e}}function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}c.__esModule=!0;var f,d,p,g,m,_,v,y,b,w={};function k(e){return e&&e.__esModule?e:{default:e}}e(w,"__esModule",(function(){return f}),(function(e){return f=e})),e(w,"HandlebarsEnvironment",(function(){return d}),(function(e){return d=e})),e(w,"VERSION",(function(){return p}),(function(e){return p=e})),e(w,"COMPILER_REVISION",(function(){return g}),(function(e){return g=e})),e(w,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return m}),(function(e){return m=e})),e(w,"REVISION_CHANGES",(function(){return _}),(function(e){return _=e})),e(w,"log",(function(){return v}),(function(e){return v=e})),e(w,"createFrame",(function(){return y}),(function(e){return y=e})),e(w,"logger",(function(){return b}),(function(e){return b=e})),f=!0,d=Pe;var S,E,C,I,T,P,R,A,O,N,x,L={};e(L,"__esModule",(function(){return S}),(function(e){return S=e})),e(L,"extend",(function(){return E}),(function(e){return E=e})),e(L,"indexOf",(function(){return C}),(function(e){return C=e})),e(L,"escapeExpression",(function(){return I}),(function(e){return I=e})),e(L,"isEmpty",(function(){return T}),(function(e){return T=e})),e(L,"createFrame",(function(){return P}),(function(e){return P=e})),e(L,"blockParams",(function(){return R}),(function(e){return R=e})),e(L,"appendContextPath",(function(){return A}),(function(e){return A=e})),e(L,"toString",(function(){return O}),(function(e){return O=e})),e(L,"isFunction",(function(){return N}),(function(e){return N=e})),e(L,"isArray",(function(){return x}),(function(e){return x=e})),S=!0,E=j,C=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},I=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return B.test(e)?e.replace(D,U):e},T=function(e){return!e&&0!==e||!(!q(e)||0!==e.length)},P=function(e){var t=j({},e);return t._parent=e,t},R=function(e,t){return e.path=t,e},A=function(e,t){return(e?e+".":"")+t};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},D=/[&<>"'`=]/g,B=/[&<>"'`=]/;function U(e){return M[e]}function j(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var F=Object.prototype.toString;O=F;var $=function(e){return"function"==typeof e};$(/x/)&&(N=$=function(e){return"function"==typeof e&&"[object Function]"===F.call(e)}),N=$;var q=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===F.call(e)};x=q;var W={__esModule:!0},H=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function z(e,t){var n=t&&t.loc,r=void 0,i=void 0,o=void 0,s=void 0;n&&(r=n.start.line,i=n.end.line,o=n.start.column,s=n.end.column,e+=" - "+r+":"+o);for(var a=Error.prototype.constructor.call(this,e),u=0;u<H.length;u++)this[H[u]]=a[H[u]];Error.captureStackTrace&&Error.captureStackTrace(this,z);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:o,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=o,this.endColumn=s))}catch(e){}}z.prototype=new Error,W.default=z;var V,K,G=k(W=W.default);function J(e){return e&&e.__esModule?e:{default:e}}V=function(e){Q.default(e),te.default(e),ie.default(e),ae.default(e),ce.default(e),he.default(e),ge.default(e)},K=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var Y={__esModule:!0,default:function(e){e.registerHelper("blockHelperMissing",(function(t,n){var r=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return r(this);if(x(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var o=P(n.data);o.contextPath=A(n.data.contextPath,n.name),n={data:o}}return i(t,n)}))}},Q=J(Y=Y.default),X={};X.__esModule=!0;var Z,ee=(Z=W)&&Z.__esModule?Z:{default:Z};X.default=function(e){e.registerHelper("each",(function(e,n){if(!n)throw new ee.default("Must pass iterator to #each");var r,i=n.fn,o=n.inverse,s=0,a="",u=void 0,c=void 0;function l(t,n,r){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!r,c&&(u.contextPath=c+t)),a+=i(e[t],{data:u,blockParams:R([e[t],t],[c+t,null])})}if(n.data&&n.ids&&(c=A(n.data.contextPath,n.ids[0])+"."),N(e)&&(e=e.call(this)),n.data&&(u=P(n.data)),e&&"object"==typeof e)if(x(e))for(var h=e.length;s<h;s++)s in e&&l(s,s,s===e.length-1);else if(t.Symbol&&e[t.Symbol.iterator]){for(var f=[],d=e[t.Symbol.iterator](),p=d.next();!p.done;p=d.next())f.push(p.value);for(h=(e=f).length;s<h;s++)l(s,s,s===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&l(r,s-1),r=e,s++})),void 0!==r&&l(r,s-1,!0);return 0===s&&(a=o(this)),a}))};var te=J(X=X.default),ne={};ne.__esModule=!0;var re=function(e){return e&&e.__esModule?e:{default:e}}(W);ne.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new re.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var ie=J(ne=ne.default),oe={};oe.__esModule=!0;var se=function(e){return e&&e.__esModule?e:{default:e}}(W);oe.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new se.default("#if requires exactly one argument");return N(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||T(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new se.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var ae=J(oe=oe.default),ue={__esModule:!0,default:function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)}))}},ce=J(ue=ue.default),le={__esModule:!0,default:function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}},he=J(le=le.default),fe={};fe.__esModule=!0;var de=function(e){return e&&e.__esModule?e:{default:e}}(W);fe.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new de.default("#with requires exactly one argument");N(e)&&(e=e.call(this));var n=t.fn;if(T(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=P(t.data)).contextPath=A(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:R([e],[r&&r.contextPath])})}))};var pe,ge=J(fe=fe.default);pe=function(e){_e.default(e)};var me={__esModule:!0,default:function(e){e.registerDecorator("inline",(function(e,t,n,r){var i=e;return t.partials||(t.partials={},i=function(r,i){var o=n.partials;n.partials=E({},o,t.partials);var s=e(r,i);return n.partials=o,s}),t.partials[r.args[0]]=r.fn,i}))}},_e=function(e){return e&&e.__esModule?e:{default:e}}(me=me.default);var ve={__esModule:!0},ye={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=C(ye.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=ye.lookupLevel(e),"undefined"!=typeof console&&ye.lookupLevel(ye.level)<=e){var t=ye.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};ve.default=ye;var be,we,ke,Se,Ee=k(ve=ve.default);be=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:Se(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:Se(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},we=function(e,t,n){return Te("function"==typeof e?t.methods:t.properties,n)},ke=function(){Object.keys(Ie).forEach((function(e){delete Ie[e]}))},Se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return E.apply(void 0,[Object.create(null)].concat(t))};var Ce=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(ve),Ie=Object.create(null);function Te(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==Ie[e]&&(Ie[e]=!0,Ce.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}p="4.7.7";g=8;m=7;_={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function Pe(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},V(this),pe(this)}Pe.prototype={constructor:Pe,logger:Ee.default,log:Ee.default.log,registerHelper:function(e,t){if("[object Object]"===O.call(e)){if(t)throw new G.default("Arg not supported with multiple helpers");E(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===O.call(e))E(this.partials,e);else{if(void 0===t)throw new G.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===O.call(e)){if(t)throw new G.default("Arg not supported with multiple decorators");E(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){ke()}};var Re=Ee.default.log;v=Re,y=P,b=Ee.default;var Ae=h(w),Oe={};function Ne(e){this.string=e}Oe.__esModule=!0,Ne.prototype.toString=Ne.prototype.toHTML=function(){return""+this.string},Oe.default=Ne;var xe,Le,Me,De,Be,Ue,je,Fe=l(Oe=Oe.default),$e=l(W),qe=h(L),We={};e(We,"__esModule",(function(){return xe}),(function(e){return xe=e})),e(We,"checkRevision",(function(){return Le}),(function(e){return Le=e})),e(We,"template",(function(){return Me}),(function(e){return Me=e})),e(We,"wrapProgram",(function(){return De}),(function(e){return De=e})),e(We,"resolvePartial",(function(){return Be}),(function(e){return Be=e})),e(We,"invokePartial",(function(){return Ue}),(function(e){return Ue=e})),e(We,"noop",(function(){return je}),(function(e){return je=e})),xe=!0,Le=function(e){var t=e&&e[0]||1,n=g;if(t>=m&&t<=g)return;if(t<m){var r=_[n],i=_[t];throw new Ve.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new Ve.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},Me=function(e,t){if(!t)throw new Ve.default("No environment passed to template");if(!e||!e.main)throw new Ve.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new Ve.default('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||we(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,i=0;i<n;i++){if(null!=(e[i]&&r.lookupProperty(e[i],t)))return e[i][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:ze.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=ze.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var o=ze.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,n,r,o);if(null==s&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),s=i.partials[i.name](r,o)),null!=s){if(i.indent){for(var a=s.split("\n"),u=0,c=a.length;u<c&&(a[u]||u+1!==c);u++)a[u]=i.indent+a[u];s=a.join("\n")}return s}throw new Ve.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var o=this.programs[e],s=this.fn(e);return t||i||r||n?o=Ke(this,e,s,t,n,r,i):o||(o=this.programs[e]=Ke(this,e,s)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=ze.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;i._setup(n),!n.partial&&e.useData&&(o=Je(t,o));var s=void 0,a=e.useBlockParams?[]:void 0;function u(t){return""+e.main(r,t,r.helpers,r.partials,o,a,s)}return e.useDepths&&(s=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(u=Ye(e.main,u,r,n.depths||[],o,a))(t,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var o=ze.extend({},t.helpers,i.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return He(e,(function(e){return ze.extend({lookupProperty:n},e)}))}(r,t)}))}(o,r),r.helpers=o,e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=ze.extend({},t.decorators,i.decorators)),r.hooks={},r.protoAccessControl=be(i);var s=i.allowCallsToHelperMissing||n;K(r,"helperMissing",s),K(r,"blockHelperMissing",s)}},i._child=function(t,n,i,o){if(e.useBlockParams&&!i)throw new Ve.default("must pass block params");if(e.useDepths&&!o)throw new Ve.default("must pass parent depths");return Ke(r,t,e[t],n,0,i,o)},i},De=Ke,Be=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},Ue=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==Ge&&function(){n.data=y(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=y(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=ze.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new Ve.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},je=Ge;var He,ze=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(L),Ve=function(e){return e&&e.__esModule?e:{default:e}}(W);function Ke(e,t,n,r,i,o,s){function a(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=s;return!s||t==s[0]||t===e.nullContext&&null===s[0]||(a=[t].concat(s)),n(e,t,e.helpers,e.partials,i.data||r,o&&[i.blockParams].concat(o),a)}return(a=Ye(n,a,e,s,r,o)).program=t,a.depth=s?s.length:0,a.blockParams=i||0,a}function Ge(){return""}function Je(e,t){return t&&"root"in t||((t=t?y(t):{}).root=e),t}function Ye(e,t,n,r,i,o){if(e.decorator){var s={};t=e.decorator(t,s,n,r&&r[0],i,o,r),ze.extend(t,s)}return t}He=function(e,t){if("function"!=typeof e)return e;return function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}};var Qe=h(We),Xe={__esModule:!0,default:function(e){var n=void 0!==t?t:window,r=n.Handlebars;e.noConflict=function(){return n.Handlebars===e&&(n.Handlebars=r),e}}},Ze=l(Xe=Xe.default);function et(){var e=new Ae.HandlebarsEnvironment;return qe.extend(e,Ae),e.SafeString=Fe.default,e.Exception=$e.default,e.Utils=qe,e.escapeExpression=qe.escapeExpression,e.VM=Qe,e.template=function(t){return Qe.template(t,e)},e}var tt=et();tt.create=et,Ze.default(tt),tt.default=tt,c.default=tt;var nt=u(c=c.default),rt={__esModule:!0},it={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!it.helpers.scopedId(e)&&!e.depth}}};rt.default=it;var ot,st,at,ut=u(rt=rt.default);function ct(e){return e&&e.__esModule?e:{default:e}}ot=Vt,st=function(e,t){var n=Vt(e,t);return new Bt.default(t).accept(n)};var lt={__esModule:!0},ht=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,n,r,i,o,s){var a=o.length-1;switch(i){case 1:return o[a-1];case 2:this.$=r.prepareProgram(o[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=o[a];break;case 9:this.$={type:"CommentStatement",value:r.stripComment(o[a]),strip:r.stripFlags(o[a],o[a]),loc:r.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:o[a],value:o[a],loc:r.locInfo(this._$)};break;case 11:this.$=r.prepareRawBlock(o[a-2],o[a-1],o[a],this._$);break;case 12:this.$={path:o[a-3],params:o[a-2],hash:o[a-1]};break;case 13:this.$=r.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!1,this._$);break;case 14:this.$=r.prepareBlock(o[a-3],o[a-2],o[a-1],o[a],!0,this._$);break;case 15:this.$={open:o[a-5],path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:r.stripFlags(o[a-5],o[a])};break;case 16:case 17:this.$={path:o[a-4],params:o[a-3],hash:o[a-2],blockParams:o[a-1],strip:r.stripFlags(o[a-5],o[a])};break;case 18:this.$={strip:r.stripFlags(o[a-1],o[a-1]),program:o[a]};break;case 19:var u=r.prepareBlock(o[a-2],o[a-1],o[a],o[a],!1,this._$),c=r.prepareProgram([u],o[a-1].loc);c.chained=!0,this.$={strip:o[a-2].strip,program:c,chain:!0};break;case 21:this.$={path:o[a-1],strip:r.stripFlags(o[a-2],o[a])};break;case 22:case 23:this.$=r.prepareMustache(o[a-3],o[a-2],o[a-1],o[a-4],r.stripFlags(o[a-4],o[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:o[a-3],params:o[a-2],hash:o[a-1],indent:"",strip:r.stripFlags(o[a-4],o[a]),loc:r.locInfo(this._$)};break;case 25:this.$=r.preparePartialBlock(o[a-2],o[a-1],o[a],this._$);break;case 26:this.$={path:o[a-3],params:o[a-2],hash:o[a-1],strip:r.stripFlags(o[a-4],o[a])};break;case 29:this.$={type:"SubExpression",path:o[a-3],params:o[a-2],hash:o[a-1],loc:r.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:o[a],loc:r.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:r.id(o[a-2]),value:o[a],loc:r.locInfo(this._$)};break;case 32:this.$=r.id(o[a-1]);break;case 35:this.$={type:"StringLiteral",value:o[a],original:o[a],loc:r.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(o[a]),original:Number(o[a]),loc:r.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===o[a],original:"true"===o[a],loc:r.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:r.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};break;case 42:this.$=r.preparePath(!0,o[a],this._$);break;case 43:this.$=r.preparePath(!1,o[a],this._$);break;case 44:o[a-2].push({part:r.id(o[a]),original:o[a],separator:o[a-1]}),this.$=o[a-2];break;case 45:this.$=[{part:r.id(o[a]),original:o[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:o[a-1].push(o[a]);break;case 98:case 100:this.$=[o[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=this,n=[0],r=[null],i=[],o=this.table,s="",a=0,u=0,c=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;i.push(l);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,d,p,g,m,_,v,y,b,w,k={};;){if(p=n[n.length-1],this.defaultActions[p]?g=this.defaultActions[p]:(null==f&&(w=void 0,"number"!=typeof(w=t.lexer.lex()||1)&&(w=t.symbols_[w]||w),f=w),g=o[p]&&o[p][f]),void 0===g||!g.length||!g[0]){var S="";if(!c){for(_ in b=[],o[p])this.terminals_[_]&&_>2&&b.push("'"+this.terminals_[_]+"'");S=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(S,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:l,expected:b})}}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+f);switch(g[0]){case 1:n.push(f),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(g[1]),f=null,d?(f=d,d=null):(u=this.lexer.yyleng,s=this.lexer.yytext,a=this.lexer.yylineno,l=this.lexer.yylloc,c>0&&c--);break;case 2:if(v=this.productions_[g[1]][1],k.$=r[r.length-v],k._$={first_line:i[i.length-(v||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(v||1)].first_column,last_column:i[i.length-1].last_column},h&&(k._$.range=[i[i.length-(v||1)].range[0],i[i.length-1].range[1]]),void 0!==(m=this.performAction.call(k,s,u,a,this.yy,g[1],r,i)))return m;v&&(n=n.slice(0,-1*v*2),r=r.slice(0,-1*v),i=i.slice(0,-1*v)),n.push(this.productions_[g[1]][0]),r.push(k.$),i.push(k._$),y=o[n[n.length-2]][n[n.length-1]],n.push(y);break;case 3:return!0}}return!0}},t=function(){var e={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;var e,t,n,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),s=0;s<o.length&&(!(n=this._input.match(this.rules[o[s]]))||t&&!(n[0].length>t[0].length)||(t=n,r=s,this.options.flex));s++);return t?((i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,n,r){function i(e,n){return t.yytext=t.yytext.substring(e,t.yyleng-n+e)}switch(n){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(t.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};return e}();function n(){this.yy={}}return e.lexer=t,n.prototype=e,e.Parser=n,new n}();lt.default=ht;var ft=ct(lt=lt.default),dt={};dt.__esModule=!0;var pt={};pt.__esModule=!0;var gt=function(e){return e&&e.__esModule?e:{default:e}}(W);function mt(){this.parents=[]}function _t(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function vt(e){_t.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function yt(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}mt.prototype={constructor:mt,mutating:!1,acceptKey:function(e,t){var n=this.accept(e[t]);if(this.mutating){if(n&&!mt.prototype[n.type])throw new gt.default('Unexpected node type "'+n.type+'" found when accepting '+t+" on "+e.type);e[t]=n}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new gt.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,n=e.length;t<n;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,n--)},accept:function(e){if(e){if(!this[e.type])throw new gt.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var t=this[e.type](e);return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:_t,Decorator:_t,BlockStatement:vt,DecoratorBlock:vt,PartialStatement:yt,PartialBlockStatement:function(e){yt.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:_t,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},pt.default=mt;var bt=function(e){return e&&e.__esModule?e:{default:e}}(pt=pt.default);function wt(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=e}function kt(e,t,n){void 0===t&&(t=e.length);var r=e[t-1],i=e[t-2];return r?"ContentStatement"===r.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original):void 0:n}function St(e,t,n){void 0===t&&(t=-1);var r=e[t+1],i=e[t+2];return r?"ContentStatement"===r.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original):void 0:n}function Et(e,t,n){var r=e[null==t?0:t+1];if(r&&"ContentStatement"===r.type&&(n||!r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function Ct(e,t,n){var r=e[null==t?e.length-1:t-1];if(r&&"ContentStatement"===r.type&&(n||!r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}wt.prototype=new bt.default,wt.prototype.Program=function(e){var t=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=e.body,i=0,o=r.length;i<o;i++){var s=r[i],a=this.accept(s);if(a){var u=kt(r,i,n),c=St(r,i,n),l=a.openStandalone&&u,h=a.closeStandalone&&c,f=a.inlineStandalone&&u&&c;a.close&&Et(r,i,!0),a.open&&Ct(r,i,!0),t&&f&&(Et(r,i),Ct(r,i)&&"PartialStatement"===s.type&&(s.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),t&&l&&(Et((s.program||s.inverse).body),Ct(r,i)),t&&h&&(Et(r,i),Ct((s.inverse||s.program).body))}}return e},wt.prototype.BlockStatement=wt.prototype.DecoratorBlock=wt.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse);var t=e.program||e.inverse,n=e.program&&e.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var o={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:St(t.body),closeStandalone:kt((r||t).body)};if(e.openStrip.close&&Et(t.body,null,!0),n){var s=e.inverseStrip;s.open&&Ct(t.body,null,!0),s.close&&Et(r.body,null,!0),e.closeStrip.open&&Ct(i.body,null,!0),!this.options.ignoreStandalone&&kt(t.body)&&St(r.body)&&(Ct(t.body),Et(r.body))}else e.closeStrip.open&&Ct(t.body,null,!0);return o},wt.prototype.Decorator=wt.prototype.MustacheStatement=function(e){return e.strip},wt.prototype.PartialStatement=wt.prototype.CommentStatement=function(e){var t=e.strip||{};return{inlineStandalone:!0,open:t.open,close:t.close}},dt.default=wt;var It,Tt,Pt,Rt,At,Ot,Nt,xt,Lt,Mt,Dt,Bt=ct(dt=dt.default),Ut={};e(Ut,"__esModule",(function(){return It}),(function(e){return It=e})),e(Ut,"SourceLocation",(function(){return Tt}),(function(e){return Tt=e})),e(Ut,"id",(function(){return Pt}),(function(e){return Pt=e})),e(Ut,"stripFlags",(function(){return Rt}),(function(e){return Rt=e})),e(Ut,"stripComment",(function(){return At}),(function(e){return At=e})),e(Ut,"preparePath",(function(){return Ot}),(function(e){return Ot=e})),e(Ut,"prepareMustache",(function(){return Nt}),(function(e){return Nt=e})),e(Ut,"prepareRawBlock",(function(){return xt}),(function(e){return xt=e})),e(Ut,"prepareBlock",(function(){return Lt}),(function(e){return Lt=e})),e(Ut,"prepareProgram",(function(){return Mt}),(function(e){return Mt=e})),e(Ut,"preparePartialBlock",(function(){return Dt}),(function(e){return Dt=e})),It=!0,Tt=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},Pt=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},Rt=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},At=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},Ot=function(e,t,n){n=this.locInfo(n);for(var r=e?"@":"",i=[],o=0,s=0,a=t.length;s<a;s++){var u=t[s].part,c=t[s].original!==u;if(r+=(t[s].separator||"")+u,c||".."!==u&&"."!==u&&"this"!==u)i.push(u);else{if(i.length>0)throw new jt.default("Invalid path: "+r,{loc:n});".."===u&&o++}}return{type:"PathExpression",data:e,depth:o,parts:i,original:r,loc:n}},Nt=function(e,t,n,r,i,o){var s=r.charAt(3)||r.charAt(2),a="{"!==s&&"&"!==s;return{type:/\*/.test(r)?"Decorator":"MustacheStatement",path:e,params:t,hash:n,escaped:a,strip:i,loc:this.locInfo(o)}},xt=function(e,t,n,r){Ft(e,n),r=this.locInfo(r);var i={type:"Program",body:t,strip:{},loc:r};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}},Lt=function(e,t,n,r,i,o){r&&r.path&&Ft(e,r);var s=/\*/.test(e.open);t.blockParams=e.blockParams;var a=void 0,u=void 0;if(n){if(s)throw new jt.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),u=n.strip,a=n.program}i&&(i=a,a=t,t=i);return{type:s?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:a,openStrip:e.strip,inverseStrip:u,closeStrip:r&&r.strip,loc:this.locInfo(o)}},Mt=function(e,t){if(!t&&e.length){var n=e[0].loc,r=e[e.length-1].loc;n&&r&&(t={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},Dt=function(e,t,n,r){return Ft(e,n),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}};var jt=function(e){return e&&e.__esModule?e:{default:e}}(W);function Ft(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var n={loc:e.path.loc};throw new jt.default(e.path.original+" doesn't match "+t,n)}}var $t=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Ut);at=ft.default;var qt,Wt,Ht,zt={};function Vt(e,t){return"Program"===e.type?e:(ft.default.yy=zt,zt.locInfo=function(e){return new zt.SourceLocation(t&&t.srcName,e)},ft.default.parse(e))}function Kt(e){return e&&e.__esModule?e:{default:e}}E(zt,$t),qt=Qt,Wt=function(e,t,n){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new Gt.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);"data"in(t=t||{})||(t.data=!0);t.compat&&(t.useDepths=!0);var r=n.parse(e,t),i=(new n.Compiler).compile(r,t);return(new n.JavaScriptCompiler).compile(i,t)},Ht=function(e,t,n){void 0===t&&(t={});if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new Gt.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);"data"in(t=E({},t))||(t.data=!0);t.compat&&(t.useDepths=!0);var r=void 0;function i(){var r=n.parse(e,t),i=(new n.Compiler).compile(r,t),o=(new n.JavaScriptCompiler).compile(i,t,void 0,!0);return n.template(o)}function o(e,t){return r||(r=i()),r.call(this,e,t)}return o._setup=function(e){return r||(r=i()),r._setup(e)},o._child=function(e,t,n,o){return r||(r=i()),r._child(e,t,n,o)},o};var Gt=Kt(W),Jt=Kt(rt),Yt=[].slice;function Qt(){}function Xt(e,t){if(e===t)return!0;if(x(e)&&x(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}}function Zt(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}Qt.prototype={compiler:Qt,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||!Xt(r.args,i.args))return!1}t=this.children.length;for(n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=E(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++;return this.usePartial=this.usePartial||t.usePartial,this.children[n]=t,this.useDepths=this.useDepths||t.useDepths,n},accept:function(e){if(!this[e.type])throw new Gt.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var t=this[e.type](e);return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var t=e.body,n=t.length,r=0;r<n;r++)this.accept(t[r]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){Zt(e);var t=e.program,n=e.inverse;t=t&&this.compileProgram(t),n=n&&this.compileProgram(n);var r=this.classifySexpr(e);"helper"===r?this.helperSexpr(e,t,n):"simple"===r?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,n),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),n=this.setupFullMustacheParams(e,t,void 0),r=e.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,r.original)},PartialStatement:function(e){this.usePartial=!0;var t=e.program;t&&(t=this.compileProgram(e.program));var n=e.params;if(n.length>1)throw new Gt.default("Unsupported number of partial arguments: "+n.length,e);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var r=e.name.original,i="SubExpression"===e.name.type;i&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0);var o=e.indent||"";this.options.preventIndent&&o&&(this.opcode("appendContent",o),o=""),this.opcode("invokePartial",i,r,o),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){Zt(e);var t=this.classifySexpr(e);"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,n){var r=e.path,i=r.parts[0],o=null!=t||null!=n;this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",i,o)},simpleSexpr:function(e){var t=e.path;t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.path,o=i.parts[0];if(this.options.knownHelpers[o])this.opcode("invokeKnownHelper",r.length,o);else{if(this.options.knownHelpersOnly)throw new Gt.default("You specified knownHelpersOnly, but used the unknown helper "+o,e);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",r.length,i.original,Jt.default.helpers.simpleId(i))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0],n=Jt.default.helpers.scopedId(e),r=!e.depth&&!n&&this.blockParamIndex(t);r?this.opcode("lookupBlockParam",r,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,n):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,n=0,r=t.length;for(this.opcode("pushHash");n<r;n++)this.pushParam(t[n].value);for(;n--;)this.opcode("assignToHash",t[n].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:Yt.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=Jt.default.helpers.simpleId(e.path),n=t&&!!this.blockParamIndex(e.path.parts[0]),r=!n&&Jt.default.helpers.helperExpression(e),i=!n&&(r||t);if(i&&!r){var o=e.path.parts[0],s=this.options;s.knownHelpers[o]?r=!0:s.knownHelpersOnly&&(i=!1)}return r?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||"";if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e);else{if(this.trackIds){var n=void 0;if(!e.parts||Jt.default.helpers.scopedId(e)||e.depth||(n=this.blockParamIndex(e.parts[0])),n){var r=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,r)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,n,r){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.accept(e.hash):this.opcode("emptyHash",r),i},blockParamIndex:function(e){for(var t=0,n=this.options.blockParams.length;t<n;t++){var r=this.options.blockParams[t],i=r&&C(r,e);if(r&&i>=0)return[t,i]}}};var en={};function tn(e){return e&&e.__esModule?e:{default:e}}en.__esModule=!0;var nn=tn(W),rn={__esModule:!0},on=void 0;try{if("function"!=typeof define||!define.amd){var sn=o("9QQ9J");on=sn.SourceNode}}catch(e){}function an(e,t,n){if(x(e)){for(var r=[],i=0,o=e.length;i<o;i++)r.push(t.wrap(e[i],n));return r}return"boolean"==typeof e||"number"==typeof e?e+"":e}function un(e){this.srcFile=e,this.source=[]}on||((on=function(e,t,n,r){this.src="",r&&this.add(r)}).prototype={add:function(e){x(e)&&(e=e.join("")),this.src+=e},prepend:function(e){x(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),un.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty();return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,n=this.source.length;t<n;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}};return new on(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return e instanceof on?e:(e=an(e,this,t),new on(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,n){return n=this.generateList(n),this.wrap([e,t?"."+t+"(":"(",n,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,n=[];Object.keys(e).forEach((function(r){var i=an(e[r],t);"undefined"!==i&&n.push([t.quotedString(r),":",i])}));var r=this.generateList(n);return r.prepend("{"),r.add("}"),r},generateList:function(e){for(var t=this.empty(),n=0,r=e.length;n<r;n++)n&&t.add(","),t.add(an(e[n],this));return t},generateArray:function(e){var t=this.generateList(e);return t.prepend("["),t.add("]"),t}},rn.default=un;var cn=tn(rn=rn.default);function ln(e){this.value=e}function hn(){}hn.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){return[g,_[g]]},appendToBuffer:function(e,t,n){return x(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:n?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,n,r){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var i=e.opcodes,o=void 0,s=void 0,a=void 0,u=void 0;for(a=0,u=i.length;a<u;a++)o=i[a],this.source.currentLocation=o.loc,s=s||o.loc,this[o.opcode].apply(this,o.args);if(this.source.currentLocation=s,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new nn.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var c=this.createFunctionContext(r);if(this.isChild)return c;var l={compiler:this.compilerInfo(),main:c};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var h=this.context,f=h.programs,d=h.decorators;for(a=0,u=f.length;a<u;a++)f[a]&&(l[a]=f[a],d[a]&&(l[a+"_d"]=d[a],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),r?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),t.srcName?(l=l.toStringWithSourceMap({file:t.destName})).map=l.map&&l.map.toString():l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new cn.default(this.options.srcName),this.decorators=new cn.default(this.options.srcName)},createFunctionContext:function(e){var t=this,n="",r=this.stackVars.concat(this.registers.list);r.length>0&&(n+=", "+r.join(", "));var i=0;Object.keys(this.aliases).forEach((function(e){var r=t.aliases[e];r.children&&r.referenceCount>1&&(n+=", alias"+ ++i+"="+e,r.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var o=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&o.push("blockParams"),this.useDepths&&o.push("depths");var s=this.mergeSource(n);return e?(o.push(s),Function.apply(this,o)):this.source.wrap(["function(",o.join(","),") {\n  ",s,"}"])},mergeSource:function(e){var t=this.environment.isSimple,n=!this.forceBuffer,r=void 0,i=void 0,o=void 0,s=void 0;return this.source.each((function(e){e.appendToBuffer?(o?e.prepend("  + "):o=e,s=e):(o&&(i?o.prepend("buffer += "):r=!0,s.add(";"),o=s=void 0),i=!0,t||(n=!1))})),n?o?(o.prepend("return "),s.add(";")):i||this.source.push('return "";'):(e+=", buffer = "+(r?"":this.initializeBuffer()),o?(o.prepend("return buffer + "),s.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(r?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(e,0,n);var r=this.popStack();n.splice(1,0,r),this.push(this.source.functionCall(t,"call",n))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs("",0,t,!0),this.flushInline();var n=this.topStack();t.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n,r){var i=0;r||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[i++])),this.resolvePath("context",e,i,t,n)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,n){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,n)},resolvePath:function(e,t,n,r,i){var o=this;if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,n,r){var i=t.popStack(),o=0,s=n.length;e&&s--;for(;o<s;o++)i=t.nameLookup(i,n[o],r);return e?[t.aliasable("container.strict"),"(",i,", ",t.quotedString(n[o]),", ",JSON.stringify(t.source.currentLocation)," )"]:i}(this.options.strict&&i,this,t,e));else for(var s=t.length;n<s;n++)this.replaceStack((function(i){var s=o.nameLookup(i,t[n],e);return r?[" && ",s]:[" != null ? ",s," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var n=this.nameLookup("decorators",t,"decorator"),r=this.setupHelperArgs(t,e);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(e,t,n){var r=this.popStack(),i=this.setupHelper(e,t),o=[];n&&o.push(i.name),o.push(r),this.options.strict||o.push(this.aliasable("container.hooks.helperMissing"));var s=["(",this.itemsSeparatedBy(o,"||"),")"],a=this.source.functionCall(s,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(e,t){var n=[];n.push(e[0]);for(var r=1;r<e.length;r++)n.push(t,e[r]);return n},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,t),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(e,t,n){var r=[],i=this.setupParams(t,1,r);e&&(t=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",e?r.unshift(t):r.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),r.push(i),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(e){var t=this.popStack(),n=void 0,r=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var o=this.hash;n&&(o.contexts[e]=n),r&&(o.types[e]=r),i&&(o.ids[e]=i),o.values[e]=t},pushId:function(e,t,n){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:hn,compileChildren:function(e,t){for(var n=e.children,r=void 0,i=void 0,o=0,s=n.length;o<s;o++){r=n[o],i=new this.compiler;var a=this.matchExistingProgram(r);if(null==a){this.context.programs.push("");var u=this.context.programs.length;r.index=u,r.name="program"+u,this.context.programs[u]=i.compile(r,t,this.context,!this.precompile),this.context.decorators[u]=i.decorators,this.context.environments[u]=r,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=a.index,r.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e))return r}},programExpression:function(e){var t=this.environment.children[e],n=[t.index,"data",t.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof ln||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new ln(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],n=void 0,r=void 0,i=void 0;if(!this.isInline())throw new nn.default("replaceStack on non-inline");var o=this.popStack(!0);if(o instanceof ln)t=["(",n=[o.value]],i=!0;else{r=!0;var s=this.incrStack();t=["((",this.push(s)," = ",o,")"],n=this.topStack()}var a=e.call(this,n);i||this.popStack(),r&&this.stackSlot--,this.push(t.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof ln)this.compileStack.push(r);else{var i=this.incrStack();this.pushSource([i," = ",r,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof ln)return n.value;if(!t){if(!this.stackSlot)throw new nn.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof ln?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e];return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,n){var r=[];return{params:r,paramsInit:this.setupHelperArgs(t,e,r,n),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(r)}},setupParams:function(e,t,n){var r={},i=[],o=[],s=[],a=!n,u=void 0;a&&(n=[]),r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var c=this.popStack(),l=this.popStack();(l||c)&&(r.fn=l||"container.noop",r.inverse=c||"container.noop");for(var h=t;h--;)u=this.popStack(),n[h]=u,this.trackIds&&(s[h]=this.popStack()),this.stringParams&&(o[h]=this.popStack(),i[h]=this.popStack());return a&&(r.args=this.source.generateArray(n)),this.trackIds&&(r.ids=this.source.generateArray(s)),this.stringParams&&(r.types=this.source.generateArray(o),r.contexts=this.source.generateArray(i)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(e,t,n,r){var i=this.setupParams(e,t,n);return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),r?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=hn.RESERVED_WORDS={},n=0,r=e.length;n<r;n++)t[e[n]]=!0}(),hn.isValidJavaScriptVariableName=function(e){return!hn.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},en.default=hn;var fn=u(en=en.default),dn=u(pt),pn=u(Xe),gn=nt.default.create;function mn(){var e=gn();return e.compile=function(t,n){return Ht(t,n,e)},e.precompile=function(t,n){return Wt(t,n,e)},e.AST=ut.default,e.Compiler=qt,e.JavaScriptCompiler=fn.default,e.Parser=at,e.parse=st,e.parseWithoutProcessing=ot,e}var _n=mn();_n.create=mn,pn.default(_n),_n.Visitor=dn.default,_n.default=_n,a.default=_n;var vn,yn,bn=(a=a.default).default;vn=function(e){return(new kn).accept(e)},yn=kn;var wn=function(e){return e&&e.__esModule?e:{default:e}}(pt);function kn(){this.padding=0}kn.prototype=new wn.default,kn.prototype.pad=function(e){for(var t="",n=0,r=this.padding;n<r;n++)t+="  ";return t+=e+"\n"},kn.prototype.Program=function(e){var t="",n=e.body,r=void 0,i=void 0;if(e.blockParams){var o="BLOCK PARAMS: [";for(r=0,i=e.blockParams.length;r<i;r++)o+=" "+e.blockParams[r];o+=" ]",t+=this.pad(o)}for(r=0,i=n.length;r<i;r++)t+=this.accept(n[r]);return this.padding--,t},kn.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},kn.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},kn.prototype.BlockStatement=kn.prototype.DecoratorBlock=function(e){var t="";return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},kn.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},kn.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},kn.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},kn.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},kn.prototype.SubExpression=function(e){for(var t,n=e.params,r=[],i=0,o=n.length;i<o;i++)r.push(this.accept(n[i]));return n="["+r.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+n+t},kn.prototype.PathExpression=function(e){var t=e.parts.join("/");return(e.data?"@":"")+"PATH:"+t},kn.prototype.StringLiteral=function(e){return'"'+e.value+'"'},kn.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},kn.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},kn.prototype.UndefinedLiteral=function(){return"UNDEFINED"},kn.prototype.NullLiteral=function(){return"NULL"},kn.prototype.Hash=function(e){for(var t=e.pairs,n=[],r=0,i=t.length;r<i;r++)n.push(this.accept(t[r]));return"HASH{"+n.join(", ")+"}"},kn.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)},bn.PrintVisitor=yn,bn.print=vn;var Sn=n(s=bn).template({1:function(e,t,n,r,i){var o=e.lambda,s=e.escapeExpression;return"  <li class='hero__item hero__item--"+s(o(t,t))+"'>\n    <a href='#' class='hero__link'>"+s(o(t,t))+"</a></li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=s(n,"each").call(null!=t?t:e.nullContext||{},null!=t?s(t,"letter"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:4,column:9}}}))?o:""},useData:!0});var En=n(s).template({1:function(e,t,n,r,i){var o=e.lambda,s=e.escapeExpression;return"  <option class='option' value='"+s(o(t,t))+"'>"+s(o(t,t))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(o=s(n,"each").call(null!=t?t:e.nullContext||{},null!=t?s(t,"letter"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?o:""},useData:!0});const Cn={heroList:document.querySelector(".hero__list"),heroSelect:document.querySelector(".hero__select")},{heroList:In,heroSelect:Tn}=Cn,Pn={letter:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]};function Rn(e,t,n){const r=n(e);return t.insertAdjacentHTML("beforeend",r)}Rn(Pn,Tn,En),Rn(Pn,In,Sn),(()=>{const e={backdrop:document.querySelector("[data-modal]"),closeBtn:document.querySelector("[data-modal-close]")};e.closeBtn.addEventListener("click",(function(){e.backdrop.classList.add("is-hidden-modal-coctails")}))})(),(()=>{const e={backdrop:document.querySelector("[data-modal-2]"),closeBtn:document.querySelector("[data-modal-close-2]")};e.closeBtn.addEventListener("click",(function(){e.backdrop.classList.add("is-hidden-modal-two")}))})();(()=>{const e={removBtn:document.querySelector("[data-modal-b]"),addBtn:document.querySelector("[data-modal-a]")};e.addBtn.addEventListener("click",(function(){e.removBtn.classList.remove("hidden_remove")}))})(),(()=>{const e={removBtn:document.querySelector("[data-modal-d]"),addBtn:document.querySelector("[data-modal-c]")};e.addBtn.addEventListener("click",(function(){e.removBtn.classList.remove("hidden-components-modal")}))})();var An=n(s).template({1:function(e,t,n,r,i){var o,s=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,u="function",c=e.escapeExpression,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="team__item">\n <a href="'+c(typeof(o=null!=(o=l(n,"git")||(null!=t?l(t,"git"):t))?o:a)===u?o.call(s,{name:"git",hash:{},data:i,loc:{start:{line:5,column:10},end:{line:5,column:17}}}):o)+'" target="_blank" class="team__link">\n      <img class="team__image" src="'+c(typeof(o=null!=(o=l(n,"photo")||(null!=t?l(t,"photo"):t))?o:a)===u?o.call(s,{name:"photo",hash:{},data:i,loc:{start:{line:6,column:36},end:{line:6,column:45}}}):o)+'"/>\n      <div class="team-meta">\n        <p class="team__item-text">'+c(typeof(o=null!=(o=l(n,"role")||(null!=t?l(t,"role"):t))?o:a)===u?o.call(s,{name:"role",hash:{},data:i,loc:{start:{line:8,column:35},end:{line:8,column:43}}}):o)+'</p>\n          <p class="team__item-title">'+c(typeof(o=null!=(o=l(n,"name")||(null!=t?l(t,"name"):t))?o:a)===u?o.call(s,{name:"name",hash:{},data:i,loc:{start:{line:9,column:38},end:{line:9,column:46}}}):o)+"</p>\n  </div>\n </a>\n</div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var o;return'<div class="modal-team"> \n<div class="team__container">\n'+(null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:3,column:0},end:{line:13,column:9}}}))?o:"")+"</div>\n</div> "},useData:!0});const On={teamContainer:document.querySelector(".team__container")};!function(e){const t=An(e);On.teamContainer.innerHTML=t}([{git:"https://github.com/Mitya-Kupriianov/",photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"Вовк Андр",role:"TeamLead"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"не не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"не Вовк и не Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"}]);const Nn={footerOpenBtn:document.querySelector("[data-modal-team-open]"),footerCloseBtn:document.querySelector("[data-modal-team-close]"),teamContainer:document.querySelector(".team__container"),modal:document.querySelector("[data-modal-team]")};function xn(e){e.preventDefault(),document.body.classList.toggle("modal-open"),Nn.modal.classList.toggle("is-hidden")}Nn.footerOpenBtn.addEventListener("click",xn),Nn.footerCloseBtn.addEventListener("click",xn),document.addEventListener("keydown",(function(e){"Escape"===e.key&&Nn.modal.classList.add("is-hidden")}));const Ln={buttonLogin:document.querySelector(".js-btn-login")};document.querySelector(".menu__header-js").addEventListener("click",(()=>{document.querySelector(".menu__wrap ").classList.toggle("menu__wrap-close")}));var Mn,Dn={};"undefined"!=typeof self&&self,Mn=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.js")}({"./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! no static exports found */function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.IS_BROWSER=void 0;var i="undefined"!=typeof window;t.IS_BROWSER=i;var o=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i){t=Object.assign({},{bottom:"32px",right:"32px",left:"unset",time:"0.3s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#100f2c",buttonColorLight:"#fff",label:"",saveInCookies:!0,autoMatchOsTheme:!0},t);var n="\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(t.mixColor,";\n        transition: all ").concat(t.time," ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(t.right,";\n        bottom: ").concat(t.bottom,";\n        left: ").concat(t.left,";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(t.buttonColorDark,";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(t.right,";\n        bottom: ").concat(t.bottom,";\n        left: ").concat(t.left,";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(t.buttonColorLight,";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(t.backgroundColor,";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    "),r=document.createElement("div"),o=document.createElement("button"),s=document.createElement("div");o.innerHTML=t.label,o.classList.add("darkmode-toggle--inactive"),r.classList.add("darkmode-layer"),s.classList.add("darkmode-background");var a="true"===window.localStorage.getItem("darkmode"),u=t.autoMatchOsTheme&&window.matchMedia("(prefers-color-scheme: dark)").matches,c=null===window.localStorage.getItem("darkmode");(!0===a&&t.saveInCookies||c&&u)&&(r.classList.add("darkmode-layer--expanded","darkmode-layer--simple","darkmode-layer--no-transition"),o.classList.add("darkmode-toggle--white"),document.body.classList.add("darkmode--activated")),document.body.insertBefore(o,document.body.firstChild),document.body.insertBefore(r,document.body.firstChild),document.body.insertBefore(s,document.body.firstChild),this.addStyle(n),this.button=o,this.layer=r,this.saveInCookies=t.saveInCookies,this.time=t.time}}var t,n,o;return t=e,(n=[{key:"addStyle",value:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),document.head.appendChild(t)}},{key:"showWidget",value:function(){var e=this;if(i){var t=this.button,n=this.layer,r=1e3*parseFloat(this.time);t.classList.add("darkmode-toggle"),t.classList.remove("darkmode-toggle--inactive"),t.setAttribute("aria-label","Activate dark mode"),t.setAttribute("aria-checked","false"),t.setAttribute("role","checkbox"),n.classList.add("darkmode-layer--button"),t.addEventListener("click",(function(){var i=e.isActivated();i?(n.classList.remove("darkmode-layer--simple"),t.setAttribute("disabled",!0),setTimeout((function(){n.classList.remove("darkmode-layer--no-transition"),n.classList.remove("darkmode-layer--expanded"),t.removeAttribute("disabled")}),1)):(n.classList.add("darkmode-layer--expanded"),t.setAttribute("disabled",!0),setTimeout((function(){n.classList.add("darkmode-layer--no-transition"),n.classList.add("darkmode-layer--simple"),t.removeAttribute("disabled")}),r)),t.classList.toggle("darkmode-toggle--white"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!i)}))}}},{key:"toggle",value:function(){if(i){var e=this.layer,t=this.isActivated(),n=this.button;e.classList.toggle("darkmode-layer--simple"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!t),n.setAttribute("aria-label","De-activate dark mode"),n.setAttribute("aria-checked","true")}}},{key:"isActivated",value:function(){return i?document.body.classList.contains("darkmode--activated"):null}}])&&r(t.prototype,n),o&&r(t,o),e}();t.default=o},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(/*! ./darkmode */"./src/darkmode.js")),i=r.default;t.default=i,r.IS_BROWSER&&(window.Darkmode=r.default),e.exports=t.default}})},(new(n(Dn=Mn()))).showWidget();const Bn={bottom:"100",right:"32px",left:"0",time:"0.7s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#414141",buttonColorLight:"#fff",saveInCookies:!1,label:"🚀",autoMatchOsTheme:!0};console.log(Bn);new(n(Dn))(Bn).showWidget();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un=!1,jn=!1,Fn="${JSCORE_VERSION}",$n=function(e,t){if(!e)throw qn(t)},qn=function(e){return new Error("Firebase Database ("+Fn+") INTERNAL ASSERT FAILED: "+e)},Wn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,u=a?e[t+2]:0,c=i>>2,l=(3&i)<<4|s>>4;let h=(15&s)<<2|u>>6,f=63&u;a||(f=64,o||(h=64)),r.push(n[c],n[l],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==s||null==a)throw Error();const u=i<<2|o>>4;if(r.push(u),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},zn=function(e){const t=Wn(e);return Hn.encodeByteArray(t,!0)},Vn=function(e){return zn(e).replace(/\./g,"")},Kn=function(e){try{return Hn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gn(e){return Jn(void 0,e)}function Jn(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Jn(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Xn(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qn())}function Zn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function er(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function tr(){const e=Qn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function nr(){return!0===Un||!0===jn}class rr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(or,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new rr(r,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const or=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){return JSON.parse(e)}function ar(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=sr(Kn(o[0])||""),n=sr(Kn(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},cr=function(e){const t=ur(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},lr=function(e){const t=ur(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function fr(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function dr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function pr(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function gr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(mr(n)&&mr(o)){if(!gr(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function mr(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _r(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function vr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function yr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],u=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=u^s&(a^u),i=1518500249):(r=s^a^u,i=1859775393):e<60?(r=s&a|u&(s|a),i=2400959708):(r=s^a^u,i=3395469782);const t=(o<<5|o>>>27)+r+c+i+n[e]&4294967295;c=u,u=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function wr(e,t){const n=new kr(e,t);return n.subscribe.bind(n)}class kr{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Sr),void 0===r.error&&(r.error=Sr),void 0===r.complete&&(r.complete=Sr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Sr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cr=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,$n(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ir=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tr(e){return e&&e._delegate?e._delegate:e}class Pr{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Yn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Ar{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=[];var Nr,xr;(xr=Nr||(Nr={}))[xr.DEBUG=0]="DEBUG",xr[xr.VERBOSE=1]="VERBOSE",xr[xr.INFO=2]="INFO",xr[xr.WARN=3]="WARN",xr[xr.ERROR=4]="ERROR",xr[xr.SILENT=5]="SILENT";const Lr={debug:Nr.DEBUG,verbose:Nr.VERBOSE,info:Nr.INFO,warn:Nr.WARN,error:Nr.ERROR,silent:Nr.SILENT},Mr=Nr.INFO,Dr={[Nr.DEBUG]:"log",[Nr.VERBOSE]:"log",[Nr.INFO]:"info",[Nr.WARN]:"warn",[Nr.ERROR]:"error"},Br=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Dr[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Ur{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Lr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nr.DEBUG,...e),this._logHandler(this,Nr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nr.VERBOSE,...e),this._logHandler(this,Nr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nr.INFO,...e),this._logHandler(this,Nr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nr.WARN,...e),this._logHandler(this,Nr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nr.ERROR,...e),this._logHandler(this,Nr.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Mr,this._logHandler=Br,this._userLogHandler=null,Or.push(this)}}let jr,Fr;const $r=new WeakMap,qr=new WeakMap,Wr=new WeakMap,Hr=new WeakMap,zr=new WeakMap;let Vr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return qr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Wr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Kr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fr||(Fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Yr(this),t),Jr($r.get(this))}:function(...t){return Jr(e.apply(Yr(this),t))}:function(t,...n){const r=e.call(Yr(this),t,...n);return Wr.set(r,t.sort?t.sort():[t]),Jr(r)}}function Gr(e){return"function"==typeof e?Kr(e):(e instanceof IDBTransaction&&function(e){if(qr.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));qr.set(e,t)}(e),t=e,(jr||(jr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Vr):e);var t}function Jr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Jr(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&$r.set(t,e)})).catch((()=>{})),zr.set(t,e),t}(e);if(Hr.has(e))return Hr.get(e);const t=Gr(e);return t!==e&&(Hr.set(e,t),zr.set(t,e)),t}const Yr=e=>zr.get(e);function Qr(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Jr(s);return r&&s.addEventListener("upgradeneeded",(e=>{r(Jr(s.result),e.oldVersion,e.newVersion,Jr(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Xr=["get","getKey","getAll","getAllKeys","count"],Zr=["put","add","delete","clear"],ei=new Map;function ti(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ei.get(t))return ei.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Zr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Xr.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),i&&o.done]))[0]};return ei.set(t,o),o}Vr=(e=>({...e,get:(t,n,r)=>ti(t,n)||e.get(t,n,r),has:(t,n)=>!!ti(t,n)||e.has(t,n)}))(Vr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ni{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ri=new Ur("@firebase/app"),ii={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},oi=new Map,si=new Map;function ai(e,t){try{e.container.addComponent(t)}catch(n){ri.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ui(e){const t=e.name;if(si.has(t))return ri.debug(`There were multiple attempts to register component ${t}.`),!1;si.set(t,e);for(const t of oi.values())ai(t,e);return!0}function ci(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const li=new ir("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Pr("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e="[DEFAULT]"){const t=oi.get(e);if(!t)throw li.create("no-app",{appName:e});return t}function di(e,t,n){var r;let i=null!==(r=ii[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ri.warn(e.join(" "))}ui(new Pr(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let pi=null;function gi(){return pi||(pi=Qr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw li.create("idb-open",{originalErrorMessage:e.message})}))),pi}async function mi(e,t){var n;try{const n=(await gi()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,_i(e)),n.done}catch(e){if(e instanceof rr)ri.warn(e.message);else{const t=li.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});ri.warn(t.message)}}}function _i(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=yi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=yi(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),wi(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Vn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bi(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function yi(){return(new Date).toISOString().substring(0,10)}class bi{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await gi()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(_i(e))}catch(e){if(e instanceof rr)ri.warn(e.message);else{const n=li.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});ri.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return mi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return mi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function wi(e){return Vn(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ki;ki="",ui(new Pr("platform-logger",(e=>new ni(e)),"PRIVATE")),ui(new Pr("heartbeat",(e=>new vi(e)),"PRIVATE")),di("@firebase/app","0.7.30",ki),di("@firebase/app","0.7.30","esm2017"),di("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
di("firebase","9.9.2","app");var Si=o("4TNnu");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ar(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:sr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return hr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ci(t)}}catch(e){}return new Ii},Pi=Ti("localStorage"),Ri=Ti("sessionStorage"),Ai=new Ur("@firebase/database"),Oi=function(){let e=1;return function(){return e++}}(),Ni=function(e){const t=Cr(e),n=new br;n.update(t);const r=n.digest();return Hn.encodeByteArray(r)},xi=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=xi.apply(null,r):t+="object"==typeof r?ar(r):r,t+=" "}return t};let Li=null,Mi=!0;const Di=function(e,t){$n(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Ai.logLevel=Nr.VERBOSE,Li=Ai.log.bind(Ai),t&&Ri.set("logging_enabled",!0)):"function"==typeof e?Li=e:(Li=null,Ri.remove("logging_enabled"))},Bi=function(...e){if(!0===Mi&&(Mi=!1,null===Li&&!0===Ri.get("logging_enabled")&&Di(!0)),Li){const t=xi.apply(null,e);Li(t)}},Ui=function(e){return function(...t){Bi(e,...t)}},ji=function(...e){const t="FIREBASE INTERNAL ERROR: "+xi(...e);Ai.error(t)},Fi=function(...e){const t=`FIREBASE FATAL ERROR: ${xi(...e)}`;throw Ai.error(t),new Error(t)},$i=function(...e){const t="FIREBASE WARNING: "+xi(...e);Ai.warn(t)},qi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Wi=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Qi(e),r=Qi(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Hi=function(e,t){return e===t?0:e<t?-1:1},zi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ar(t))},Vi=function(e){if("object"!=typeof e||null===e)return ar(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=ar(t[r]),n+=":",n+=Vi(e[t[r]]);return n+="}",n},Ki=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Gi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ji=function(e){$n(!qi(e),"Invalid JSON number");const t=1023;let n,r,i,o,s;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=o+t,i=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const u=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(u.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Yi=new RegExp("^-?(0*)\\d{1,10}$"),Qi=function(e){if(Yi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Xi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw $i("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Zi=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){$i(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Bi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$i(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class no{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}no.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ro=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pi.get("host:"+e)||this._host}}function oo(e,t,n){let r;if($n("string"==typeof t,"typeof type must == string"),$n("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Gi(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{incrementCounter(e,t=1){hr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Gn(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao={},uo={};function co(e){const t=e.toString();return ao[t]||(ao[t]=new so),ao[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Xi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new lo(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(nr()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new fo(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ro.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ho.forceAllow_=!0}static forceDisallow(){ho.forceDisallow_=!0}static isAvailable(){return!nr()&&(!!ho.forceAllow_||!(ho.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ar(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=zn(t),r=Ki(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(nr())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ar(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ui(e),this.stats_=co(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),oo(t,"long_polling",e))}}class fo{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Bi("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){nr()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Bi("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,nr())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Oi(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=fo.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){Bi("frame writing exception"),e.stack&&Bi(e.stack),Bi(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po=null;"undefined"!=typeof MozWebSocket?po=MozWebSocket:"undefined"!=typeof WebSocket&&(po=WebSocket);class go{static connectionURL_(e,t,n,r,i){const o={v:"5"};return!nr()&&"undefined"!=typeof location&&location.hostname&&ro.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),r&&(o.ac=r),i&&(o.p=i),oo(e,"websocket",o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pi.set("previous_websocket_failure",!0);try{let e;if(nr()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Ei}/${Si.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new po(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){go.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==po&&!go.forceDisallow_}static previouslyFailed(){return Pi.isInMemoryStorage||!0===Pi.get("previous_websocket_failure")}markConnectionHealthy(){Pi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=sr(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($n(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ar(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ki(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ui(this.connId),this.stats_=co(t),this.connURL=go.connectionURL_(t,o,s,r,n),this.nodeAdmin=t.nodeAdmin}}go.responsesRequiredToBeHealthy=2,go.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{static get ALL_TRANSPORTS(){return[ho,go]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=go&&go.isAvailable();let n=t&&!go.previouslyFailed();if(e.webSocketOnly&&(t||$i("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[go];else{const e=this.transports_=[];for(const t of mo.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}mo.globalTransportInitialized_=!1;class _o{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Zi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zi("t",e),n=zi("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zi("t",e),n=zi("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zi("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ji("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ji("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&$i("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Zi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,r,i,o,s,a,u,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ui("c:"+this.id+":"),this.transportManager_=new mo(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){$n(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},$n(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends yo{static getInstance(){return new bo}getInitialEvent(e){return $n("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Xn()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function ko(){return new wo("")}function So(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Eo(e){return e.pieces_.length-e.pieceNum_}function Co(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new wo(e.pieces_,t)}function Io(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function To(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Po(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new wo(t,0)}function Ro(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof wo)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new wo(n,0)}function Ao(e){return e.pieceNum_>=e.pieces_.length}function Oo(e,t){const n=So(e),r=So(t);if(null===n)return t;if(n===r)return Oo(Co(e),Co(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function No(e,t){if(Eo(e)!==Eo(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function xo(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Eo(e)>Eo(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Lo{constructor(e,t){this.errorPrefix_=t,this.parts_=To(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ir(this.parts_[e]);Mo(this)}}function Mo(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Do(e))}function Do(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends yo{static getInstance(){return new Bo}getInitialEvent(e){return $n("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends vo{sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ar(i)),$n(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Yn,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$n(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$n(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const o=i.d,s=i.s;Uo.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&hr(e,"w")){const n=fr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();$i(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||lr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=cr(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),$n(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ar(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ji("Unrecognized action received from server: "+ar(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$n(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Uo.nextConnectionId_++,i=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},u=function(e){$n(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,u]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Bi("getToken() completed but was canceled"):(Bi("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=u&&u.token,s=new _o(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{$i(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&$i(e),a())}}}interrupt(e){Bi("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Bi("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dr(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Vi(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new wo(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Bi("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Bi("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";nr()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ei.replace(/\./g,"-")]=1,Xn()?e["framework.cordova"]=1:er()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return dr(this.interruptReasons_)&&e}constructor(e,t,n,r,i,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Uo.nextPersistentConnectionId_++,this.log_=Ui("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!nr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bo.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&bo.getInstance().on("online",this.onOnline_,this)}}Uo.nextPersistentConnectionId_=0,Uo.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{static Wrap(e,t){return new jo(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new jo("[MIN_NAME]",e),r=new jo("[MIN_NAME]",t);return 0!==this.compare(n,r)}minPost(){return jo.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class qo extends Fo{static get __EMPTY_NODE(){return $o}static set __EMPTY_NODE(e){$o=e}compare(e,t){return Wi(e.name,t.name)}isDefinedOn(e){throw qn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return jo.MIN}maxPost(){return new jo("[MAX_NAME]",$o)}makePost(e,t){return $n("string"==typeof e,"KeyIndex indexValue must always be a string."),new jo(e,$o)}toString(){return".key"}}const Wo=new qo;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class zo{copy(e,t,n,r,i){return new zo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vo.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Vo.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:zo.RED,this.left=null!=r?r:Vo.EMPTY_NODE,this.right=null!=i?i:Vo.EMPTY_NODE}}zo.RED=!0,zo.BLACK=!1;class Vo{insert(e,t){return new Vo(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zo.BLACK,null,null))}remove(e){return new Vo(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zo.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ho(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ho(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ho(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Vo.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ko(e,t){return Wi(e.name,t.name)}function Go(e,t){return Wi(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;Vo.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new zo(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Yo=function(e){return"number"==typeof e?"number:"+Ji(e):"string:"+e},Qo=function(e){if(e.isLeafNode()){const t=e.val();$n("string"==typeof t||"number"==typeof t||"object"==typeof t&&hr(t,".sv"),"Priority must be a string or number.")}else $n(e===Jo||e.isEmpty(),"priority of unexpected type.");$n(e===Jo||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xo,Zo,es;class ts{static set __childrenNodeConstructor(e){Xo=e}static get __childrenNodeConstructor(){return Xo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ts(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ts.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ao(e)?this:".priority"===So(e)?this.priorityNode_:ts.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ts.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=So(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:($n(".priority"!==n||1===Eo(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ts.__childrenNodeConstructor.EMPTY_NODE.updateChild(Co(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ji(this.value_):this.value_,this.lazyHash_=Ni(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ts.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ts.__childrenNodeConstructor?-1:($n(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=ts.VALUE_TYPE_ORDER.indexOf(t),i=ts.VALUE_TYPE_ORDER.indexOf(n);return $n(r>=0,"Unknown leaf type: "+t),$n(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=ts.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,$n(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qo(this.priorityNode_)}}ts.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ns=new class extends Fo{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Wi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return jo.MIN}maxPost(){return new jo("[MAX_NAME]",new ts("[PRIORITY-POST]",es))}makePost(e,t){const n=Zo(e);return new jo(t,new ts("[PRIORITY-POST]",n))}toString(){return".priority"}},rs=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/rs,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}}const os=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new zo(a,s.node,zo.BLACK,null,null);{const u=parseInt(o/2,10)+t,c=i(t,u),l=i(u+1,r);return s=e[u],a=n?n(s):s,new zo(a,s.node,zo.BLACK,c,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const c=i(o+1,a),l=e[o],h=n?n(l):l;u(new zo(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,zo.BLACK):(a(r,zo.BLACK),a(r,zo.RED))}return o}(new is(e.length));return new Vo(r||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;const as={};class us{static get Default(){return $n(as&&ns,"ChildrenNode.ts has not been loaded"),ss=ss||new us({".priority":as},{".priority":ns}),ss}get(e){const t=fr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vo?t:null}hasIndex(e){return hr(this.indexSet_,e.toString())}addIndex(e,t){$n(e!==Wo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(jo.Wrap);let o,s=i.getNext();for(;s;)r=r||e.isDefinedOn(s.node),n.push(s),s=i.getNext();o=r?os(n,e.getCompare()):as;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=o,new us(c,u)}addToIndexes(e,t){const n=pr(this.indexes_,((n,r)=>{const i=fr(this.indexSet_,r);if($n(i,"Missing index implementation for "+r),n===as){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(jo.Wrap);let o=r.getNext();for(;o;)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),os(n,i.getCompare())}return as}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new jo(e.name,r))),i.insert(e,e.node)}}));return new us(n,this.indexSet_)}removeFromIndexes(e,t){const n=pr(this.indexes_,(n=>{if(n===as)return n;{const r=t.get(e.name);return r?n.remove(new jo(e.name,r)):n}}));return new us(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs;class ls{static get EMPTY_NODE(){return cs||(cs=new ls(new Vo(Go),null,us.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cs}updatePriority(e){return this.children_.isEmpty()?this:new ls(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?cs:t}}getChild(e){const t=So(e);return null===t?this:this.getImmediateChild(t).getChild(Co(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if($n(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new jo(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?cs:this.priorityNode_;return new ls(r,o,i)}}updateChild(e,t){const n=So(e);if(null===n)return t;{$n(".priority"!==So(e)||1===Eo(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Co(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(ns,((o,s)=>{t[o]=s.val(e),n++,i&&ls.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yo(this.getPriority().val())+":"),this.forEachChild(ns,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Ni(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new jo(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new jo(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new jo(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,jo.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,jo.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hs?-1:0}withIndex(e){if(e===Wo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ls(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Wo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ns),n=t.getIterator(ns);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Wo?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qo(this.priorityNode_),this.children_.isEmpty()&&$n(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}ls.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const hs=new class extends ls{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ls.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Vo(Go),ls.EMPTY_NODE,us.Default)}};Object.defineProperties(jo,{MIN:{value:new jo("[MIN_NAME]",ls.EMPTY_NODE)},MAX:{value:new jo("[MAX_NAME]",hs)}}),qo.__EMPTY_NODE=ls.EMPTY_NODE,ts.__childrenNodeConstructor=ls,Jo=hs,function(e){es=e}(hs);function fs(e,t=null){if(null===e)return ls.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),$n(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ts(e,fs(t))}if(e instanceof Array){let n=ls.EMPTY_NODE;return Gi(e,((t,r)=>{if(hr(e,t)&&"."!==t.substring(0,1)){const e=fs(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(fs(t))}{const n=[];let r=!1;if(Gi(e,((e,t)=>{if("."!==e.substring(0,1)){const i=fs(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new jo(e,i)))}})),0===n.length)return ls.EMPTY_NODE;const i=os(n,Ko,(e=>e.name),Go);if(r){const e=os(n,ns.getCompare());return new ls(i,fs(t),new us({".priority":e},{".priority":ns}))}return new ls(i,fs(t),us.Default)}}!function(e){Zo=e}(fs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds extends Fo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Wi(e.name,t.name):i}makePost(e,t){const n=fs(e),r=ls.EMPTY_NODE.updateChild(this.indexPath_,n);return new jo(t,r)}maxPost(){const e=ls.EMPTY_NODE.updateChild(this.indexPath_,hs);return new jo("[MAX_NAME]",e)}toString(){return To(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,$n(!Ao(e)&&".priority"!==So(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new class extends Fo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Wi(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return jo.MIN}maxPost(){return jo.MAX}makePost(e,t){const n=fs(e);return new jo(t,n)}toString(){return".value"}},gs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ms(e){return{type:"value",snapshotNode:e}}function _s(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function vs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ys(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return $n(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $n(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return $n(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $n(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return $n(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ns}copy(){const e=new bs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ns}}function ws(e){const t={};if(e.isDefault())return t;let n;return e.index_===ns?n="$priority":e.index_===ps?n="$value":e.index_===Wo?n="$key":($n(e.index_ instanceof ds,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ar(n),e.startSet_&&(t.startAt=ar(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ar(e.indexStartName_))),e.endSet_&&(t.endAt=ar(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ar(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ks(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ns&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends vo{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:($n(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ss.getListenId_(e,n),s={};this.listens_[o]=s;const a=ws(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),fr(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Ss.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ws(e._queryParams),n=e._path.toString(),r=new Yn;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_r(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=sr(s.responseText)}catch(e){$i("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&$i("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ui("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=ls.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(){return{value:null,children:new Map}}function Is(e,t,n){if(Ao(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=So(t);e.children.has(r)||e.children.set(r,Cs());Is(e.children.get(r),t=Co(t),n)}}function Ts(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{Ts(r,new wo(t.toString()+"/"+e),n)}))}class Ps{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Gi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Gi(e,((e,r)=>{r>0&&hr(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Zi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ps(e);const n=1e4+2e4*Math.random();Zi(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var As,Os;function Ns(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Os=As||(As={}))[Os.OVERWRITE=0]="OVERWRITE",Os[Os.MERGE=1]="MERGE",Os[Os.ACK_USER_WRITE=2]="ACK_USER_WRITE",Os[Os.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class xs{operationForChild(e){if(Ao(this.path)){if(null!=this.affectedTree.value)return $n(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new wo(e));return new xs(ko(),t,this.revert)}}return $n(So(this.path)===e,"operationForChild called for unrelated child."),new xs(Co(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=As.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{operationForChild(e){return Ao(this.path)?new Ls(this.source,ko(),this.snap.getImmediateChild(e)):new Ls(this.source,Co(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=As.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{operationForChild(e){if(Ao(this.path)){const t=this.children.subtree(new wo(e));return t.isEmpty()?null:t.value?new Ls(this.source,ko(),t.value):new Ms(this.source,ko(),t)}return $n(So(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ms(this.source,Co(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=As.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ao(e))return this.isFullyInitialized()&&!this.filtered_;const t=So(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw qn("Should only compare child_ events.");const r=new jo(t.childName,t.snapshotNode),i=new jo(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),s.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Us(e,t){return{eventCache:e,serverCache:t}}function js(e,t,n,r){return Us(new Ds(t,n,r),e.serverCache)}function Fs(e,t,n,r){return Us(e.eventCache,new Ds(t,n,r))}function $s(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function qs(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class Hs{static fromObject(e){let t=new Hs(null);return Gi(e,((e,n)=>{t=t.set(new wo(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ko(),value:this.value};if(Ao(e))return null;{const n=So(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Co(e),t);if(null!=i){return{path:Ro(new wo(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ao(e))return this;{const t=So(e),n=this.children.get(t);return null!==n?n.subtree(Co(e)):new Hs(null)}}set(e,t){if(Ao(e))return new Hs(t,this.children);{const n=So(e),r=(this.children.get(n)||new Hs(null)).set(Co(e),t),i=this.children.insert(n,r);return new Hs(this.value,i)}}remove(e){if(Ao(e))return this.children.isEmpty()?new Hs(null):new Hs(null,this.children);{const t=So(e),n=this.children.get(t);if(n){const r=n.remove(Co(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Hs(null):new Hs(this.value,i)}return this}}get(e){if(Ao(e))return this.value;{const t=So(e),n=this.children.get(t);return n?n.get(Co(e)):null}}setTree(e,t){if(Ao(e))return t;{const n=So(e),r=(this.children.get(n)||new Hs(null)).setTree(Co(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Hs(this.value,i)}}fold(e){return this.fold_(ko(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Ro(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ko(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Ao(e))return null;{const r=So(e),i=this.children.get(r);return i?i.findOnPath_(Co(e),Ro(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ko(),t)}foreachOnPath_(e,t,n){if(Ao(e))return this;{this.value&&n(t,this.value);const r=So(e),i=this.children.get(r);return i?i.foreachOnPath_(Co(e),Ro(t,r),n):new Hs(null)}}foreach(e){this.foreach_(ko(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Ro(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Ws||(Ws=new Vo(Hi)),Ws))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{static empty(){return new zs(new Hs(null))}constructor(e){this.writeTree_=e}}function Vs(e,t,n){if(Ao(t))return new zs(new Hs(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=Oo(i,t);return o=o.updateChild(s,n),new zs(e.writeTree_.set(i,o))}{const r=new Hs(n),i=e.writeTree_.setTree(t,r);return new zs(i)}}}function Ks(e,t,n){let r=e;return Gi(n,((e,n)=>{r=Vs(r,Ro(t,e),n)})),r}function Gs(e,t){if(Ao(t))return zs.empty();{const n=e.writeTree_.setTree(t,new Hs(null));return new zs(n)}}function Js(e,t){return null!=Ys(e,t)}function Ys(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Oo(n.path,t)):null}function Qs(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ns,((e,n)=>{t.push(new jo(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new jo(e,n.value))})),t}function Xs(e,t){if(Ao(t))return e;{const n=Ys(e,t);return new zs(null!=n?new Hs(n):e.writeTree_.subtree(t))}}function Zs(e){return e.writeTree_.isEmpty()}function ea(e,t){return ta(ko(),e.writeTree_,t)}function ta(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?($n(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=ta(Ro(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ro(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t){return ga(t,e)}function ra(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));$n(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&ia(t,r.path)?i=!1:xo(r.path,t.path)&&(o=!0)),s--}if(i){if(o)return function(e){e.visibleWrites=sa(e.allWrites,oa,ko()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Gs(e.visibleWrites,r.path);else{Gi(r.children,(t=>{e.visibleWrites=Gs(e.visibleWrites,Ro(r.path,t))}))}return!0}return!1}function ia(e,t){if(e.snap)return xo(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&xo(Ro(e.path,n),t))return!0;return!1}function oa(e){return e.visible}function sa(e,t,n){let r=zs.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)xo(n,e)?(t=Oo(n,e),r=Vs(r,t,o.snap)):xo(e,n)&&(t=Oo(e,n),r=Vs(r,ko(),o.snap.getChild(t)));else{if(!o.children)throw qn("WriteRecord should have .snap or .children");if(xo(n,e))t=Oo(n,e),r=Ks(r,t,o.children);else if(xo(e,n))if(t=Oo(e,n),Ao(t))r=Ks(r,ko(),o.children);else{const e=fr(o.children,So(t));if(e){const n=e.getChild(Co(t));r=Vs(r,ko(),n)}}}}}return r}function aa(e,t,n,r,i){if(r||i){const o=Xs(e.visibleWrites,t);if(!i&&Zs(o))return n;if(i||null!=n||Js(o,ko())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(xo(e.path,t)||xo(t,e.path))};return ea(sa(e.allWrites,o,t),n||ls.EMPTY_NODE)}return null}{const r=Ys(e.visibleWrites,t);if(null!=r)return r;{const r=Xs(e.visibleWrites,t);if(Zs(r))return n;if(null!=n||Js(r,ko())){return ea(r,n||ls.EMPTY_NODE)}return null}}}function ua(e,t,n,r){return aa(e.writeTree,e.treePath,t,n,r)}function ca(e,t){return function(e,t,n){let r=ls.EMPTY_NODE;const i=Ys(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ns,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Xs(e.visibleWrites,t);return n.forEachChild(ns,((e,t)=>{const n=ea(Xs(i,new wo(e)),t);r=r.updateImmediateChild(e,n)})),Qs(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Qs(Xs(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function la(e,t,n,r){return function(e,t,n,r,i){$n(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=Ro(t,n);if(Js(e.visibleWrites,o))return null;{const t=Xs(e.visibleWrites,o);return Zs(t)?i.getChild(n):ea(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function ha(e,t){return function(e,t){return Ys(e.visibleWrites,t)}(e.writeTree,Ro(e.treePath,t))}function fa(e,t,n,r,i,o){return function(e,t,n,r,i,o,s){let a;const u=Xs(e.visibleWrites,t),c=Ys(u,ko());if(null!=c)a=c;else{if(null==n)return[];a=ea(u,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let u=n.getNext();for(;u&&e.length<i;)0!==t(u,r)&&e.push(u),u=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,o)}function da(e,t,n){return function(e,t,n,r){const i=Ro(t,n),o=Ys(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n))return ea(Xs(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function pa(e,t){return ga(Ro(e.treePath,t),e.writeTree)}function ga(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{trackChildChange(e){const t=e.type,n=e.childName;$n("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),$n(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,ys(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,vs(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,_s(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw qn("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,ys(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class va{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ds(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return da(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:qs(this.viewCache_),i=fa(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e,t,n,r,i){const o=new ma;let s,a;if(n.type===As.OVERWRITE){const u=n;u.source.fromUser?s=ka(e,t,u.path,u.snap,r,i,o):($n(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Ao(u.path),s=wa(e,t,u.path,u.snap,r,i,a,o))}else if(n.type===As.MERGE){const u=n;u.source.fromUser?s=function(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,u)=>{const c=Ro(n,r);Sa(t,So(c))&&(a=ka(e,a,c,u,i,o,s))})),r.foreach(((r,u)=>{const c=Ro(n,r);Sa(t,So(c))||(a=ka(e,a,c,u,i,o,s))})),a}(e,t,u.path,u.children,r,i,o):($n(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),s=Ca(e,t,u.path,u.children,r,i,a,o))}else if(n.type===As.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,r,i,o){let s;if(null!=ha(r,n))return t;{const a=new va(r,t,i),u=t.eventCache.getNode();let c;if(Ao(n)||".priority"===So(n)){let n;if(t.serverCache.isFullyInitialized())n=ua(r,qs(t));else{const e=t.serverCache.getNode();$n(e instanceof ls,"serverChildren would be complete if leaf node"),n=ca(r,e)}c=e.filter.updateFullNode(u,n,o)}else{const i=So(n);let l=da(r,i,t.serverCache);null==l&&t.serverCache.isCompleteForChild(i)&&(l=u.getImmediateChild(i)),c=null!=l?e.filter.updateChild(u,i,l,Co(n),a,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,ls.EMPTY_NODE,Co(n),a,o):u,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=ua(r,qs(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=ha(r,ko()),js(t,c,s,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,r,i,o):function(e,t,n,r,i,o,s){if(null!=ha(i,n))return t;const a=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(Ao(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return wa(e,t,n,u.getNode().getChild(n),i,o,a,s);if(Ao(n)){let r=new Hs(null);return u.getNode().forEachChild(Wo,((e,t)=>{r=r.set(new wo(e),t)})),Ca(e,t,n,r,i,o,a,s)}return t}{let c=new Hs(null);return r.foreach(((e,t)=>{const r=Ro(n,e);u.isCompleteForPath(r)&&(c=c.set(e,u.getNode().getChild(r)))})),Ca(e,t,n,c,i,o,a,s)}}(e,t,a.path,a.affectedTree,r,i,o)}else{if(n.type!==As.LISTEN_COMPLETE)throw qn("Unknown operation type: "+n.type);s=function(e,t,n,r,i){const o=t.serverCache,s=Fs(t,o.getNode(),o.isFullyInitialized()||Ao(n),o.isFiltered());return ba(e,s,n,r,_a,i)}(e,t,n.path,r,o)}const u=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=$s(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(ms($s(t)))}}(t,s,u),{viewCache:s,changes:u}}function ba(e,t,n,r,i,o){const s=t.eventCache;if(null!=ha(r,n))return t;{let a,u;if(Ao(n))if($n(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=qs(t),i=ca(r,n instanceof ls?n:ls.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=ua(r,qs(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=So(n);if(".priority"===c){$n(1===Eo(n),"Can't have a priority with additional path components");const i=s.getNode();u=t.serverCache.getNode();const o=la(r,n,i,u);a=null!=o?e.filter.updatePriority(i,o):s.getNode()}else{const l=Co(n);let h;if(s.isCompleteForChild(c)){u=t.serverCache.getNode();const e=la(r,n,s.getNode(),u);h=null!=e?s.getNode().getImmediateChild(c).updateChild(l,e):s.getNode().getImmediateChild(c)}else h=da(r,c,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),c,h,l,i,o):s.getNode()}}return js(t,a,s.isFullyInitialized()||Ao(n),e.filter.filtersNodes())}}function wa(e,t,n,r,i,o,s,a){const u=t.serverCache;let c;const l=s?e.filter:e.filter.getIndexedFilter();if(Ao(n))c=l.updateFullNode(u.getNode(),r,null);else if(l.filtersNodes()&&!u.isFiltered()){const e=u.getNode().updateChild(n,r);c=l.updateFullNode(u.getNode(),e,null)}else{const e=So(n);if(!u.isCompleteForPath(n)&&Eo(n)>1)return t;const i=Co(n),o=u.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?l.updatePriority(u.getNode(),o):l.updateChild(u.getNode(),e,o,i,_a,null)}const h=Fs(t,c,u.isFullyInitialized()||Ao(n),l.filtersNodes());return ba(e,h,n,i,new va(i,h,o),a)}function ka(e,t,n,r,i,o,s){const a=t.eventCache;let u,c;const l=new va(i,t,o);if(Ao(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,s),u=js(t,c,!0,e.filter.filtersNodes());else{const i=So(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),u=js(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=Co(n),c=a.getNode().getImmediateChild(i);let h;if(Ao(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===Io(o)&&e.getChild(Po(o)).isEmpty()?e:e.updateChild(o,r):ls.EMPTY_NODE}if(c.equals(h))u=t;else{u=js(t,e.filter.updateChild(a.getNode(),i,h,o,l,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return u}function Sa(e,t){return e.eventCache.isCompleteForChild(t)}function Ea(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ca(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let u,c=t;u=Ao(n)?r:new Hs(null).setTree(n,r);const l=t.serverCache.getNode();return u.children.inorderTraversal(((n,r)=>{if(l.hasChild(n)){const u=Ea(0,t.serverCache.getNode().getImmediateChild(n),r);c=wa(e,c,new wo(n),u,i,o,s,a)}})),u.children.inorderTraversal(((n,r)=>{const u=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!u){const u=Ea(0,t.serverCache.getNode().getImmediateChild(n),r);c=wa(e,c,new wo(n),u,i,o,s,a)}})),c}function Ia(e,t){const n=qs(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ao(t)&&!n.getImmediateChild(So(t)).isEmpty())?n.getChild(t):null}function Ta(e,t,n,r){t.type===As.MERGE&&null!==t.source.queryId&&($n(qs(e.viewCache_),"We should always have a full cache before handling merges"),$n($s(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=ya(e.processor_,i,t,n,r);var s,a;return s=e.processor_,a=o.viewCache,$n(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),$n(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),$n(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Pa(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Pa(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],o=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Bs(e,i,"child_removed",t,r,n),Bs(e,i,"child_added",t,r,n),Bs(e,i,"child_moved",o,r,n),Bs(e,i,"child_changed",t,r,n),Bs(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra,Aa;function Oa(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return $n(null!=o,"SyncTree gave us an op for an invalid query."),Ta(o,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Ta(o,t,n,r));return i}}function Na(e,t){let n=null;for(const r of e.views.values())n=n||Ia(r,t);return n}class xa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Hs(null),this.pendingWriteTree_={visibleWrites:zs.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function La(e,t,n,r,i){return function(e,t,n,r,i){$n(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Vs(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?ja(e,new Ls({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ma(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(ra(e.pendingWriteTree_,t)){let t=new Hs(null);return null!=r.snap?t=t.set(ko(),!0):Gi(r.children,(e=>{t=t.set(new wo(e),!0)})),ja(e,new xs(r.path,t,n))}return[]}function Da(e,t,n){return ja(e,new Ls({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ba(e,t,n,r){const i=qa(e,r);if(null!=i){const r=Wa(i),o=r.path,s=r.queryId,a=Oo(o,t);return Ha(e,o,new Ls(Ns(s),a,n))}return[]}function Ua(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Na(n,Oo(e,t));if(r)return r}));return aa(r,t,i,n,!0)}function ja(e,t){return Fa(t,e.syncPointTree_,null,na(e.pendingWriteTree_,ko()))}function Fa(e,t,n,r){if(Ao(e.path))return $a(e,t,n,r);{const i=t.get(ko());null==n&&null!=i&&(n=Na(i,ko()));let o=[];const s=So(e.path),a=e.operationForChild(s),u=t.children.get(s);if(u&&a){const e=n?n.getImmediateChild(s):null,t=pa(r,s);o=o.concat(Fa(a,u,e,t))}return i&&(o=o.concat(Oa(i,e,r,n))),o}}function $a(e,t,n,r){const i=t.get(ko());null==n&&null!=i&&(n=Na(i,ko()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=pa(r,t),u=e.operationForChild(t);u&&(o=o.concat($a(u,i,s,a)))})),i&&(o=o.concat(Oa(i,e,r,n))),o}function qa(e,t){return e.tagToQueryMap.get(t)}function Wa(e){const t=e.indexOf("$");return $n(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new wo(e.substr(0,t))}}function Ha(e,t,n){const r=e.syncPointTree_.get(t);$n(r,"Missing sync point for query tag that we're tracking");return Oa(r,n,na(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new za(t)}node(){return this.node_}constructor(e){this.node_=e}}class Va{getImmediateChild(e){const t=Ro(this.path_,e);return new Va(this.syncTree_,t)}node(){return Ua(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Ka=function(e,t,n){return e&&"object"==typeof e?($n(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ga(e[".sv"],t,n):"object"==typeof e[".sv"]?Ja(e[".sv"],t):void $n(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ga=function(e,t,n){if("timestamp"===e)return n.timestamp;$n(!1,"Unexpected server value: "+e)},Ja=function(e,t,n){e.hasOwnProperty("increment")||$n(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&$n(!1,"Unexpected increment value: "+r);const i=t.node();if($n(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return"number"!=typeof o?r:o+r},Ya=function(e,t,n,r){return Xa(t,new Va(n,e),r)},Qa=function(e,t,n){return Xa(e,new za(t),n)};function Xa(e,t,n){const r=e.getPriority().val(),i=Ka(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Ka(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new ts(o,fs(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new ts(i))),r.forEachChild(ns,((e,r)=>{const i=Xa(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function eu(e,t){let n=t instanceof wo?t:new wo(t),r=e,i=So(n);for(;null!==i;){const e=fr(r.node.children,i)||{children:{},childCount:0};r=new Za(i,r,e),n=Co(n),i=So(n)}return r}function tu(e){return e.node.value}function nu(e,t){e.node.value=t,au(e)}function ru(e){return e.node.childCount>0}function iu(e,t){Gi(e.node.children,((n,r)=>{t(new Za(n,e,r))}))}function ou(e,t,n,r){n&&!r&&t(e),iu(e,(e=>{ou(e,t,!0,r)})),n&&r&&t(e)}function su(e){return new wo(null===e.parent?e.name:su(e.parent)+"/"+e.name)}function au(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===tu(e)&&!ru(e)}(n),i=hr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,au(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,au(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const uu=/[\[\].#$\/\u0000-\u001F\u007F]/,cu=/[\[\].#$\u0000-\u001F\u007F]/,lu=function(e){return"string"==typeof e&&0!==e.length&&!uu.test(e)},hu=function(e){return"string"==typeof e&&0!==e.length&&!cu.test(e)},fu=function(e,t,n){const r=n instanceof wo?new Lo(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Do(r));if("function"==typeof t)throw new Error(e+"contains a function "+Do(r)+" with contents = "+t.toString());if(qi(t))throw new Error(e+"contains "+t.toString()+" "+Do(r));if("string"==typeof t&&t.length>10485760/3&&Ir(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Do(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Gi(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!lu(t)))throw new Error(e+" contains an invalid key ("+t+") "+Do(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=r).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=Ir(a),Mo(s),fu(e,o,r),function(e){const t=e.parts_.pop();e.byteLength_-=Ir(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Do(r)+" in addition to actual children.")}},du=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!lu(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),hu(e)}(n))throw new Error(Er(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gu(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||No(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function mu(e,t,n){gu(e,n),_u(e,(e=>xo(e,t)||xo(t,e)))}function _u(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(vu(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function vu(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Li&&Bi("event: "+n.toString()),Xi(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cs(),this.transactionQueueTree_=new Za,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function bu(e,t,n){if(e.stats_=co(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ss(e.repoInfo_,((t,n,r,i)=>{Su(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Eu(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ar(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Uo(e.repoInfo_,t,((t,n,r,i)=>{Su(e,t,n,r,i)}),(t=>{Eu(e,t)}),(t=>{!function(e,t){Gi(t,((t,n)=>{Cu(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return uo[n]||(uo[n]=t()),uo[n]}(e.repoInfo_,(()=>new Rs(e.stats_,e.server_))),e.infoData_=new Es,e.infoSyncTree_=new xa({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Da(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),Cu(e,"connected",!1),e.serverSyncTree_=new xa({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);mu(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function wu(e){const t=e.infoData_.getNode(new wo(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ku(e){return(t=(t={timestamp:wu(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Su(e,t,n,r,i){e.dataUpdateCount++;const o=new wo(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const t=pr(n,(e=>fs(e)));s=function(e,t,n,r){const i=qa(e,r);if(i){const r=Wa(i),o=r.path,s=r.queryId,a=Oo(o,t),u=Hs.fromObject(n);return Ha(e,o,new Ms(Ns(s),a,u))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=fs(n);s=Ba(e.serverSyncTree_,o,t,i)}else if(r){const t=pr(n,(e=>fs(e)));s=function(e,t,n){const r=Hs.fromObject(n);return ja(e,new Ms({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=fs(n);s=Da(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=Ou(e,o)),mu(e.eventQueue_,a,s)}function Eu(e,t){Cu(e,"connected",t),!1===t&&function(e){Pu(e,"onDisconnectEvents");const t=ku(e),n=Cs();Ts(e.onDisconnect_,ko(),((r,i)=>{const o=Ya(r,i,e.serverSyncTree_,t);Is(n,r,o)}));let r=[];Ts(n,ko(),((t,n)=>{r=r.concat(Da(e.serverSyncTree_,t,n));const i=Du(e,t);Ou(e,i)})),e.onDisconnect_=Cs(),mu(e.eventQueue_,ko(),r)}(e)}function Cu(e,t,n){const r=new wo("/.info/"+t),i=fs(n);e.infoData_.updateSnapshot(r,i);const o=Da(e.infoSyncTree_,r,i);mu(e.eventQueue_,r,o)}function Iu(e){return e.nextWriteId_++}function Tu(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Pu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Bi(n,...t)}function Ru(e,t,n){return Ua(e.serverSyncTree_,t,n)||ls.EMPTY_NODE}function Au(e,t=e.transactionQueueTree_){if(t||Mu(e,t),tu(t)){const n=xu(e,t);$n(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Ru(e,t,r);let o=i;const s=i.hash();for(let e=0;e<n.length;e++){const r=n[e];$n(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Oo(t,r.path);o=o.updateChild(i,r.currentOutputSnapshotRaw)}const a=o.val(!0),u=t;e.server_.put(u.toString(),a,(r=>{Pu(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ma(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Mu(e,eu(e.transactionQueueTree_,t)),Au(e,e.transactionQueueTree_),mu(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Xi(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{$i("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Ou(e,t)}}),s)}(e,su(t),n)}else ru(t)&&iu(t,(t=>{Au(e,t)}))}function Ou(e,t){const n=Nu(e,t),r=su(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const u=t[a],c=Oo(n,u.path);let l,h=!1;if($n(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)h=!0,l=u.abortReason,i=i.concat(Ma(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)h=!0,l="maxretry",i=i.concat(Ma(e.serverSyncTree_,u.currentWriteId,!0));else{const n=Ru(e,u.path,o);u.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){fu("transaction failed: Data returned ",r,u.path);let t=fs(r);"object"==typeof r&&null!=r&&hr(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=u.currentWriteId,a=ku(e),c=Qa(t,n,a);u.currentOutputSnapshotRaw=t,u.currentOutputSnapshotResolved=c,u.currentWriteId=Iu(e),o.splice(o.indexOf(s),1),i=i.concat(La(e.serverSyncTree_,u.path,c,u.currentWriteId,u.applyLocally)),i=i.concat(Ma(e.serverSyncTree_,s,!0))}else h=!0,l="nodata",i=i.concat(Ma(e.serverSyncTree_,u.currentWriteId,!0))}mu(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===l?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(l),!1,null)))))}var s;Mu(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Xi(r[e]);Au(e,e.transactionQueueTree_)}(e,xu(e,n),r),r}function Nu(e,t){let n,r=e.transactionQueueTree_;for(n=So(t);null!==n&&void 0===tu(r);)r=eu(r,n),n=So(t=Co(t));return r}function xu(e,t){const n=[];return Lu(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Lu(e,t,n){const r=tu(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);iu(t,(t=>{Lu(e,t,n)}))}function Mu(e,t){const n=tu(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,nu(t,n.length>0?n:void 0)}iu(t,(t=>{Mu(e,t)}))}function Du(e,t){const n=su(Nu(e,t)),r=eu(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Bu(e,t)})),Bu(e,r),ou(r,(t=>{Bu(e,t)})),n}function Bu(e,t){const n=tu(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?($n(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):($n(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ma(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?nu(t,void 0):n.length=o+1,mu(e.eventQueue_,su(t),i);for(let e=0;e<r.length;e++)Xi(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=function(e,t){const n=ju(e),r=n.namespace;"firebase.com"===n.domain&&Fi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Fi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&$i("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new io(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new wo(n.pathString)}},ju=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",u=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(l,h)));const f=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$i(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,u=parseInt(t.substring(c+1),10)):c=t.length;const d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in f&&(o=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{get key(){return Ao(this._path)?null:Io(this._path)}get ref(){return new $u(this._repo,this._path)}get _queryIdentifier(){const e=ks(this._queryParams),t=Vi(e);return"{}"===t?"default":t}get _queryObject(){return ks(this._queryParams)}isEqual(e){if(!((e=Tr(e))instanceof Fu))return!1;const t=this._repo===e._repo,n=No(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}}class $u extends Fu{get parent(){const e=Po(this._path);return null===e?null:new $u(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new bs,!1)}}!function(e){$n(!Ra,"__referenceConstructor has already been defined"),Ra=e}($u),function(e){$n(!Aa,"__referenceConstructor has already been defined"),Aa=e}($u);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qu={};let Wu=!1;function Hu(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||Fi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Bi("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,u=Uu(o,i),c=u.repoInfo;void 0!==Si&&Si.env&&(a=Si.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${c.namespace}`,u=Uu(o,i),c=u.repoInfo):s=!u.repoInfo.secure;const l=i&&s?new no(no.OWNER):new to(e.name,e.options,t);du("Invalid Firebase Database URL",u),Ao(u.path)||Fi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=qu[t.name];i||(i={},qu[t.name]=i);let o=i[e.toURLString()];o&&Fi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new yu(e,Wu,n,r),i[e.toURLString()]=o,o}(c,e,l,new eo(e.name,n));return new zu(h,e)}class zu{get _repo(){return this._instanceStarted||(bu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $u(this._repo,ko())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=qu[t];n&&n[e.key]===e||Fi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Tu(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Fi("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Uo.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Uo.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ei="9.9.2",ui(new Pr("database",((e,{instanceIdentifier:t})=>Hu(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),di("@firebase/database","0.13.4",e),di("@firebase/database","0.13.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function Vu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ku(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gu=Ku,Ju=new ir("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Yu=new Ur("@firebase/auth");function Qu(e,...t){Yu.logLevel<=Nr.ERROR&&Yu.error(`Auth (9.9.2): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(e,...t){throw nc(e,...t)}function Zu(e,...t){return nc(e,...t)}function ec(e,t,n){const r=Object.assign(Object.assign({},Gu()),{[t]:n});return new ir("auth","Firebase",r).create(t,{appName:e.name})}function tc(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Xu(e,"argument-error"),ec(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nc(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ju.create(e,...t)}function rc(e,t,...n){if(!e)throw nc(t,...n)}function ic(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qu(t),new Error(t)}function oc(e,t){e||ic(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Map;function ac(e){oc(e instanceof Function,"Expected a class definition");let t=sc.get(e);return t?(oc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sc.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function cc(){return"http:"===lc()||"https:"===lc()}function lc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(cc()||Zn()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{get(){return hc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,oc(t>e,"Short delay should be less than long delay!"),this.isMobile=Xn()||er()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(e,t){oc(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ic("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ic("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ic("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},mc=new fc(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function vc(e,t,n,r,i={}){return yc(e,i,(async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=_r(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),pc.fetch()(wc(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function yc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},gc),t);try{const t=new kc(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sc(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Sc(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Sc(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw Sc(e,"user-disabled",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ec(e,a,s);Xu(e,a)}}catch(t){if(t instanceof rr)throw t;Xu(e,"network-request-failed")}}async function bc(e,t,n,r,i={}){const o=await vc(e,t,n,r,i);return"mfaPendingCredential"in o&&Xu(e,"multi-factor-auth-required",{_serverResponse:o}),o}function wc(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?dc(e.config,i):`${e.config.apiScheme}://${i}`}class kc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Zu(this.auth,"network-request-failed"))),mc.get())}))}}function Sc(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zu(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ec(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(e){return 1e3*Number(e)}function Ic(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const e=Kn(r);return e?JSON.parse(e):(Qu("Failed to decode base64 JWT payload"),null)}catch(e){return Qu("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tc(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof rr&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Pc{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{_initializeTime(){this.lastSignInTime=Ec(this.lastLoginAt),this.creationTime=Ec(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Tc(e,async function(e,t){return vc(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));rc(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Vu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(u=e.providerData,c=s,[...u.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var u,c;const l=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),f=!!l&&h,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Rc(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){rc(e.idToken,"internal-error"),rc(void 0!==e.idToken,"internal-error"),rc(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ic(e);return rc(t,"internal-error"),rc(void 0!==t.exp,"internal-error"),rc(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return rc(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await yc(e,{},(async()=>{const n=_r({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=wc(e,r,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",pc.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Oc;return n&&(rc("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(rc("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(rc("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oc,this.toJSON())}_performRefresh(){return ic("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e,t){rc("string"==typeof e||void 0===e,"internal-error",{appName:t})}class xc{async getIdToken(e){const t=await Tc(this,this.stsTokenManager.getToken(this.auth,e));return rc(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Tr(e),r=await n.getIdToken(t),i=Ic(r);rc(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ec(Cc(i.auth_time)),issuedAtTime:Ec(Cc(i.iat)),expirationTime:Ec(Cc(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Tr(e);await Ac(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(rc(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xc(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){rc(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ac(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tc(this,async function(e,t){return vc(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:k}=t;rc(v&&k,e,"internal-error");const S=Oc.fromJSON(this.name,k);rc("string"==typeof v,e,"internal-error"),Nc(l,e.name),Nc(h,e.name),rc("boolean"==typeof y,e,"internal-error"),rc("boolean"==typeof b,e,"internal-error"),Nc(f,e.name),Nc(d,e.name),Nc(p,e.name),Nc(g,e.name),Nc(m,e.name),Nc(_,e.name);const E=new xc({uid:v,auth:e,email:h,emailVerified:y,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:_});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Oc;r.updateFromServerResponse(t);const i=new xc({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ac(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rc(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Lc.type="NONE";const Mc=Lc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(e,t,n){return`firebase:${e}:${t}:${n}`}class Bc{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Bc(ac(Mc),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ac(Mc);const o=Dc(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const r=xc._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new Bc(i,e,n)):new Bc(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Dc(this.userKey,r.apiKey,i),this.fullPersistenceKey=Dc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hc(t))return"Blackberry";if(zc(t))return"Webos";if(Fc(t))return"Safari";if((t.includes("chrome/")||$c(t))&&!t.includes("edge/"))return"Chrome";if(Wc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function jc(e=Qn()){return/firefox\//i.test(e)}function Fc(e=Qn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $c(e=Qn()){return/crios\//i.test(e)}function qc(e=Qn()){return/iemobile/i.test(e)}function Wc(e=Qn()){return/android/i.test(e)}function Hc(e=Qn()){return/blackberry/i.test(e)}function zc(e=Qn()){return/webos/i.test(e)}function Vc(e=Qn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Kc(){return tr()&&10===document.documentMode}function Gc(e=Qn()){return Vc(e)||Wc(e)||zc(e)||Hc(e)||/windows phone/i.test(e)||qc(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jc(e,t=[]){let n;switch(e){case"Browser":n=Uc(Qn());break;case"Worker":n=`${Uc(Qn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.2/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ac(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Bc.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(r=s.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return rc(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Ac(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Tr(e):null;return t&&rc(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&rc(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ac(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ir("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ac(e)||this._popupRedirectResolver;rc(t,this,"argument-error"),this.redirectPersistenceManager=await Bc.create(this,[ac(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return rc(o,this,"internal-error"),o.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return rc(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zc(this),this.idTokenSubscription=new Zc(this),this.beforeStateQueue=new Yc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ju,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Xc(e){return Tr(e)}class Zc{get next(){return rc(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=wr((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{toJSON(){return ic("not implemented")}_getIdTokenResponse(e){return ic("not implemented")}_linkToIdToken(e,t){return ic("not implemented")}_getReauthenticationResolver(e){return ic("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(e,t){return vc(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl extends el{static _fromEmailAndPassword(e,t){return new nl(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nl(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return bc(e,"POST","/v1/accounts:signInWithPassword",_c(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return bc(e,"POST","/v1/accounts:signInWithEmailLink",_c(e,t))}(e,{email:this._email,oobCode:this._password});default:Xu(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tl(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return bc(e,"POST","/v1/accounts:signInWithEmailLink",_c(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Xu(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(e,t){return bc(e,"POST","/v1/accounts:signInWithIdp",_c(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends el{static _fromParams(e){const t=new il(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xu("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Vu(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new il(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return rl(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,rl(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rl(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_r(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl extends el{static _fromVerification(e,t){return new sl({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new sl({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return bc(e,"POST","/v1/accounts:signInWithPhoneNumber",_c(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await bc(e,"POST","/v1/accounts:signInWithPhoneNumber",_c(e,t));if(n.temporaryProof)throw Sc(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return bc(e,"POST","/v1/accounts:signInWithPhoneNumber",_c(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ol)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new sl({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{static parseLink(e){const t=function(e){const t=vr(yr(e)).link,n=t?vr(yr(t)).deep_link_id:null,r=vr(yr(e)).deep_link_id;return(r?vr(yr(r)).link:null)||r||n||t||e}(e);try{return new al(t)}catch(e){return null}}constructor(e){var t,n,r,i,o,s;const a=vr(yr(e)),u=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);rc(u&&c&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{static credential(e,t){return nl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=al.parseLink(t);return rc(n,"argument-error"),nl._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=ul.PROVIDER_ID}}ul.PROVIDER_ID="password",ul.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ul.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends cl{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl extends ll{static credential(e){return il._fromParams({providerId:hl.PROVIDER_ID,signInMethod:hl.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hl.credentialFromTaggedObject(e)}static credentialFromError(e){return hl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return hl.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}hl.FACEBOOK_SIGN_IN_METHOD="facebook.com",hl.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fl extends ll{static credential(e,t){return il._fromParams({providerId:fl.PROVIDER_ID,signInMethod:fl.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fl.credentialFromTaggedObject(e)}static credentialFromError(e){return fl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return fl.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}fl.GOOGLE_SIGN_IN_METHOD="google.com",fl.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl extends ll{static credential(e){return il._fromParams({providerId:dl.PROVIDER_ID,signInMethod:dl.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dl.credentialFromTaggedObject(e)}static credentialFromError(e){return dl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dl.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}dl.GITHUB_SIGN_IN_METHOD="github.com",dl.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl extends ll{static credential(e,t){return il._fromParams({providerId:pl.PROVIDER_ID,signInMethod:pl.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pl.credentialFromTaggedObject(e)}static credentialFromError(e){return pl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return pl.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}pl.TWITTER_SIGN_IN_METHOD="twitter.com",pl.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await xc._fromIdTokenResponse(e,n,r),o=ml(n);return new gl({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ml(n);return new gl({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function ml(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _l extends rr{static _fromErrorAndOperation(e,t,n,r){return new _l(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,_l.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function vl(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw _l._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(e,t,n=!1){const r=await Tc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gl._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bl(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const r=await Tc(e,vl(i,o,t,e),n);rc(r.idToken,i,"internal-error");const s=Ic(r.idToken);rc(s,i,"internal-error");const{sub:a}=s;return rc(e.uid===a,i,"user-mismatch"),gl._forOperation(e,o,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&Xu(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(e,t,n=!1){const r="signIn",i=await vl(e,r,t),o=await gl._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function kl(e,t,n,r){return Tr(e).onAuthStateChanged(t,n,r)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Sl{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Kc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Qn();return Fc(e)||Vc(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Gc(),this._shouldAllowMigration=!0}}El.type="LOCAL";const Cl=El;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Sl{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Il.type="SESSION";const Tl=Il;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Pl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rl(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pl.receivers=[];class Al{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((s,a)=>{const u=Rl("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nl(){return void 0!==Ol().WorkerGlobalScope&&"function"==typeof Ol().importScripts}class xl{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Ll(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ml(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new xl(e).toPromise()}(),t(await Ml()))}))}))}async function Dl(e,t,n){const r=Ll(e,!0).put({fbase_key:t,value:n});return new xl(r).toPromise()}function Bl(e,t){const n=Ll(e,!0).delete(t);return new xl(n).toPromise()}class Ul{async _openDb(){return this.db||(this.db=await Ml()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(Nl()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Al(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ml();return await Dl(e,"__sak","1"),await Bl(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Dl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ll(e,!1).get(t),r=await new xl(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Bl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ll(e,!1).getAll();return new xl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Ul.type="LOCAL";const jl=Ul;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Zu("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)}))}function $l(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$l("rcb"),new fc(3e4,6e4);async function ql(e,t,n){var r;const i=await n.verify();try{let o;if(rc("string"==typeof i,e,"argument-error"),rc("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){rc("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return vc(e,"POST","/v2/accounts/mfaEnrollment:start",_c(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{rc("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;rc(n,e,"missing-multi-factor-info");const s=await function(e,t){return vc(e,"POST","/v2/accounts/mfaSignIn:start",_c(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return vc(e,"POST","/v1/accounts:sendVerificationCode",_c(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{verifyPhoneNumber(e,t){return ql(this.auth,e,Tr(t))}static credential(e,t){return sl._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Wl.credentialFromTaggedObject(t)}static credentialFromError(e){return Wl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?sl._fromTokenResponse(t,n):null}constructor(e){this.providerId=Wl.PROVIDER_ID,this.auth=Xc(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hl(e,t){return t?ac(t):(rc(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wl.PROVIDER_ID="phone",Wl.PHONE_SIGN_IN_METHOD="phone";class zl extends el{_getIdTokenResponse(e){return rl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Vl(e){return wl(e.auth,new zl(e),e.bypassAuthState)}function Kl(e){const{auth:t,user:n}=e;return rc(n,t,"internal-error"),bl(n,new zl(e),e.bypassAuthState)}async function Gl(e){const{auth:t,user:n}=e;return rc(n,t,"internal-error"),yl(n,new zl(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vl;case"linkViaPopup":case"linkViaRedirect":return Gl;case"reauthViaPopup":case"reauthViaRedirect":return Kl;default:Xu(this.auth,"internal-error")}}resolve(e){oc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){oc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new fc(2e3,1e4);async function Ql(e,t,n){const r=Xc(e);tc(e,t,cl);const i=Hl(r,n);return new Xl(r,"signInViaPopup",t,i).executeNotNull()}class Xl extends Jl{async executeNotNull(){const e=await this.execute();return rc(e,this.auth,"internal-error"),e}async onExecution(){oc(1===this.filter.length,"Popup operations only handle one event");const e=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Zu(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Zu(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Zu(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Yl.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Xl.currentPopupAction&&Xl.currentPopupAction.cancel(),Xl.currentPopupAction=this}}Xl.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zl=new Map;class eh extends Jl{async execute(){let e=Zl.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=rh(t),r=nh(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Zl.set(this.auth._key(),e)}return this.bypassAuthState||Zl.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function th(e,t){Zl.set(e._key(),t)}function nh(e){return ac(e._redirectPersistence)}function rh(e){return Dc("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(e,t,n=!1){const r=Xc(e),i=Hl(r,t),o=new eh(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class oh{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ah(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ah(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Zu(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function sh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ah({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ch=/^https?/;async function lh(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return vc(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(hh(e))return}catch(e){}Xu(e,"unauthorized-domain")}function hh(e){const t=uc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ch.test(n))return!1;if(uh.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new fc(3e4,6e4);function dh(){const e=Ol().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ph=null;function gh(e){return ph=ph||function(e){return new Promise(((t,n)=>{var r,i,o;function s(){dh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dh(),n(Zu(e,"network-request-failed"))},timeout:fh.get()})}if(null===(i=null===(r=Ol().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Ol().gapi)||void 0===o?void 0:o.load)){const t=$l("iframefcb");return Ol()[t]=()=>{gapi.load?s():n(Zu(e,"network-request-failed"))},Fl(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw ph=null,e}))}(e),ph}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new fc(5e3,15e3),_h={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yh(e){const t=e.config;rc(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?dc(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.9.2"},i=vh.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${_r(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class wh{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function kh(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},bh),{width:r.toString(),height:i.toString(),top:o,left:s}),c=Qn().toLowerCase();n&&(a=$c(c)?"_blank":n),jc(c)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Qn()){var t;return Vc(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new wh(null);const h=window.open(t||"",a,l);rc(h,e,"popup-blocked");try{h.focus()}catch(e){}return new wh(h)}function Sh(e,t,n,r,i,o){rc(e.config.authDomain,e,"auth-domain-config-required"),rc(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.9.2",eventId:i};if(t instanceof cl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",dr(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof ll){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?dc(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${_r(a).slice(1)}`}const Eh=class{async _openPopup(e,t,n,r){var i;oc(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return kh(e,Sh(e,t,n,uc(),r),Rl())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Sh(e,t,n,uc(),r),Ol().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(oc(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await gh(e),n=Ol().gapi;return rc(n,e,"internal-error"),t.open({where:document.body,url:yh(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_h,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Zu(e,"network-request-failed"),o=Ol().setTimeout((()=>{r(i)}),mh.get());function s(){Ol().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new oh(e);return t.register("authEvent",(t=>{rc(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Xu(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gc()||Fc()||Vc()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tl,this._completeRedirectFn=ih,this._overrideRedirectResult=th}};var Ch;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ih{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){rc(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ch="Browser",ui(new Pr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{rc(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),rc(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:Ch,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jc(Ch)},s=new Qc(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ac);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ui(new Pr("auth-internal",(e=>(e=>new Ih(e))(Xc(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),di("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ch)),di("@firebase/auth","0.20.5","esm2017");!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw li.create("bad-app-name",{appName:String(r)});const i=oi.get(r);if(i){if(gr(e,i.options)&&gr(n,i.config))return i;throw li.create("duplicate-app",{appName:r})}const o=new Ar(r);for(const e of si.values())o.addComponent(e);const s=new hi(e,n,o);oi.set(r,s)}({apiKey:"AIzaSyAULeMb5TUpp9pfALatcfwqThVI7Yd4YVI",authDomain:"cocktails-39b57.firebaseapp.com",projectId:"cocktails-39b57",storageBucket:"cocktails-39b57.appspot.com",messagingSenderId:"894388404677",appId:"1:894388404677:web:5aeeaa2079f89382130bac"});const Th=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=fi()){const t=ci(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ci(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(gr(n.getOptions(),null!=t?t:{}))return e;Xu(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Eh,persistence:[jl,Cl,Tl]})}(),Ph=new fl,Rh=(function(e=fi(),t){ci(e,"database").getImmediate({identifier:t})}(),()=>{Ql(Th,Ph).then((e=>{fl.credentialFromResult(e).accessToken;const t=e.user;console.log(t)})).catch((e=>{e.code,e.message,e.customData.email,fl.credentialFromError(e)}))});function Ah(){var e;(e=Th,Tr(e).signOut()).then((()=>{})).catch((e=>{}))}function Oh(e){let t="Log in";e&&(t="Log out"),Ln.buttonLogin.textContent=t,Ln.buttonLogin.dataset.id=t}kl(Th,(e=>{if(e){e.uid}})),kl(Th,(e=>{Oh(e)})),Ln.buttonLogin.addEventListener("click",(function(e){let t=e.target.dataset.id;console.dir(e),"Log in"===t?Rh():Ah()})),console.log("11111 :>> ",11111);var Nh={};Nh=o("bRlFp");const xh="https://www.thecocktaildb.com/api/json/v1/1/";async function Lh(){try{return await Nh.get(`${xh}random.php`)}catch(e){throw new Error(e.message)}}!async function(e){try{const t=new URLSearchParams({s:`${e}`});await Nh.get(`${xh}search.php?${t}`)}catch(e){throw new Error(e.message)}}("vodka"),async function(e){try{const t=new URLSearchParams({f:`${e}`});await Nh.get(`${xh}search.php?${t}`)}catch(e){throw new Error(e.message)}}("a"),async function(e){try{const t=new URLSearchParams({i:`${e}`});await Nh.get(`${xh}search.php?${t}`)}catch(e){throw new Error(e.message)}}("ice"),async function(e){try{const t=new URLSearchParams({i:`${e}`});await Nh.get(`${xh}lookup.php?${t}`)}catch(e){throw new Error(e.message)}}("11007"),Lh(),o("kEUo3"),async function(){let e=[];for(let t=1;t<=9;t++){const t=await Lh();e.push(t.data.drinks)}}();
//# sourceMappingURL=index.168aae20.js.map