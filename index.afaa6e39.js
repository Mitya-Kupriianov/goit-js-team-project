function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequired7c6=s),s.register("9QQ9J",(function(t,n){var r,i,o;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e})),e(t.exports,"SourceMapConsumer",(function(){return i}),(function(e){return i=e})),e(t.exports,"SourceNode",(function(){return o}),(function(e){return o=e})),r=s("ic7WM").SourceMapGenerator,i=s("lbXUp").SourceMapConsumer,o=s("Tx9qF").SourceNode})),s.register("ic7WM",(function(t,n){var r;e(t.exports,"SourceMapGenerator",(function(){return r}),(function(e){return r=e}));var i=s("duvZU"),o=s("dQK2c"),a=s("lSTHk").ArraySet,c=s("2EyUB").MappingList;function l(e){e||(e={}),this._file=o.getArg(e,"file",null),this._sourceRoot=o.getArg(e,"sourceRoot",null),this._skipValidation=o.getArg(e,"skipValidation",!1),this._sources=new a,this._names=new a,this._mappings=new c,this._sourcesContents=null}l.prototype._version=3,l.fromSourceMap=function(e){var t=e.sourceRoot,n=new l({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=o.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var i=r;null!==t&&(i=o.relative(t,r)),n._sources.has(i)||n._sources.add(i);var s=e.sourceContentFor(r);null!=s&&n.setSourceContent(r,s)})),n},l.prototype.addMapping=function(e){var t=o.getArg(e,"generated"),n=o.getArg(e,"original",null),r=o.getArg(e,"source",null),i=o.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},l.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=o.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[o.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[o.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},l.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=o.relative(i,r));var s=new a,c=new a;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var a=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=a.source&&(t.source=a.source,null!=n&&(t.source=o.join(n,t.source)),null!=i&&(t.source=o.relative(i,t.source)),t.originalLine=a.line,t.originalColumn=a.column,null!=a.name&&(t.name=a.name))}var l=t.source;null==l||s.has(l)||s.add(l);var u=t.name;null==u||c.has(u)||c.add(u)}),this),this._sources=s,this._names=c,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=o.join(n,t)),null!=i&&(t=o.relative(i,t)),this.setSourceContent(t,r))}),this)},l.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},l.prototype._serializeMappings=function(){for(var e,t,n,r,s=0,a=1,c=0,l=0,u=0,h=0,d="",p=this._mappings.toArray(),f=0,m=p.length;f<m;f++){if(e="",(t=p[f]).generatedLine!==a)for(s=0;t.generatedLine!==a;)e+=";",a++;else if(f>0){if(!o.compareByGeneratedPositionsInflated(t,p[f-1]))continue;e+=","}e+=i.encode(t.generatedColumn-s),s=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=i.encode(r-h),h=r,e+=i.encode(t.originalLine-1-l),l=t.originalLine-1,e+=i.encode(t.originalColumn-c),c=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=i.encode(n-u),u=n)),d+=e}return d},l.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=o.relative(t,e));var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},l.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},l.prototype.toString=function(){return JSON.stringify(this.toJSON())},r=l})),s.register("duvZU",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var o=s("iJ1ZV");r=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=o.encode(t)}while(r>0);return n},i=function(e,t,n){var r,i,s,a,c=e.length,l=0,u=0;do{if(t>=c)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(i=o.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));r=!!(32&i),l+=(i&=31)<<u,u+=5}while(r);n.value=(a=(s=l)>>1,1==(1&s)?-a:a),n.rest=t}})),s.register("iJ1ZV",(function(t,n){var r,i;e(t.exports,"encode",(function(){return r}),(function(e){return r=e})),e(t.exports,"decode",(function(){return i}),(function(e){return i=e}));var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r=function(e){if(0<=e&&e<s.length)return s[e];throw new TypeError("Must be between 0 and 63: "+e)},i=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}})),s.register("dQK2c",(function(t,n){var r,i,s,o,a,c,l,u,h,d,p,f,m;e(t.exports,"getArg",(function(){return r}),(function(e){return r=e})),e(t.exports,"urlParse",(function(){return i}),(function(e){return i=e})),e(t.exports,"isAbsolute",(function(){return a}),(function(e){return a=e})),e(t.exports,"normalize",(function(){return s}),(function(e){return s=e})),e(t.exports,"join",(function(){return o}),(function(e){return o=e})),e(t.exports,"relative",(function(){return c}),(function(e){return c=e})),e(t.exports,"toSetString",(function(){return l}),(function(e){return l=e})),e(t.exports,"fromSetString",(function(){return u}),(function(e){return u=e})),e(t.exports,"compareByOriginalPositions",(function(){return h}),(function(e){return h=e})),e(t.exports,"compareByGeneratedPositionsDeflated",(function(){return d}),(function(e){return d=e})),e(t.exports,"compareByGeneratedPositionsInflated",(function(){return p}),(function(e){return p=e})),e(t.exports,"parseSourceMapInput",(function(){return f}),(function(e){return f=e})),e(t.exports,"computeSourceURL",(function(){return m}),(function(e){return m=e})),r=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var g=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,_=/^data:.+\,.+$/;function v(e){var t=e.match(g);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function y(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function b(e){var t=e,n=v(e);if(n){if(!n.path)return e;t=n.path}for(var r,i=a(t),s=t.split(/\/+/),o=0,c=s.length-1;c>=0;c--)"."===(r=s[c])?s.splice(c,1):".."===r?o++:o>0&&(""===r?(s.splice(c+1,o),o=0):(s.splice(c,2),o--));return""===(t=s.join("/"))&&(t=i?"/":"."),n?(n.path=t,y(n)):t}function w(e,t){""===e&&(e="."),""===t&&(t=".");var n=v(t),r=v(e);if(r&&(e=r.path||"/"),n&&!n.scheme)return r&&(n.scheme=r.scheme),y(n);if(n||t.match(_))return t;if(r&&!r.host&&!r.path)return r.host=t,y(r);var i="/"===t.charAt(0)?t:b(e.replace(/\/+$/,"")+"/"+t);return r?(r.path=i,y(r)):i}i=v,s=b,o=w,a=function(e){return"/"===e.charAt(0)||g.test(e)},c=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var k=!("__proto__"in Object.create(null));function S(e){return e}function C(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function I(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}l=k?S:function(e){return C(e)?"$"+e:e},u=k?S:function(e){return C(e)?e.slice(1):e},h=function(e,t,n){var r=I(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:I(e.name,t.name)},d=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=I(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:I(e.name,t.name)},p=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=I(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:I(e.name,t.name)},f=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},m=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=v(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var i=r.path.lastIndexOf("/");i>=0&&(r.path=r.path.substring(0,i+1))}t=w(y(r),t)}return b(t)}})),s.register("lSTHk",(function(t,n){var r;e(t.exports,"ArraySet",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c"),o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Map;function c(){this._array=[],this._set=a?new Map:Object.create(null)}c.fromArray=function(e,t){for(var n=new c,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},c.prototype.size=function(){return a?this._set.size:Object.getOwnPropertyNames(this._set).length},c.prototype.add=function(e,t){var n=a?e:i.toSetString(e),r=a?this.has(e):o.call(this._set,n),s=this._array.length;r&&!t||this._array.push(e),r||(a?this._set.set(e,s):this._set[n]=s)},c.prototype.has=function(e){if(a)return this._set.has(e);var t=i.toSetString(e);return o.call(this._set,t)},c.prototype.indexOf=function(e){if(a){var t=this._set.get(e);if(t>=0)return t}else{var n=i.toSetString(e);if(o.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},c.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},c.prototype.toArray=function(){return this._array.slice()},r=c})),s.register("2EyUB",(function(t,n){var r;e(t.exports,"MappingList",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c");function o(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}o.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},o.prototype.add=function(e){var t,n,r,s,o,a;t=this._last,n=e,r=t.generatedLine,s=n.generatedLine,o=t.generatedColumn,a=n.generatedColumn,s>r||s==r&&a>=o||i.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},o.prototype.toArray=function(){return this._sorted||(this._array.sort(i.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},r=o})),s.register("lbXUp",(function(t,n){var r;e(t.exports,"SourceMapConsumer",(function(){return r}),(function(e){return r=e}));var i=s("dQK2c"),o=s("bTtvB"),a=s("lSTHk").ArraySet,c=s("duvZU"),l=s("76ffZ").quickSort;function u(e,t){var n=e;return"string"==typeof e&&(n=i.parseSourceMapInput(e)),null!=n.sections?new p(n,t):new h(n,t)}function h(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sources"),o=i.getArg(n,"names",[]),c=i.getArg(n,"sourceRoot",null),l=i.getArg(n,"sourcesContent",null),u=i.getArg(n,"mappings"),h=i.getArg(n,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);c&&(c=i.normalize(c)),s=s.map(String).map(i.normalize).map((function(e){return c&&i.isAbsolute(c)&&i.isAbsolute(e)?i.relative(c,e):e})),this._names=a.fromArray(o.map(String),!0),this._sources=a.fromArray(s,!0),this._absoluteSources=this._sources.toArray().map((function(e){return i.computeSourceURL(c,e,t)})),this.sourceRoot=c,this.sourcesContent=l,this._mappings=u,this._sourceMapURL=t,this.file=h}function d(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e,t){var n=e;"string"==typeof e&&(n=i.parseSourceMapInput(e));var r=i.getArg(n,"version"),s=i.getArg(n,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new a,this._names=new a;var o={line:-1,column:0};this._sections=s.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var n=i.getArg(e,"offset"),r=i.getArg(n,"line"),s=i.getArg(n,"column");if(r<o.line||r===o.line&&s<o.column)throw new Error("Section offsets must be ordered and non-overlapping.");return o=n,{generatedOffset:{generatedLine:r+1,generatedColumn:s+1},consumer:new u(i.getArg(e,"map"),t)}}))}u.fromSourceMap=function(e,t){return h.fromSourceMap(e,t)},u.prototype._version=3,u.prototype.__generatedMappings=null,Object.defineProperty(u.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),u.prototype.__originalMappings=null,Object.defineProperty(u.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),u.prototype._charIsMappingSeparator=function(e,t){var n=e.charAt(t);return";"===n||","===n},u.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},u.GENERATED_ORDER=1,u.ORIGINAL_ORDER=2,u.GREATEST_LOWER_BOUND=1,u.LEAST_UPPER_BOUND=2,u.prototype.eachMapping=function(e,t,n){var r,s=t||null;switch(n||u.GENERATED_ORDER){case u.GENERATED_ORDER:r=this._generatedMappings;break;case u.ORIGINAL_ORDER:r=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var o=this.sourceRoot;r.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return{source:t=i.computeSourceURL(o,t,this._sourceMapURL),generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,s)},u.prototype.allGeneratedPositionsFor=function(e){var t=i.getArg(e,"line"),n={source:i.getArg(e,"source"),originalLine:t,originalColumn:i.getArg(e,"column",0)};if(n.source=this._findSourceIndex(n.source),n.source<0)return[];var r=[],s=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,o.LEAST_UPPER_BOUND);if(s>=0){var a=this._originalMappings[s];if(void 0===e.column)for(var c=a.originalLine;a&&a.originalLine===c;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s];else for(var l=a.originalColumn;a&&a.originalLine===t&&a.originalColumn==l;)r.push({line:i.getArg(a,"generatedLine",null),column:i.getArg(a,"generatedColumn",null),lastColumn:i.getArg(a,"lastGeneratedColumn",null)}),a=this._originalMappings[++s]}return r},r=u,h.prototype=Object.create(u.prototype),h.prototype.consumer=u,h.prototype._findSourceIndex=function(e){var t,n=e;if(null!=this.sourceRoot&&(n=i.relative(this.sourceRoot,n)),this._sources.has(n))return this._sources.indexOf(n);for(t=0;t<this._absoluteSources.length;++t)if(this._absoluteSources[t]==e)return t;return-1},h.fromSourceMap=function(e,t){var n=Object.create(h.prototype),r=n._names=a.fromArray(e._names.toArray(),!0),s=n._sources=a.fromArray(e._sources.toArray(),!0);n.sourceRoot=e._sourceRoot,n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot),n.file=e._file,n._sourceMapURL=t,n._absoluteSources=n._sources.toArray().map((function(e){return i.computeSourceURL(n.sourceRoot,e,t)}));for(var o=e._mappings.toArray().slice(),c=n.__generatedMappings=[],u=n.__originalMappings=[],p=0,f=o.length;p<f;p++){var m=o[p],g=new d;g.generatedLine=m.generatedLine,g.generatedColumn=m.generatedColumn,m.source&&(g.source=s.indexOf(m.source),g.originalLine=m.originalLine,g.originalColumn=m.originalColumn,m.name&&(g.name=r.indexOf(m.name)),u.push(g)),c.push(g)}return l(n.__originalMappings,i.compareByOriginalPositions),n},h.prototype._version=3,Object.defineProperty(h.prototype,"sources",{get:function(){return this._absoluteSources.slice()}}),h.prototype._parseMappings=function(e,t){for(var n,r,s,o,a,u=1,h=0,p=0,f=0,m=0,g=0,_=e.length,v=0,y={},b={},w=[],k=[];v<_;)if(";"===e.charAt(v))u++,v++,h=0;else if(","===e.charAt(v))v++;else{for((n=new d).generatedLine=u,o=v;o<_&&!this._charIsMappingSeparator(e,o);o++);if(s=y[r=e.slice(v,o)])v+=r.length;else{for(s=[];v<o;)c.decode(e,v,b),a=b.value,v=b.rest,s.push(a);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");y[r]=s}n.generatedColumn=h+s[0],h=n.generatedColumn,s.length>1&&(n.source=m+s[1],m+=s[1],n.originalLine=p+s[2],p=n.originalLine,n.originalLine+=1,n.originalColumn=f+s[3],f=n.originalColumn,s.length>4&&(n.name=g+s[4],g+=s[4])),k.push(n),"number"==typeof n.originalLine&&w.push(n)}l(k,i.compareByGeneratedPositionsDeflated),this.__generatedMappings=k,l(w,i.compareByOriginalPositions),this.__originalMappings=w},h.prototype._findMapping=function(e,t,n,r,i,s){if(e[n]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[n]);if(e[r]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[r]);return o.search(e,t,i,s)},h.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(t.generatedLine===n.generatedLine){t.lastGeneratedColumn=n.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},h.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",i.compareByGeneratedPositionsDeflated,i.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(n>=0){var r=this._generatedMappings[n];if(r.generatedLine===t.generatedLine){var s=i.getArg(r,"source",null);null!==s&&(s=this._sources.at(s),s=i.computeSourceURL(this.sourceRoot,s,this._sourceMapURL));var o=i.getArg(r,"name",null);return null!==o&&(o=this._names.at(o)),{source:s,line:i.getArg(r,"originalLine",null),column:i.getArg(r,"originalColumn",null),name:o}}}return{source:null,line:null,column:null,name:null}},h.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},h.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;var n=this._findSourceIndex(e);if(n>=0)return this.sourcesContent[n];var r,s=e;if(null!=this.sourceRoot&&(s=i.relative(this.sourceRoot,s)),null!=this.sourceRoot&&(r=i.urlParse(this.sourceRoot))){var o=s.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(o))return this.sourcesContent[this._sources.indexOf(o)];if((!r.path||"/"==r.path)&&this._sources.has("/"+s))return this.sourcesContent[this._sources.indexOf("/"+s)]}if(t)return null;throw new Error('"'+s+'" is not in the SourceMap.')},h.prototype.generatedPositionFor=function(e){var t=i.getArg(e,"source");if((t=this._findSourceIndex(t))<0)return{line:null,column:null,lastColumn:null};var n={source:t,originalLine:i.getArg(e,"line"),originalColumn:i.getArg(e,"column")},r=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",i.compareByOriginalPositions,i.getArg(e,"bias",u.GREATEST_LOWER_BOUND));if(r>=0){var s=this._originalMappings[r];if(s.source===n.source)return{line:i.getArg(s,"generatedLine",null),column:i.getArg(s,"generatedColumn",null),lastColumn:i.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},p.prototype=Object.create(u.prototype),p.prototype.constructor=u,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var n=0;n<this._sections[t].consumer.sources.length;n++)e.push(this._sections[t].consumer.sources[n]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:i.getArg(e,"line"),generatedColumn:i.getArg(e,"column")},n=o.search(t,this._sections,(function(e,t){var n=e.generatedLine-t.generatedOffset.generatedLine;return n||e.generatedColumn-t.generatedOffset.generatedColumn})),r=this._sections[n];return r?r.consumer.originalPositionFor({line:t.generatedLine-(r.generatedOffset.generatedLine-1),column:t.generatedColumn-(r.generatedOffset.generatedLine===t.generatedLine?r.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var n=0;n<this._sections.length;n++){var r=this._sections[n].consumer.sourceContentFor(e,!0);if(r)return r}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var n=this._sections[t];if(-1!==n.consumer._findSourceIndex(i.getArg(e,"source"))){var r=n.consumer.generatedPositionFor(e);if(r)return{line:r.line+(n.generatedOffset.generatedLine-1),column:r.column+(n.generatedOffset.generatedLine===r.line?n.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var n=0;n<this._sections.length;n++)for(var r=this._sections[n],s=r.consumer._generatedMappings,o=0;o<s.length;o++){var a=s[o],c=r.consumer._sources.at(a.source);c=i.computeSourceURL(r.consumer.sourceRoot,c,this._sourceMapURL),this._sources.add(c),c=this._sources.indexOf(c);var u=null;a.name&&(u=r.consumer._names.at(a.name),this._names.add(u),u=this._names.indexOf(u));var h={source:c,generatedLine:a.generatedLine+(r.generatedOffset.generatedLine-1),generatedColumn:a.generatedColumn+(r.generatedOffset.generatedLine===a.generatedLine?r.generatedOffset.generatedColumn-1:0),originalLine:a.originalLine,originalColumn:a.originalColumn,name:u};this.__generatedMappings.push(h),"number"==typeof h.originalLine&&this.__originalMappings.push(h)}l(this.__generatedMappings,i.compareByGeneratedPositionsDeflated),l(this.__originalMappings,i.compareByOriginalPositions)}})),s.register("bTtvB",(function(t,n){var r,i,s;function o(e,t,n,r,s,a){var c=Math.floor((t-e)/2)+e,l=s(n,r[c],!0);return 0===l?c:l>0?t-c>1?o(c,t,n,r,s,a):a==i?t<r.length?t:-1:c:c-e>1?o(e,c,n,r,s,a):a==i?c:e<0?-1:e}e(t.exports,"GREATEST_LOWER_BOUND",(function(){return r}),(function(e){return r=e})),e(t.exports,"LEAST_UPPER_BOUND",(function(){return i}),(function(e){return i=e})),e(t.exports,"search",(function(){return s}),(function(e){return s=e})),r=1,i=2,s=function(e,t,n,i){if(0===t.length)return-1;var s=o(-1,t.length,e,t,n,i||r);if(s<0)return-1;for(;s-1>=0&&0===n(t[s],t[s-1],!0);)--s;return s}})),s.register("76ffZ",(function(t,n){var r;function i(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function s(e,t,n,r){if(n<r){var o=n-1;i(e,(u=n,h=r,Math.round(u+Math.random()*(h-u))),r);for(var a=e[r],c=n;c<r;c++)t(e[c],a)<=0&&i(e,o+=1,c);i(e,o+1,c);var l=o+1;s(e,t,n,l-1),s(e,t,l+1,r)}var u,h}e(t.exports,"quickSort",(function(){return r}),(function(e){return r=e})),r=function(e,t){s(e,t,0,e.length-1)}})),s.register("Tx9qF",(function(t,n){var r;e(t.exports,"SourceNode",(function(){return r}),(function(e){return r=e}));var i=s("ic7WM").SourceMapGenerator,o=s("dQK2c"),a=/(\r?\n)/;function c(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==n?null:n,this.name=null==i?null:i,this.$$$isSourceNode$$$=!0,null!=r&&this.add(r)}c.fromStringWithSourceMap=function(e,t,n){var r=new c,i=e.split(a),s=0,l=function(){return e()+(e()||"");function e(){return s<i.length?i[s++]:void 0}},u=1,h=0,d=null;return t.eachMapping((function(e){if(null!==d){if(!(u<e.generatedLine)){var t=(n=i[s]||"").substr(0,e.generatedColumn-h);return i[s]=n.substr(e.generatedColumn-h),h=e.generatedColumn,p(d,t),void(d=e)}p(d,l()),u++,h=0}for(;u<e.generatedLine;)r.add(l()),u++;if(h<e.generatedColumn){var n=i[s]||"";r.add(n.substr(0,e.generatedColumn)),i[s]=n.substr(e.generatedColumn),h=e.generatedColumn}d=e}),this),s<i.length&&(d&&p(d,l()),r.add(i.splice(s).join(""))),t.sources.forEach((function(e){var i=t.sourceContentFor(e);null!=i&&(null!=n&&(e=o.join(n,e)),r.setSourceContent(e,i))})),r;function p(e,t){if(null===e||void 0===e.source)r.add(t);else{var i=n?o.join(n,e.source):e.source;r.add(new c(e.originalLine,e.originalColumn,i,t,e.name))}}},c.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},c.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e.$$$isSourceNode$$$&&"string"!=typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},c.prototype.walk=function(e){for(var t,n=0,r=this.children.length;n<r;n++)(t=this.children[n]).$$$isSourceNode$$$?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},c.prototype.join=function(e){var t,n,r=this.children.length;if(r>0){for(t=[],n=0;n<r-1;n++)t.push(this.children[n]),t.push(e);t.push(this.children[n]),this.children=t}return this},c.prototype.replaceRight=function(e,t){var n=this.children[this.children.length-1];return n.$$$isSourceNode$$$?n.replaceRight(e,t):"string"==typeof n?this.children[this.children.length-1]=n.replace(e,t):this.children.push("".replace(e,t)),this},c.prototype.setSourceContent=function(e,t){this.sourceContents[o.toSetString(e)]=t},c.prototype.walkSourceContents=function(e){for(var t=0,n=this.children.length;t<n;t++)this.children[t].$$$isSourceNode$$$&&this.children[t].walkSourceContents(e);var r=Object.keys(this.sourceContents);for(t=0,n=r.length;t<n;t++)e(o.fromSetString(r[t]),this.sourceContents[r[t]])},c.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},c.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},n=new i(e),r=!1,s=null,o=null,a=null,c=null;return this.walk((function(e,i){t.code+=e,null!==i.source&&null!==i.line&&null!==i.column?(s===i.source&&o===i.line&&a===i.column&&c===i.name||n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name}),s=i.source,o=i.line,a=i.column,c=i.name,r=!0):r&&(n.addMapping({generated:{line:t.line,column:t.column}}),s=null,r=!1);for(var l=0,u=e.length;l<u;l++)10===e.charCodeAt(l)?(t.line++,t.column=0,l+1===u?(s=null,r=!1):r&&n.addMapping({source:i.source,original:{line:i.line,column:i.column},generated:{line:t.line,column:t.column},name:i.name})):t.column++})),this.walkSourceContents((function(e,t){n.setSourceContent(e,t)})),{code:t.code,map:n}},r=c})),s.register("5Io6y",(function(e,t){})),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuBtns:document.querySelector("[data-menu-btn]")};function t(){e.menu.classList.toggle("is-open"),e.menuBtns.classList.toggle("display-none")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})();var o,a={};function c(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var l={};function u(e){return e&&e.__esModule?e:{default:e}}function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}l.__esModule=!0;var d,p,f,m,g,_,v,y,b,w={};function k(e){return e&&e.__esModule?e:{default:e}}e(w,"__esModule",(function(){return d}),(function(e){return d=e})),e(w,"HandlebarsEnvironment",(function(){return p}),(function(e){return p=e})),e(w,"VERSION",(function(){return f}),(function(e){return f=e})),e(w,"COMPILER_REVISION",(function(){return m}),(function(e){return m=e})),e(w,"LAST_COMPATIBLE_COMPILER_REVISION",(function(){return g}),(function(e){return g=e})),e(w,"REVISION_CHANGES",(function(){return _}),(function(e){return _=e})),e(w,"log",(function(){return v}),(function(e){return v=e})),e(w,"createFrame",(function(){return y}),(function(e){return y=e})),e(w,"logger",(function(){return b}),(function(e){return b=e})),d=!0,p=Pe;var S,C,I,E,T,P,N,R,O,A,L,x={};e(x,"__esModule",(function(){return S}),(function(e){return S=e})),e(x,"extend",(function(){return C}),(function(e){return C=e})),e(x,"indexOf",(function(){return I}),(function(e){return I=e})),e(x,"escapeExpression",(function(){return E}),(function(e){return E=e})),e(x,"isEmpty",(function(){return T}),(function(e){return T=e})),e(x,"createFrame",(function(){return P}),(function(e){return P=e})),e(x,"blockParams",(function(){return N}),(function(e){return N=e})),e(x,"appendContextPath",(function(){return R}),(function(e){return R=e})),e(x,"toString",(function(){return O}),(function(e){return O=e})),e(x,"isFunction",(function(){return A}),(function(e){return A=e})),e(x,"isArray",(function(){return L}),(function(e){return L=e})),S=!0,C=B,I=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},E=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return F.test(e)?e.replace(D,U):e},T=function(e){return!e&&0!==e||!(!q(e)||0!==e.length)},P=function(e){var t=B({},e);return t._parent=e,t},N=function(e,t){return e.path=t,e},R=function(e,t){return(e?e+".":"")+t};var M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},D=/[&<>"'`=]/g,F=/[&<>"'`=]/;function U(e){return M[e]}function B(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var j=Object.prototype.toString;O=j;var H=function(e){return"function"==typeof e};H(/x/)&&(A=H=function(e){return"function"==typeof e&&"[object Function]"===j.call(e)}),A=H;var q=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===j.call(e)};L=q;var $={__esModule:!0},W=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function V(e,t){var n=t&&t.loc,r=void 0,i=void 0,s=void 0,o=void 0;n&&(r=n.start.line,i=n.end.line,s=n.start.column,o=n.end.column,e+=" - "+r+":"+s);for(var a=Error.prototype.constructor.call(this,e),c=0;c<W.length;c++)this[W[c]]=a[W[c]];Error.captureStackTrace&&Error.captureStackTrace(this,V);try{n&&(this.lineNumber=r,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:o,enumerable:!0})):(this.column=s,this.endColumn=o))}catch(e){}}V.prototype=new Error,$.default=V;var z,K,G=k($=$.default);function J(e){return e&&e.__esModule?e:{default:e}}z=function(e){Q.default(e),te.default(e),ie.default(e),ae.default(e),le.default(e),he.default(e),me.default(e)},K=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var Y={__esModule:!0,default:function(e){e.registerHelper("blockHelperMissing",(function(t,n){var r=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return r(this);if(L(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var s=P(n.data);s.contextPath=R(n.data.contextPath,n.name),n={data:s}}return i(t,n)}))}},Q=J(Y=Y.default),X={};X.__esModule=!0;var Z,ee=(Z=$)&&Z.__esModule?Z:{default:Z};X.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new ee.default("Must pass iterator to #each");var r,i=t.fn,s=t.inverse,o=0,a="",c=void 0,l=void 0;function u(t,n,r){c&&(c.key=t,c.index=n,c.first=0===n,c.last=!!r,l&&(c.contextPath=l+t)),a+=i(e[t],{data:c,blockParams:N([e[t],t],[l+t,null])})}if(t.data&&t.ids&&(l=R(t.data.contextPath,t.ids[0])+"."),A(e)&&(e=e.call(this)),t.data&&(c=P(t.data)),e&&"object"==typeof e)if(L(e))for(var h=e.length;o<h;o++)o in e&&u(o,o,o===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var d=[],p=e[n.Symbol.iterator](),f=p.next();!f.done;f=p.next())d.push(f.value);for(h=(e=d).length;o<h;o++)u(o,o,o===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&u(r,o-1),r=e,o++})),void 0!==r&&u(r,o-1,!0);return 0===o&&(a=s(this)),a}))};var te=J(X=X.default),ne={};ne.__esModule=!0;var re=function(e){return e&&e.__esModule?e:{default:e}}($);ne.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new re.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))};var ie=J(ne=ne.default),se={};se.__esModule=!0;var oe=function(e){return e&&e.__esModule?e:{default:e}}($);se.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new oe.default("#if requires exactly one argument");return A(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||T(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new oe.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))};var ae=J(se=se.default),ce={__esModule:!0,default:function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var i=1;null!=n.hash.level?i=n.hash.level:n.data&&null!=n.data.level&&(i=n.data.level),t[0]=i,e.log.apply(e,t)}))}},le=J(ce=ce.default),ue={__esModule:!0,default:function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))}},he=J(ue=ue.default),de={};de.__esModule=!0;var pe=function(e){return e&&e.__esModule?e:{default:e}}($);de.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new pe.default("#with requires exactly one argument");A(e)&&(e=e.call(this));var n=t.fn;if(T(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=P(t.data)).contextPath=R(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:N([e],[r&&r.contextPath])})}))};var fe,me=J(de=de.default);fe=function(e){_e.default(e)};var ge={__esModule:!0,default:function(e){e.registerDecorator("inline",(function(e,t,n,r){var i=e;return t.partials||(t.partials={},i=function(r,i){var s=n.partials;n.partials=C({},s,t.partials);var o=e(r,i);return n.partials=s,o}),t.partials[r.args[0]]=r.fn,i}))}},_e=function(e){return e&&e.__esModule?e:{default:e}}(ge=ge.default);var ve={__esModule:!0},ye={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=I(ye.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=ye.lookupLevel(e),"undefined"!=typeof console&&ye.lookupLevel(ye.level)<=e){var t=ye.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};ve.default=ye;var be,we,ke,Se,Ce=k(ve=ve.default);be=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:Se(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:Se(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},we=function(e,t,n){return Te("function"==typeof e?t.methods:t.properties,n)},ke=function(){Object.keys(Ee).forEach((function(e){delete Ee[e]}))},Se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return C.apply(void 0,[Object.create(null)].concat(t))};var Ie=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(ve),Ee=Object.create(null);function Te(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==Ee[e]&&(Ee[e]=!0,Ie.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}f="4.7.7";m=8;g=7;_={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function Pe(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},z(this),fe(this)}Pe.prototype={constructor:Pe,logger:Ce.default,log:Ce.default.log,registerHelper:function(e,t){if("[object Object]"===O.call(e)){if(t)throw new G.default("Arg not supported with multiple helpers");C(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===O.call(e))C(this.partials,e);else{if(void 0===t)throw new G.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===O.call(e)){if(t)throw new G.default("Arg not supported with multiple decorators");C(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){ke()}};var Ne=Ce.default.log;v=Ne,y=P,b=Ce.default;var Re=h(w),Oe={};function Ae(e){this.string=e}Oe.__esModule=!0,Ae.prototype.toString=Ae.prototype.toHTML=function(){return""+this.string},Oe.default=Ae;var Le,xe,Me,De,Fe,Ue,Be,je=u(Oe=Oe.default),He=u($),qe=h(x),$e={};e($e,"__esModule",(function(){return Le}),(function(e){return Le=e})),e($e,"checkRevision",(function(){return xe}),(function(e){return xe=e})),e($e,"template",(function(){return Me}),(function(e){return Me=e})),e($e,"wrapProgram",(function(){return De}),(function(e){return De=e})),e($e,"resolvePartial",(function(){return Fe}),(function(e){return Fe=e})),e($e,"invokePartial",(function(){return Ue}),(function(e){return Ue=e})),e($e,"noop",(function(){return Be}),(function(e){return Be=e})),Le=!0,xe=function(e){var t=e&&e[0]||1,n=m;if(t>=g&&t<=m)return;if(t<g){var r=_[n],i=_[t];throw new ze.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}throw new ze.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},Me=function(e,t){if(!t)throw new ze.default("No environment passed to template");if(!e||!e.main)throw new ze.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new ze.default('"'+t+'" not defined in '+e,{loc:n});return r.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||we(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,i=0;i<n;i++){if(null!=(e[i]&&r.lookupProperty(e[i],t)))return e[i][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:Ve.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=Ve.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var s=Ve.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),o=t.VM.invokePartial.call(this,n,r,s);if(null==o&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),o=i.partials[i.name](r,s)),null!=o){if(i.indent){for(var a=o.split("\n"),c=0,l=a.length;c<l&&(a[c]||c+1!==l);c++)a[c]=i.indent+a[c];o=a.join("\n")}return o}throw new ze.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,i){var s=this.programs[e],o=this.fn(e);return t||i||r||n?s=Ke(this,e,o,t,n,r,i):s||(s=this.programs[e]=Ke(this,e,o)),s},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=Ve.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=n.data;i._setup(n),!n.partial&&e.useData&&(s=Je(t,s));var o=void 0,a=e.useBlockParams?[]:void 0;function c(t){return""+e.main(r,t,r.helpers,r.partials,s,a,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(c=Ye(e.main,c,r,n.depths||[],s,a))(t,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var s=Ve.extend({},t.helpers,i.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return We(e,(function(e){return Ve.extend({lookupProperty:n},e)}))}(r,t)}))}(s,r),r.helpers=s,e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=Ve.extend({},t.decorators,i.decorators)),r.hooks={},r.protoAccessControl=be(i);var o=i.allowCallsToHelperMissing||n;K(r,"helperMissing",o),K(r,"blockHelperMissing",o)}},i._child=function(t,n,i,s){if(e.useBlockParams&&!i)throw new ze.default("must pass block params");if(e.useDepths&&!s)throw new ze.default("must pass parent depths");return Ke(r,t,e[t],n,0,i,s)},i},De=Ke,Fe=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},Ue=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==Ge&&function(){n.data=y(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=y(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=Ve.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new ze.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},Be=Ge;var We,Ve=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(x),ze=function(e){return e&&e.__esModule?e:{default:e}}($);function Ke(e,t,n,r,i,s,o){function a(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(a=[t].concat(o)),n(e,t,e.helpers,e.partials,i.data||r,s&&[i.blockParams].concat(s),a)}return(a=Ye(n,a,e,o,r,s)).program=t,a.depth=o?o.length:0,a.blockParams=i||0,a}function Ge(){return""}function Je(e,t){return t&&"root"in t||((t=t?y(t):{}).root=e),t}function Ye(e,t,n,r,i,s){if(e.decorator){var o={};t=e.decorator(t,o,n,r&&r[0],i,s,r),Ve.extend(t,o)}return t}We=function(e,t){if("function"!=typeof e)return e;return function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}};var Qe=h($e),Xe={__esModule:!0,default:function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}}},Ze=u(Xe=Xe.default);function et(){var e=new Re.HandlebarsEnvironment;return qe.extend(e,Re),e.SafeString=je.default,e.Exception=He.default,e.Utils=qe,e.escapeExpression=qe.escapeExpression,e.VM=Qe,e.template=function(t){return Qe.template(t,e)},e}var tt=et();tt.create=et,Ze.default(tt),tt.default=tt,l.default=tt;var nt=c(l=l.default),rt={__esModule:!0},it={helpers:{helperExpression:function(e){return"SubExpression"===e.type||("MustacheStatement"===e.type||"BlockStatement"===e.type)&&!!(e.params&&e.params.length||e.hash)},scopedId:function(e){return/^\.|this\b/.test(e.original)},simpleId:function(e){return 1===e.parts.length&&!it.helpers.scopedId(e)&&!e.depth}}};rt.default=it;var st,ot,at,ct=c(rt=rt.default);function lt(e){return e&&e.__esModule?e:{default:e}}st=zt,ot=function(e,t){var n=zt(e,t);return new Ft.default(t).accept(n)};var ut={__esModule:!0},ht=function(){var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(e,t,n,r,i,s,o){var a=s.length-1;switch(i){case 1:return s[a-1];case 2:this.$=r.prepareProgram(s[a]);break;case 3:case 4:case 5:case 6:case 7:case 8:case 20:case 27:case 28:case 33:case 34:case 40:case 41:this.$=s[a];break;case 9:this.$={type:"CommentStatement",value:r.stripComment(s[a]),strip:r.stripFlags(s[a],s[a]),loc:r.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:s[a],value:s[a],loc:r.locInfo(this._$)};break;case 11:this.$=r.prepareRawBlock(s[a-2],s[a-1],s[a],this._$);break;case 12:this.$={path:s[a-3],params:s[a-2],hash:s[a-1]};break;case 13:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!1,this._$);break;case 14:this.$=r.prepareBlock(s[a-3],s[a-2],s[a-1],s[a],!0,this._$);break;case 15:this.$={open:s[a-5],path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 16:case 17:this.$={path:s[a-4],params:s[a-3],hash:s[a-2],blockParams:s[a-1],strip:r.stripFlags(s[a-5],s[a])};break;case 18:this.$={strip:r.stripFlags(s[a-1],s[a-1]),program:s[a]};break;case 19:var c=r.prepareBlock(s[a-2],s[a-1],s[a],s[a],!1,this._$),l=r.prepareProgram([c],s[a-1].loc);l.chained=!0,this.$={strip:s[a-2].strip,program:l,chain:!0};break;case 21:this.$={path:s[a-1],strip:r.stripFlags(s[a-2],s[a])};break;case 22:case 23:this.$=r.prepareMustache(s[a-3],s[a-2],s[a-1],s[a-4],r.stripFlags(s[a-4],s[a]),this._$);break;case 24:this.$={type:"PartialStatement",name:s[a-3],params:s[a-2],hash:s[a-1],indent:"",strip:r.stripFlags(s[a-4],s[a]),loc:r.locInfo(this._$)};break;case 25:this.$=r.preparePartialBlock(s[a-2],s[a-1],s[a],this._$);break;case 26:this.$={path:s[a-3],params:s[a-2],hash:s[a-1],strip:r.stripFlags(s[a-4],s[a])};break;case 29:this.$={type:"SubExpression",path:s[a-3],params:s[a-2],hash:s[a-1],loc:r.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:s[a],loc:r.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:r.id(s[a-2]),value:s[a],loc:r.locInfo(this._$)};break;case 32:this.$=r.id(s[a-1]);break;case 35:this.$={type:"StringLiteral",value:s[a],original:s[a],loc:r.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(s[a]),original:Number(s[a]),loc:r.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===s[a],original:"true"===s[a],loc:r.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:r.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:r.locInfo(this._$)};break;case 42:this.$=r.preparePath(!0,s[a],this._$);break;case 43:this.$=r.preparePath(!1,s[a],this._$);break;case 44:s[a-2].push({part:r.id(s[a]),original:s[a],separator:s[a-1]}),this.$=s[a-2];break;case 45:this.$=[{part:r.id(s[a]),original:s[a]}];break;case 46:case 48:case 50:case 58:case 64:case 70:case 78:case 82:case 86:case 90:case 94:this.$=[];break;case 47:case 49:case 51:case 59:case 65:case 71:case 79:case 83:case 87:case 91:case 95:case 99:case 101:s[a-1].push(s[a]);break;case 98:case 100:this.$=[s[a]]}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(e,t){throw new Error(e)},parse:function(e){var t=this,n=[0],r=[null],i=[],s=this.table,o="",a=0,c=0,l=0;this.lexer.setInput(e),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,void 0===this.lexer.yylloc&&(this.lexer.yylloc={});var u=this.lexer.yylloc;i.push(u);var h=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var d,p,f,m,g,_,v,y,b,w,k={};;){if(f=n[n.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==d&&(w=void 0,"number"!=typeof(w=t.lexer.lex()||1)&&(w=t.symbols_[w]||w),d=w),m=s[f]&&s[f][d]),void 0===m||!m.length||!m[0]){var S="";if(!l){for(_ in b=[],s[f])this.terminals_[_]&&_>2&&b.push("'"+this.terminals_[_]+"'");S=this.lexer.showPosition?"Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[d]||d)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==d?"end of input":"'"+(this.terminals_[d]||d)+"'"),this.parseError(S,{text:this.lexer.match,token:this.terminals_[d]||d,line:this.lexer.yylineno,loc:u,expected:b})}}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+d);switch(m[0]){case 1:n.push(d),r.push(this.lexer.yytext),i.push(this.lexer.yylloc),n.push(m[1]),d=null,p?(d=p,p=null):(c=this.lexer.yyleng,o=this.lexer.yytext,a=this.lexer.yylineno,u=this.lexer.yylloc,l>0&&l--);break;case 2:if(v=this.productions_[m[1]][1],k.$=r[r.length-v],k._$={first_line:i[i.length-(v||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(v||1)].first_column,last_column:i[i.length-1].last_column},h&&(k._$.range=[i[i.length-(v||1)].range[0],i[i.length-1].range[1]]),void 0!==(g=this.performAction.call(k,o,c,a,this.yy,m[1],r,i)))return g;v&&(n=n.slice(0,-1*v*2),r=r.slice(0,-1*v),i=i.slice(0,-1*v)),n.push(this.productions_[m[1]][0]),r.push(k.$),i.push(k._$),y=s[n[n.length-2]][n[n.length-1]],n.push(y);break;case 3:return!0}}return!0}},t=function(){var e={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;var e,t,n,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),o=0;o<s.length&&(!(n=this._input.match(this.rules[s[o]]))||t&&!(n[0].length>t[0].length)||(t=n,r=o,this.options.flex));o++);return t?((i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,s[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e||void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return void 0!==e?e:this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(e){this.begin(e)},options:{},performAction:function(e,t,n,r){function i(e,n){return t.yytext=t.yytext.substring(e,t.yyleng-n+e)}switch(n){case 0:if("\\\\"===t.yytext.slice(-2)?(i(0,1),this.begin("mu")):"\\"===t.yytext.slice(-1)?(i(0,1),this.begin("emu")):this.begin("mu"),t.yytext)return 15;break;case 1:case 5:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(i(5,9),"END_RAW_BLOCK");case 6:case 22:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:case 23:return 48;case 21:this.unput(t.yytext),this.popState(),this.begin("com");break;case 24:return 73;case 25:case 26:case 41:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return t.yytext=i(1,2).replace(/\\"/g,'"'),80;case 32:return t.yytext=i(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 42:return t.yytext=t.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}}};return e}();function n(){this.yy={}}return e.lexer=t,n.prototype=e,e.Parser=n,new n}();ut.default=ht;var dt=lt(ut=ut.default),pt={};pt.__esModule=!0;var ft={};ft.__esModule=!0;var mt=function(e){return e&&e.__esModule?e:{default:e}}($);function gt(){this.parents=[]}function _t(e){this.acceptRequired(e,"path"),this.acceptArray(e.params),this.acceptKey(e,"hash")}function vt(e){_t.call(this,e),this.acceptKey(e,"program"),this.acceptKey(e,"inverse")}function yt(e){this.acceptRequired(e,"name"),this.acceptArray(e.params),this.acceptKey(e,"hash")}gt.prototype={constructor:gt,mutating:!1,acceptKey:function(e,t){var n=this.accept(e[t]);if(this.mutating){if(n&&!gt.prototype[n.type])throw new mt.default('Unexpected node type "'+n.type+'" found when accepting '+t+" on "+e.type);e[t]=n}},acceptRequired:function(e,t){if(this.acceptKey(e,t),!e[t])throw new mt.default(e.type+" requires "+t)},acceptArray:function(e){for(var t=0,n=e.length;t<n;t++)this.acceptKey(e,t),e[t]||(e.splice(t,1),t--,n--)},accept:function(e){if(e){if(!this[e.type])throw new mt.default("Unknown type: "+e.type,e);this.current&&this.parents.unshift(this.current),this.current=e;var t=this[e.type](e);return this.current=this.parents.shift(),!this.mutating||t?t:!1!==t?e:void 0}},Program:function(e){this.acceptArray(e.body)},MustacheStatement:_t,Decorator:_t,BlockStatement:vt,DecoratorBlock:vt,PartialStatement:yt,PartialBlockStatement:function(e){yt.call(this,e),this.acceptKey(e,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:_t,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(e){this.acceptArray(e.pairs)},HashPair:function(e){this.acceptRequired(e,"value")}},ft.default=gt;var bt=function(e){return e&&e.__esModule?e:{default:e}}(ft=ft.default);function wt(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=e}function kt(e,t,n){void 0===t&&(t=e.length);var r=e[t-1],i=e[t-2];return r?"ContentStatement"===r.type?(i||!n?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(r.original):void 0:n}function St(e,t,n){void 0===t&&(t=-1);var r=e[t+1],i=e[t+2];return r?"ContentStatement"===r.type?(i||!n?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(r.original):void 0:n}function Ct(e,t,n){var r=e[null==t?0:t+1];if(r&&"ContentStatement"===r.type&&(n||!r.rightStripped)){var i=r.value;r.value=r.value.replace(n?/^\s+/:/^[ \t]*\r?\n?/,""),r.rightStripped=r.value!==i}}function It(e,t,n){var r=e[null==t?e.length-1:t-1];if(r&&"ContentStatement"===r.type&&(n||!r.leftStripped)){var i=r.value;return r.value=r.value.replace(n?/\s+$/:/[ \t]+$/,""),r.leftStripped=r.value!==i,r.leftStripped}}wt.prototype=new bt.default,wt.prototype.Program=function(e){var t=!this.options.ignoreStandalone,n=!this.isRootSeen;this.isRootSeen=!0;for(var r=e.body,i=0,s=r.length;i<s;i++){var o=r[i],a=this.accept(o);if(a){var c=kt(r,i,n),l=St(r,i,n),u=a.openStandalone&&c,h=a.closeStandalone&&l,d=a.inlineStandalone&&c&&l;a.close&&Ct(r,i,!0),a.open&&It(r,i,!0),t&&d&&(Ct(r,i),It(r,i)&&"PartialStatement"===o.type&&(o.indent=/([ \t]+$)/.exec(r[i-1].original)[1])),t&&u&&(Ct((o.program||o.inverse).body),It(r,i)),t&&h&&(Ct(r,i),It((o.inverse||o.program).body))}}return e},wt.prototype.BlockStatement=wt.prototype.DecoratorBlock=wt.prototype.PartialBlockStatement=function(e){this.accept(e.program),this.accept(e.inverse);var t=e.program||e.inverse,n=e.program&&e.inverse,r=n,i=n;if(n&&n.chained)for(r=n.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var s={open:e.openStrip.open,close:e.closeStrip.close,openStandalone:St(t.body),closeStandalone:kt((r||t).body)};if(e.openStrip.close&&Ct(t.body,null,!0),n){var o=e.inverseStrip;o.open&&It(t.body,null,!0),o.close&&Ct(r.body,null,!0),e.closeStrip.open&&It(i.body,null,!0),!this.options.ignoreStandalone&&kt(t.body)&&St(r.body)&&(It(t.body),Ct(r.body))}else e.closeStrip.open&&It(t.body,null,!0);return s},wt.prototype.Decorator=wt.prototype.MustacheStatement=function(e){return e.strip},wt.prototype.PartialStatement=wt.prototype.CommentStatement=function(e){var t=e.strip||{};return{inlineStandalone:!0,open:t.open,close:t.close}},pt.default=wt;var Et,Tt,Pt,Nt,Rt,Ot,At,Lt,xt,Mt,Dt,Ft=lt(pt=pt.default),Ut={};e(Ut,"__esModule",(function(){return Et}),(function(e){return Et=e})),e(Ut,"SourceLocation",(function(){return Tt}),(function(e){return Tt=e})),e(Ut,"id",(function(){return Pt}),(function(e){return Pt=e})),e(Ut,"stripFlags",(function(){return Nt}),(function(e){return Nt=e})),e(Ut,"stripComment",(function(){return Rt}),(function(e){return Rt=e})),e(Ut,"preparePath",(function(){return Ot}),(function(e){return Ot=e})),e(Ut,"prepareMustache",(function(){return At}),(function(e){return At=e})),e(Ut,"prepareRawBlock",(function(){return Lt}),(function(e){return Lt=e})),e(Ut,"prepareBlock",(function(){return xt}),(function(e){return xt=e})),e(Ut,"prepareProgram",(function(){return Mt}),(function(e){return Mt=e})),e(Ut,"preparePartialBlock",(function(){return Dt}),(function(e){return Dt=e})),Et=!0,Tt=function(e,t){this.source=e,this.start={line:t.first_line,column:t.first_column},this.end={line:t.last_line,column:t.last_column}},Pt=function(e){return/^\[.*\]$/.test(e)?e.substring(1,e.length-1):e},Nt=function(e,t){return{open:"~"===e.charAt(2),close:"~"===t.charAt(t.length-3)}},Rt=function(e){return e.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")},Ot=function(e,t,n){n=this.locInfo(n);for(var r=e?"@":"",i=[],s=0,o=0,a=t.length;o<a;o++){var c=t[o].part,l=t[o].original!==c;if(r+=(t[o].separator||"")+c,l||".."!==c&&"."!==c&&"this"!==c)i.push(c);else{if(i.length>0)throw new Bt.default("Invalid path: "+r,{loc:n});".."===c&&s++}}return{type:"PathExpression",data:e,depth:s,parts:i,original:r,loc:n}},At=function(e,t,n,r,i,s){var o=r.charAt(3)||r.charAt(2),a="{"!==o&&"&"!==o;return{type:/\*/.test(r)?"Decorator":"MustacheStatement",path:e,params:t,hash:n,escaped:a,strip:i,loc:this.locInfo(s)}},Lt=function(e,t,n,r){jt(e,n),r=this.locInfo(r);var i={type:"Program",body:t,strip:{},loc:r};return{type:"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:i,openStrip:{},inverseStrip:{},closeStrip:{},loc:r}},xt=function(e,t,n,r,i,s){r&&r.path&&jt(e,r);var o=/\*/.test(e.open);t.blockParams=e.blockParams;var a=void 0,c=void 0;if(n){if(o)throw new Bt.default("Unexpected inverse block on decorator",n);n.chain&&(n.program.body[0].closeStrip=r.strip),c=n.strip,a=n.program}i&&(i=a,a=t,t=i);return{type:o?"DecoratorBlock":"BlockStatement",path:e.path,params:e.params,hash:e.hash,program:t,inverse:a,openStrip:e.strip,inverseStrip:c,closeStrip:r&&r.strip,loc:this.locInfo(s)}},Mt=function(e,t){if(!t&&e.length){var n=e[0].loc,r=e[e.length-1].loc;n&&r&&(t={source:n.source,start:{line:n.start.line,column:n.start.column},end:{line:r.end.line,column:r.end.column}})}return{type:"Program",body:e,strip:{},loc:t}},Dt=function(e,t,n,r){return jt(e,n),{type:"PartialBlockStatement",name:e.path,params:e.params,hash:e.hash,program:t,openStrip:e.strip,closeStrip:n&&n.strip,loc:this.locInfo(r)}};var Bt=function(e){return e&&e.__esModule?e:{default:e}}($);function jt(e,t){if(t=t.path?t.path.original:t,e.path.original!==t){var n={loc:e.path.loc};throw new Bt.default(e.path.original+" doesn't match "+t,n)}}var Ht=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(Ut);at=dt.default;var qt,$t,Wt,Vt={};function zt(e,t){return"Program"===e.type?e:(dt.default.yy=Vt,Vt.locInfo=function(e){return new Vt.SourceLocation(t&&t.srcName,e)},dt.default.parse(e))}function Kt(e){return e&&e.__esModule?e:{default:e}}C(Vt,Ht),qt=Qt,$t=function(e,t,n){if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new Gt.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e);"data"in(t=t||{})||(t.data=!0);t.compat&&(t.useDepths=!0);var r=n.parse(e,t),i=(new n.Compiler).compile(r,t);return(new n.JavaScriptCompiler).compile(i,t)},Wt=function(e,t,n){void 0===t&&(t={});if(null==e||"string"!=typeof e&&"Program"!==e.type)throw new Gt.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e);"data"in(t=C({},t))||(t.data=!0);t.compat&&(t.useDepths=!0);var r=void 0;function i(){var r=n.parse(e,t),i=(new n.Compiler).compile(r,t),s=(new n.JavaScriptCompiler).compile(i,t,void 0,!0);return n.template(s)}function s(e,t){return r||(r=i()),r.call(this,e,t)}return s._setup=function(e){return r||(r=i()),r._setup(e)},s._child=function(e,t,n,s){return r||(r=i()),r._child(e,t,n,s)},s};var Gt=Kt($),Jt=Kt(rt),Yt=[].slice;function Qt(){}function Xt(e,t){if(e===t)return!0;if(L(e)&&L(t)&&e.length===t.length){for(var n=0;n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}}function Zt(e){if(!e.path.parts){var t=e.path;e.path={type:"PathExpression",data:!1,depth:0,parts:[t.original+""],original:t.original+"",loc:t.loc}}}Qt.prototype={compiler:Qt,equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t)return!1;for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||!Xt(r.args,i.args))return!1}t=this.children.length;for(n=0;n<t;n++)if(!this.children[n].equals(e.children[n]))return!1;return!0},guid:0,compile:function(e,t){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=t,this.stringParams=t.stringParams,this.trackIds=t.trackIds,t.blockParams=t.blockParams||[],t.knownHelpers=C(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},t.knownHelpers),this.accept(e)},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++;return this.usePartial=this.usePartial||t.usePartial,this.children[n]=t,this.useDepths=this.useDepths||t.useDepths,n},accept:function(e){if(!this[e.type])throw new Gt.default("Unknown type: "+e.type,e);this.sourceNode.unshift(e);var t=this[e.type](e);return this.sourceNode.shift(),t},Program:function(e){this.options.blockParams.unshift(e.blockParams);for(var t=e.body,n=t.length,r=0;r<n;r++)this.accept(t[r]);return this.options.blockParams.shift(),this.isSimple=1===n,this.blockParams=e.blockParams?e.blockParams.length:0,this},BlockStatement:function(e){Zt(e);var t=e.program,n=e.inverse;t=t&&this.compileProgram(t),n=n&&this.compileProgram(n);var r=this.classifySexpr(e);"helper"===r?this.helperSexpr(e,t,n):"simple"===r?(this.simpleSexpr(e),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("blockValue",e.path.original)):(this.ambiguousSexpr(e,t,n),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(e){var t=e.program&&this.compileProgram(e.program),n=this.setupFullMustacheParams(e,t,void 0),r=e.path;this.useDecorators=!0,this.opcode("registerDecorator",n.length,r.original)},PartialStatement:function(e){this.usePartial=!0;var t=e.program;t&&(t=this.compileProgram(e.program));var n=e.params;if(n.length>1)throw new Gt.default("Unsupported number of partial arguments: "+n.length,e);n.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):n.push({type:"PathExpression",parts:[],depth:0}));var r=e.name.original,i="SubExpression"===e.name.type;i&&this.accept(e.name),this.setupFullMustacheParams(e,t,void 0,!0);var s=e.indent||"";this.options.preventIndent&&s&&(this.opcode("appendContent",s),s=""),this.opcode("invokePartial",i,r,s),this.opcode("append")},PartialBlockStatement:function(e){this.PartialStatement(e)},MustacheStatement:function(e){this.SubExpression(e),e.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(e){this.DecoratorBlock(e)},ContentStatement:function(e){e.value&&this.opcode("appendContent",e.value)},CommentStatement:function(){},SubExpression:function(e){Zt(e);var t=this.classifySexpr(e);"simple"===t?this.simpleSexpr(e):"helper"===t?this.helperSexpr(e):this.ambiguousSexpr(e)},ambiguousSexpr:function(e,t,n){var r=e.path,i=r.parts[0],s=null!=t||null!=n;this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),r.strict=!0,this.accept(r),this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.path;t.strict=!0,this.accept(t),this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.path,s=i.parts[0];if(this.options.knownHelpers[s])this.opcode("invokeKnownHelper",r.length,s);else{if(this.options.knownHelpersOnly)throw new Gt.default("You specified knownHelpersOnly, but used the unknown helper "+s,e);i.strict=!0,i.falsy=!0,this.accept(i),this.opcode("invokeHelper",r.length,i.original,Jt.default.helpers.simpleId(i))}},PathExpression:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0],n=Jt.default.helpers.scopedId(e),r=!e.depth&&!n&&this.blockParamIndex(t);r?this.opcode("lookupBlockParam",r,e.parts):t?e.data?(this.options.data=!0,this.opcode("lookupData",e.depth,e.parts,e.strict)):this.opcode("lookupOnContext",e.parts,e.falsy,e.strict,n):this.opcode("pushContext")},StringLiteral:function(e){this.opcode("pushString",e.value)},NumberLiteral:function(e){this.opcode("pushLiteral",e.value)},BooleanLiteral:function(e){this.opcode("pushLiteral",e.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(e){var t=e.pairs,n=0,r=t.length;for(this.opcode("pushHash");n<r;n++)this.pushParam(t[n].value);for(;n--;)this.opcode("assignToHash",t[n].key);this.opcode("popHash")},opcode:function(e){this.opcodes.push({opcode:e,args:Yt.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(e){e&&(this.useDepths=!0)},classifySexpr:function(e){var t=Jt.default.helpers.simpleId(e.path),n=t&&!!this.blockParamIndex(e.path.parts[0]),r=!n&&Jt.default.helpers.helperExpression(e),i=!n&&(r||t);if(i&&!r){var s=e.path.parts[0],o=this.options;o.knownHelpers[s]?r=!0:o.knownHelpersOnly&&(i=!1)}return r?"helper":i?"ambiguous":"simple"},pushParams:function(e){for(var t=0,n=e.length;t<n;t++)this.pushParam(e[t])},pushParam:function(e){var t=null!=e.value?e.value:e.original||"";if(this.stringParams)t.replace&&(t=t.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",t,e.type),"SubExpression"===e.type&&this.accept(e);else{if(this.trackIds){var n=void 0;if(!e.parts||Jt.default.helpers.scopedId(e)||e.depth||(n=this.blockParamIndex(e.parts[0])),n){var r=e.parts.slice(1).join(".");this.opcode("pushId","BlockParam",n,r)}else(t=e.original||t).replace&&(t=t.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",e.type,t)}this.accept(e)}},setupFullMustacheParams:function(e,t,n,r){var i=e.params;return this.pushParams(i),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.accept(e.hash):this.opcode("emptyHash",r),i},blockParamIndex:function(e){for(var t=0,n=this.options.blockParams.length;t<n;t++){var r=this.options.blockParams[t],i=r&&I(r,e);if(r&&i>=0)return[t,i]}}};var en={};function tn(e){return e&&e.__esModule?e:{default:e}}en.__esModule=!0;var nn=tn($),rn={__esModule:!0},sn=void 0;try{if("function"!=typeof define||!define.amd){var on=s("9QQ9J");sn=on.SourceNode}}catch(e){}function an(e,t,n){if(L(e)){for(var r=[],i=0,s=e.length;i<s;i++)r.push(t.wrap(e[i],n));return r}return"boolean"==typeof e||"number"==typeof e?e+"":e}function cn(e){this.srcFile=e,this.source=[]}sn||((sn=function(e,t,n,r){this.src="",r&&this.add(r)}).prototype={add:function(e){L(e)&&(e=e.join("")),this.src+=e},prepend:function(e){L(e)&&(e=e.join("")),this.src=e+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),cn.prototype={isEmpty:function(){return!this.source.length},prepend:function(e,t){this.source.unshift(this.wrap(e,t))},push:function(e,t){this.source.push(this.wrap(e,t))},merge:function(){var e=this.empty();return this.each((function(t){e.add(["  ",t,"\n"])})),e},each:function(e){for(var t=0,n=this.source.length;t<n;t++)e(this.source[t])},empty:function(){var e=this.currentLocation||{start:{}};return new sn(e.start.line,e.start.column,this.srcFile)},wrap:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return e instanceof sn?e:(e=an(e,this,t),new sn(t.start.line,t.start.column,this.srcFile,e))},functionCall:function(e,t,n){return n=this.generateList(n),this.wrap([e,t?"."+t+"(":"(",n,")"])},quotedString:function(e){return'"'+(e+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(e){var t=this,n=[];Object.keys(e).forEach((function(r){var i=an(e[r],t);"undefined"!==i&&n.push([t.quotedString(r),":",i])}));var r=this.generateList(n);return r.prepend("{"),r.add("}"),r},generateList:function(e){for(var t=this.empty(),n=0,r=e.length;n<r;n++)n&&t.add(","),t.add(an(e[n],this));return t},generateArray:function(e){var t=this.generateList(e);return t.prepend("["),t.add("]"),t}},rn.default=cn;var ln=tn(rn=rn.default);function un(e){this.value=e}function hn(){}hn.prototype={nameLookup:function(e,t){return this.internalNameLookup(e,t)},depthedLookup:function(e){return[this.aliasable("container.lookup"),"(depths, ",JSON.stringify(e),")"]},compilerInfo:function(){return[m,_[m]]},appendToBuffer:function(e,t,n){return L(e)||(e=[e]),e=this.source.wrap(e,t),this.environment.isSimple?["return ",e,";"]:n?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(e,t){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",e,",",JSON.stringify(t),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(e,t,n,r){this.environment=e,this.options=t,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!r,this.name=this.environment.name,this.isChild=!!n,this.context=n||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(e,t),this.useDepths=this.useDepths||e.useDepths||e.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||e.useBlockParams;var i=e.opcodes,s=void 0,o=void 0,a=void 0,c=void 0;for(a=0,c=i.length;a<c;a++)s=i[a],this.source.currentLocation=s.loc,o=o||s.loc,this[s.opcode].apply(this,s.args);if(this.source.currentLocation=o,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new nn.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),";\n"]),this.decorators.push("return fn;"),r?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var l=this.createFunctionContext(r);if(this.isChild)return l;var u={compiler:this.compilerInfo(),main:l};this.decorators&&(u.main_d=this.decorators,u.useDecorators=!0);var h=this.context,d=h.programs,p=h.decorators;for(a=0,c=d.length;a<c;a++)d[a]&&(u[a]=d[a],p[a]&&(u[a+"_d"]=p[a],u.useDecorators=!0));return this.environment.usePartial&&(u.usePartial=!0),this.options.data&&(u.useData=!0),this.useDepths&&(u.useDepths=!0),this.useBlockParams&&(u.useBlockParams=!0),this.options.compat&&(u.compat=!0),r?u.compilerOptions=this.options:(u.compiler=JSON.stringify(u.compiler),this.source.currentLocation={start:{line:1,column:0}},u=this.objectLiteral(u),t.srcName?(u=u.toStringWithSourceMap({file:t.destName})).map=u.map&&u.map.toString():u=u.toString()),u},preamble:function(){this.lastContext=0,this.source=new ln.default(this.options.srcName),this.decorators=new ln.default(this.options.srcName)},createFunctionContext:function(e){var t=this,n="",r=this.stackVars.concat(this.registers.list);r.length>0&&(n+=", "+r.join(", "));var i=0;Object.keys(this.aliases).forEach((function(e){var r=t.aliases[e];r.children&&r.referenceCount>1&&(n+=", alias"+ ++i+"="+e,r.children[0]="alias"+i)})),this.lookupPropertyFunctionIsUsed&&(n+=", "+this.lookupPropertyFunctionVarDeclaration());var s=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&s.push("blockParams"),this.useDepths&&s.push("depths");var o=this.mergeSource(n);return e?(s.push(o),Function.apply(this,s)):this.source.wrap(["function(",s.join(","),") {\n  ",o,"}"])},mergeSource:function(e){var t=this.environment.isSimple,n=!this.forceBuffer,r=void 0,i=void 0,s=void 0,o=void 0;return this.source.each((function(e){e.appendToBuffer?(s?e.prepend("  + "):s=e,o=e):(s&&(i?s.prepend("buffer += "):r=!0,o.add(";"),s=o=void 0),i=!0,t||(n=!1))})),n?s?(s.prepend("return "),o.add(";")):i||this.source.push('return "";'):(e+=", buffer = "+(r?"":this.initializeBuffer()),s?(s.prepend("return buffer + "),o.add(";")):this.source.push("return buffer;")),e&&this.source.prepend("var "+e.substring(2)+(r?"":";\n")),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return"\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()},blockValue:function(e){var t=this.aliasable("container.hooks.blockHelperMissing"),n=[this.contextName(0)];this.setupHelperArgs(e,0,n);var r=this.popStack();n.splice(1,0,r),this.push(this.source.functionCall(t,"call",n))},ambiguousBlockValue:function(){var e=this.aliasable("container.hooks.blockHelperMissing"),t=[this.contextName(0)];this.setupHelperArgs("",0,t,!0),this.flushInline();var n=this.topStack();t.splice(1,0,n),this.pushSource(["if (!",this.lastHelper,") { ",n," = ",this.source.functionCall(e,"call",t),"}"])},appendContent:function(e){this.pendingContent?e=this.pendingContent+e:this.pendingLocation=this.source.currentLocation,this.pendingContent=e},append:function(){if(this.isInline())this.replaceStack((function(e){return[" != null ? ",e,' : ""']})),this.pushSource(this.appendToBuffer(this.popStack()));else{var e=this.popStack();this.pushSource(["if (",e," != null) { ",this.appendToBuffer(e,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(e){this.lastContext=e},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(e,t,n,r){var i=0;r||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(e[i++])),this.resolvePath("context",e,i,t,n)},lookupBlockParam:function(e,t){this.useBlockParams=!0,this.push(["blockParams[",e[0],"][",e[1],"]"]),this.resolvePath("context",t,1)},lookupData:function(e,t,n){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",t,0,!0,n)},resolvePath:function(e,t,n,r,i){var s=this;if(this.options.strict||this.options.assumeObjects)this.push(function(e,t,n,r){var i=t.popStack(),s=0,o=n.length;e&&o--;for(;s<o;s++)i=t.nameLookup(i,n[s],r);return e?[t.aliasable("container.strict"),"(",i,", ",t.quotedString(n[s]),", ",JSON.stringify(t.source.currentLocation)," )"]:i}(this.options.strict&&i,this,t,e));else for(var o=t.length;n<o;n++)this.replaceStack((function(i){var o=s.nameLookup(i,t[n],e);return r?[" && ",o]:[" != null ? ",o," : ",i]}))},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(e,t){this.pushContext(),this.pushString(t),"SubExpression"!==t&&("string"==typeof e?this.pushString(e):this.pushStackLiteral(e))},emptyHash:function(e){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(e?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(e.ids)),this.stringParams&&(this.push(this.objectLiteral(e.contexts)),this.push(this.objectLiteral(e.types))),this.push(this.objectLiteral(e.values))},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){null!=e?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},registerDecorator:function(e,t){var n=this.nameLookup("decorators",t,"decorator"),r=this.setupHelperArgs(t,e);this.decorators.push(["fn = ",this.decorators.functionCall(n,"",["fn","props","container",r])," || fn;"])},invokeHelper:function(e,t,n){var r=this.popStack(),i=this.setupHelper(e,t),s=[];n&&s.push(i.name),s.push(r),this.options.strict||s.push(this.aliasable("container.hooks.helperMissing"));var o=["(",this.itemsSeparatedBy(s,"||"),")"],a=this.source.functionCall(o,"call",i.callParams);this.push(a)},itemsSeparatedBy:function(e,t){var n=[];n.push(e[0]);for(var r=1;r<e.length;r++)n.push(t,e[r]);return n},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(this.source.functionCall(n.name,"call",n.callParams))},invokeAmbiguous:function(e,t){this.useRegister("helper");var n=this.popStack();this.emptyHash();var r=this.setupHelper(0,e,t),i=["(","(helper = ",this.lastHelper=this.nameLookup("helpers",e,"helper")," || ",n,")"];this.options.strict||(i[0]="(helper = ",i.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",i,r.paramsInit?["),(",r.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",r.callParams)," : helper))"])},invokePartial:function(e,t,n){var r=[],i=this.setupParams(t,1,r);e&&(t=this.popStack(),delete i.name),n&&(i.indent=JSON.stringify(n)),i.helpers="helpers",i.partials="partials",i.decorators="container.decorators",e?r.unshift(t):r.unshift(this.nameLookup("partials",t,"partial")),this.options.compat&&(i.depths="depths"),i=this.objectLiteral(i),r.push(i),this.push(this.source.functionCall("container.invokePartial","",r))},assignToHash:function(e){var t=this.popStack(),n=void 0,r=void 0,i=void 0;this.trackIds&&(i=this.popStack()),this.stringParams&&(r=this.popStack(),n=this.popStack());var s=this.hash;n&&(s.contexts[e]=n),r&&(s.types[e]=r),i&&(s.ids[e]=i),s.values[e]=t},pushId:function(e,t,n){"BlockParam"===e?this.pushStackLiteral("blockParams["+t[0]+"].path["+t[1]+"]"+(n?" + "+JSON.stringify("."+n):"")):"PathExpression"===e?this.pushString(t):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:hn,compileChildren:function(e,t){for(var n=e.children,r=void 0,i=void 0,s=0,o=n.length;s<o;s++){r=n[s],i=new this.compiler;var a=this.matchExistingProgram(r);if(null==a){this.context.programs.push("");var c=this.context.programs.length;r.index=c,r.name="program"+c,this.context.programs[c]=i.compile(r,t,this.context,!this.precompile),this.context.decorators[c]=i.decorators,this.context.environments[c]=r,this.useDepths=this.useDepths||i.useDepths,this.useBlockParams=this.useBlockParams||i.useBlockParams,r.useDepths=this.useDepths,r.useBlockParams=this.useBlockParams}else r.index=a.index,r.name="program"+a.index,this.useDepths=this.useDepths||a.useDepths,this.useBlockParams=this.useBlockParams||a.useBlockParams}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e))return r}},programExpression:function(e){var t=this.environment.children[e],n=[t.index,"data",t.blockParams];return(this.useBlockParams||this.useDepths)&&n.push("blockParams"),this.useDepths&&n.push("depths"),"container.program("+n.join(", ")+")"},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},push:function(e){return e instanceof un||(e=this.source.wrap(e)),this.inlineStack.push(e),e},pushStackLiteral:function(e){this.push(new un(e))},pushSource:function(e){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),e&&this.source.push(e)},replaceStack:function(e){var t=["("],n=void 0,r=void 0,i=void 0;if(!this.isInline())throw new nn.default("replaceStack on non-inline");var s=this.popStack(!0);if(s instanceof un)t=["(",n=[s.value]],i=!0;else{r=!0;var o=this.incrStack();t=["((",this.push(o)," = ",s,")"],n=this.topStack()}var a=e.call(this,n);i||this.popStack(),r&&this.stackSlot--,this.push(t.concat(a,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof un)this.compileStack.push(r);else{var i=this.incrStack();this.pushSource([i," = ",r,";"]),this.compileStack.push(i)}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof un)return n.value;if(!t){if(!this.stackSlot)throw new nn.default("Invalid stack pop");this.stackSlot--}return n},topStack:function(){var e=this.isInline()?this.inlineStack:this.compileStack,t=e[e.length-1];return t instanceof un?t.value:t},contextName:function(e){return this.useDepths&&e?"depths["+e+"]":"depth"+e},quotedString:function(e){return this.source.quotedString(e)},objectLiteral:function(e){return this.source.objectLiteral(e)},aliasable:function(e){var t=this.aliases[e];return t?(t.referenceCount++,t):((t=this.aliases[e]=this.source.wrap(e)).aliasable=!0,t.referenceCount=1,t)},setupHelper:function(e,t,n){var r=[];return{params:r,paramsInit:this.setupHelperArgs(t,e,r,n),name:this.nameLookup("helpers",t,"helper"),callParams:[this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})")].concat(r)}},setupParams:function(e,t,n){var r={},i=[],s=[],o=[],a=!n,c=void 0;a&&(n=[]),r.name=this.quotedString(e),r.hash=this.popStack(),this.trackIds&&(r.hashIds=this.popStack()),this.stringParams&&(r.hashTypes=this.popStack(),r.hashContexts=this.popStack());var l=this.popStack(),u=this.popStack();(u||l)&&(r.fn=u||"container.noop",r.inverse=l||"container.noop");for(var h=t;h--;)c=this.popStack(),n[h]=c,this.trackIds&&(o[h]=this.popStack()),this.stringParams&&(s[h]=this.popStack(),i[h]=this.popStack());return a&&(r.args=this.source.generateArray(n)),this.trackIds&&(r.ids=this.source.generateArray(o)),this.stringParams&&(r.types=this.source.generateArray(s),r.contexts=this.source.generateArray(i)),this.options.data&&(r.data="data"),this.useBlockParams&&(r.blockParams="blockParams"),r},setupHelperArgs:function(e,t,n,r){var i=this.setupParams(e,t,n);return i.loc=JSON.stringify(this.source.currentLocation),i=this.objectLiteral(i),r?(this.useRegister("options"),n.push("options"),["options=",i]):n?(n.push(i),""):i}},function(){for(var e="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),t=hn.RESERVED_WORDS={},n=0,r=e.length;n<r;n++)t[e[n]]=!0}(),hn.isValidJavaScriptVariableName=function(e){return!hn.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)},en.default=hn;var dn=c(en=en.default),pn=c(ft),fn=c(Xe),mn=nt.default.create;function gn(){var e=mn();return e.compile=function(t,n){return Wt(t,n,e)},e.precompile=function(t,n){return $t(t,n,e)},e.AST=ct.default,e.Compiler=qt,e.JavaScriptCompiler=dn.default,e.Parser=at,e.parse=ot,e.parseWithoutProcessing=st,e}var _n=gn();_n.create=gn,fn.default(_n),_n.Visitor=pn.default,_n.default=_n,a.default=_n;var vn,yn,bn=(a=a.default).default;vn=function(e){return(new kn).accept(e)},yn=kn;var wn=function(e){return e&&e.__esModule?e:{default:e}}(ft);function kn(){this.padding=0}kn.prototype=new wn.default,kn.prototype.pad=function(e){for(var t="",n=0,r=this.padding;n<r;n++)t+="  ";return t+=e+"\n"},kn.prototype.Program=function(e){var t="",n=e.body,r=void 0,i=void 0;if(e.blockParams){var s="BLOCK PARAMS: [";for(r=0,i=e.blockParams.length;r<i;r++)s+=" "+e.blockParams[r];s+=" ]",t+=this.pad(s)}for(r=0,i=n.length;r<i;r++)t+=this.accept(n[r]);return this.padding--,t},kn.prototype.MustacheStatement=function(e){return this.pad("{{ "+this.SubExpression(e)+" }}")},kn.prototype.Decorator=function(e){return this.pad("{{ DIRECTIVE "+this.SubExpression(e)+" }}")},kn.prototype.BlockStatement=kn.prototype.DecoratorBlock=function(e){var t="";return t+=this.pad(("DecoratorBlock"===e.type?"DIRECTIVE ":"")+"BLOCK:"),this.padding++,t+=this.pad(this.SubExpression(e)),e.program&&(t+=this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--),e.inverse&&(e.program&&this.padding++,t+=this.pad("{{^}}"),this.padding++,t+=this.accept(e.inverse),this.padding--,e.program&&this.padding--),this.padding--,t},kn.prototype.PartialStatement=function(e){var t="PARTIAL:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),this.pad("{{> "+t+" }}")},kn.prototype.PartialBlockStatement=function(e){var t="PARTIAL BLOCK:"+e.name.original;return e.params[0]&&(t+=" "+this.accept(e.params[0])),e.hash&&(t+=" "+this.accept(e.hash)),t+=" "+this.pad("PROGRAM:"),this.padding++,t+=this.accept(e.program),this.padding--,this.pad("{{> "+t+" }}")},kn.prototype.ContentStatement=function(e){return this.pad("CONTENT[ '"+e.value+"' ]")},kn.prototype.CommentStatement=function(e){return this.pad("{{! '"+e.value+"' }}")},kn.prototype.SubExpression=function(e){for(var t,n=e.params,r=[],i=0,s=n.length;i<s;i++)r.push(this.accept(n[i]));return n="["+r.join(", ")+"]",t=e.hash?" "+this.accept(e.hash):"",this.accept(e.path)+" "+n+t},kn.prototype.PathExpression=function(e){var t=e.parts.join("/");return(e.data?"@":"")+"PATH:"+t},kn.prototype.StringLiteral=function(e){return'"'+e.value+'"'},kn.prototype.NumberLiteral=function(e){return"NUMBER{"+e.value+"}"},kn.prototype.BooleanLiteral=function(e){return"BOOLEAN{"+e.value+"}"},kn.prototype.UndefinedLiteral=function(){return"UNDEFINED"},kn.prototype.NullLiteral=function(){return"NULL"},kn.prototype.Hash=function(e){for(var t=e.pairs,n=[],r=0,i=t.length;r<i;r++)n.push(this.accept(t[r]));return"HASH{"+n.join(", ")+"}"},kn.prototype.HashPair=function(e){return e.key+"="+this.accept(e.value)},bn.PrintVisitor=yn,bn.print=vn;var Sn=t(o=bn).template({1:function(e,t,n,r,i){var s=e.lambda,o=e.escapeExpression;return"  <li class='hero__item hero__item--"+o(s(t,t))+"'>\n    <a href='#' class='hero__link'>"+o(s(t,t))+"</a></li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(s=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"letter"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:4,column:9}}}))?s:""},useData:!0});var Cn=t(o).template({1:function(e,t,n,r,i){var s=e.lambda,o=e.escapeExpression;return"  <option class='option' value='"+o(s(t,t))+"'>"+o(s(t,t))+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(s=o(n,"each").call(null!=t?t:e.nullContext||{},null!=t?o(t,"letter"):t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?s:""},useData:!0});const In={heroList:document.querySelector(".hero__list"),heroSelect:document.querySelector(".hero__select")},{heroList:En,heroSelect:Tn}=In,Pn={letter:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]};function Nn(e,t,n){const r=n(e);return t.insertAdjacentHTML("beforeend",r)}Nn(Pn,Tn,Cn),Nn(Pn,En,Sn),(()=>{const e={backdrop:document.querySelector("[data-modal]"),closeBtn:document.querySelector("[data-modal-close]")};e.closeBtn.addEventListener("click",(function(){e.backdrop.classList.add("is-hidden-modal-coctails")}))})(),(()=>{const e={backdrop:document.querySelector("[data-modal-2]"),closeBtn:document.querySelector("[data-modal-close-2]")};e.closeBtn.addEventListener("click",(function(){e.backdrop.classList.add("is-hidden-modal-two")}))})();(()=>{const e={removBtn:document.querySelector("[data-modal-b]"),addBtn:document.querySelector("[data-modal-a]")};e.addBtn.addEventListener("click",(function(){e.removBtn.classList.remove("hidden_remove")}))})(),(()=>{const e={removBtn:document.querySelector("[data-modal-d]"),addBtn:document.querySelector("[data-modal-c]")};e.addBtn.addEventListener("click",(function(){e.removBtn.classList.remove("hidden-components-modal")}))})();var Rn=t(o).template({1:function(e,t,n,r,i){var s,o=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,c="function",l=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="team__item">\n <a href="'+l(typeof(s=null!=(s=u(n,"git")||(null!=t?u(t,"git"):t))?s:a)===c?s.call(o,{name:"git",hash:{},data:i,loc:{start:{line:5,column:10},end:{line:5,column:17}}}):s)+'" target="_blank" class="team__link">\n      <img class="team__image" src="'+l(typeof(s=null!=(s=u(n,"photo")||(null!=t?u(t,"photo"):t))?s:a)===c?s.call(o,{name:"photo",hash:{},data:i,loc:{start:{line:6,column:36},end:{line:6,column:45}}}):s)+'"/>\n      <div class="team-meta">\n        <p class="team__item-text">'+l(typeof(s=null!=(s=u(n,"role")||(null!=t?u(t,"role"):t))?s:a)===c?s.call(o,{name:"role",hash:{},data:i,loc:{start:{line:8,column:35},end:{line:8,column:43}}}):s)+'</p>\n          <p class="team__item-title">'+l(typeof(s=null!=(s=u(n,"name")||(null!=t?u(t,"name"):t))?s:a)===c?s.call(o,{name:"name",hash:{},data:i,loc:{start:{line:9,column:38},end:{line:9,column:46}}}):s)+"</p>\n  </div>\n </a>\n</div>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,i){var s;return'<div class="modal-team"> \n<div class="team__container">\n'+(null!=(s=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:3,column:0},end:{line:13,column:9}}}))?s:"")+"</div>\n</div> "},useData:!0});const On={teamContainer:document.querySelector(".team__container")};!function(e){const t=Rn(e);On.teamContainer.innerHTML=t}([{git:"https://github.com/Mitya-Kupriianov/",photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"Вовк Андр",role:"TeamLead"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"не не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"не Вовк и не Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"},{photo:"https://s1.hostingkartinok.com/uploads/thumbs/2022/08/887b8343468de8cdbbaecb09bc258784.png",name:"точно не Вовк Андр",role:"Developer"}]);const An={footerOpenBtn:document.querySelector("[data-modal-team-open]"),footerCloseBtn:document.querySelector("[data-modal-team-close]"),teamContainer:document.querySelector(".team__container"),modal:document.querySelector("[data-modal-team]")};function Ln(e){e.preventDefault(),document.body.classList.toggle("modal-open"),An.modal.classList.toggle("is-hidden")}An.footerOpenBtn.addEventListener("click",Ln),An.footerCloseBtn.addEventListener("click",Ln);const xn={buttonLogin:document.querySelector(".js-btn-login")},Mn=!1,Dn=!1,Fn="${JSCORE_VERSION}",Un=function(e,t){if(!e)throw Bn(t)},Bn=function(e){return new Error("Firebase Database ("+Fn+") INTERNAL ASSERT FAILED: "+e)},jn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},qn=function(e){const t=jn(e);return Hn.encodeByteArray(t,!0)},$n=function(e){return qn(e).replace(/\./g,"")},Wn=function(e){try{return Hn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Vn(e){return zn(void 0,e)}function zn(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=zn(e[n],t[n]));return e}
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
class Kn{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
function Gn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Jn(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gn())}function Yn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Qn(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Xn(){const e=Gn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Zn(){return!0===Mn||!0===Dn}class er extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tr.prototype.create)}}class tr{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(nr,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new er(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const nr=/\{\$([^}]+)}/g;
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
 */function rr(e){return JSON.parse(e)}function ir(e){return JSON.stringify(e)}
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
 */const sr=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=rr(Wn(s[0])||""),n=rr(Wn(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},or=function(e){const t=sr(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ar=function(e){const t=sr(e).claims;return"object"==typeof t&&!0===t.admin};
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
function cr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function lr(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ur(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function hr(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function dr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(pr(n)&&pr(s)){if(!dr(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function pr(e){return null!==e&&"object"==typeof e}
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
function fr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function gr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class _r{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):e<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+l+i+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function vr(e,t){const n=new yr(e,t);return n.subscribe.bind(n)}class yr{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=br),void 0===r.error&&(r.error=br),void 0===r.complete&&(r.complete=br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function br(){}
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
 */function wr(e,t){return`${e} failed: ${t} argument `}
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
const kr=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,Un(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Sr=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Cr(e){return e&&e._delegate?e._delegate:e}class Ir{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Er{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Kn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Tr{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Er(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const Pr=[];var Nr,Rr;(Rr=Nr||(Nr={}))[Rr.DEBUG=0]="DEBUG",Rr[Rr.VERBOSE=1]="VERBOSE",Rr[Rr.INFO=2]="INFO",Rr[Rr.WARN=3]="WARN",Rr[Rr.ERROR=4]="ERROR",Rr[Rr.SILENT=5]="SILENT";const Or={debug:Nr.DEBUG,verbose:Nr.VERBOSE,info:Nr.INFO,warn:Nr.WARN,error:Nr.ERROR,silent:Nr.SILENT},Ar=Nr.INFO,Lr={[Nr.DEBUG]:"log",[Nr.VERBOSE]:"log",[Nr.INFO]:"info",[Nr.WARN]:"warn",[Nr.ERROR]:"error"},xr=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Lr[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Mr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Or[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nr.DEBUG,...e),this._logHandler(this,Nr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nr.VERBOSE,...e),this._logHandler(this,Nr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nr.INFO,...e),this._logHandler(this,Nr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nr.WARN,...e),this._logHandler(this,Nr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nr.ERROR,...e),this._logHandler(this,Nr.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Ar,this._logHandler=xr,this._userLogHandler=null,Pr.push(this)}}let Dr,Fr;const Ur=new WeakMap,Br=new WeakMap,jr=new WeakMap,Hr=new WeakMap,qr=new WeakMap;let $r={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Br.get(e);if("objectStoreNames"===t)return e.objectStoreNames||jr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Wr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Fr||(Fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Kr(this),t),zr(Ur.get(this))}:function(...t){return zr(e.apply(Kr(this),t))}:function(t,...n){const r=e.call(Kr(this),t,...n);return jr.set(r,t.sort?t.sort():[t]),zr(r)}}function Vr(e){return"function"==typeof e?Wr(e):(e instanceof IDBTransaction&&function(e){if(Br.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Br.set(e,t)}(e),t=e,(Dr||(Dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,$r):e);var t}function zr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(zr(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ur.set(t,e)})).catch((()=>{})),qr.set(t,e),t}(e);if(Hr.has(e))return Hr.get(e);const t=Vr(e);return t!==e&&(Hr.set(e,t),qr.set(t,e)),t}const Kr=e=>qr.get(e);function Gr(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=zr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(zr(o.result),e.oldVersion,e.newVersion,zr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Jr=["get","getKey","getAll","getAllKeys","count"],Yr=["put","add","delete","clear"],Qr=new Map;function Xr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Qr.get(t))return Qr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Jr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Qr.set(t,s),s}$r=(e=>({...e,get:(t,n,r)=>Xr(t,n)||e.get(t,n,r),has:(t,n)=>!!Xr(t,n)||e.has(t,n)}))($r);
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
class Zr{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ei=new Mr("@firebase/app"),ti={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ni=new Map,ri=new Map;function ii(e,t){try{e.container.addComponent(t)}catch(n){ei.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function si(e){const t=e.name;if(ri.has(t))return ei.debug(`There were multiple attempts to register component ${t}.`),!1;ri.set(t,e);for(const t of ni.values())ii(t,e);return!0}function oi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const ai=new tr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ci{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ir("app",(()=>this),"PUBLIC"))}}
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
 */function li(e="[DEFAULT]"){const t=ni.get(e);if(!t)throw ai.create("no-app",{appName:e});return t}function ui(e,t,n){var r;let i=null!==(r=ti[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ei.warn(e.join(" "))}si(new Ir(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let hi=null;function di(){return hi||(hi=Gr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ai.create("idb-open",{originalErrorMessage:e.message})}))),hi}async function pi(e,t){var n;try{const n=(await di()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,fi(e)),n.done}catch(e){if(e instanceof er)ei.warn(e.message);else{const t=ai.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});ei.warn(t.message)}}}function fi(e){return`${e.name}!${e.options.appId}`}
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
 */class mi{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=gi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=gi(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),vi(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=$n(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _i(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function gi(){return(new Date).toISOString().substring(0,10)}class _i{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await di()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(fi(e))}catch(e){if(e instanceof er)ei.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});ei.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return pi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return pi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function vi(e){return $n(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var yi;yi="",si(new Ir("platform-logger",(e=>new Zr(e)),"PRIVATE")),si(new Ir("heartbeat",(e=>new mi(e)),"PRIVATE")),ui("@firebase/app","0.7.30",yi),ui("@firebase/app","0.7.30","esm2017"),ui("fire-js","");
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
ui("firebase","9.9.2","app");var bi,wi,ki,Si=bi={};function Ci(){throw new Error("setTimeout has not been defined")}function Ii(){throw new Error("clearTimeout has not been defined")}function Ei(e){if(wi===setTimeout)return setTimeout(e,0);if((wi===Ci||!wi)&&setTimeout)return wi=setTimeout,setTimeout(e,0);try{return wi(e,0)}catch(t){try{return wi.call(null,e,0)}catch(t){return wi.call(this,e,0)}}}!function(){try{wi="function"==typeof setTimeout?setTimeout:Ci}catch(e){wi=Ci}try{ki="function"==typeof clearTimeout?clearTimeout:Ii}catch(e){ki=Ii}}();var Ti,Pi=[],Ni=!1,Ri=-1;function Oi(){Ni&&Ti&&(Ni=!1,Ti.length?Pi=Ti.concat(Pi):Ri=-1,Pi.length&&Ai())}function Ai(){if(!Ni){var e=Ei(Oi);Ni=!0;for(var t=Pi.length;t;){for(Ti=Pi,Pi=[];++Ri<t;)Ti&&Ti[Ri].run();Ri=-1,t=Pi.length}Ti=null,Ni=!1,function(e){if(ki===clearTimeout)return clearTimeout(e);if((ki===Ii||!ki)&&clearTimeout)return ki=clearTimeout,clearTimeout(e);try{ki(e)}catch(t){try{return ki.call(null,e)}catch(t){return ki.call(this,e)}}}(e)}}function Li(e,t){this.fun=e,this.array=t}function xi(){}Si.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Pi.push(new Li(e,t)),1!==Pi.length||Ni||Ei(Ai)},Li.prototype.run=function(){this.fun.apply(null,this.array)},Si.title="browser",Si.browser=!0,Si.env={},Si.argv=[],Si.version="",Si.versions={},Si.on=xi,Si.addListener=xi,Si.once=xi,Si.off=xi,Si.removeListener=xi,Si.removeAllListeners=xi,Si.emit=xi,Si.prependListener=xi,Si.prependOnceListener=xi,Si.listeners=function(e){return[]},Si.binding=function(e){throw new Error("process.binding is not supported")},Si.cwd=function(){return"/"},Si.chdir=function(e){throw new Error("process.chdir is not supported")},Si.umask=function(){return 0};
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
 */let Mi="";
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
class Di{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ir(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:rr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class Fi{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return cr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const Ui=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Di(t)}}catch(e){}return new Fi},Bi=Ui("localStorage"),ji=Ui("sessionStorage"),Hi=new Mr("@firebase/database"),qi=function(){let e=1;return function(){return e++}}(),$i=function(e){const t=kr(e),n=new _r;n.update(t);const r=n.digest();return Hn.encodeByteArray(r)},Wi=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Wi.apply(null,r):t+="object"==typeof r?ir(r):r,t+=" "}return t};let Vi=null,zi=!0;const Ki=function(e,t){Un(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Hi.logLevel=Nr.VERBOSE,Vi=Hi.log.bind(Hi),t&&ji.set("logging_enabled",!0)):"function"==typeof e?Vi=e:(Vi=null,ji.remove("logging_enabled"))},Gi=function(...e){if(!0===zi&&(zi=!1,null===Vi&&!0===ji.get("logging_enabled")&&Ki(!0)),Vi){const t=Wi.apply(null,e);Vi(t)}},Ji=function(e){return function(...t){Gi(e,...t)}},Yi=function(...e){const t="FIREBASE INTERNAL ERROR: "+Wi(...e);Hi.error(t)},Qi=function(...e){const t=`FIREBASE FATAL ERROR: ${Wi(...e)}`;throw Hi.error(t),new Error(t)},Xi=function(...e){const t="FIREBASE WARNING: "+Wi(...e);Hi.warn(t)},Zi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},es=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=cs(e),r=cs(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},ts=function(e,t){return e===t?0:e<t?-1:1},ns=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ir(t))},rs=function(e){if("object"!=typeof e||null===e)return ir(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=ir(t[r]),n+=":",n+=rs(e[t[r]]);return n+="}",n},is=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function ss(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const os=function(e){Un(!Zi(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const as=new RegExp("^-?(0*)\\d{1,10}$"),cs=function(e){if(as.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},ls=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Xi("Exception was thrown by user callback.",t),e}),Math.floor(0))}},us=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class hs{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Xi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class ds{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Gi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xi(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class ps{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}ps.OWNER="owner";
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
const fs=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class ms{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bi.get("host:"+e)||this._host}}function gs(e,t,n){let r;if(Un("string"==typeof t,"typeof type must == string"),Un("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return ss(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
 */class _s{incrementCounter(e,t=1){cr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Vn(this.counters_)}constructor(){this.counters_={}}}
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
 */const vs={},ys={};function bs(e){const t=e.toString();return vs[t]||(vs[t]=new _s),vs[t]}
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
class ws{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ls((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class ks{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ws(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Zn()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ss(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&fs.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return!Zn()&&(!!ks.forceAllow_||!(ks.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ir(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=qn(t),r=is(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Zn())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ir(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ji(e),this.stats_=bs(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),gs(t,"long_polling",e))}}class Ss{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Gi("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){Zn()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Gi("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Zn())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=qi(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ss.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){Gi("frame writing exception"),e.stack&&Gi(e.stack),Gi(e)}}}}
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
 */let Cs=null;"undefined"!=typeof MozWebSocket?Cs=MozWebSocket:"undefined"!=typeof WebSocket&&(Cs=WebSocket);class Is{static connectionURL_(e,t,n,r,i){const s={v:"5"};return!Zn()&&"undefined"!=typeof location&&location.hostname&&fs.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),gs(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bi.set("previous_websocket_failure",!0);try{let e;if(Zn()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Mi}/${bi.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new Cs(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Is.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Cs&&!Is.forceDisallow_}static previouslyFailed(){return Bi.isInMemoryStorage||!0===Bi.get("previous_websocket_failure")}markConnectionHealthy(){Bi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=rr(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Un(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ir(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=is(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ji(this.connId),this.stats_=bs(t),this.connURL=Is.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}}Is.responsesRequiredToBeHealthy=2,Is.healthyTimeout=3e4;
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
class Es{static get ALL_TRANSPORTS(){return[ks,Is]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Is&&Is.isAvailable();let n=t&&!Is.previouslyFailed();if(e.webSocketOnly&&(t||Xi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Is];else{const e=this.transports_=[];for(const t of Es.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Es.globalTransportInitialized_=!1;class Ts{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=us((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ns("t",e),n=ns("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ns("t",e),n=ns("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ns("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Yi("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Xi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),us((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ji("c:"+this.id+":"),this.transportManager_=new Es(t),this.log_("Connection created"),this.start_()}}
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
 */class Ps{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Ns{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){Un(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},Un(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class Rs extends Ns{static getInstance(){return new Rs}getInitialEvent(e){return Un("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Jn()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class Os{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function As(){return new Os("")}function Ls(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function xs(e){return e.pieces_.length-e.pieceNum_}function Ms(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Os(e.pieces_,t)}function Ds(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Fs(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Us(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Os(t,0)}function Bs(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Os)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Os(n,0)}function js(e){return e.pieceNum_>=e.pieces_.length}function Hs(e,t){const n=Ls(e),r=Ls(t);if(null===n)return t;if(n===r)return Hs(Ms(e),Ms(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function qs(e,t){if(xs(e)!==xs(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function $s(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(xs(e)>xs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Ws{constructor(e,t){this.errorPrefix_=t,this.parts_=Fs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Sr(this.parts_[e]);Vs(this)}}function Vs(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+zs(e))}function zs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Ks extends Ns{static getInstance(){return new Ks}getInitialEvent(e){return Un("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */class Gs extends Ps{sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ir(i)),Un(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Kn,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Un(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Un(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;Gs.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&cr(e,"w")){const n=lr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Xi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ar(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=or(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Un(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ir(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Yi("Unrecognized action received from server: "+ir(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Un(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Gs.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){Un(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?Gi("getToken() completed but was canceled"):(Gi("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new Ts(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Xi(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Xi(e),a())}}}interrupt(e){Gi("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Gi("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ur(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>rs(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Os(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Gi("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Gi("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Zn()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Mi.replace(/\./g,"-")]=1,Jn()?e["framework.cordova"]=1:Qn()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rs.getInstance().currentlyOnline();return ur(this.interruptReasons_)&&e}constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Gs.nextPersistentConnectionId_++,this.log_=Ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Zn())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ks.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Rs.getInstance().on("online",this.onOnline_,this)}}Gs.nextPersistentConnectionId_=0,Gs.nextConnectionId_=0;
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
class Js{static Wrap(e,t){return new Js(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class Ys{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Js("[MIN_NAME]",e),r=new Js("[MIN_NAME]",t);return 0!==this.compare(n,r)}minPost(){return Js.MIN}}
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
 */let Qs;class Xs extends Ys{static get __EMPTY_NODE(){return Qs}static set __EMPTY_NODE(e){Qs=e}compare(e,t){return es(e.name,t.name)}isDefinedOn(e){throw Bn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Js.MIN}maxPost(){return new Js("[MAX_NAME]",Qs)}makePost(e,t){return Un("string"==typeof e,"KeyIndex indexValue must always be a string."),new Js(e,Qs)}toString(){return".key"}}const Zs=new Xs;
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
 */class eo{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class to{copy(e,t,n,r,i){return new to(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return no.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return no.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,to.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,to.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:to.RED,this.left=null!=r?r:no.EMPTY_NODE,this.right=null!=i?i:no.EMPTY_NODE}}to.RED=!0,to.BLACK=!1;class no{insert(e,t){return new no(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,to.BLACK,null,null))}remove(e){return new no(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,to.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new eo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new eo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new eo(this.root_,null,this.comparator_,!0,e)}constructor(e,t=no.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function ro(e,t){return es(e.name,t.name)}function io(e,t){return es(e,t)}
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
 */let so;no.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new to(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const oo=function(e){return"number"==typeof e?"number:"+os(e):"string:"+e},ao=function(e){if(e.isLeafNode()){const t=e.val();Un("string"==typeof t||"number"==typeof t||"object"==typeof t&&cr(t,".sv"),"Priority must be a string or number.")}else Un(e===so||e.isEmpty(),"priority of unexpected type.");Un(e===so||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let co,lo,uo;class ho{static set __childrenNodeConstructor(e){co=e}static get __childrenNodeConstructor(){return co}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ho(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ho.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return js(e)?this:".priority"===Ls(e)?this.priorityNode_:ho.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ho.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ls(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Un(".priority"!==n||1===xs(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ho.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ms(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+oo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?os(this.value_):this.value_,this.lazyHash_=$i(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ho.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ho.__childrenNodeConstructor?-1:(Un(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=ho.VALUE_TYPE_ORDER.indexOf(t),i=ho.VALUE_TYPE_ORDER.indexOf(n);return Un(r>=0,"Unknown leaf type: "+t),Un(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=ho.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Un(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ao(this.priorityNode_)}}ho.VALUE_TYPE_ORDER=["object","boolean","number","string"];const po=new class extends Ys{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?es(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Js.MIN}maxPost(){return new Js("[MAX_NAME]",new ho("[PRIORITY-POST]",uo))}makePost(e,t){const n=lo(e);return new Js(t,new ho("[PRIORITY-POST]",n))}toString(){return".priority"}},fo=Math.log(2);
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
 */class mo{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/fo,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}}const go=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new to(a,o.node,to.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new to(a,o.node,to.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new to(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,to.BLACK):(a(r,to.BLACK),a(r,to.RED))}return s}(new mo(e.length));return new no(r||t,s)};
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
 */let _o;const vo={};class yo{static get Default(){return Un(vo&&po,"ChildrenNode.ts has not been loaded"),_o=_o||new yo({".priority":vo},{".priority":po}),_o}get(e){const t=lr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof no?t:null}hasIndex(e){return cr(this.indexSet_,e.toString())}addIndex(e,t){Un(e!==Zs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Js.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?go(n,e.getCompare()):vo;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new yo(l,c)}addToIndexes(e,t){const n=hr(this.indexes_,((n,r)=>{const i=lr(this.indexSet_,r);if(Un(i,"Missing index implementation for "+r),n===vo){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Js.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),go(n,i.getCompare())}return vo}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Js(e.name,r))),i.insert(e,e.node)}}));return new yo(n,this.indexSet_)}removeFromIndexes(e,t){const n=hr(this.indexes_,(n=>{if(n===vo)return n;{const r=t.get(e.name);return r?n.remove(new Js(e.name,r)):n}}));return new yo(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let bo;class wo{static get EMPTY_NODE(){return bo||(bo=new wo(new no(io),null,yo.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bo}updatePriority(e){return this.children_.isEmpty()?this:new wo(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?bo:t}}getChild(e){const t=Ls(e);return null===t?this:this.getImmediateChild(t).getChild(Ms(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Un(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Js(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?bo:this.priorityNode_;return new wo(r,s,i)}}updateChild(e,t){const n=Ls(e);if(null===n)return t;{Un(".priority"!==Ls(e)||1===xs(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Ms(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(po,((s,o)=>{t[s]=o.val(e),n++,i&&wo.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+oo(this.getPriority().val())+":"),this.forEachChild(po,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":$i(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Js(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Js(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Js(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Js.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Js.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ko?-1:0}withIndex(e){if(e===Zs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new wo(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(po),n=t.getIterator(po);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Zs?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ao(this.priorityNode_),this.children_.isEmpty()&&Un(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}wo.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ko=new class extends wo{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return wo.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new no(io),wo.EMPTY_NODE,yo.Default)}};Object.defineProperties(Js,{MIN:{value:new Js("[MIN_NAME]",wo.EMPTY_NODE)},MAX:{value:new Js("[MAX_NAME]",ko)}}),Xs.__EMPTY_NODE=wo.EMPTY_NODE,ho.__childrenNodeConstructor=wo,so=ko,function(e){uo=e}(ko);function So(e,t=null){if(null===e)return wo.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Un(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ho(e,So(t))}if(e instanceof Array){let n=wo.EMPTY_NODE;return ss(e,((t,r)=>{if(cr(e,t)&&"."!==t.substring(0,1)){const e=So(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(So(t))}{const n=[];let r=!1;if(ss(e,((e,t)=>{if("."!==e.substring(0,1)){const i=So(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Js(e,i)))}})),0===n.length)return wo.EMPTY_NODE;const i=go(n,ro,(e=>e.name),io);if(r){const e=go(n,po.getCompare());return new wo(i,So(t),new yo({".priority":e},{".priority":po}))}return new wo(i,So(t),yo.Default)}}!function(e){lo=e}(So);
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
class Co extends Ys{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?es(e.name,t.name):i}makePost(e,t){const n=So(e),r=wo.EMPTY_NODE.updateChild(this.indexPath_,n);return new Js(t,r)}maxPost(){const e=wo.EMPTY_NODE.updateChild(this.indexPath_,ko);return new Js("[MAX_NAME]",e)}toString(){return Fs(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,Un(!js(e)&&".priority"!==Ls(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const Io=new class extends Ys{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?es(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Js.MIN}maxPost(){return Js.MAX}makePost(e,t){const n=So(e);return new Js(t,n)}toString(){return".value"}},Eo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
function To(e){return{type:"value",snapshotNode:e}}function Po(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function No(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ro(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Oo{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Un(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Un(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Un(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Un(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Un(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===po}copy(){const e=new Oo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=po}}function Ao(e){const t={};if(e.isDefault())return t;let n;return e.index_===po?n="$priority":e.index_===Io?n="$value":e.index_===Zs?n="$key":(Un(e.index_ instanceof Co,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ir(n),e.startSet_&&(t.startAt=ir(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ir(e.indexStartName_))),e.endSet_&&(t.endAt=ir(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ir(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Lo(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==po&&(t.i=e.index_.toString()),t}
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
 */class xo extends Ps{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Un(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=xo.getListenId_(e,n),o={};this.listens_[s]=o;const a=Ao(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),lr(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=xo.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ao(e._queryParams),n=e._path.toString(),r=new Kn;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fr(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=rr(o.responseText)}catch(e){Xi("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Xi("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ji("p:rest:"),this.listens_={}}}
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
 */class Mo{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=wo.EMPTY_NODE}}
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
 */function Do(){return{value:null,children:new Map}}function Fo(e,t,n){if(js(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Ls(t);e.children.has(r)||e.children.set(r,Do());Fo(e.children.get(r),t=Ms(t),n)}}function Uo(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,r)=>{Uo(r,new Os(t.toString()+"/"+e),n)}))}class Bo{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ss(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class jo{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ss(e,((e,r)=>{r>0&&cr(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),us(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Bo(e);const n=1e4+2e4*Math.random();us(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var Ho,qo;function $o(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(qo=Ho||(Ho={}))[qo.OVERWRITE=0]="OVERWRITE",qo[qo.MERGE=1]="MERGE",qo[qo.ACK_USER_WRITE=2]="ACK_USER_WRITE",qo[qo.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Wo{operationForChild(e){if(js(this.path)){if(null!=this.affectedTree.value)return Un(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Os(e));return new Wo(As(),t,this.revert)}}return Un(Ls(this.path)===e,"operationForChild called for unrelated child."),new Wo(Ms(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ho.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
class Vo{operationForChild(e){return js(this.path)?new Vo(this.source,As(),this.snap.getImmediateChild(e)):new Vo(this.source,Ms(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ho.OVERWRITE}}
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
 */class zo{operationForChild(e){if(js(this.path)){const t=this.children.subtree(new Os(e));return t.isEmpty()?null:t.value?new Vo(this.source,As(),t.value):new zo(this.source,As(),t)}return Un(Ls(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zo(this.source,Ms(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ho.MERGE}}
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
 */class Ko{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(js(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ls(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */function Go(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Bn("Should only compare child_ events.");const r=new Js(t.childName,t.snapshotNode),i=new Js(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Jo(e,t){return{eventCache:e,serverCache:t}}function Yo(e,t,n,r){return Jo(new Ko(t,n,r),e.serverCache)}function Qo(e,t,n,r){return Jo(e.eventCache,new Ko(t,n,r))}function Xo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Zo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let ea;class ta{static fromObject(e){let t=new ta(null);return ss(e,((e,n)=>{t=t.set(new Os(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:As(),value:this.value};if(js(e))return null;{const n=Ls(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Ms(e),t);if(null!=i){return{path:Bs(new Os(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(js(e))return this;{const t=Ls(e),n=this.children.get(t);return null!==n?n.subtree(Ms(e)):new ta(null)}}set(e,t){if(js(e))return new ta(t,this.children);{const n=Ls(e),r=(this.children.get(n)||new ta(null)).set(Ms(e),t),i=this.children.insert(n,r);return new ta(this.value,i)}}remove(e){if(js(e))return this.children.isEmpty()?new ta(null):new ta(null,this.children);{const t=Ls(e),n=this.children.get(t);if(n){const r=n.remove(Ms(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new ta(null):new ta(this.value,i)}return this}}get(e){if(js(e))return this.value;{const t=Ls(e),n=this.children.get(t);return n?n.get(Ms(e)):null}}setTree(e,t){if(js(e))return t;{const n=Ls(e),r=(this.children.get(n)||new ta(null)).setTree(Ms(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new ta(this.value,i)}}fold(e){return this.fold_(As(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Bs(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,As(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(js(e))return null;{const r=Ls(e),i=this.children.get(r);return i?i.findOnPath_(Ms(e),Bs(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,As(),t)}foreachOnPath_(e,t,n){if(js(e))return this;{this.value&&n(t,this.value);const r=Ls(e),i=this.children.get(r);return i?i.foreachOnPath_(Ms(e),Bs(t,r),n):new ta(null)}}foreach(e){this.foreach_(As(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Bs(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(ea||(ea=new no(ts)),ea))()){this.value=e,this.children=t}}
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
 */class na{static empty(){return new na(new ta(null))}constructor(e){this.writeTree_=e}}function ra(e,t,n){if(js(t))return new na(new ta(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=Hs(i,t);return s=s.updateChild(o,n),new na(e.writeTree_.set(i,s))}{const r=new ta(n),i=e.writeTree_.setTree(t,r);return new na(i)}}}function ia(e,t,n){let r=e;return ss(n,((e,n)=>{r=ra(r,Bs(t,e),n)})),r}function sa(e,t){if(js(t))return na.empty();{const n=e.writeTree_.setTree(t,new ta(null));return new na(n)}}function oa(e,t){return null!=aa(e,t)}function aa(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Hs(n.path,t)):null}function ca(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(po,((e,n)=>{t.push(new Js(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Js(e,n.value))})),t}function la(e,t){if(js(t))return e;{const n=aa(e,t);return new na(null!=n?new ta(n):e.writeTree_.subtree(t))}}function ua(e){return e.writeTree_.isEmpty()}function ha(e,t){return da(As(),e.writeTree_,t)}function da(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(Un(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=da(Bs(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Bs(e,".priority"),r)),n}}
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
 */function pa(e,t){return Ea(t,e)}function fa(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Un(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&ma(t,r.path)?i=!1:$s(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=_a(e.allWrites,ga,As()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=sa(e.visibleWrites,r.path);else{ss(r.children,(t=>{e.visibleWrites=sa(e.visibleWrites,Bs(r.path,t))}))}return!0}return!1}function ma(e,t){if(e.snap)return $s(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&$s(Bs(e.path,n),t))return!0;return!1}function ga(e){return e.visible}function _a(e,t,n){let r=na.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)$s(n,e)?(t=Hs(n,e),r=ra(r,t,s.snap)):$s(e,n)&&(t=Hs(e,n),r=ra(r,As(),s.snap.getChild(t)));else{if(!s.children)throw Bn("WriteRecord should have .snap or .children");if($s(n,e))t=Hs(n,e),r=ia(r,t,s.children);else if($s(e,n))if(t=Hs(e,n),js(t))r=ia(r,As(),s.children);else{const e=lr(s.children,Ls(t));if(e){const n=e.getChild(Ms(t));r=ra(r,As(),n)}}}}}return r}function va(e,t,n,r,i){if(r||i){const s=la(e.visibleWrites,t);if(!i&&ua(s))return n;if(i||null!=n||oa(s,As())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&($s(e.path,t)||$s(t,e.path))};return ha(_a(e.allWrites,s,t),n||wo.EMPTY_NODE)}return null}{const r=aa(e.visibleWrites,t);if(null!=r)return r;{const r=la(e.visibleWrites,t);if(ua(r))return n;if(null!=n||oa(r,As())){return ha(r,n||wo.EMPTY_NODE)}return null}}}function ya(e,t,n,r){return va(e.writeTree,e.treePath,t,n,r)}function ba(e,t){return function(e,t,n){let r=wo.EMPTY_NODE;const i=aa(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(po,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=la(e.visibleWrites,t);return n.forEachChild(po,((e,t)=>{const n=ha(la(i,new Os(e)),t);r=r.updateImmediateChild(e,n)})),ca(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return ca(la(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function wa(e,t,n,r){return function(e,t,n,r,i){Un(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Bs(t,n);if(oa(e.visibleWrites,s))return null;{const t=la(e.visibleWrites,s);return ua(t)?i.getChild(n):ha(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function ka(e,t){return function(e,t){return aa(e.visibleWrites,t)}(e.writeTree,Bs(e.treePath,t))}function Sa(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const c=la(e.visibleWrites,t),l=aa(c,As());if(null!=l)a=l;else{if(null==n)return[];a=ha(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Ca(e,t,n){return function(e,t,n,r){const i=Bs(t,n),s=aa(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return ha(la(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ia(e,t){return Ea(Bs(e.treePath,t),e.writeTree)}function Ea(e,t){return{treePath:e,writeTree:t}}
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
 */class Ta{trackChildChange(e){const t=e.type,n=e.childName;Un("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Un(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Ro(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,No(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Po(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Bn("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Ro(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const Pa=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Na{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ko(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ca(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Zo(this.viewCache_),i=Sa(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function Ra(e,t,n,r,i){const s=new Ta;let o,a;if(n.type===Ho.OVERWRITE){const c=n;c.source.fromUser?o=La(e,t,c.path,c.snap,r,i,s):(Un(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!js(c.path),o=Aa(e,t,c.path,c.snap,r,i,a,s))}else if(n.type===Ho.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,c)=>{const l=Bs(n,r);xa(t,Ls(l))&&(a=La(e,a,l,c,i,s,o))})),r.foreach(((r,c)=>{const l=Bs(n,r);xa(t,Ls(l))||(a=La(e,a,l,c,i,s,o))})),a}(e,t,c.path,c.children,r,i,s):(Un(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Da(e,t,c.path,c.children,r,i,a,s))}else if(n.type===Ho.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=ka(r,n))return t;{const a=new Na(r,t,i),c=t.eventCache.getNode();let l;if(js(n)||".priority"===Ls(n)){let n;if(t.serverCache.isFullyInitialized())n=ya(r,Zo(t));else{const e=t.serverCache.getNode();Un(e instanceof wo,"serverChildren would be complete if leaf node"),n=ba(r,e)}l=e.filter.updateFullNode(c,n,s)}else{const i=Ls(n);let u=Ca(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=c.getImmediateChild(i)),l=null!=u?e.filter.updateChild(c,i,u,Ms(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,wo.EMPTY_NODE,Ms(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=ya(r,Zo(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=ka(r,As()),Yo(t,l,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=ka(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(js(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Aa(e,t,n,c.getNode().getChild(n),i,s,a,o);if(js(n)){let r=new ta(null);return c.getNode().forEachChild(Zs,((e,t)=>{r=r.set(new Os(e),t)})),Da(e,t,n,r,i,s,a,o)}return t}{let l=new ta(null);return r.foreach(((e,t)=>{const r=Bs(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),Da(e,t,n,l,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==Ho.LISTEN_COMPLETE)throw Bn("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=Qo(t,s.getNode(),s.isFullyInitialized()||js(n),s.isFiltered());return Oa(e,o,n,r,Pa,i)}(e,t,n.path,r,s)}const c=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Xo(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(To(Xo(t)))}}(t,o,c),{viewCache:o,changes:c}}function Oa(e,t,n,r,i,s){const o=t.eventCache;if(null!=ka(r,n))return t;{let a,c;if(js(n))if(Un(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Zo(t),i=ba(r,n instanceof wo?n:wo.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=ya(r,Zo(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=Ls(n);if(".priority"===l){Un(1===xs(n),"Can't have a priority with additional path components");const i=o.getNode();c=t.serverCache.getNode();const s=wa(r,n,i,c);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=Ms(n);let h;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=wa(r,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(l).updateChild(u,e):o.getNode().getImmediateChild(l)}else h=Ca(r,l,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),l,h,u,i,s):o.getNode()}}return Yo(t,a,o.isFullyInitialized()||js(n),e.filter.filtersNodes())}}function Aa(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(js(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=Ls(n);if(!c.isCompleteForPath(n)&&xs(n)>1)return t;const i=Ms(n),s=c.getNode().getImmediateChild(e).updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,Pa,null)}const h=Qo(t,l,c.isFullyInitialized()||js(n),u.filtersNodes());return Oa(e,h,n,i,new Na(i,h,s),a)}function La(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new Na(i,t,s);if(js(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=Yo(t,l,!0,e.filter.filtersNodes());else{const i=Ls(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Yo(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=Ms(n),l=a.getNode().getImmediateChild(i);let h;if(js(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Ds(s)&&e.getChild(Us(s)).isEmpty()?e:e.updateChild(s,r):wo.EMPTY_NODE}if(l.equals(h))c=t;else{c=Yo(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function xa(e,t){return e.eventCache.isCompleteForChild(t)}function Ma(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Da(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=js(n)?r:new ta(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=Ma(0,t.serverCache.getNode().getImmediateChild(n),r);l=Aa(e,l,new Os(n),c,i,s,o,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!c){const c=Ma(0,t.serverCache.getNode().getImmediateChild(n),r);l=Aa(e,l,new Os(n),c,i,s,o,a)}})),l}function Fa(e,t){const n=Zo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!js(t)&&!n.getImmediateChild(Ls(t)).isEmpty())?n.getChild(t):null}function Ua(e,t,n,r){t.type===Ho.MERGE&&null!==t.source.queryId&&(Un(Zo(e.viewCache_),"We should always have a full cache before handling merges"),Un(Xo(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Ra(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,Un(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Un(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Un(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ba(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Ba(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Go(e,i,"child_removed",t,r,n),Go(e,i,"child_added",t,r,n),Go(e,i,"child_moved",s,r,n),Go(e,i,"child_changed",t,r,n),Go(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */let ja,Ha;function qa(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Un(null!=s,"SyncTree gave us an op for an invalid query."),Ua(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Ua(s,t,n,r));return i}}function $a(e,t){let n=null;for(const r of e.views.values())n=n||Fa(r,t);return n}class Wa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ta(null),this.pendingWriteTree_={visibleWrites:na.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Va(e,t,n,r,i){return function(e,t,n,r,i){Un(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ra(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Ya(e,new Vo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function za(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(fa(e.pendingWriteTree_,t)){let t=new ta(null);return null!=r.snap?t=t.set(As(),!0):ss(r.children,(e=>{t=t.set(new Os(e),!0)})),Ya(e,new Wo(r.path,t,n))}return[]}function Ka(e,t,n){return Ya(e,new Vo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ga(e,t,n,r){const i=Za(e,r);if(null!=i){const r=ec(i),s=r.path,o=r.queryId,a=Hs(s,t);return tc(e,s,new Vo($o(o),a,n))}return[]}function Ja(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=$a(n,Hs(e,t));if(r)return r}));return va(r,t,i,n,!0)}function Ya(e,t){return Qa(t,e.syncPointTree_,null,pa(e.pendingWriteTree_,As()))}function Qa(e,t,n,r){if(js(e.path))return Xa(e,t,n,r);{const i=t.get(As());null==n&&null!=i&&(n=$a(i,As()));let s=[];const o=Ls(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Ia(r,o);s=s.concat(Qa(a,c,e,t))}return i&&(s=s.concat(qa(i,e,r,n))),s}}function Xa(e,t,n,r){const i=t.get(As());null==n&&null!=i&&(n=$a(i,As()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Ia(r,t),c=e.operationForChild(t);c&&(s=s.concat(Xa(c,i,o,a)))})),i&&(s=s.concat(qa(i,e,r,n))),s}function Za(e,t){return e.tagToQueryMap.get(t)}function ec(e){const t=e.indexOf("$");return Un(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Os(e.substr(0,t))}}function tc(e,t,n){const r=e.syncPointTree_.get(t);Un(r,"Missing sync point for query tag that we're tracking");return qa(r,n,pa(e.pendingWriteTree_,t),null)}
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
class nc{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new nc(t)}node(){return this.node_}constructor(e){this.node_=e}}class rc{getImmediateChild(e){const t=Bs(this.path_,e);return new rc(this.syncTree_,t)}node(){return Ja(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const ic=function(e,t,n){return e&&"object"==typeof e?(Un(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?sc(e[".sv"],t,n):"object"==typeof e[".sv"]?oc(e[".sv"],t):void Un(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},sc=function(e,t,n){if("timestamp"===e)return n.timestamp;Un(!1,"Unexpected server value: "+e)},oc=function(e,t,n){e.hasOwnProperty("increment")||Un(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Un(!1,"Unexpected increment value: "+r);const i=t.node();if(Un(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},ac=function(e,t,n,r){return lc(t,new rc(n,e),r)},cc=function(e,t,n){return lc(e,new nc(t),n)};function lc(e,t,n){const r=e.getPriority().val(),i=ic(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=ic(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new ho(s,So(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new ho(i))),r.forEachChild(po,((e,r)=>{const i=lc(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
 */class uc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function hc(e,t){let n=t instanceof Os?t:new Os(t),r=e,i=Ls(n);for(;null!==i;){const e=lr(r.node.children,i)||{children:{},childCount:0};r=new uc(i,r,e),n=Ms(n),i=Ls(n)}return r}function dc(e){return e.node.value}function pc(e,t){e.node.value=t,vc(e)}function fc(e){return e.node.childCount>0}function mc(e,t){ss(e.node.children,((n,r)=>{t(new uc(n,e,r))}))}function gc(e,t,n,r){n&&!r&&t(e),mc(e,(e=>{gc(e,t,!0,r)})),n&&r&&t(e)}function _c(e){return new Os(null===e.parent?e.name:_c(e.parent)+"/"+e.name)}function vc(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===dc(e)&&!fc(e)}(n),i=cr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,vc(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,vc(e))}
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
 */(e.parent,e.name,e)}const yc=/[\[\].#$\/\u0000-\u001F\u007F]/,bc=/[\[\].#$\u0000-\u001F\u007F]/,wc=function(e){return"string"==typeof e&&0!==e.length&&!yc.test(e)},kc=function(e){return"string"==typeof e&&0!==e.length&&!bc.test(e)},Sc=function(e,t,n){const r=n instanceof Os?new Ws(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+zs(r));if("function"==typeof t)throw new Error(e+"contains a function "+zs(r)+" with contents = "+t.toString());if(Zi(t))throw new Error(e+"contains "+t.toString()+" "+zs(r));if("string"==typeof t&&t.length>10485760/3&&Sr(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+zs(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(ss(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!wc(t)))throw new Error(e+" contains an invalid key ("+t+") "+zs(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Sr(a),Vs(o),Sc(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Sr(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+zs(r)+" in addition to actual children.")}},Cc=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!wc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),kc(e)}(n))throw new Error(wr(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Ic{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ec(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||qs(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Tc(e,t,n){Ec(e,n),Pc(e,(e=>$s(e,t)||$s(t,e)))}function Pc(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Nc(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Nc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Vi&&Gi("event: "+n.toString()),ls(r)}}}
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
 */class Rc{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ic,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Do(),this.transactionQueueTree_=new uc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Oc(e,t,n){if(e.stats_=bs(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new xo(e.repoInfo_,((t,n,r,i)=>{xc(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Mc(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ir(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Gs(e.repoInfo_,t,((t,n,r,i)=>{xc(e,t,n,r,i)}),(t=>{Mc(e,t)}),(t=>{!function(e,t){ss(t,((t,n)=>{Dc(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ys[n]||(ys[n]=t()),ys[n]}(e.repoInfo_,(()=>new jo(e.stats_,e.server_))),e.infoData_=new Mo,e.infoSyncTree_=new Wa({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ka(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Dc(e,"connected",!1),e.serverSyncTree_=new Wa({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);Tc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ac(e){const t=e.infoData_.getNode(new Os(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Lc(e){return(t=(t={timestamp:Ac(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function xc(e,t,n,r,i){e.dataUpdateCount++;const s=new Os(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=hr(n,(e=>So(e)));o=function(e,t,n,r){const i=Za(e,r);if(i){const r=ec(i),s=r.path,o=r.queryId,a=Hs(s,t),c=ta.fromObject(n);return tc(e,s,new zo($o(o),a,c))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=So(n);o=Ga(e.serverSyncTree_,s,t,i)}else if(r){const t=hr(n,(e=>So(e)));o=function(e,t,n){const r=ta.fromObject(n);return Ya(e,new zo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=So(n);o=Ka(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=qc(e,s)),Tc(e.eventQueue_,a,o)}function Mc(e,t){Dc(e,"connected",t),!1===t&&function(e){Bc(e,"onDisconnectEvents");const t=Lc(e),n=Do();Uo(e.onDisconnect_,As(),((r,i)=>{const s=ac(r,i,e.serverSyncTree_,t);Fo(n,r,s)}));let r=[];Uo(n,As(),((t,n)=>{r=r.concat(Ka(e.serverSyncTree_,t,n));const i=Kc(e,t);qc(e,i)})),e.onDisconnect_=Do(),Tc(e.eventQueue_,As(),r)}(e)}function Dc(e,t,n){const r=new Os("/.info/"+t),i=So(n);e.infoData_.updateSnapshot(r,i);const s=Ka(e.infoSyncTree_,r,i);Tc(e.eventQueue_,r,s)}function Fc(e){return e.nextWriteId_++}function Uc(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Bc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Gi(n,...t)}function jc(e,t,n){return Ja(e.serverSyncTree_,t,n)||wo.EMPTY_NODE}function Hc(e,t=e.transactionQueueTree_){if(t||zc(e,t),dc(t)){const n=Wc(e,t);Un(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=jc(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];Un(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Hs(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(r=>{Bc(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(za(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();zc(e,hc(e.transactionQueueTree_,t)),Hc(e,e.transactionQueueTree_),Tc(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)ls(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Xi("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}qc(e,t)}}),o)}(e,_c(t),n)}else fc(t)&&mc(t,(t=>{Hc(e,t)}))}function qc(e,t){const n=$c(e,t),r=_c(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=Hs(n,c.path);let u,h=!1;if(Un(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,i=i.concat(za(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",i=i.concat(za(e.serverSyncTree_,c.currentWriteId,!0));else{const n=jc(e,c.path,s);c.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Sc("transaction failed: Data returned ",r,c.path);let t=So(r);"object"==typeof r&&null!=r&&cr(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=Lc(e),l=cc(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Fc(e),s.splice(s.indexOf(o),1),i=i.concat(Va(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),i=i.concat(za(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(za(e.serverSyncTree_,c.currentWriteId,!0))}Tc(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;zc(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)ls(r[e]);Hc(e,e.transactionQueueTree_)}(e,Wc(e,n),r),r}function $c(e,t){let n,r=e.transactionQueueTree_;for(n=Ls(t);null!==n&&void 0===dc(r);)r=hc(r,n),n=Ls(t=Ms(t));return r}function Wc(e,t){const n=[];return Vc(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Vc(e,t,n){const r=dc(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);mc(t,(t=>{Vc(e,t,n)}))}function zc(e,t){const n=dc(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,pc(t,n.length>0?n:void 0)}mc(t,(t=>{zc(e,t)}))}function Kc(e,t){const n=_c($c(e,t)),r=hc(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Gc(e,t)})),Gc(e,r),gc(r,(t=>{Gc(e,t)})),n}function Gc(e,t){const n=dc(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Un(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Un(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(za(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?pc(t,void 0):n.length=s+1,Tc(e.eventQueue_,_c(t),i);for(let e=0;e<r.length;e++)ls(r[e])}}
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
 */const Jc=function(e,t){const n=Yc(e),r=n.namespace;"firebase.com"===n.domain&&Qi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Qi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Xi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ms(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Os(n.pathString)}},Yc=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xi(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Qc{get key(){return js(this._path)?null:Ds(this._path)}get ref(){return new Xc(this._repo,this._path)}get _queryIdentifier(){const e=Lo(this._queryParams),t=rs(e);return"{}"===t?"default":t}get _queryObject(){return Lo(this._queryParams)}isEqual(e){if(!((e=Cr(e))instanceof Qc))return!1;const t=this._repo===e._repo,n=qs(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}}class Xc extends Qc{get parent(){const e=Us(this._path);return null===e?null:new Xc(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Oo,!1)}}!function(e){Un(!ja,"__referenceConstructor has already been defined"),ja=e}(Xc),function(e){Un(!Ha,"__referenceConstructor has already been defined"),Ha=e}(Xc);
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
const Zc={};let el=!1;function tl(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Qi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Gi("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Jc(s,i),l=c.repoInfo;void 0!==bi&&bi.env&&(a=bi.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Jc(s,i),l=c.repoInfo):o=!c.repoInfo.secure;const u=i&&o?new ps(ps.OWNER):new ds(e.name,e.options,t);Cc("Invalid Firebase Database URL",c),js(c.path)||Qi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=Zc[t.name];i||(i={},Zc[t.name]=i);let s=i[e.toURLString()];s&&Qi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Rc(e,el,n,r),i[e.toURLString()]=s,s}(l,e,u,new hs(e.name,n));return new nl(h,e)}class nl{get _repo(){return this._instanceStarted||(Oc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xc(this._repo,As())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Zc[t];n&&n[e.key]===e||Qi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Uc(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Qi("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Gs.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Gs.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){Mi="9.9.2",si(new Ir("database",((e,{instanceIdentifier:t})=>tl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ui("@firebase/database","0.13.4",e),ui("@firebase/database","0.13.4","esm2017")}
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
 */();function rl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function il(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sl=il,ol=new tr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),al=new Mr("@firebase/auth");function cl(e,...t){al.logLevel<=Nr.ERROR&&al.error(`Auth (9.9.2): ${e}`,...t)}
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
 */function ll(e,...t){throw pl(e,...t)}function ul(e,...t){return pl(e,...t)}function hl(e,t,n){const r=Object.assign(Object.assign({},sl()),{[t]:n});return new tr("auth","Firebase",r).create(t,{appName:e.name})}function dl(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ll(e,"argument-error"),hl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pl(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ol.create(e,...t)}function fl(e,t,...n){if(!e)throw pl(t,...n)}function ml(e){const t="INTERNAL ASSERTION FAILED: "+e;throw cl(t),new Error(t)}function gl(e,t){e||ml(t)}
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
 */const _l=new Map;function vl(e){gl(e instanceof Function,"Expected a class definition");let t=_l.get(e);return t?(gl(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_l.set(e,t),t)}
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
function yl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function bl(){return"http:"===wl()||"https:"===wl()}function wl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function kl(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(bl()||Yn()||"connection"in navigator))||navigator.onLine}
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
class Sl{get(){return kl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,gl(t>e,"Short delay should be less than long delay!"),this.isMobile=Jn()||Qn()}}
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
 */function Cl(e,t){gl(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Il{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ml("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ml("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ml("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const El={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Tl=new Sl(3e4,6e4);
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
 */function Pl(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Nl(e,t,n,r,i={}){return Rl(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=fr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Il.fetch()(Al(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Rl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},El),t);try{const t=new Ll(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw xl(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xl(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw xl(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw xl(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw hl(e,a,o);ll(e,a)}}catch(t){if(t instanceof er)throw t;ll(e,"network-request-failed")}}async function Ol(e,t,n,r,i={}){const s=await Nl(e,t,n,r,i);return"mfaPendingCredential"in s&&ll(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Al(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Cl(e.config,i):`${e.config.apiScheme}://${i}`}class Ll{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ul(this.auth,"network-request-failed"))),Tl.get())}))}}function xl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ul(e,t,r);return i.customData._tokenResponse=n,i}
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
function Ml(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Dl(e){return 1e3*Number(e)}function Fl(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return cl("JWT malformed, contained fewer than 3 sections"),null;try{const e=Wn(r);return e?JSON.parse(e):(cl("Failed to decode base64 JWT payload"),null)}catch(e){return cl("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
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
async function Ul(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof er&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Bl{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class jl{_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function Hl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ul(e,async function(e,t){return Nl(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));fl(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=rl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jl(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class ql{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fl(e.idToken,"internal-error"),fl(void 0!==e.idToken,"internal-error"),fl(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Fl(e);return fl(t,"internal-error"),fl(void 0!==t.exp,"internal-error"),fl(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return fl(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Rl(e,{},(async()=>{const n=fr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Al(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Il.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ql;return n&&(fl("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(fl("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(fl("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ql,this.toJSON())}_performRefresh(){return ml("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function $l(e,t){fl("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Wl{async getIdToken(e){const t=await Ul(this,this.stsTokenManager.getToken(this.auth,e));return fl(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Cr(e),r=await n.getIdToken(t),i=Fl(r);fl(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ml(Dl(i.auth_time)),issuedAtTime:Ml(Dl(i.iat)),expirationTime:Ml(Dl(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Cr(e);await Hl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(fl(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){fl(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Hl(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ul(this,async function(e,t){return Nl(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:k}=t;fl(v&&k,e,"internal-error");const S=ql.fromJSON(this.name,k);fl("string"==typeof v,e,"internal-error"),$l(u,e.name),$l(h,e.name),fl("boolean"==typeof y,e,"internal-error"),fl("boolean"==typeof b,e,"internal-error"),$l(d,e.name),$l(p,e.name),$l(f,e.name),$l(m,e.name),$l(g,e.name),$l(_,e.name);const C=new Wl({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:_});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new ql;r.updateFromServerResponse(t);const i=new Wl({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Hl(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=rl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jl(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class Vl{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Vl.type="NONE";const zl=Vl;
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
 */function Kl(e,t,n){return`firebase:${e}:${t}:${n}`}class Gl{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Gl(vl(zl),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||vl(zl);const s=Kl(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Wl._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Gl(i,e,n)):new Gl(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Kl(this.userKey,r.apiKey,i),this.fullPersistenceKey=Kl("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Jl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tu(t))return"Blackberry";if(nu(t))return"Webos";if(Ql(t))return"Safari";if((t.includes("chrome/")||Xl(t))&&!t.includes("edge/"))return"Chrome";if(eu(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Yl(e=Gn()){return/firefox\//i.test(e)}function Ql(e=Gn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xl(e=Gn()){return/crios\//i.test(e)}function Zl(e=Gn()){return/iemobile/i.test(e)}function eu(e=Gn()){return/android/i.test(e)}function tu(e=Gn()){return/blackberry/i.test(e)}function nu(e=Gn()){return/webos/i.test(e)}function ru(e=Gn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function iu(){return Xn()&&10===document.documentMode}function su(e=Gn()){return ru(e)||eu(e)||nu(e)||tu(e)||/windows phone/i.test(e)||Zl(e)}
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
function ou(e,t=[]){let n;switch(e){case"Browser":n=Jl(Gn());break;case"Worker":n=`${Jl(Gn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.2/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class au{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class cu{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vl(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Gl.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return fl(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Hl(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Cr(e):null;return t&&fl(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fl(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(vl(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vl(e)||this._popupRedirectResolver;fl(t,this,"argument-error"),this.redirectPersistenceManager=await Gl.create(this,[vl(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return fl(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fl(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uu(this),this.idTokenSubscription=new uu(this),this.beforeStateQueue=new au(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ol,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function lu(e){return Cr(e)}class uu{get next(){return fl(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=vr((e=>this.observer=e))}}
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
class hu{toJSON(){return ml("not implemented")}_getIdTokenResponse(e){return ml("not implemented")}_linkToIdToken(e,t){return ml("not implemented")}_getReauthenticationResolver(e){return ml("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function du(e,t){return Nl(e,"POST","/v1/accounts:update",t)}
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
class pu extends hu{static _fromEmailAndPassword(e,t){return new pu(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pu(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Ol(e,"POST","/v1/accounts:signInWithPassword",Pl(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Ol(e,"POST","/v1/accounts:signInWithEmailLink",Pl(e,t))}(e,{email:this._email,oobCode:this._password});default:ll(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return du(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ol(e,"POST","/v1/accounts:signInWithEmailLink",Pl(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ll(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function fu(e,t){return Ol(e,"POST","/v1/accounts:signInWithIdp",Pl(e,t))}
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
 */class mu extends hu{static _fromParams(e){const t=new mu(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ll("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=rl(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new mu(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return fu(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,fu(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fu(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fr(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const gu={USER_NOT_FOUND:"user-not-found"};
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
class _u extends hu{static _fromVerification(e,t){return new _u({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _u({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ol(e,"POST","/v1/accounts:signInWithPhoneNumber",Pl(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ol(e,"POST","/v1/accounts:signInWithPhoneNumber",Pl(e,t));if(n.temporaryProof)throw xl(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ol(e,"POST","/v1/accounts:signInWithPhoneNumber",Pl(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),gu)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new _u({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class vu{static parseLink(e){const t=function(e){const t=mr(gr(e)).link,n=t?mr(gr(t)).deep_link_id:null,r=mr(gr(e)).deep_link_id;return(r?mr(gr(r)).link:null)||r||n||t||e}(e);try{return new vu(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=mr(gr(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);fl(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class yu{static credential(e,t){return pu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vu.parseLink(t);return fl(n,"argument-error"),pu._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=yu.PROVIDER_ID}}yu.PROVIDER_ID="password",yu.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class bu{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class wu extends bu{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class ku extends wu{static credential(e){return mu._fromParams({providerId:ku.PROVIDER_ID,signInMethod:ku.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ku.credentialFromTaggedObject(e)}static credentialFromError(e){return ku.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ku.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}ku.FACEBOOK_SIGN_IN_METHOD="facebook.com",ku.PROVIDER_ID="facebook.com";
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
class Su extends wu{static credential(e,t){return mu._fromParams({providerId:Su.PROVIDER_ID,signInMethod:Su.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Su.credentialFromTaggedObject(e)}static credentialFromError(e){return Su.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Su.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Su.GOOGLE_SIGN_IN_METHOD="google.com",Su.PROVIDER_ID="google.com";
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
class Cu extends wu{static credential(e){return mu._fromParams({providerId:Cu.PROVIDER_ID,signInMethod:Cu.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cu.credentialFromTaggedObject(e)}static credentialFromError(e){return Cu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Cu.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Cu.GITHUB_SIGN_IN_METHOD="github.com",Cu.PROVIDER_ID="github.com";
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
class Iu extends wu{static credential(e,t){return mu._fromParams({providerId:Iu.PROVIDER_ID,signInMethod:Iu.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Iu.credentialFromTaggedObject(e)}static credentialFromError(e){return Iu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Iu.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Iu.TWITTER_SIGN_IN_METHOD="twitter.com",Iu.PROVIDER_ID="twitter.com";
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
class Eu{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Wl._fromIdTokenResponse(e,n,r),s=Tu(n);return new Eu({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Tu(n);return new Eu({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Tu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Pu extends er{static _fromErrorAndOperation(e,t,n,r){return new Pu(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pu.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Nu(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pu._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Ru(e,t,n=!1){const r=await Ul(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Eu._forOperation(e,"link",r)}
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
async function Ou(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await Ul(e,Nu(i,s,t,e),n);fl(r.idToken,i,"internal-error");const o=Fl(r.idToken);fl(o,i,"internal-error");const{sub:a}=o;return fl(e.uid===a,i,"user-mismatch"),Eu._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&ll(i,"user-mismatch"),e}}
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
 */async function Au(e,t,n=!1){const r="signIn",i=await Nu(e,r,t),s=await Eu._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Lu(e,t,n,r){return Cr(e).onAuthStateChanged(t,n,r)}new WeakMap;
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
class xu{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Mu extends xu{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);iu()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Gn();return Ql(e)||ru(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=su(),this._shouldAllowMigration=!0}}Mu.type="LOCAL";const Du=Mu;
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
 */class Fu extends xu{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Fu.type="SESSION";const Uu=Fu;
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
class Bu{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bu(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function ju(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Bu.receivers=[];class Hu{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ju("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function qu(){return window}
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
function $u(){return void 0!==qu().WorkerGlobalScope&&"function"==typeof qu().importScripts}class Wu{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Vu(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function zu(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Wu(e).toPromise()}(),t(await zu()))}))}))}async function Ku(e,t,n){const r=Vu(e,!0).put({fbase_key:t,value:n});return new Wu(r).toPromise()}function Gu(e,t){const n=Vu(e,!0).delete(t);return new Wu(n).toPromise()}class Ju{async _openDb(){return this.db||(this.db=await zu()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $u()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bu._getInstance($u()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Hu(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zu();return await Ku(e,"__sak","1"),await Gu(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ku(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Vu(e,!1).get(t),r=await new Wu(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Gu(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Vu(e,!1).getAll();return new Wu(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Ju.type="LOCAL";const Yu=Ju;
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
 */function Qu(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ul("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Xu(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Xu("rcb"),new Sl(3e4,6e4);async function Zu(e,t,n){var r;const i=await n.verify();try{let s;if(fl("string"==typeof i,e,"argument-error"),fl("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){fl("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Nl(e,"POST","/v2/accounts/mfaEnrollment:start",Pl(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{fl("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;fl(n,e,"missing-multi-factor-info");const o=await function(e,t){return Nl(e,"POST","/v2/accounts/mfaSignIn:start",Pl(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Nl(e,"POST","/v1/accounts:sendVerificationCode",Pl(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class eh{verifyPhoneNumber(e,t){return Zu(this.auth,e,Cr(t))}static credential(e,t){return _u._fromVerification(e,t)}static credentialFromResult(e){const t=e;return eh.credentialFromTaggedObject(t)}static credentialFromError(e){return eh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?_u._fromTokenResponse(t,n):null}constructor(e){this.providerId=eh.PROVIDER_ID,this.auth=lu(e)}}
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
function th(e,t){return t?vl(t):(fl(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */eh.PROVIDER_ID="phone",eh.PHONE_SIGN_IN_METHOD="phone";class nh extends hu{_getIdTokenResponse(e){return fu(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fu(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fu(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function rh(e){return Au(e.auth,new nh(e),e.bypassAuthState)}function ih(e){const{auth:t,user:n}=e;return fl(n,t,"internal-error"),Ou(n,new nh(e),e.bypassAuthState)}async function sh(e){const{auth:t,user:n}=e;return fl(n,t,"internal-error"),Ru(n,new nh(e),e.bypassAuthState)}
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
 */class oh{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rh;case"linkViaPopup":case"linkViaRedirect":return sh;case"reauthViaPopup":case"reauthViaRedirect":return ih;default:ll(this.auth,"internal-error")}}resolve(e){gl(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gl(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const ah=new Sl(2e3,1e4);async function ch(e,t,n){const r=lu(e);dl(e,t,bu);const i=th(r,n);return new lh(r,"signInViaPopup",t,i).executeNotNull()}class lh extends oh{async executeNotNull(){const e=await this.execute();return fl(e,this.auth,"internal-error"),e}async onExecution(){gl(1===this.filter.length,"Popup operations only handle one event");const e=ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ul(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ul(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lh.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ul(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ah.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,lh.currentPopupAction&&lh.currentPopupAction.cancel(),lh.currentPopupAction=this}}lh.currentPopupAction=null;
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
const uh=new Map;class hh extends oh{async execute(){let e=uh.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=fh(t),r=ph(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}uh.set(this.auth._key(),e)}return this.bypassAuthState||uh.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function dh(e,t){uh.set(e._key(),t)}function ph(e){return vl(e._redirectPersistence)}function fh(e){return Kl("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function mh(e,t,n=!1){const r=lu(e),i=th(r,t),s=new hh(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class gh{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vh(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vh(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ul(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_h(e))}saveEventToCache(e){this.cachedEventUids.add(_h(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function _h(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function vh({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const yh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bh=/^https?/;async function wh(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Nl(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(kh(e))return}catch(e){}ll(e,"unauthorized-domain")}function kh(e){const t=yl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!bh.test(n))return!1;if(yh.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Sh=new Sl(3e4,6e4);function Ch(){const e=qu().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ih=null;function Eh(e){return Ih=Ih||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ch(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ch(),n(ul(e,"network-request-failed"))},timeout:Sh.get()})}if(null===(i=null===(r=qu().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=qu().gapi)||void 0===s?void 0:s.load)){const t=Xu("iframefcb");return qu()[t]=()=>{gapi.load?o():n(ul(e,"network-request-failed"))},Qu(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ih=null,e}))}(e),Ih}
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
 */const Th=new Sl(5e3,15e3),Ph={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rh(e){const t=e.config;fl(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Cl(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.9.2"},i=Nh.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fr(r).slice(1)}`}
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
const Oh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ah{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Lh(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Oh),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Gn().toLowerCase();n&&(a=Xl(l)?"_blank":n),Yl(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Gn()){var t;return ru(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Ah(null);const h=window.open(t||"",a,u);fl(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ah(h)}function xh(e,t,n,r,i,s){fl(e.config.authDomain,e,"auth-domain-config-required"),fl(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.9.2",eventId:i};if(t instanceof bu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ur(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof wu){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Cl(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${fr(a).slice(1)}`}const Mh=class{async _openPopup(e,t,n,r){var i;gl(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Lh(e,xh(e,t,n,yl(),r),ju())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=xh(e,t,n,yl(),r),qu().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(gl(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Eh(e),n=qu().gapi;return fl(n,e,"internal-error"),t.open({where:document.body,url:Rh(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ph,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ul(e,"network-request-failed"),s=qu().setTimeout((()=>{r(i)}),Th.get());function o(){qu().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new gh(e);return t.register("authEvent",(t=>{fl(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ll(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return su()||Ql()||ru()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uu,this._completeRedirectFn=mh,this._overrideRedirectResult=dh}};var Dh;
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
class Fh{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fl(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
 */Dh="Browser",si(new Ir("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{fl(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),fl(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Dh,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ou(Dh)},o=new cu(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vl);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),si(new Ir("auth-internal",(e=>(e=>new Fh(e))(lu(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),ui("@firebase/auth","0.20.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Dh)),ui("@firebase/auth","0.20.5","esm2017");!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw ai.create("bad-app-name",{appName:String(r)});const i=ni.get(r);if(i){if(dr(e,i.options)&&dr(n,i.config))return i;throw ai.create("duplicate-app",{appName:r})}const s=new Tr(r);for(const e of ri.values())s.addComponent(e);const o=new ci(e,n,s);ni.set(r,o)}({apiKey:"AIzaSyAULeMb5TUpp9pfALatcfwqThVI7Yd4YVI",authDomain:"cocktails-39b57.firebaseapp.com",projectId:"cocktails-39b57",storageBucket:"cocktails-39b57.appspot.com",messagingSenderId:"894388404677",appId:"1:894388404677:web:5aeeaa2079f89382130bac"});const Uh=
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
function(e=li()){const t=oi(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=oi(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(dr(n.getOptions(),null!=t?t:{}))return e;ll(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Mh,persistence:[Yu,Du,Uu]})}(),Bh=new Su,jh=(function(e=li(),t){oi(e,"database").getImmediate({identifier:t})}(),()=>{ch(Uh,Bh).then((e=>{Su.credentialFromResult(e).accessToken;const t=e.user;console.log(t)})).catch((e=>{e.code,e.message,e.customData.email,Su.credentialFromError(e)}))});function Hh(){var e;(e=Uh,Cr(e).signOut()).then((()=>{})).catch((e=>{}))}function qh(e){let t="Log in";e&&(t="Log out"),xn.buttonLogin.textContent=t,xn.buttonLogin.dataset.id=t}Lu(Uh,(e=>{if(e){e.uid}})),Lu(Uh,(e=>{qh(e)})),xn.buttonLogin.addEventListener("click",(function(e){let t=e.target.dataset.id;console.dir(e),"Log in"===t?jh():Hh()})),console.log("11111 :>> ",11111);document.querySelector(".menu__header-js").addEventListener("click",(()=>{document.querySelector(".menu__wrap ").classList.toggle("menu__wrap-close")}));
//# sourceMappingURL=index.afaa6e39.js.map
