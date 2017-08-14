window.onload=function(){
	var box=document.getElementsByClassName("box")[0];
	var phone=document.getElementById("phone");
	var pw=document.getElementById("pw");
	var sp1=document.getElementById("sp1");
	var sp2=document.getElementById("sp2");
	var btn=document.getElementById("btn");
	var zc=document.getElementById("zc");//注册
	var erro=document.getElementById("erro");
	var ck1=document.getElementById("ck1");
	var body=document.getElementsByTagName("body")[0];
	
    var str=document.cookie;
	var arr=str.split("; ");
	var trr=[];
	for(var i=0;i<arr.length;i++){
	   var col=arr[i].split("=");
	   if(col[0].match("user_")){
	     var o=col[0].split("_")[1]; 
		 trr.push({name:o,pwd:col[1]});
	   }
	}
	if(trr.length!=0){
		var Uname=trr[trr.length-1].name;
		var Upwd=trr[trr.length-1].pwd;
	}
	phone.onfocus=function(){
		sp1.style.color="#f47518";
		startMove(sp1,{top:120})
	}
	
	sp1.onclick=function(){
		phone.onfocus();
		phone.focus();
	}
	
	phone.onblur=function(){
		if(phone.value==""){
			sp1.style.color="#aaa";
			startMove(sp1,{top:145})
		}
	}
	
	pw.onfocus=function(){
		sp2.style.color="#f47518";
		startMove(sp2,{top:205})
	}
	sp2.onclick=function(){
		pw.onfocus();
		pw.focus();
	}
	pw.onblur=function(){
		if(pw.value==""){
			sp2.style.color="#aaa";
			startMove(sp2,{top:230})
		}
	}
	zc.onclick=function(){
		location.href="register.html";
	}
	
	//var strName=phone.value;
	// var cookiePwd=getCookie("user_"+encodeURIComponent(strName));
	var p=0;
	btn.onclick=function(){
		var strName=document.getElementById("phone").value;
        var strPass=document.getElementById("pw").value;
        var cookiePwd=getCookie("user_"+encodeURIComponent(strName));
        for(var i=0;i<trr.length;i++){
        	//trr[i].index=i;
        	if(trr[i].name==+strName){
        		p=i;
        	}
        }
       // console.log(strName+","+strPass);
	     if(cookiePwd==strPass && cookiePwd!=""){
	     	 	location.href="index.html?p="+p;
	     }else{ 
	     	erro.style.display="block";
		    body.style.background="rgba(0,0,0,0.5)";
		    box.style.display="none";
		    setTimeout(function(){
				erro.style.display="none";
				body.style.background="";
				box.style.display="block";
		    },1500)
	     }
	}
	if(trr.length!=0){
		if(ck1.checked){
		  phone.onfocus();
		  pw.onfocus();
		  phone.value=Uname;
		  pw.value=Upwd;
		}
	}
}