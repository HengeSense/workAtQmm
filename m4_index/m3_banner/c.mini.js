(function(){
/*
* 	2014.AJ.All.Rights.Reserved
*/
var c = {
	show : function( val ){
		console.log(val);
	},
	count : function( val ){      //计算对象的length
		//array and {} are both object!!
		var i=0;
		for(var key in val){i++;}
		return i;
	},
	keyCode : function(){
		c.addEvent(window,'keydown',showKeyCode);
		function showKeyCode(e){
			var e=c.getEvent(e);
			c.show(e.keyCode);
		}
	},
	readCookie : function( val ){   //return value or false
		var xx=document.cookie.split(';');
		for(var i=0;i<xx.length;i++){
			var xx2=xx[i].split('=');
			if(c.trim(xx2[0])==val){
				return xx2[1];
			}
		}
		return false;
	},
	showPosition : function( obj ){//show top,right,bottom,left from getBoundingClientRect
		var box=obj.getBoundingClientRect();
		c.show('Top:\t'+box.top+'px\n'+
				'right:\t'+box.right+'px\n'+
				'bottom:\t'+box.bottom+'px\n'+
				'left:\t'+box.left+'px');
	},
	aj : function( obj ){
		return document.getElementById(obj);
	},
	ajax : function( prop ){  //prop->obj,tag,className
		if(document.getElementsByClassName){
			return prop.obj.getElementsByClassName(prop.className);
		}else{
			var xx=(prop.obj===undefined)?document:prop.obj,
				xx2=(prop.tag===undefined)?'*':prop.tag,
				ele=xx.getElementsByTagName(xx2),
				length=ele.length,
				reg=new RegExp(prop.className,'');
			var arr = [];
			for(var i=0;i<length;i++){
				if(reg.test(ele[i].className)){
					arr.push(ele[i]);
				}
			}
			return arr;		
		}
	},

	getByAttr : function( property ){//property obj,tag,zhishi
		var obj=(typeof(property.obj)=='undefined')?document:property.obj;//document can not wrap with ""
		var tag=(typeof(property.tag)=='undefined')?'*':property.tag;
		var tags=obj.getElementsByTagName(tag);
		//c.show(tags.length);
		var arr = [];
		for(var i=0;i<tags.length;i++){
			if(tags[i].getAttribute('zhishi')==property.zhishi){
				arr.push(tags[i]);
			}
		}
		return arr;
	},
    addEvent : function( element, type, handler ){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },   
    getEvent : function( event ){
        return event ? event : window.event;
    },
    getRelatedTarget : function( event ){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    },
    getTarget : function( event ){
        return event.target || event.srcElement;
    },
    getWheelDelta : function( event ){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    preventDefault : function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler : function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }, 
    stopPropagation : function(event){
        var event=c.getEvent(event);
		if (event.stopPropagation){
            event.stopPropagation();
        } else { 
            event.cancelBubble = true;
        }
    },
	addAttribute :function(property){  //property->obj,attr,val
		var ex=new RegExp(property.val,'');
		var xx=property.obj.getAttribute(property.attr);
		if(!ex.test(xx)){
			xx+=' '+property.val;
		}
		property.obj.setAttribute(property.attr,xx);
	},
	delAttribute :function(property){
		var xx=property.obj.getAttribute(property.attr);
		property.obj.setAttribute(property.attr,c.trim(xx.replace(property.val,'')));
	},
	requestNextAnimationFrame :function(){
		var oWRAF,wrapper,callback,geckoVersion=0,
			userAgent = navigator.userAgent,
			index = 0,
			that = this;
		if (window.webkitRequestAnimationFrame) {
			wrapper = function (time) {
				if (time === undefined) {
				  time = +new Date();
				}
				that.callback(time);
			};
			oWRAF = window.webkitRequestAnimationFrame;
			window.webkitRequestAnimationFrame = function (callback, element) {
				that.callback = callback;
				oWRAF(wrapper, element);
			}
		}
		if (window.mozRequestAnimationFrame) {
			index = userAgent.indexOf('rv:');
			if (userAgent.indexOf('Gecko') != -1) {
				geckoVersion = userAgent.substr(index + 3, 3);
				if (geckoVersion === '2.0') {
				   window.mozRequestAnimationFrame = undefined;
				}
			}
		}
		return window.requestAnimationFrame   ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame      ||
		window.msRequestAnimationFrame     ||
		function(callback,element){
			var start,
				finish;
			window.setTimeout(function(){
				start = +new Date();
				callback(start);
				finish = +new Date();
				that.timeout = 1000 / 60 - (finish - start);
			}, that.timeout);
		};
	},
	querySelectorAll :function(val){
		return document.querySelectorAll(val);
	},
	querySelector :function(val){return document.querySelector(val);},
	//---------------END C
	//These will be removed in the future!
	trim: function(val){
		return val.replace(/(^\s*)|(\s*$)/g,"");
	},
	safe:function(val){
		return c.trim(val);
	},
	rand:function(a,b){
		return Math.round(a+Math.random()*(b-a));
	},
	JsPhp : function(property){  //need property--> url,str(null),func(deal with the xmlhttp.responseText)
		var xmlhttp;//JsPhp not support crossDomain!
		if(window.XMLHttpRequest){
			xmlhttp=new XMLHttpRequest();
		}else{
			xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
		}
		if(property.str===undefined){  //method is GET
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					property.func(xmlhttp.responseText);
				}
			}
			xmlhttp.open('GET',property.url,true);
			xmlhttp.send(null);
		}else{ //method is POST
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					property.func(xmlhttp.responseText);
				}
			}
			xmlhttp.open('POST',property.url,true);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
			xmlhttp.send(property.str);
		}
	}

};
c.tools={
	getItem:function(key){//与setLocalData match for use!
		if(window.localStorage){
			if(typeof localStorage.getItem(key)=='string'){
				return localStorage.getItem(key);
			}else{
				return false;
			}
		}else if(window.navigator.cookieEnabled){
			return c.readCookie(key);
		}
	},
	setItem:function(key,val){
		if(window.localStorage){
			localStorage.setItem(key,val);
			return true;
		}else if(window.navigator.cookieEnabled){
			document.cookie=key+"="+val;
			return true;
		}else{
			console.log('I wish you can open cookie!');
			return false;
		}
	},	
	removeItem:function(key){
		if(window.localStorage){
			localStorage.removeItem(key);
		}
		if(window.navigator.cookieEnabled){
			document.cookie=key+'='+c.tools.readCookie(key)+';expires='+(new Date(+new Date()-3600*1000)).toGMTString();
		}
	},
	readCookie: function(val){   //return value or false
		var xx=document.cookie.split(';');
		for(var i=0;i<xx.length;i++){
			var xx2=xx[i].split('=');
			if(c.trim(xx2[0])==val){
				return xx2[1];
			}
		}
		return false;
	},
	getValFromDom:function(dom){
		switch(dom.tagName){
			case 'INPUT':
				return dom.value;
				break;
			case 'div':
				return dom.innerHTML;
				break;
		}
	},
	ajax : function( prop ){//ajax server
		var xmlhttp;
		xmlhttp = getXhr();
		
		function getXhr(){
			if( window.XMLHttpRequest ){
				xmlhttp = new XMLHttpRequest();
			}else{
				xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			}
		}
		if(prop.str===undefined){  			//method is GET
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					prop.func(xmlhttp.responseText);
				}
			}
			xmlhttp.open('GET',prop.url,true);
			xmlhttp.send(null);
		}else{ 									//method is POST
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					prop.func(xmlhttp.responseText);
				}
			}
			xmlhttp.open('POST',prop.url,true);
			xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
			xmlhttp.send( prop.str );
		}
	},
};
c.is={
	set:function(val){
		return (typeof(val)===undefined)?false:true;
	},
	empty:function(val){ //空字符串return true
		if( val ===  undefined || val === null ){
			return true;
		}
		val = val+'';
		return /\S/.test(val)?false:true;
	},
	local:function(){
		var isLocal=false;
		['local','127.0','192.1'].forEach(function(val){
			if(document.domain.substr(0,5)===val){
				isLocal=true;
			}
		});
		return isLocal;
	},
	//END
};
c.console={
	d3:function(val,size){
		console.log('%c'+val, 'font-size:'+size+'px;font-family:Microsoft YaHei;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
	},
};

c.num={
	to:function(num,hex,hex2){//hex转换后的进制，hex2转换前的进制
		var arr=[],
			remain,
			isNegative=false,
			result=Number(num),
			str=num+'',
			hex=hex||2,
			hex2=hex2||10;
		if(result<0){
			result=0-result;
			str=str.replace(/^-*/g,'');
			isNegative=true;
		}
		if(hex2!=10){//change num to 10 hex!
			result=0;
			for(var i=0;i<str.length;i++){
				result+=str.charAt(str.length-1-i)*(Math.pow(hex2,i));
			}
		}
		if(hex<=1||hex>=37){
			c.show('您输入的进制有误..');
			return false;
		}
		while(result>=hex){
			remain=result%hex;
			if(remain>=10){//65-A  97-a Ascii CODE
				remain=String.fromCharCode((remain-10)+65);
			}
			arr.push(remain);
			result=Math.floor(result/hex);
		}
		if(result>=10){
			result=String.fromCharCode((result-10)+65);
		}
		arr.push(result);
		return (isNegative)?('-'+arr.reverse().join('')):(arr.reverse().join(''));
	},
	not:function(num){
		var str=String(num),
			arr=[];
		for(var i=0;i<str.length;i++){
			arr.push(Number(!Number(str.charAt(i))));
		}
		return Number(arr.join(''));
	},
	rand:function(a,b){
		return Math.round(a+Math.random()*(b-a));
	},
	SBox:function(){
		var arr=[];
		for(var i=0;i<16*4*8;i++){
			arr.push(c.num.rand(0,15));
		}
		return arr;
	},
	PBox:function(){
		//混淆32位数据的顺序
		var arr=[],result=[];
		for(var i=0;i<32;i++){
			arr.push(i);
		}
		for(var i=0;i<32;i++){
			result.push(Number(arr.splice(c.rand(0,arr.length),1)));
		}
		return result;
	},
	//END
}
c.dom={
	infoLineWrap:function(prop){//forEach lines onclick slideToggle.
		var isHideOthers=c.is.set(prop.isHideOthers)?prop.isHideOthers:true;
		var select;
		for(var i=0;i<prop.lines.length;i++){
			(function(obj){
				obj.index=i;
				c.addEvent(obj,'click',(function(){
					if(select!=obj.index){
						if(isHideOthers){
							(function(){
								for(var i=prop.wraps.length-1;i>=0;i--){
									$(prop.wraps[i]).slideUp();
								}
							})()
						}
						$(prop.wraps[obj.index]).slideToggle();
						select=obj.index;
					}else{
						$(prop.wraps[obj.index]).slideToggle();
					}
				}));
			})(prop.lines[i])
		}	
	},
	fixedPositionTop:function(obj){
		var box,old={},now={};
		box=obj.getBoundingClientRect();
		old.position=(obj.style.position)?obj.style.position:'relative';
		old.top=box.top;
		c.addEvent(window,'scroll',(function(){
			box=obj.getBoundingClientRect();
			now.top=box.top;
			if(window.scrollY>old.top){
				obj.style.position='fixed';
				obj.style.top='0px';				
			}else{
				obj.style.position='';
				obj.style.top='';
			}
		}));
	},
	wait:function(obj){//append wait div to obj!
		var xx=c.ajax({'obj':obj,'className':'waiting_div'})[0];
		if(xx!=undefined){
			$(xx).show();
			return false;
		}
		var box=obj.getBoundingClientRect(),
			W=box.right-box.left,
			H=box.bottom-box.top;
		var height=(H/4>70)?70:(H/4);
		height=(height<30)?30:height;
		var div=document.createElement('div');
		div.setAttribute('onclick','(function(e){var e=c.getEvent(e);c.stopPropagation(e);})()');
		div.setAttribute('class','waiting_div');
		div.setAttribute('style','position:absolute;background-color:rgba(255,255,255,0.5);top:0;left:0;width:100%;height:100%;');
		div.innerHTML="<img src='./img/wait.gif' style='position:absolute;top:50%;left:50%;"+
					"margin-top:"+(-height/2)+"px;margin-left:"+(-height/2)+"px;width:"+height+"px;height:"+height+"px;'>";
		obj.appendChild(div);
		return true;
	},
	nowait:function(obj){
		setTimeout(function(){
			var div=c.ajax({'obj':obj,'className':'waiting_div'})[0];
			if(div!=undefined){obj.removeChild(div);}		
		},1000);
	},
	//END
}
c.android={
	ajax:function(prop){
		if( prop.url == undefined ){
			throw( "You must give a url to for ajax!(prop.url)" );
		}
		$.ajax({
			type : 'GET',
			async:true,
			url : prop.url,
			dataType : "jsonp",
			data : prop.data,
			jsonp : "jsoncallback",
			success : function(json){
				prop.func(json);
			},
			error:function(val){
				prop.error(val);
			}
		});		
	},
	alert:function(val){
		alert(val);
	}
};

window.c = c;
})()
