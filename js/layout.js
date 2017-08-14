    $(function(){
  
      /*************************  header   **************************/
			$(".header").load("http://localhost/xijiwan/layout.html header",function(){
				console.log(90);
				//客户服务
				$(".header_t_r li").eq(2).mouseenter(function(){
				$(this).animate({height:85},500)	
			    });
			    
			    $(".header_t_r li").eq(2).mouseleave(function(){
				$(this).animate({height:30},500)	
			    });
			    
			    
			    //登录注册
			    $(".header_c_rlogin").mouseenter(function(){
			    	$(this).stop().animate({height:170},500)
			    	$(this).css({background:'white',border:'1px #ccc solid'})
			    });
			     $(".header_c_rlogin").mouseleave(function(){
			    	$(this).stop().animate({height:50},500)
			    	$(this).css({background:'none',border:'1px #f5f5f5 solid'})
			    })
			    
			    //购物车
			    console.log(9);
			    $(".header_c_rcart").mouseenter(function(){
			    	$(this).css({background:'white'})
			    	$(".header_c_rcart p").css({border:'1px #ccc solid','background':'#fff','border-bottom':'1px white solid'});
			    	console.log(1);
			    	$(".header_cart").css({display:'block'})
			    	
			    });
			    $(".header_c_rcart").mouseleave(function(){
			    	$(this).css({background:'none'})
			    	$(".header_c_rcart >p").css({border:'1px #f5f5f5 solid',background:'none',})
			    	$(".header_cart").css({display:'none'})
			    });
			    
			    
			    
			    //二级菜单
			    
			    $(".menu >li").mouseenter(function(){
			    	var index = $(this).index();
			    	$(this).css({background:'black'})
			    	$(".menu >li").eq(index).find('a').css({color:'white'})
			    	
			    });
			   
			    $(".menu >li").mouseleave(function(){
			    	var index = $(this).index();
			    	$(this).css({background:'none'})
			    	$(".menu>li").eq(index).children('a').css({color:'#999'})
			    	
			    });  
			    

			    
			   $(".nav_l").mouseenter(function(){
					$(".menu").stop().animate({height:'392px'},300)
			   });
			   $(".nav_l").mouseleave(function(){
					$(".menu").stop().animate({height:'0px'},300)
			   });
			   
			   $(".menu").mouseenter(function(){
			   	    $(".second_menu").css("display","block")
			   	    $(".menu").stop().animate({height:'392px'},300)
			   });
			   
			   $(".menu").mouseleave(function(){
			   	    $(".second_menu").css("display","none")
			   	    $(".menu").stop().animate({height:'392px'},300)
			   });
			   
			   $(".second_menu").mouseenter(function(){
			   	    $(this).css("display","block")
			   	    $(".menu").css("display","block")
			   });
			   
			   $(".second_menu").mouseleave(function(){
			   	    $(".second_menu").css("display","none")
			   	    $(".menu").stop().animate({height:'0px'},300)
			   });
	   	
	   	
		$.getJSON("js/layout.json",function(json){
			var one = json.one;	 
			var two = json.two;
			var thr = json.thr;
			var fou = json.fou;
			var fiv = json.fiv;
			var six = json.six;
			var sev = json.sev;
			var egt = json.egt;
			 	    
		    $(".menu li").eq(0).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html("");
				//console.log(one);
				//console.log(one.one_1);
	            $("<p></p>").addClass("one1").appendTo($(".sec_ml"));
				$.each(one.one_1,function(x){
					$("<a href='#'>" + one.one_1[x] + "</a>").appendTo(".one1");
				});
				
				$("<p></p>").addClass("one2").appendTo($(".sec_ml"));
				$.each(one.one_2,function(y){
					$("<a href='#'>" + one.one_2[y] + "</a>").appendTo(".one2");
				});
				
				$("<p></p>").addClass("one3").appendTo($(".sec_ml"));
				$.each(one.one_3,function(z){
					$("<a href='#'>" + one.one_3[z] + "</a>").appendTo(".one3");
				});
				
				$("<p></p>").addClass("one4").appendTo($(".sec_ml"));
				$.each(one.one_4,function(n){
					$("<a href='#'>" + one.one_4[n] + "</a>").appendTo(".one4");
				});
				
				$("<p></p>").addClass("one5").appendTo($(".sec_ml"));
				$.each(one.one_5,function(m){
					$("<a href='#'>" + one.one_5[m] + "</a>").appendTo(".one5");
				});
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(one.url,function(i){
					$("<img src='" + one.url[i] + " '/>").appendTo(".sec_mr");
				})
			
		    });
		    
		    
		    
		    $(".menu li").eq(1).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html(""); 
				
	            $("<p></p>").addClass("two1").appendTo($(".sec_ml"));
				$.each(two.two_1,function(x){
					$("<a href='#'>" + two.two_1[x] + "</a>").appendTo(".two1");
				});
				
				$("<p></p>").addClass("two2").appendTo($(".sec_ml"));
				$.each(two.two_2,function(y){
					$("<a href='#'>" + two.two_2[y] + "</a>").appendTo(".two2");
				});
				
				$("<p></p>").addClass("two3").appendTo($(".sec_ml"));
				$.each(two.two_3,function(z){
					$("<a href='#'>" + two.two_3[z] + "</a>").appendTo(".two3");
				});
				
				$("<p></p>").addClass("two4").appendTo($(".sec_ml"));
				$.each(two.two_4,function(n){
					$("<a href='#'>" + two.two_4[n] + "</a>").appendTo(".two4");
				});
				
				$("<p></p>").addClass("two5").appendTo($(".sec_ml"));
				$.each(two.two_5,function(m){
					$("<a href='#'>" + two.two_5[m] + "</a>").appendTo(".two5");
				});
				
				$("<p></p>").addClass("two6").appendTo($(".sec_ml"));
				$.each(two.two_6,function(p){
					$("<a href='#'>" + two.two_6[p] + "</a>").appendTo(".two6");
				});
				
				$("<p></p>").addClass("two7").appendTo($(".sec_ml"));
				$.each(two.two_7,function(q){
					$("<a href='#'>" + two.two_7[q] + "</a>").appendTo(".two7");
				});
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(two.url,function(i){
					$("<img src='" + two.url[i] + " '/>").appendTo(".sec_mr");
				})
			
		    });
		    
		    
		    
		    $(".menu li").eq(2).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html("");
				//console.log(one);
				//console.log(one.one_1);
	            $("<p></p>").addClass("thr1").appendTo($(".sec_ml"));
				$.each(thr.thr_1,function(x){
					$("<a href='#'>" + thr.thr_1[x] + "</a>").appendTo(".thr1");
				});
				
				$("<p></p>").addClass("thr2").appendTo($(".sec_ml"));
				$.each(thr.thr_2,function(y){
					$("<a href='#'>" + thr.thr_2[y] + "</a>").appendTo(".thr2");
				});
				
				$("<p></p>").addClass("thr3").appendTo($(".sec_ml"));
				$.each(thr.thr_3,function(z){
					$("<a href='#'>" + thr.thr_3[z] + "</a>").appendTo(".thr3");
				});
				
				$("<p></p>").addClass("thr4").appendTo($(".sec_ml"));
				$.each(thr.thr_4,function(n){
					$("<a href='#'>" + thr.thr_4[n] + "</a>").appendTo(".thr4");
				});
				
				$("<p></p>").addClass("thr5").appendTo($(".sec_ml"));
				$.each(thr.thr_5,function(m){
					$("<a href='#'>" + thr.thr_5[m] + "</a>").appendTo(".thr5");
				});
				
				$("<p></p>").addClass("thr6").appendTo($(".sec_ml"));
				$.each(thr.thr_6,function(p){
					$("<a href='#'>" + thr.thr_6[p] + "</a>").appendTo(".thr6");
				});
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(one.url,function(i){
					$("<img src='" + one.url[i] + " '/>").appendTo(".sec_mr");
				});
			
		    });
		    
		    
		    
		    $(".menu li").eq(3).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html("");
				//console.log(one);
				//console.log(one.one_1);
	            $("<p></p>").addClass("fou1").appendTo($(".sec_ml"));
				$.each(fou.fou_1,function(x){
					$("<a href='#'>" + fou.fou_1[x] + "</a>").appendTo(".fou1");
				});
				
				$("<p></p>").addClass("fou2").appendTo($(".sec_ml"));
				$.each(fou.fou_2,function(y){
					$("<a href='#'>" + fou.fou_2[y] + "</a>").appendTo(".fou2");
				});
				
				$("<p></p>").addClass("fou3").appendTo($(".sec_ml"));
				$.each(fou.fou_3,function(z){
					$("<a href='#'>" + fou.fou_3[z] + "</a>").appendTo(".fou3");
				});
				
				$("<p></p>").addClass("fou4").appendTo($(".sec_ml"));
				$.each(fou.fou_4,function(n){
					$("<a href='#'>" + fou.fou_4[n] + "</a>").appendTo(".fou4");
				});
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(two.url,function(i){
					$("<img src='" + two.url[i] + " '/>").appendTo(".sec_mr");
				})
			
		    });
		    
		    
		    
		    $(".menu li").eq(4).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html("");
				//console.log(one);
				//console.log(one.one_1);
	            $("<p></p>").addClass("fiv1").appendTo($(".sec_ml"));
				$.each(fiv.fiv_1,function(x){
					$("<a href='#'>" + fiv.fiv_1[x] + "</a>").appendTo(".fiv1");
				});
				
				$("<p></p>").addClass("fiv2").appendTo($(".sec_ml"));
				$.each(fiv.fiv_2,function(y){
					$("<a href='#'>" + fiv.fiv_2[y] + "</a>").appendTo(".fiv2");
				});
				
				$("<p></p>").addClass("fiv3").appendTo($(".sec_ml"));
				$.each(fiv.fiv_3,function(z){
					$("<a href='#'>" + fiv.fiv_3[z] + "</a>").appendTo(".fiv3");
				});
				
				$("<p></p>").addClass("fiv4").appendTo($(".sec_ml"));
				$.each(fiv.fiv_4,function(n){
					$("<a href='#'>" + fiv.fiv_4[n] + "</a>").appendTo(".fiv4");
				});
				
				$("<p></p>").addClass("fiv5").appendTo($(".sec_ml"));
				$.each(fiv.fiv_5,function(m){
					$("<a href='#'>" + fiv.fiv_5[m] + "</a>").appendTo(".fiv5");
				});
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(one.url,function(i){
					$("<img src='" + one.url[i] + " '/>").appendTo(".sec_mr");
				});
			
		    });
		    
		    
		    
		    $(".menu li").eq(5).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html("");
				//console.log(one);
				//console.log(one.one_1);
	            $("<p></p>").addClass("six1").appendTo($(".sec_ml"));
				$.each(six.six_1,function(x){
					$("<a href='#'>" + six.six_1[x] + "</a>").appendTo(".six1");
				});
				
				$("<p></p>").addClass("six2").appendTo($(".sec_ml"));
				$.each(six.six_2,function(y){
					$("<a href='#'>" + six.six_2[y] + "</a>").appendTo(".six2");
				});
				
				$("<p></p>").addClass("six3").appendTo($(".sec_ml"));
				$.each(six.six_3,function(z){
					$("<a href='#'>" + six.six_3[z] + "</a>").appendTo(".six3");
				});
				
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(two.url,function(i){
					$("<img src='" + two.url[i] + " '/>").appendTo(".sec_mr");
				})
			
		    });
		    
		    
		    
		    $(".menu li").eq(6).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html("");
				//console.log(one);
				//console.log(one.one_1);
	            $("<p></p>").addClass("sev1").appendTo($(".sec_ml"));
				$.each(sev.sev_1,function(x){
					$("<a href='#'>" + sev.sev_1[x] + "</a>").appendTo(".sev1");
				});
				
				$("<p></p>").addClass("sev2").appendTo($(".sec_ml"));
				$.each(sev.sev_2,function(y){
					$("<a href='#'>" + sev.sev_2[y] + "</a>").appendTo(".sev2");
				});
				
				$("<p></p>").addClass("sev3").appendTo($(".sec_ml"));
				$.each(sev.sev_3,function(z){
					$("<a href='#'>" + sev.sev_3[z] + "</a>").appendTo(".sev3");
				});
				
				$("<p></p>").addClass("sev4").appendTo($(".sec_ml"));
				$.each(sev.sev_4,function(n){
					$("<a href='#'>" + sev.sev_4[n] + "</a>").appendTo(".sev4");
				});
				
				$("<p></p>").addClass("sev5").appendTo($(".sec_ml"));
				$.each(sev.sev_5,function(m){
					$("<a href='#'>" + sev.sev_5[m] + "</a>").appendTo(".sev5");
				});
				
				$("<p></p>").addClass("sev6").appendTo($(".sec_ml"));
				$.each(sev.sev_6,function(p){
					$("<a href='#'>" + sev.sev_6[p] + "</a>").appendTo(".sev6");
				});
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(one.url,function(i){
					$("<img src='" + one.url[i] + " '/>").appendTo(".sec_mr");
				});
			
		    });
		    
		    
		    $(".menu li").eq(7).mouseover(function(){
              $(".sec_ml").html(""); 
	          $(".sec_mr").html(""); 
				
	            $("<p></p>").addClass("egt1").appendTo($(".sec_ml"));
				$.each(egt.egt_1,function(x){
					$("<a href='#'>" + two.two_1[x] + "</a>").appendTo(".egt1");
				});
				
				$("<p></p>").addClass("egt2").appendTo($(".sec_ml"));
				$.each(egt.egt_2,function(y){
					$("<a href='#'>" + egt.egt_2[y] + "</a>").appendTo(".egt2");
				});
				
				$("<p></p>").addClass("egt3").appendTo($(".sec_ml"));
				$.each(egt.egt_3,function(z){
					$("<a href='#'>" + egt.egt_3[z] + "</a>").appendTo(".egt3");
				});
				
				$("<p></p>").addClass("egt4").appendTo($(".sec_ml"));
				$.each(egt.egt_4,function(n){
					$("<a href='#'>" + egt.egt_4[n] + "</a>").appendTo(".egt4");
				});
				
				$("<p></p>").addClass("egt5").appendTo($(".sec_ml"));
				$.each(egt.egt_5,function(m){
					$("<a href='#'>" + egt.egt_5[m] + "</a>").appendTo(".egt5");
				});
				
				$("<p>精选品牌</p>").appendTo(".sec_mr");
				$.each(two.url,function(i){
					$("<img src='" + two.url[i] + " '/>").appendTo(".sec_mr");
				})
			
		    });

	    });
			   	    	
 
   
			    //跨域请求数据
			 $(".searchInput").keydown(function(){
			 	$(".search_ol").css({display:"block"})
			 //	 $(".search_ol >li").innerHTML = "";
				 $.ajax({
	             	type:"get",
	             	url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+$(".searchInput").val()+"&json=1&p=3&sid=1468_21081_20927&req=2&bs=12306&pbs=12306&csor=1&pwd=123k",
	             	async:true,
	             	dataType:"jsonp",
                    
	             	jsonp:"cb"
	             }).then(function (res){
	             	console.log(res)
	             	var str = "";
	             	for(var i=0;i<res.s.length;i++){
					str += "<li>" +res.s[i]+ "</li>";
					$(".search_ol").html(str);
					
				    }
	             });
	             
	              if($(".searchInput").val() == ""){
	             	$(".search_ol").css({display:"none"})
	             }
	             
			 });

		      //显示商品总数量的标签节点对象
		    var ccount = document.getElementById("header_cartNum");
		
		    //约定好用名称为datas的cookie来存放购物车里的数据信息  datas里所存放的就是一个json字符串
			var listStr = cookieObj.get("datas");
			
			var listObj = JSON.parse(listStr); //数组
			//循环遍历数组，获取每一个对象中的pCount值相加总和
			var totalCount = 0; //默认为0
			for(var i = 0, len = listObj.length; i < len; i++) {
			    totalCount = listObj[i].pCount + totalCount;
			}
			    ccount.innerHTML = totalCount;	 
	    
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
 /********************* footer  ***********************/
	$(".footer").load("http://localhost/xijiwan/layout.html footer");
	



    
})