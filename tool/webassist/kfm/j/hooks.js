/* begin core section */

/* define the order of the categories */
var HookCategories=["main", "view", "edit", 'selection'];
var show_category_headers=true;
var context_categories={};
for(i=0;i<HookCategories.length;i++){
	var catname=HookCategories[i];
	var cat=new kfm_context_category(catname);
	context_categories[catname]=cat;
}
var kfm_imageExtensions=['jpg','png','gif','jpeg'];
/* initialize arrays */
var HooksSingleReadonly={};
var HooksSingleWritable={};
var HooksMultiple={};
var HooksFilePanel=[];
var HooksDirectoryReadonly=[];
var HooksDirectoryWritable=[];
var HooksGlobal=[];
function kfm_addHook(objoriginal, properties){
	var obj=objoriginal;
	/*Write properties to object, so they can be different for each call*/
	if(properties){
		if(typeof(properties.doFunction)!="undefined"){
			if(typeof(properties.doFunction)=="function")obj.doFunction=properties.doFunction;
			if(typeof(properties.doFunction)=="string")obj.doFunction=obj[properties.doFunction];
		}
		if(typeof(properties.mode)!="undefined")obj.mode=properties.mode;
		if(typeof(properties.title)!="undefined")obj.title=properties.title;
		if(typeof(properties.name)!="undefined")obj.name=properties.name;
		if(typeof(properties.category)!="undefined")obj.category=properties.category;
		if(typeof(properties.defaultOpener)!="undefined")obj.defaultOpener=properties.defaultOpener;
		if(typeof(properties.writable)!="undefined")obj.writable=properties.writable;
		if(typeof(properties.extensions)!="undefined")obj.extensions=properties.extensions;
	}
	if(typeof(obj.name)=="undefined"&&typeof(obj.title)!="undefined")obj.name=obj.title; // make sure the plugin has a name
	if(typeof(obj.category)=="undefined")obj.category=HookCategories[0]; // Without category, place in the top category
	if(!obj.extensions)obj.extensions="all";

	if(!kfm_vars.permissions.file.ed && obj.category=='edit')return;
	if(!kfm_vars.permissions.image.manip && obj.category=='edit'){
		if(obj.extensions=='all')return;
		//remove unwanted extension (image extensions)
		for(var i=0; i<obj.extensions.length; i++){
			for(var j=0; j<kfm_imageExtensions.length; j++){
				if(obj.extensions[i]==kfm_imageExtensions[j]){
					obj.extensions.splice(i,1);
					return;
				}
			}
		}
	}

	if(obj.mode==0 || obj.mode==2){
		/*single file*/
		if(obj.writable==1 || obj.writable==2)kfm_addHookToArray(obj,"HooksSingleWritable");
		if(obj.writable==0 || obj.writable==2)kfm_addHookToArray(obj,"HooksSingleReadonly");
	}
	if(obj.mode==1 || obj.mode==2){
		/*selection of multiple files*/
		kfm_addHookToArray(obj,"HooksMultiple");
	}
	if(obj.mode==3){ //file panel
		HooksFilePanel.push(obj);
	}
	if(obj.mode==4){ // directories
		if(obj.writable==0 || obj.writable==2) HooksDirectoryReadonly.push(obj);
		if(obj.writable==1 || obj.writable==2) HooksDirectoryWritable.push(obj);
	}
	if(obj.mode==5)HooksGlobal.push(obj);
}
function kfm_addHookToArray(obj, HooksArray){
	/* Add the hook object to the proper array */
	if(!obj.extensions)return false;
	if(typeof(obj.extensions)=="string" && obj.extensions.toLowerCase()=="all" || HooksArray=="HooksMultiple"){
		ext="all";
		if(typeof(window[HooksArray][ext])=="undefined")kfm_addHookExtension(HooksArray, ext);
		if(typeof(window[HooksArray][ext][obj.category])=="undefined")kfm_addHookCategory(HooksArray, ext, obj.category);
		window[HooksArray][ext][obj.category].push(obj);
	}else{
		for(var i=0;i<obj.extensions.length; i++){
			ext=obj.extensions[i];
			if(typeof(window[HooksArray][ext])=="undefined")kfm_addHookExtension(HooksArray, ext);
			if(typeof(window[HooksArray][ext][obj.category])=="undefined")kfm_addHookCategory(HooksArray, ext, obj.category);
			window[HooksArray][ext][obj.category].push(obj);
		}
	}
}
function kfm_addHookExtension(HooksArray, ext){
	window[HooksArray][ext]={};
}
function kfm_addHookCategory(HookArray,ext, newCategory){
	/*Add a hook category and*/
	window[HookArray][ext][newCategory]=[];
}
function kfm_getLinks(files,nocontext){
	/**
	 * initial return function 
	 * category information is lost but order of category is maintained 
	 */
	var HooksArray="";//initialize

	/* multiple file section */
	var cPlugins=[];
	function addPlugin(plugin, fid, category){
		var add=true;
		/* determine index and add plugin if is not present */
		var index=-1;
		for(var i=0;i<cPlugins.length;i++){
			if(cPlugins[i].name==plugin.name){
				add=false;
				index=i;
				break;
			}
		}
		if(add){
			cPlugins.push(plugin);
			index=cPlugins.length-1;
			cPlugins[index].doParameter=[];
		}
	
		/* Then add the file id to the doParameter */
		cPlugins[index].doParameter.push(fid);
		if(add && !nocontext)context_categories[category].add(cPlugins[index]);
	}
	if(files.length>1){
		for(var i=0; i<files.length; i++){
			var F=File_getInstance(files[i]);
         //var extension=F.name.replace(/.*\./,'').toLowerCase();
			var extension=F.ext;
			for(var k=0;k<HookCategories.length; k++){
				if(HooksMultiple.all[HookCategories[k]])plugins=HooksMultiple.all[HookCategories[k]];
				else plugins=[];
				for(var j=0; j<plugins.length; j++){ // loop over plugins
					var plugin=plugins[j];
					if(	F.writable && 
							(plugin.writable==1 || plugin.writable==2) && 
							((typeof(plugin.extensions)=="string" && plugin.extensions=="all") || plugin.extensions.indexOf(extension)!=-1)
						)
						addPlugin(plugin,F.id,HookCategories[k]);
					else if(	!F.writable && 
							(plugin.writable==0 || plugin.writable==2) && 
							((typeof(plugin.extensions)=="string" && plugin.extensions=="all") || plugin.extensions.indexOf(extension)!=-1)
						)
						addPlugin(plugin,F.id,HookCategories[k]);
				}
			}
		}
		return cPlugins;
	}

	/* single file section */
	var hookObjects=[];
	var F=File_getInstance(files[0]);
	var ext=F.ext;
	if(F.writable)HooksArray="HooksSingleWritable";
	else HooksArray="HooksSingleReadonly";

	for(var j=0;j<HookCategories.length;j++){
		category=HookCategories[j];
		/* extend is a mootools function*/
		if(typeof(window[HooksArray]['all'][category])!='undefined')hookObjects.extend(window[HooksArray]['all'][category]);
		if(window[HooksArray][ext] && typeof(window[HooksArray][ext][category])!='undefined')hookObjects.extend(window[HooksArray][ext][category]);
	}
	if(!nocontext){
		for(j=0;j<hookObjects.length;++j){
			var item=hookObjects[j];
			if(kfm_vars.associations[F.ext] && kfm_vars.associations[F.ext]==item.name){ // Create an open object
				context_categories['main'].add({
					name:'open',
					title:'open',
					category:'main',
					doFunction:item.doFunction,
					doParameter:item.doParameter
				},true);
			}
			item.doParameter=[F.id];
			context_categories[item.category].add(item);
		};
	}
	return hookObjects;
}
function kfm_getDefaultOpener(files){
	var plugin_name;
	var F=File_getInstance(files[0]);
	if(kfm_vars.associations[F.ext]){
		var hooks=kfm_getLinks(files,true);
		plugin_name=kfm_vars.associations[F.ext];
		for(var i=0;i<hooks.length;++i){
			if(hooks[i].name==plugin_name)return hooks[i];
		}
	}
	else if(kfm_vars.associations['all']){
		var hooks=kfm_getLinks(files,true);
		plugin_name=kfm_vars.associations['all'];
		for(var i=0;i<hooks.length;++i){
			if(hooks[i].name==plugin_name)return hooks[i];
		}
	}
	return false;
}
function kfm_context_category(name){
	this.name=name;
	this.title=this.name;
	this.type='context_category';
	this.items=[];
	this.add=function(item,first){
		if(typeof(item)=='array'){
			for(var i=0;i<item.length;i++) this.add(item[i]);
		}else{
			if(first) this.items.unshift(item);
			else this.items.push(item);
		}
	}
	this.size=function(){
		return this.items.length;
	}
	this.clear=function(){
		this.items=[];
	}
}
