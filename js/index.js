$(function(){
	

/*************************  header   **************************/
			$(".header").load("http://localhost/xijiwan/layout.html header",function(){
			//	console.log($(".header").height());
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
			    $(".header_c_rcart").mouseenter(function(){
			    	$(this).css({background:'white'})
			    	$(".header_c_rcart >p").css({border:'1px #ccc solid',background:'white','border-bottom':'1px white solid'})
			    	$(".header_cart").css({display:'block'})
			    	
			    });
			    $(".header_c_rcart").mouseleave(function(){
			    	$(this).css({background:'none'})
			    	$(".header_c_rcart >p").css({border:'1px #f5f5f5 solid',background:'none'})
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
			    
			    $(".menu").mouseenter(function(){
			   	    $(".second_menu").css("display","block")
			   	   
			   });
			   
			   $(".menu").mouseleave(function(){
			   	    $(".second_menu").css("display","none")
			   	   
			   });
			   
			   $(".second_menu").mouseenter(function(){
			   	    $(this).css("display","block")
			   	   
			   });
			   
			   $(".second_menu").mouseleave(function(){
			   	    $(this).css("display","none")
			   	   
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
	             
			 })
                
			    
		});
		
         /********************* footer  ***********************/
	$(".footer").load("http://localhost/xijiwan/layout.html footer");
			

 
 
   	   //解析json数据
   	$.getJSON('js/index.json',function(json){
		//console.log(json);
		//  左边  热卖排行中的
		var hot_Products = json.hot_products;
		
		var hot_Pro1 = hot_Products.hot_products1;
		var myUrl1 = hot_Pro1.url;
		var myAddr1 = hot_Pro1.addr;
		var myTex1 = hot_Pro1.text;
		var myTex11 = hot_Pro1.text1;
		var myPrice1 = hot_Pro1.price;
		
		var hot_Pro2 = hot_Products.hot_products2;
		var myUrl2 = hot_Pro2.url;
		var myAddr2 = hot_Pro2.addr;
		var myTex2 = hot_Pro2.text;
		var myTex21 = hot_Pro2.text1;
		var myPrice2 = hot_Pro2.price;
		
		var hot_Pro3 = hot_Products.hot_products3;
		var myUrl3 = hot_Pro3.url;
		var myAddr3 = hot_Pro3.addr;
		var myTex3 = hot_Pro3.text;
		var myPrice3 = hot_Pro3.price;
		
		var hot_Pro4 = hot_Products.hot_products4;
		var myUrl4 = hot_Pro4.url;
		var myAddr4 = hot_Pro4.addr;
		var myTex4 = hot_Pro4.text;
		var myPrice4 = hot_Pro4.price;
		
		var hot_Pro5 = hot_Products.hot_products5;
		var myUrl5 = hot_Pro5.url;
		var myAddr5 = hot_Pro5.addr;
		var myTex5 = hot_Pro5.text;
		var myPrice5 = hot_Pro5.price;
		
		//遍历  左边热卖排行中的   ol li 
		$(".index_m_tlt_ol li").each(function(index,item){
			item.innerHTML+="<div><a href='detail.html'><img src=' "+ myUrl1[index] +" '/></a><p><a href='#'><img src=' "+ myAddr1[index] + " '/>  " + myTex1[index] +"</a><span>" +myTex11[index]+ "</span></p><span>"+ myPrice1[index] +"</span></div>";
			item.innerHTML+="<div><a href='detail.html'><img src=' "+ myUrl2[index] +" '/></a><p><a href='#'><img src=' "+ myAddr2[index] + " '/>  " + myTex2[index] +"</a><span>" +myTex21[index]+ "</span></p><span>"+ myPrice2[index] +"</span></div>";
			item.innerHTML+="<div><a href='detail.html'><img src=' "+ myUrl3[index] +" '/></a><p><a href='#'><img src=' "+ myAddr3[index] + " '/>  " + myTex3[index] +"</a></p><span>"+ myPrice3[index] +"</span></div>";
			item.innerHTML+="<div><a href='detail.html'><img src=' "+ myUrl4[index] +" '/></a><p><a href='#'><img src=' "+ myAddr4[index] + " '/>  " + myTex4[index] +"</a></p><span>"+ myPrice4[index] +"</span></div>";
			item.innerHTML+="<div><a href='detail.html'><img src=' "+ myUrl5[index] +" '/></a><p><a href='#'><img src=' "+ myAddr5[index] + " '/>  " + myTex5[index] +"</a></p><span>"+ myPrice5[index] +"</span></div>";

		}  );
		
		
		
		// 右边     handpick  精选 
		
		var handpick = json.handpick;
		
		var handpick1 = handpick.handpick1;
		var handUrl1 = handpick1.url;
		var handText1 = handpick1.text;
		var handPrice1 =  handpick1.price;
		
		var handpick2 = handpick.handpick2;
		var handUrl2 = handpick2.url;
		var handText2 = handpick2.text;
		var handPrice2 =  handpick2.price;
		
		var handpick3 = handpick.handpick3;
		var handUrl3 = handpick3.url;
		var handText3 = handpick3.text;
		var handPrice3 =  handpick3.price;
		
		$.each(handUrl1,function(i){
			$("<dl><dt><img src ='" + handUrl1[i] +  "'/></dt><dd><a href='#'>" + handText1[i] + "</a><span>" +handPrice1[i] + "</span></dd></dl>").appendTo($(".index_m_tr_ol >li").eq(0));
			$("<dl><dt><img src ='" + handUrl2[i] +  "'/></dt><dd><a href='#'>" + handText2[i] + "</a><span>" +handPrice3[i] + "</span></dd></dl>").appendTo($(".index_m_tr_ol >li").eq(1));
			$("<dl><dt><img src ='" + handUrl3[i] +  "'/></dt><dd><a href='#'>" + handText3[i] + "</a><span>" +handPrice3[i] + "</span></dd></dl>").appendTo($(".index_m_tr_ol >li").eq(2));
		});
					
		//左边下部        每日上新
		var myNew = json.new;
		
		var myNew1 = myNew.new1;
		var newUrl1 = myNew1.url;
		var newAddr1 = myNew1.addr;
		var newTex1 = myNew1.text;
		var newTex11 = myNew1.text1;
		var newPrice1 = myNew1.price;
		
		var myNew2 = myNew.new2;
		var newUrl2 = myNew2.url;
		var newAddr2 = myNew2.addr;
		var newTex2 = myNew2.text;
		var newTex21 = myNew2.text1;
		var newPrice2 = myNew2.price;
		
		//遍历  数据
		$.each(newUrl1,function(j){
			$("<div><a href=''><img src='"+ newUrl2[j]+"'/></a> <p><a href='#'><img src='"+ newAddr2[j] +"'/>"+ newTex2[j] +"</a><span>"+ newTex21[j] +"</span></p><span>"+newPrice2[j]+"</span></div>").appendTo($(".index_m_tlb_ul >li").eq(0));
			$("<div><a href=''><img src='"+ newUrl1[j]+"'/></a> <p><a href='#'><img src='"+ newAddr1[j] +"'/>"+ newTex1[j] +"</a><span>"+ newTex11[j] +"</span></p><span>"+newPrice1[j]+"</span></div>").appendTo($(".index_m_tlb_ul >li").eq(1));
			$("<div><a href=''><img src='"+ newUrl2[j]+"'/></a> <p><a href='#'><img src='"+ newAddr2[j] +"'/>"+ newTex2[j] +"</a><span>"+ newTex21[j] +"</span></p><span>"+newPrice2[j]+"</span></div>").appendTo($(".index_m_tlb_ul >li").eq(2));
			$("<div><a href=''><img src='"+ newUrl1[j]+"'/></a> <p><a href='#'><img src='"+ newAddr1[j] +"'/>"+ newTex1[j] +"</a><span>"+ newTex11[j] +"</span></p><span>"+newPrice1[j]+"</span></div>").appendTo($(".index_m_tlb_ul >li").eq(3));

		})
		
		
		
		//  最新发布    即将结束   最受欢迎   超值优惠
		var Newest = json.newest;
		
		var Newest1 = Newest.new1;
		var newestUrl1 = Newest1.url;
		var newestAddr1 = Newest1.addr;
		var newestTex1 = Newest1.text;
		var newestTex11 = Newest1.text1;
		var newestPrice1 = Newest1.price;
		
		var Newest2 = Newest.new2;
		var newestUrl2 = Newest2.url;
		var newestAddr2 = Newest2.addr;
		var newestTex2 = Newest2.text;
		var newestTex21 = Newest2.text1;
		var newestPrice2 = Newest2.price;
		
		//遍历  数据
		$.each(newestUrl1,function(k){
			//最新发布
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_ctl_ul >li").eq(0));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_ctl_ul >li").eq(1));
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_ctl_ul >li").eq(2));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_ctl_ul >li").eq(3));
			// 即将结束
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_ctr_ul >li").eq(0));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_ctr_ul >li").eq(1));
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_ctr_ul >li").eq(2));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_ctr_ul >li").eq(3));
			//最受欢迎
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_cbl_ul >li").eq(0));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_cbl_ul >li").eq(1));
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_cbl_ul >li").eq(2));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_cbl_ul >li").eq(3));
			//超值优惠
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_cbr_ul >li").eq(0));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_cbr_ul >li").eq(1));
			$("<div><a href=''><img src='"+ newestUrl2[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr2[k] +"'/>"+ newestTex2[k] +"</a><span>"+ newestTex21[k] +"</span></p><span>"+newestPrice2[k]+"</span></div>").appendTo($(".index_m_cbr_ul >li").eq(2));
			$("<div><a href=''><img src='"+ newestUrl1[k]+"'/></a> <p><a href='#'><img src='"+ newestAddr1[k] +"'/>"+ newestTex1[k] +"</a><span>"+ newestTex11[k] +"</span></p><span>"+newestPrice1[k]+"</span></div>").appendTo($(".index_m_cbr_ul >li").eq(3));
			

		})
		
		//楼梯  第一层
		
		var stairs = json.stairs;
		
		var stairs1 = stairs.stairs1;
		var stairs1Url = stairs1.url;
		var stairs1Addr = stairs1.addr;
		var stairs1Text = stairs1.text;
		var stairs1Text1 = stairs1.text1;
		var stairs1Price = stairs1.price;
		
		//遍历数据
		$.each(stairs1Url, function(x){
			$("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs1 .index_lastli"))
            $("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs2 .index_lastli"))
            $("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs3 .index_lastli"))
            $("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs4 .index_lastli"))
            $("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs5 .index_lastli"))
            $("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs6 .index_lastli"))
            $("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs7 .index_lastli"))
            $("<li><div class='index_main_stairs_li  index_treasure'><a><img src=' " +stairs1Url[x]+  "'/></a><P><a href='#'><img src='" +stairs1Addr[x]+ "'/> "+ stairs1Text[x] + "</a><span> "+stairs1Text1[x]+"</span></P><span> "+ stairs1Price[x]+ "</span></div></li>").insertBefore($(".index_main_stairs8 .index_lastli"))
		});
		
		//like
		var myLike = json.like;
		var likeUrl = myLike.url;
		var likeAddr = myLike.addr;
		var likeText = myLike.text;
		var likeText1 = myLike.text1;
		var likePrice = myLike.price;
		
		$.each(likeUrl,function(z){
			$("<li><div><a><img src=' " +likeUrl[z]+  "'/></a><P><a href='#'><img src='" +likeAddr[z]+ "'/> "+ likeText[z] + "</a><span> "+likeText1[z]+"</span></P><span> "+ likePrice[z]+ "</span></div></li>").insertBefore($(".like_lastli"))
		})
		

		
	});
   	
   	
})  	      
	