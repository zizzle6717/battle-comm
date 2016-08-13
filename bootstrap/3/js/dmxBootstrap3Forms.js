/*
DMXzone Bootstrap 3 Forms Designer
Version: 3.5.0
(c) 2015 DMXzone.com
@build 2015-11-04 14:42:22
*/
!function(a){"use strict";var b=0,c=function(b,c){this.options=c,this.$elementFilestyle=[],this.$element=a(b)};c.prototype={clear:function(){this.$element.val(""),this.$elementFilestyle.find(":text").val(""),this.$elementFilestyle.find(".badge").remove()},destroy:function(){this.$element.removeAttr("style").removeData("filestyle"),this.$elementFilestyle.remove()},disabled:function(a){if(a===!0)this.options.disabled||(this.$element.attr("disabled","true"),this.$elementFilestyle.find("label").attr("disabled","true"),this.options.disabled=!0);else{if(a!==!1)return this.options.disabled;this.options.disabled&&(this.$element.removeAttr("disabled"),this.$elementFilestyle.find("label").removeAttr("disabled"),this.options.disabled=!1)}},buttonBefore:function(a){if(a===!0)this.options.buttonBefore||(this.options.buttonBefore=!0,this.options.input&&(this.$elementFilestyle.remove(),this.constructor(),this.pushNameFiles()));else{if(a!==!1)return this.options.buttonBefore;this.options.buttonBefore&&(this.options.buttonBefore=!1,this.options.input&&(this.$elementFilestyle.remove(),this.constructor(),this.pushNameFiles()))}},icon:function(a){if(a===!0)this.options.icon||(this.options.icon=!0,this.$elementFilestyle.find("label").prepend(this.htmlIcon()));else{if(a!==!1)return this.options.icon;this.options.icon&&(this.options.icon=!1,this.$elementFilestyle.find(".icon-span-filestyle").remove())}},input:function(a){if(a===!0)this.options.input||(this.options.input=!0,this.options.buttonBefore?this.$elementFilestyle.append(this.htmlInput()):this.$elementFilestyle.prepend(this.htmlInput()),this.$elementFilestyle.find(".badge").remove(),this.pushNameFiles(),this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));else{if(a!==!1)return this.options.input;if(this.options.input){this.options.input=!1,this.$elementFilestyle.find(":text").remove();var b=this.pushNameFiles();b.length>0&&this.options.badge&&this.$elementFilestyle.find("label").append(' <span class="badge">'+b.length+"</span>"),this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")}}},size:function(a){if(void 0===a)return this.options.size;var b=this.$elementFilestyle.find("label"),c=this.$elementFilestyle.find("input");b.removeClass("btn-lg btn-sm"),c.removeClass("input-lg input-sm"),"nr"!=a&&(b.addClass("btn-"+a),c.addClass("input-"+a))},placeholder:function(a){return void 0===a?this.options.placeholder:(this.options.placeholder=a,void this.$elementFilestyle.find("input").attr("placeholder",a))},buttonText:function(a){return void 0===a?this.options.buttonText:(this.options.buttonText=a,void this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText))},buttonName:function(a){return void 0===a?this.options.buttonName:(this.options.buttonName=a,void this.$elementFilestyle.find("label").attr({"class":"btn "+this.options.buttonName}))},iconName:function(a){return void 0===a?this.options.iconName:void this.$elementFilestyle.find(".icon-span-filestyle").attr({"class":"icon-span-filestyle "+this.options.iconName})},htmlIcon:function(){return this.options.icon?'<span class="icon-span-filestyle '+this.options.iconName+'"></span> ':""},htmlInput:function(){return this.options.input?'<input type="text" class="form-control '+("nr"==this.options.size?"":"input-"+this.options.size)+'" placeholder="'+this.options.placeholder+'" disabled> ':""},pushNameFiles:function(){var a="",b=[];void 0===this.$element[0].files?b[0]={name:this.$element[0]&&this.$element[0].value}:b=this.$element[0].files;for(var c=0;c<b.length;c++)a+=b[c].name.split("\\").pop()+", ";return""!==a?this.$elementFilestyle.find(":text").val(a.replace(/\, $/g,"")):this.$elementFilestyle.find(":text").val(""),b},constructor:function(){var c=this,d="",e=c.$element.attr("id"),f="";""!==e&&e||(e="filestyle-"+b,c.$element.attr({id:e}),b++),f='<span class="group-span-filestyle '+(c.options.input?"input-group-btn":"")+'"><label for="'+e+'" class="btn '+c.options.buttonName+" "+("nr"==c.options.size?"":"btn-"+c.options.size)+'" '+(c.options.disabled?'disabled="true"':"")+">"+c.htmlIcon()+'<span class="buttonText">'+c.options.buttonText+"</span></label></span>",d=c.options.buttonBefore?f+c.htmlInput():c.htmlInput()+f,c.$elementFilestyle=a('<div class="bootstrap-filestyle input-group">'+d+"</div>"),c.$elementFilestyle.find(".group-span-filestyle").attr("tabindex","0").keypress(function(a){return 13===a.keyCode||32===a.charCode?(c.$elementFilestyle.find("label").click(),!1):void 0}),c.$element.css({position:"absolute",clip:"rect(0px 0px 0px 0px)"}).attr("tabindex","-1").after(c.$elementFilestyle),c.options.disabled&&c.$element.attr("disabled","true"),c.$element.change(function(){var a=c.pushNameFiles();0==c.options.input&&c.options.badge?0==c.$elementFilestyle.find(".badge").length?c.$elementFilestyle.find("label").append(' <span class="badge">'+a.length+"</span>"):0==a.length?c.$elementFilestyle.find(".badge").remove():c.$elementFilestyle.find(".badge").html(a.length):c.$elementFilestyle.find(".badge").remove()}),window.navigator.userAgent.search(/firefox/i)>-1&&c.$elementFilestyle.find("label").click(function(){return c.$element.click(),!1})}};var d=a.fn.filestyle;a.fn.filestyle=function(b,d){var e="",f=this.each(function(){if("file"===a(this).attr("type")){var f=a(this),g=f.data("filestyle"),h=a.extend({},a.fn.filestyle.defaults,b,"object"==typeof b&&b);g||(f.data("filestyle",g=new c(this,h)),g.constructor()),"string"==typeof b&&(e=g[b](d))}});return void 0!==typeof e?e:f},a.fn.filestyle.defaults={buttonText:"Choose file",iconName:"glyphicon glyphicon-folder-open",buttonName:"btn-default",size:"nr",input:!0,badge:!0,icon:!0,buttonBefore:!1,disabled:!1,placeholder:""},a.fn.filestyle.noConflict=function(){return a.fn.filestyle=d,this},a(function(){a(".filestyle").each(function(){var b=a(this),c={input:"false"===b.attr("data-input")?!1:!0,icon:"false"===b.attr("data-icon")?!1:!0,buttonBefore:"true"===b.attr("data-buttonBefore")?!0:!1,disabled:"true"===b.attr("data-disabled")?!0:!1,size:b.attr("data-size"),buttonText:b.attr("data-buttonText"),buttonName:b.attr("data-buttonName"),iconName:b.attr("data-iconName"),badge:"false"===b.attr("data-badge")?!1:!0,placeholder:b.attr("data-placeholder")};b.filestyle(c)})})}(window.jQuery);