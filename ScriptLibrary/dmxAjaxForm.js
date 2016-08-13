/*
 DMXzone Ajax Form
 Version: 1.0.2
 (c) 2013 DMXzone.com
 @build 03-10-2013 14:05:47
*/
(function(c){var s={hideForm:!1};c.fn.dmxAjaxForm=function(r){function p(c,e,a){var d=jQuery(a).text();return c.replace(/##status##/gi,e).replace(/##content##/gi,a).replace(/##content_html##/gi,a).replace(/##content_text##/gi,d)}var e=c.extend(!0,{},s,r);e.ajaxFormSelector=this.selector;e.dmxAjaxFormContainer=c(e.ajaxFormSelector).parents("div.dmxAjaxFormContainer");e.dmxAjaxFormSuccessArea=c(e.dmxAjaxFormContainer).find("div.dmxAjaxFormSuccess");e.dmxAjaxFormErrorArea=c(e.dmxAjaxFormContainer).find("div.dmxAjaxFormError");
e.dmxAjaxFormLoading=0<c(e.dmxAjaxFormContainer).find(".dmxAjaxFormLoading").length?c(e.dmxAjaxFormContainer).find(".dmxAjaxFormLoading"):c('<div class="dmxAjaxFormLoading">&nbsp;</div>').insertAfter(c(e.ajaxFormSelector+" :submit"));e.dmxAjaxFormLoading.hide();e.beforeSubmit=function(j,m){var a,d=c(m[0]).attr("id");window.PU3_uploaded=0;window.PU3_total=0;window.PU3_percent=0;this.dmxAjaxFormSuccessArea.fadeOut("fast");this.dmxAjaxFormErrorArea.fadeOut("fast");if(this.onSubmit){if("string"===typeof this.onSubmit){a=
Function;var h=this.onSubmit,b,o,n;for(b=0;b<j.length;b++)o=RegExp("##"+j[b].name+"##","gi"),n=j[b].value,h=h.replace(o,n);d=h.replace(/##formObj##/gi,d);a=new a(d);return a()}}else this.dmxAjaxFormLoading.fadeIn("fast");c(e.ajaxFormSelector+" :submit").attr("disabled","disabled")};e.success=function(j,m,a,d){d=c(d[0]).attr("id");document.progressWindow&&document.progressWindow.object.close();this.dmxAjaxFormLoading.hide();c(e.ajaxFormSelector+" :submit").removeAttr("disabled");m="";m=this.requested?
null===c(j).find(this.requested).html()?c(j).filter(this.requested).html():c(j).find(this.requested).html():j;if(a.status&&-1===j.indexOf("<html")||-1!=j.indexOf("<h1>Upload Error</h1>"))if(this.onError){if("string"===typeof this.onError){d=new Function(p(this.onError,-1,j.replace(/['"]/g,"\\$&")));d();return}}else{this.dmxAjaxFormErrorArea.html(j).fadeIn("fast");return}this.hideForm&&c(this.ajaxFormSelector).fadeOut("fast");if(this.onSuccess){if("string"===typeof this.onSuccess){var j=Function,a=
this.onSuccess,h=m,b=jQuery(h).text(),d=a.replace(/##content##/gi,h).replace(/##content_html##/gi,h).replace(/##content_text##/gi,b).replace(/##formObj##/gi,d),d=new j(d);d()}this.targeted&&c(this.targeted).html(m)}else this.targeted?(c(this.targeted).html(m),c(this.targeted).is(this.dmxAjaxFormSuccessArea)&&this.dmxAjaxFormSuccessArea.fadeIn("fast")):(m=this.requested?m:""!==this.dmxAjaxFormSuccessArea.html()?this.dmxAjaxFormSuccessArea.html():"<h1>Thank you!</h1>",this.dmxAjaxFormSuccessArea.html(m).fadeIn("fast"))};
e.error=function(j){var m;m=j.status;j=j.statusText;this.dmxAjaxFormLoading.hide();c(e.ajaxFormSelector+" :submit").removeAttr("disabled");this.onError?"string"===typeof this.onError&&(m=new Function(p(this.onError,m,j)),m()):(0===m&&(j="<h1>Same origin policy violated</h1>\n"),this.dmxAjaxFormErrorArea.html("<h1>"+m+":"+j+"</h1>").fadeIn("fast"))};e.uploadProgress=function(c,e,a,d){window.PU3_uploaded=e;window.PU3_total=a;window.PU3_percent=d};c(this.selector).ajaxForm(e)}})(jQuery);
(function(c){function s(a){var d=a.data;a.isDefaultPrevented()||(a.preventDefault(),c(this).ajaxSubmit(d))}function r(a){var d=a.target,h=c(d);if(!h.is("[type=submit],[type=image]")){d=h.closest("[type=submit]");if(0===d.length)return;d=d[0]}var b=this;b.clk=d;"image"==d.type&&(void 0!==a.offsetX?(b.clk_x=a.offsetX,b.clk_y=a.offsetY):"function"==typeof c.fn.offset?(h=h.offset(),b.clk_x=a.pageX-h.left,b.clk_y=a.pageY-h.top):(b.clk_x=a.pageX-d.offsetLeft,b.clk_y=a.pageY-d.offsetTop));setTimeout(function(){b.clk=
b.clk_x=b.clk_y=null},100)}function p(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var e,j;e=void 0!==c("<input type='file'/>").get(0).files;j=void 0!==window.FormData;var m=!!c.fn.prop;c.fn.attr2=function(){if(!m)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"===typeof a?a:
this.attr.apply(this,arguments)};c.fn.ajaxSubmit=function(a){function d(b){function d(a){var c=null;try{a.contentWindow&&(c=a.contentWindow.document)}catch(b){p("cannot get iframe.contentWindow document: "+b)}if(c)return c;try{c=a.contentDocument?a.contentDocument:a.document}catch(f){p("cannot get iframe.contentDocument: "+f),c=a.document}return c}function g(){function a(){try{var c=d(t).readyState;p("state = "+c);c&&"uninitialized"==c.toLowerCase()&&setTimeout(a,50)}catch(b){p("Server abort: ",b,
" (",b.name,")"),n(x),r&&clearTimeout(r),r=void 0}}var b=o.attr2("target"),i=o.attr2("action");e.setAttribute("target",j);h||e.setAttribute("method","POST");i!=f.url&&e.setAttribute("action",f.url);!f.skipEncodingOverride&&(!h||/post/i.test(h))&&o.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});f.timeout&&(r=setTimeout(function(){s=!0;n(y)},f.timeout));var k=[];try{if(f.extraData)for(var l in f.extraData)f.extraData.hasOwnProperty(l)&&(c.isPlainObject(f.extraData[l])&&f.extraData[l].hasOwnProperty("name")&&
f.extraData[l].hasOwnProperty("value")?k.push(c('<input type="hidden" name="'+f.extraData[l].name+'">').val(f.extraData[l].value).appendTo(e)[0]):k.push(c('<input type="hidden" name="'+l+'">').val(f.extraData[l]).appendTo(e)[0]));f.iframeTarget||(u.appendTo("body"),t.attachEvent?t.attachEvent("onload",n):t.addEventListener("load",n,!1));setTimeout(a,15);try{e.submit()}catch(m){document.createElement("form").submit.apply(e)}}finally{e.setAttribute("action",i),b?e.setAttribute("target",b):o.removeAttr("target"),
c(k).remove()}}function n(a){if(!i.aborted&&!G)if(q=d(t),q||(p("cannot access response document"),a=x),a===y&&i)i.abort("timeout"),v.reject(i,"timeout");else if(a==x&&i)i.abort("server abort"),v.reject(i,"error","server abort");else if(q&&q.location.href!=f.iframeSrc||s){t.detachEvent?t.detachEvent("onload",n):t.removeEventListener("load",n,!1);var a="success",b;try{if(s)throw"timeout";var h="xml"==f.dataType||q.XMLDocument||c.isXMLDoc(q);p("isXml="+h);if(!h&&(window.opera&&(null===q.body||!q.body.innerHTML))&&
--B){p("requeing onLoad callback, DOM not available");setTimeout(n,250);return}var g=q.body?q.body:q.documentElement;i.responseText=g?g.innerHTML:null;i.responseXML=q.XMLDocument?q.XMLDocument:q;h&&(f.dataType="xml");i.getResponseHeader=function(a){return{"content-type":f.dataType}[a]};g&&(i.status=Number(g.getAttribute("status"))||i.status,i.statusText=g.getAttribute("statusText")||i.statusText);var k=(f.dataType||"").toLowerCase(),o=/(json|script|text)/.test(k);if(o||f.textarea){var e=q.getElementsByTagName("textarea")[0];
if(e)i.responseText=e.value,i.status=Number(e.getAttribute("status"))||i.status,i.statusText=e.getAttribute("statusText")||i.statusText;else if(o){var j=q.getElementsByTagName("pre")[0],m=q.getElementsByTagName("body")[0];j?i.responseText=j.textContent?j.textContent:j.innerText:m&&(i.responseText=m.textContent?m.textContent:m.innerText)}}else"xml"==k&&(!i.responseXML&&i.responseText)&&(i.responseXML=C(i.responseText));try{var h=i,g=f,w=h.getResponseHeader("content-type")||"",E="xml"===k||!k&&0<=w.indexOf("xml"),
z=E?h.responseXML:h.responseText;E&&"parsererror"===z.documentElement.nodeName&&c.error&&c.error("parsererror");g&&g.dataFilter&&(z=g.dataFilter(z,k));"string"===typeof z&&("json"===k||!k&&0<=w.indexOf("json")?z=D(z):("script"===k||!k&&0<=w.indexOf("javascript"))&&c.globalEval(z));A=z}catch(H){a="parsererror",i.error=b=H||a}}catch(F){p("error caught: ",F),a="error",i.error=b=F||a}i.aborted&&(p("upload aborted"),a=null);i.status&&(a=200<=i.status&&300>i.status||304===i.status?"success":"error");"success"===
a?(f.success&&f.success.call(f.context,A,"success",i),v.resolve(i.responseText,"success",i),l&&c.event.trigger("ajaxSuccess",[i,f])):a&&(void 0===b&&(b=i.statusText),f.error&&f.error.call(f.context,i,a,b),v.reject(i,"error",b),l&&c.event.trigger("ajaxError",[i,f,b]));l&&c.event.trigger("ajaxComplete",[i,f]);l&&!--c.active&&c.event.trigger("ajaxStop");f.complete&&f.complete.call(f.context,i,a);G=!0;f.timeout&&clearTimeout(r);setTimeout(function(){f.iframeTarget||u.remove();i.responseXML=null},100)}}
var e=o[0],k,f,l,j,u,t,i,s,r,v=c.Deferred();if(b)for(k=0;k<w.length;k++)b=c(w[k]),m?b.prop("disabled",!1):b.removeAttr("disabled");f=c.extend(!0,{},c.ajaxSettings,a);f.context=f.context||f;j="jqFormIO"+(new Date).getTime();f.iframeTarget?(u=c(f.iframeTarget),(k=u.attr2("name"))?j=k:u.attr2("name",j)):(u=c('<iframe name="'+j+'" src="'+f.iframeSrc+'" />'),u.css({position:"absolute",top:"-1000px",left:"-1000px"}));t=u[0];i={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},
getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var b=a==="timeout"?"timeout":"aborted";p("aborting upload... "+b);this.aborted=1;try{t.contentWindow.document.execCommand&&t.contentWindow.document.execCommand("Stop")}catch(d){}u.attr("src",f.iframeSrc);i.error=b;f.error&&f.error.call(f.context,i,b,a);l&&c.event.trigger("ajaxError",[i,f,b]);f.complete&&f.complete.call(f.context,i,b)}};(l=f.global)&&0===c.active++&&c.event.trigger("ajaxStart");l&&c.event.trigger("ajaxSend",
[i,f]);if(f.beforeSend&&!1===f.beforeSend.call(f.context,i,f))return f.global&&c.active--,v.reject(),v;if(i.aborted)return v.reject(),v;if(b=e.clk)if((k=b.name)&&!b.disabled)f.extraData=f.extraData||{},f.extraData[k]=b.value,"image"==b.type&&(f.extraData[k+".x"]=e.clk_x,f.extraData[k+".y"]=e.clk_y);var y=1,x=2,b=c("meta[name=csrf-token]").attr("content");if((k=c("meta[name=csrf-param]").attr("content"))&&b)f.extraData=f.extraData||{},f.extraData[k]=b;f.forceSync?g():setTimeout(g,10);var A,q,B=50,
G,C=c.parseXML||function(a,b){if(window.ActiveXObject){b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a)}else b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&b.documentElement.nodeName!="parsererror"?b:null},D=c.parseJSON||function(a){return window.eval("("+a+")")};return v}if(!this.length)return p("ajaxSubmit: skipping submit process - no element selected"),this;var h,b,o=this;"function"==typeof a&&(a={success:a});h=a.type||this.attr2("method");b=a.url||
this.attr2("action");(b=(b="string"===typeof b?c.trim(b):"")||window.location.href||"")&&(b=(b.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:b,success:c.ajaxSettings.success,type:h||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return p("ajaxSubmit: submit aborted via beforeSerialize callback"),
this;var n=a.traditional;void 0===n&&(n=c.ajaxSettings.traditional);var w=[],g,l=this.formToArray(a.semantic,w);a.data&&(a.extraData=a.data,g=c.param(a.data,n));if(a.beforeSubmit&&!1===a.beforeSubmit(l,this,a))return p("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[l,this,a,b]);if(b.veto)return p("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;b=c.param(l,n);g&&(b=b?b+"&"+g:g);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?
"&":"?")+b,a.data=null):a.data=b;var k=[];a.resetForm&&k.push(function(){o.resetForm()});a.clearForm&&k.push(function(){o.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var s=a.success||function(){};k.push(function(b){var d=a.replaceTarget?"replaceWith":"html";c(a.target)[d](b).each(s,arguments)})}else a.success&&k.push(a.success);a.success=function(b,c,d){for(var h=a.context||this,g=0,e=k.length;g<e;g++)k[g].apply(h,[b,c,d||o,o])};if(a.error){var r=a.error;a.error=function(b,c,d){r.apply(a.context||
this,[b,c,d,o])}}if(a.complete){var D=a.complete;a.complete=function(b,c){D.apply(a.context||this,[b,c,o])}}g=0<c('input[type=file]:enabled[value!=""]',this).length;b="multipart/form-data"==o.attr("enctype")||"multipart/form-data"==o.attr("encoding");n=e&&j;p("fileAPI :"+n);var x;if(!1!==a.iframe&&(a.iframe||(g||b)&&!n))a.closeKeepAlive?c.get(a.closeKeepAlive,function(){x=d(l)}):x=d(l);else if((g||b)&&n){var A=new FormData;for(b=0;b<l.length;b++)A.append(l[b].name,l[b].value);if(a.extraData){b=c.param(a.extraData,
a.traditional).split("&");n=b.length;g=[];var y,B;for(y=0;y<n;y++)b[y]=b[y].replace(/\+/g," "),B=b[y].split("="),g.push([decodeURIComponent(B[0]),decodeURIComponent(B[1])]);for(b=0;b<g.length;b++)g[b]&&A.append(g[b][0],g[b][1])}a.data=null;g=c.extend(!0,{},c.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:h||"POST"});a.uploadProgress&&(g.xhr=function(){var b=c.ajaxSettings.xhr();b.upload&&b.upload.addEventListener("progress",function(b){var c=0,d=b.loaded||b.position,h=b.total;b.lengthComputable&&
(c=Math.ceil(d/h*100));a.uploadProgress(b,d,h,c)},false);return b});g.data=null;var C=g.beforeSend;g.beforeSend=function(a,b){b.data=A;C&&C.call(this,a,b)};x=c.ajax(g)}else x=c.ajax(a);o.removeData("jqxhr").data("jqxhr",x);for(g=0;g<w.length;g++)w[g]=null;this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&c.isFunction(c.fn.on);if(!a.delegation&&0===this.length){var d=this.selector,h=this.context;if(!c.isReady&&d)return p("DOM not ready, queuing ajaxForm"),
c(function(){c(d,h).ajaxForm(a)}),this;p("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return a.delegation?(c(document).off("submit.form-plugin",this.selector,s).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,a,s).on("click.form-plugin",this.selector,a,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,s).bind("click.form-plugin",a,r)};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};
c.fn.formToArray=function(a,d){var h=[];if(0===this.length)return h;var b=this[0],o=a?b.getElementsByTagName("*"):b.elements;if(!o)return h;var n,j,g,l,k,m;n=0;for(m=o.length;n<m;n++)if(k=o[n],(g=k.name)&&!k.disabled)if(a&&b.clk&&"image"==k.type)b.clk==k&&(h.push({name:g,value:c(k).val(),type:k.type}),h.push({name:g+".x",value:b.clk_x},{name:g+".y",value:b.clk_y}));else if((l=c.fieldValue(k,!0))&&l.constructor==Array){d&&d.push(k);j=0;for(k=l.length;j<k;j++)h.push({name:g,value:l[j]})}else if(e&&
"file"==k.type)if(d&&d.push(k),l=k.files,l.length)for(j=0;j<l.length;j++)h.push({name:g,value:l[j],type:k.type});else h.push({name:g,value:"",type:k.type});else null!==l&&"undefined"!=typeof l&&(d&&d.push(k),h.push({name:g,value:l,type:k.type,required:k.required}));if(!a&&b.clk&&(o=c(b.clk),n=o[0],(g=n.name)&&!n.disabled&&"image"==n.type))h.push({name:g,value:o.val()}),h.push({name:g+".x",value:b.clk_x},{name:g+".y",value:b.clk_y});return h};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};
c.fn.fieldSerialize=function(a){var d=[];this.each(function(){var h=this.name;if(h){var b=c.fieldValue(this,a);if(b&&b.constructor==Array)for(var e=0,j=b.length;e<j;e++)d.push({name:h,value:b[e]});else null!==b&&"undefined"!=typeof b&&d.push({name:this.name,value:b})}});return c.param(d)};c.fn.fieldValue=function(a){for(var d=[],h=0,b=this.length;h<b;h++){var e=c.fieldValue(this[h],a);null===e||("undefined"==typeof e||e.constructor==Array&&!e.length)||(e.constructor==Array?c.merge(d,e):d.push(e))}return d};
c.fieldValue=function(a,d){var h=a.name,b=a.type,e=a.tagName.toLowerCase();void 0===d&&(d=!0);if(d&&(!h||a.disabled||"reset"==b||"button"==b||("checkbox"==b||"radio"==b)&&!a.checked||("submit"==b||"image"==b)&&a.form&&a.form.clk!=a||"select"==e&&-1==a.selectedIndex))return null;if("select"==e){var j=a.selectedIndex;if(0>j)return null;for(var h=[],e=a.options,m=(b="select-one"==b)?j+1:e.length,j=b?j:0;j<m;j++){var g=e[j];if(g.selected){var l=g.value;l||(l=g.attributes&&g.attributes.value&&!g.attributes.value.specified?
g.text:g.value);if(b)return l;h.push(l)}}return h}return c(a).val()};c.fn.clearForm=function(a){return this.each(function(){c("input,select,textarea",this).clearFields(a)})};c.fn.clearFields=c.fn.clearInputs=function(a){var d=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,b=this.tagName.toLowerCase();if(d.test(e)||"textarea"==b)this.value="";else if("checkbox"==e||"radio"==e)this.checked=!1;else if("select"==
b)this.selectedIndex=-1;else if("file"==e)/MSIE/.test(navigator.userAgent)?c(this).replaceWith(c(this).clone(!0)):c(this).val("");else if(a&&(!0===a&&/hidden/.test(e)||"string"==typeof a&&c(this).is(a)))this.value=""})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&
(a=!0);return this.each(function(){var d=this.type;"checkbox"==d||"radio"==d?this.checked=a:"option"==this.tagName.toLowerCase()&&(d=c(this).parent("select"),a&&(d[0]&&"select-one"==d[0].type)&&d.find("option").selected(!1),this.selected=a)})};c.fn.ajaxSubmit.debug=!1})(jQuery);
