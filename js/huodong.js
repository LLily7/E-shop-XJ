function $1(id){
	return document.getElementById(id);
}
function ajax(url,fn){
	var xhr =window.XMLHttpRequest ? new XMLHttpRequest() :new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open("GET",url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			fn && fn(xhr.responseText);
		}
		
	}
}
function huodongshangpin(id){
	this.id=$1(id);
	this.createObj();
	
}
huodongshangpin.prototype.createObj=function(){
	var that=this;

	ajax('js/huodong.json',function(str){
		var json=JSON.parse(str);
		var b=4;
		for(var i=0;i<4;i++){
			
			var dl=document.createElement('dl');
			var dd=document.createElement('dd');
			var dt=document.createElement('dt');
			var img=document.createElement('img');
			img.src=json[i].img1;
			img.style.height='275px';
			dt.appendChild(img);
			
			dl.appendChild(dt);
			var p=document.createElement('p');
			var img=document.createElement('img');
			img.src=json[i+44].img2;
			img.style.width="25px";
			p.appendChild(img);
			var a=document.createElement('a');
			oText=document.createTextNode(json[i+4].a1);
			p.style.fontSize='14px';
			a.appendChild(oText);
			a.href='#';
			p.appendChild(a);
			dd.appendChild(p);
			var p=document.createElement('p');
			p.style.width='135px';
			p.style.height='15px';
			p.style.fontSize='12px';
			p.style.color='white';
			oText=document.createTextNode(json[i+4].rexiao);
		    p.appendChild(oText);
			p.style.background='orangered';
			dd.appendChild(p);
			
			var p=document.createElement('p');
			var b=document.createElement('b');
			oText=document.createTextNode(json[i+4].price);
			b.appendChild(oText);
		    p.appendChild(b);
		    var strike=document.createElement('strike');
		    oText=document.createTextNode(json[i+4].old);
		   strike.appendChild(oText);
			p.appendChild(strike);
			dd.appendChild(p);
			
		    var a=document.createElement('a');
		    a.href='#';
		    a.style.display='block';
		    a.style.width='246px';
		    a.style.height='37px';
		    a.style.textDecoration='none';
		    a.style.textAlign='center';
		    a.style.lineHeight='37px';
		    a.style.border='1px solid orangered';
		    a.style.borderRadius='5px';
		    oText=document.createTextNode("立即抢购");
		    a.appendChild(oText);
		    dd.appendChild(a);
			dl.appendChild(dd);
			dl.style.width='285px';
			dl.style.height='425px';
			dl.style.background='white';
			that.id.appendChild(dl);
		}
	})
}

function huodongshangpin2(id){
	this.id=$1(id);
	this.createObj();
	
}
huodongshangpin2.prototype.createObj=function(){
	var that=this;

	ajax('js/huodong.json',function(str){
		var json=JSON.parse(str);
		
		for(var i=0;i<36;i++){
			
			var dl=document.createElement('dl');
			var dd=document.createElement('dd');
			var dt=document.createElement('dt');
			var img=document.createElement('img');
			img.src=json[i+8].img4;
			img.style.height='275px';
			dt.appendChild(img);
			
			dl.appendChild(dt);
			var p=document.createElement('p');
			var img=document.createElement('img');
			img.src=json[i+44].img2;
			img.style.width="25px";
			p.appendChild(img);
			var a=document.createElement('a');
			oText=document.createTextNode(json[i+44].a1);
			p.style.fontSize='14px';
			a.appendChild(oText);
			a.href='#';
			p.appendChild(a);
			dd.appendChild(p);
			var p=document.createElement('p');
			p.style.width='135px';
			p.style.height='15px';
			p.style.fontSize='12px';
			p.style.color='white';
			oText=document.createTextNode(json[i+44].rexiao);
		    p.appendChild(oText);
			p.style.background='orangered';
			dd.appendChild(p);
			
			var p=document.createElement('p');
			var b=document.createElement('b');
			oText=document.createTextNode(json[i+44].price);
			b.appendChild(oText);
		    p.appendChild(b);
		    var strike=document.createElement('strike');
		    oText=document.createTextNode(json[i+44].old);
		   strike.appendChild(oText);
			p.appendChild(strike);
			dd.appendChild(p);
			
		    var a=document.createElement('a');
		    a.href='#';
		    a.style.display='block';
		    a.style.width='246px';
		    a.style.height='37px';
		    a.style.textDecoration='none';
		    a.style.textAlign='center';
		    a.style.lineHeight='37px';
		    a.style.border='1px solid orangered';
		    a.style.borderRadius='5px';
		    oText=document.createTextNode("立即抢购");
		    a.appendChild(oText);
		    dd.appendChild(a);
			dl.appendChild(dd);
			dl.style.width='285px';
			dl.style.height='425px';
			dl.style.background='white';
			that.id.appendChild(dl);
		}
	})
}


