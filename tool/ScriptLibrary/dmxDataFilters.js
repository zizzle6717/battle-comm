/*
 HTML5 Data Bindings Formatter
 Version: 1.3.1
 (c) 2015 DMXzone.com
 @build 20-02-2015 13:11:16
*/
(function(h,q,r,l){function n(a){var c,b;c=0;var d=[1,4,5,6,7,10,11];if("[object Date]"==Object.prototype.toString.call(a))return a;if("string"==typeof a){if(""===a||"now"==a)return new Date;if(b=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(a)){a=0;for(var g;g=d[a];++a)b[g]=+b[g]||0;b[2]=(+b[2]||1)-1;b[3]=+b[3]||1;b[8]===l?c=new Date(b[1],b[2],b[3],b[4],b[5],b[6],b[7]):("Z"!==b[8]&&b[9]!==l&&(c=60*b[10]+
b[11],"+"===b[9]&&(c=0-c)),c=new Date(Date.UTC(b[1],b[2],b[3],b[4],b[5]+c,b[6],b[7])))}else(b=/^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(a))?(c=new Date,c.setHours(+b[1]||0),c.setMinutes(+b[2]||0),c.setSeconds(+b[3]||0)):c=new Date(a)}else c="number"==typeof a?new Date(1E3*a):new Date(a);"Invalid Date"==c.toString()&&(c=l);return c}function p(a,c){var b=a.getFullYear(),d=a.getMonth()+1,g=a.getDate(),e=a.getHours(),f=a.getMinutes(),h=a.getSeconds();return c.replace("yyyy",k(b,4)).replace("yy",k(b,2,!0)).replace("y",
b).replace("MM",k(d,2)).replace("M",d).replace("dd",k(g,2)).replace("d",g).replace("HH",k(e,2)).replace("H",e).replace("hh",k(0<e&&12!=e?e%12:12,2)).replace("h",0<e&&12!=e?e%12:12).replace("mm",k(f,2)).replace("m",f).replace("ss",k(h,2)).replace("s",h).replace("a",12>e?"am":"pm")}function m(a,c){for(var b="",d=0;d<c;d++)b+=a;return b}function k(a,c,b){var d="";0>a&&(d="-",a=-a);for(a=""+a;a.length<c;)a="0"+a;b&&(a=a.substr(a.length-c));return d+a}h.extend(h.dmxDataBindings.filters,{startsWith:function(a,
c){return 0===(a+"").indexOf(c)},endsWith:function(a,c){return(a+"").substr(-c.length)==c},contains:function(a,c){return-1!=(a+"").indexOf(c)},test:function(a,c){return c.test(a+"")},between:function(a,c,b){return c<=a&&a<=b},floor:function(a){return Math.floor(+a)},ceil:function(a){return Math.ceil(+a)},round:function(a){return Math.round(+a)},abs:function(a){return Math.abs(+a)},padNumber:function(a,c){var b=+a;return isNaN(b)||!isFinite(b)?"":k(b,c)},formatNumber:function(a,c){var b=+a;if(isNaN(b)||
!isFinite(b))return"";if(c)var d=Math.pow(10,c),b=Math.round(b*d)/d;return b+""},hex:function(a){return parseInt(a+"",16)||NaN},currency:function(a,c,b,d,g){var e=+a;if(isNaN(e)||!isFinite(e))e=0;c=c||"$";b=b||".";d=d||",";g=+g||2;0>g&&(g=0);a=0>e;var e=parseFloat(Math.abs(e)).toFixed(g).toString(),f=Array(e.slice(-1*g));f.unshift(b);for(e=e.substring(0,e.length-(g+1));3<e.length;)f.unshift(e.slice(-3)),f.unshift(d),e=e.substring(0,e.length-3);f.unshift(e);return(a?"-":"")+c+f.join("")},lowercase:function(a){return null==
a?a:(a+"").toLowerCase()},uppercase:function(a){return null==a?a:(a+"").toUpperCase()},camelize:function(a){return null==a?a:(a+"").replace(/^\s+|\s+$/g,"").replace(/(\-|_|\s)+(.)?/g,function(a,b,d){return d?d.toUpperCase():""})},capitalize:function(a){if(null==a)return a;a+="";return a.substr(0,1).toUpperCase()+a.substr(1).toLowerCase()},dasherize:function(a){return null==a?a:(a+"").replace(/[_\s]+/g,"-").replace(/([A-Z])/g,"-$1").replace(/-+/g,"-").toLowerCase()},humanize:function(a){if(null==a)return a;
a=(a+"").replace(/^\s+|\s+$/g,"").replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase().replace(/_id$/,"").replace(/_/g," ").replace(/^\s+|\s+$/g,"");return a.substr(0,1).toUpperCase()+a.substr(1).toLowerCase()},slugify:function(a){return null==a?a:(a+"").replace(/[^\w\s]/g,"").toLowerCase().replace(/[_\s]+/g,"-").replace(/-+/g,"-").replace(/^-/,"")},underscore:function(a){return null==a?a:(a+"").replace(/^\s+|\s+$/g,"").replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,
"_").toLowerCase()},titlecase:function(a){return null==a?a:(a+"").toLowerCase().replace(/\b(\w)/g,function(a,b){return b.toUpperCase()})},camelcase:function(a){return null==a?a:(a+"").toLowerCase().replace(/\s+(\S)/g,function(a,b){return b.toUpperCase()})},replace:function(a,c,b){if(null==a)return a;"string"==typeof c&&(c=new RegExp(c,"g"));return(a+"").replace(c,b)},trim:function(a){return null==a?a:(a+"").replace(/^\s+|\s+$/g,"")},split:function(a,c){return(a+"").split(c)},pad:function(a,c,b,d){a+=
"";b=b||" ";if(a.length<c)switch(c-=a.length,d){case "right":a+=m(b,c);break;case "center":a=m(b,Math.floor(c/2))+a+m(b,Math.ceil(c/2));break;default:a=m(b,c)+a}return a},repeat:function(a,c){return m(a+"",c)},substr:function(a,c,b){0>c&&(c=(a+"").length-c);return(a+"").substr(c,b)},trunc:function(a,c,b,d){a+="";d=d||"\u2026";a.length>c&&(a=a.substr(0,c-1),b&&-1!=a.indexOf(" ")&&(a=a.substr(0,a.lastIndexOf(" "))),a+=d);return a},stripTags:function(a){return(a+"").replace(/<[^>]+>/g,"")},wordCount:function(a){return(a+
"").replace(/\.\?!,/g," ").replace(/\s+/g," ").replace(/^\s+|\s+$/g,"").split(" ").length},formatDate:function(a,c){if(null==a)return a;var b=n(a);return b===l?l:p(b,c)},dateAdd:function(a,c,b){if(null==a)return a;a=n(a);if(a===l)return l;switch(c){case "years":a.setFullYear(a.getFullYear()+b);break;case "months":a.setMonth(a.getMonth()+b);break;case "weeks":a.setDate(a.getDate()+7*b);break;case "days":a.setDate(a.getDate()+b);break;case "hours":a.setHours(a.getHours()+b);break;case "minutes":a.setMinutes(a.getMinutes()+
b);break;case "seconds":a.setSeconds(a.getSeconds()+b)}return p(a,"yyyy-MM-ddTHH:mm:ss")},dateDiff:function(a,c,b){if(null==a)return a;a=n(a);b=n(b);var d=Math.abs(b-a);if(isNaN(d)||a===l||b===l)return NaN;var g=1E3,e=60*g,f=60*e,h=24*f,m=7*h;switch(c){case "years":return Math.abs(b.getFullYear()-a.getFullYear());case "months":return Math.abs(12*b.getFullYear()+b.getMonth()-(12*a.getFullYear()+a.getMonth()));case "weeks":return Math.floor(d/m);case "days":return Math.floor(d/h);case "hours":return Math.floor(d/
f);case "minutes":return Math.floor(d/e);case "seconds":return Math.floor(d/g);case "hours:minutes":return f=Math.floor(d/f),e=Math.floor(d/e),k(f,2)+":"+k(e-60*f,2);case "minutes:seconds":return e=Math.floor(d/e),g=Math.floor(d/g),k(e,2)+":"+k(g-60*e,2);case "hours:minutes:seconds":return f=Math.floor(d/f),e=Math.floor(d/e),g=Math.floor(d/g),k(f,2)+":"+k(e-60*f,2)+":"+k(g-60*e,2);default:return l}},join:function(a,c,b){if(!h.isArray(a))return a;if(b){var d=[];h.each(a,function(){d.push(this[b])});
return d.join(c)}return a.join(c)},top:function(a,c){return h.isArray(a)?a.slice(0,c):a},last:function(a,c){return h.isArray(a)?a.slice(-c):a},where:function(a,c,b,d){if(!h.isArray(a))return a;b=b||"==";if(!/^(={2,3}|!={1,2}|<=?|>=?|(starts|ends)With|contains)$/.test(b))return a;var g=[],e,f;h.each(a,function(){e=this[c];switch(b){case "startsWith":f=0===(e+"").indexOf(d);break;case "endsWith":f=(e+"").substr(-d.length)==d;break;case "contains":f=-1!=(e+"").indexOf(d);break;case "===":f=e===d;break;
case "==":f=e==d;break;case "!==":f=e!==d;break;case "!=":f=e!=d;break;case "<":f=e<d;break;case "<=":f=e<=d;break;case ">":f=e>d;break;case ">=":f=e>=d}f&&g.push(this)});return g},unique:function(a,c){if(!h.isArray(a))return a;var b=[],d={};h.each(a,function(){var a=c?this[c]:this;d[a]||(b.push(a),d[a]=1)});return b},groupBy:function(a,c){if(!h.isArray(a))return a;var b={};h.each(a,function(){var a=this[c]+"";b[a]||(b[a]=[]);b[a].push(this)});return b},sort:function(a,c){if(!h.isArray(a))return a;
a.slice(0).sort(function(a,d){var g=(c?a&&a[c]:a)||"",e=(c?d&&d[c]:d)||"";return"string"===typeof g&&"string"===typeof e?g.localeCompare(e):g<e?-1:g>e?1:0});return a},randomize:function(a){if(!h.isArray(a))return a;var c=a.length,b,d;for(a=a.slice(0);--c;)d=Math.floor(Math.random()*(c+1)),b=a[c],a[c]=a[d],a[d]=b;return a},reverse:function(a){return h.isArray(a)?a.slice(0).reverse():a},count:function(a){return h.isArray(a)?a.length:0},min:function(a,c){if(!h.isArray(a))return a;if(0===a.length)return 0;
var b=+(c?a[0][c]:a[0]);h.each(a,function(){var a=+(c?this[c]:this);a<b&&(b=a)});return b},max:function(a,c){if(!h.isArray(a))return a;if(0===a.length)return 0;var b=+(c?a[0][c]:a[0]);h.each(a,function(){var a=+(c?this[c]:this);a>b&&(b=a)});return b},sum:function(a,c){if(!h.isArray(a))return a;var b=0;h.each(a,function(){var a=+(c?this[c]:this);isNaN(a)||(b+=a)});return b},avg:function(a,c){if(!h.isArray(a))return a;if(0===a.length)return 0;var b=0,d=0;h.each(a,function(){var a=+(c?this[c]:this);
isNaN(a)||(b+=a,d+=1)});return b/d},keys:function(a){if("object"!=typeof a)return[];var c=[],b;for(b in a)c.push(b);return c},values:function(a){if("object"!=typeof a)return[a];var c=[],b;for(b in a)c.push(a[b]);return c}})})(jQuery,this,document);
