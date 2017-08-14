 window.onload=function(){
		var t=0;
		var img1=document.getElementById("img1");
		var ul1=document.getElementById("ul1");
		var sp=document.getElementById("sp");
		var mail=document.getElementById("mail");
		var sp9=document.getElementById("sp9");
		var sp2=document.getElementById("sp2");
		var sp3=document.getElementById("sp3");
		var yzm=document.getElementById("yzm");
		var sp4=document.getElementById("sp4");
		var sjimg=document.getElementById("SJimg");
		var sp5=document.getElementById("sp5");
		var sj=document.getElementById("sj");
		var col=["img/sj1.png","./img/sj2.png","./img/sj3.png","./img/sj4.png","./img/sj5.png","./img/sj6.png"]
		var brr=["hcer","g3bo","y03t","gmc6","0ylw","4tya"];
		var duanxin=document.getElementById("duanxin");
		var sp7=document.getElementById("sp7");
		var pw=document.getElementById("pw");
		var sp6=document.getElementById("sp6");
		var btn=document.getElementById("btn");
		var DX=document.getElementsByClassName("DX")[0];
		var flag=0; var num=0;
		
		//展开或收缩ul国籍列表
		img1.onclick=function(){
			if(flag%2==0){
				startMove(ul1,{height:240});
				img1.src="img/up.jpg";
				ul1.className="select";
				//con.className="conselect";
			}else{ startMove(ul1,{height:0},function(){ul1.className="";});
			    img1.src= "img/down.jpg";
			}
			flag++;
	    }
		
		var arr=ul1.children;
		for(var i=0;i<arr.length;i++){
			arr[i].index=i;
			arr[i].onclick=function(){
				sp.innerHTML=this.innerHTML;
				img1.onclick();
			}
		}
		
		mail.onfocus=function(){
			mail.style.border="1px #f47518 solid";
			sp2.style.color="#f47518";
			startMove(sp2,{top:240});
		}
		
		sp2.onclick=function(){
			mail.onfocus();
			mail.focus();
		}
		
		mail.onblur=function(){
			 mail.style.borderColor="#CCCCCC";
			 if(mail.value==""){
				 startMove(sp2,{top:260});
				 sp2.style.color="#aaa";
			 }else{
			    var phone=mail.value;
                 if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){ 
                    sp3.style.display="block";
                    return false;
                 }else{ 
                 	sp3.style.display="none"; t++;
                 }
		     }
		}
		
		yzm.onfocus=function(){
			sp4.style.color="#f47518";
			startMove(sp4,{top:315});
		}
		
		sp4.onclick=function(){
			yzm.onfocus();
			yzm.focus();
		}
		
		yzm.onblur=function(){
			if(yzm.value==""){
				startMove(sp4,{top:340});
				sp4.style.color="#aaa";
			}else{
				if(yzm.value.toUpperCase()!==brr[num%6].toUpperCase()){
					sp5.style.display="block";
				}else{ 
					sp5.style.display="none"; t++;
				}
			}
		}
		
		sjimg.onclick=function(){
			num++;
			//console.log(col[num%6]);
			sj.src=col[num%6];
			yzm.onblur();
		}
		duanxin.onfocus=function(){
			sp6.style.color="#f47518";
			startMove(sp6,{top:393});
			
		}
		duanxin.onblur=function(){
			if(duanxin.value==""){
				sp6.style.color="#aaa";
				startMove(sp6,{top:418});
			}
		}
		
		sp6.onclick=function(){
			duanxin.onfocus();
			duanxin.focus();
		}
		
		pw.onfocus=function(){
			sp7.style.color="#f47518";
			startMove(sp7,{top:470})
		}
		
		sp7.onclick=function(){
			pw.onfocus();
			pw.focus();
		}
		
		pw.onblur=function(){
			if(pw.value==""){
			sp7.style.color="#aaa";
			startMove(sp7,{top:495})
			}else{
				var str=pw.value;
				if(!(/^[a-z0-9_-]{6,18}$/.test(str))){
					sp9.style.display="block";
					return false;
				}else{
					sp9.style.display="none";
					t++;
				}
			}
			
		}
		
		
		/********************** 注册按钮  **********************/
		btn.onclick=function(){
			if(t==3){
				var strName=document.getElementById("mail").value;//取出用户名
				var strPass=document.getElementById("pw").value;//取出密码
				
				/********************* cookies  *********************/
				if(getCookie("user_"+encodeURIComponent(strName))!=""){//检查该用户名是否已在cookie中
					alert("注册失败，用户名已被占用");
				}else{
					setCookie("user_"+encodeURIComponent(strName), strPass, 3650);//将该用户名存入cookie
					alert("注册成功");
				}
			}else{ 
				alert("请先完成注册")};
			}
				
				
		var timer
			
		DX.onclick=function(){
			clearInterval(timer);	
		    var i=60; 
			 timer=setInterval(function(){
				i--;
			  	DX.innerText="获取验证码("+i+"秒)"
			  	DX.style.background="rgba(0,0,0,0.5)";
			  	DX.style.color = "white";
			  	DX.style.border = "none"
			  	if(i==0)
			  	{
			  		clearInterval(timer);
			  		DX.innerText="获取短信验证码";
			  		DX.style.background="white";
				  	DX.style.color = "#f47518";
				  	DX.style.border = "1px #f47518 solid"
			  	}
			  },1000)
			}
	    }