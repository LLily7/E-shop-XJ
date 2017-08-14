
$(function () {
    
    /***************** 放大镜*******************/
    $(".cj_max").mousemove(function (evt) {
        var evt=evt||window.event;
        //console.log(this.offsetWidth);
        var $left=evt.offsetX-$(".fdj").width()/2;
        var $top=evt.offsetY-$(".fdj").height()/2;
        // console.log($left+";"+$top)
        $left=$left<0?0:$left;
        $top=$top<0?0:$top;
        $left=$left>this.offsetWidth-$(".fdj").width()?this.offsetWidth-$(".fdj").width():$left;/*�ж��Ǳ�Ե*/
        $top=$top>this.offsetHeight-$(".fdj").height()?this.offsetHeight-$(".fdj").height():$top;
        // console.log(this.offsetTop-$(".fdj").height())
        $(".fdj").css("left",""+$left+"px");
        $(".fdj").css("top",""+$top+"px");
        var propLeft=$left/(this.offsetWidth-$(".fdj").width());
        var propTop=$top/(this.offsetHeight-$(".fdj").height());
        var bp_left=-($(".pic_big div").width()-$(".pic_big").width())*propLeft+"px";
        var bp_top=-($(".pic_big div").height()-$(".pic_big").height())*propTop+"px";
        $(".pic_big div").css("left",bp_left);
        $(".pic_big div").css("top",bp_top);
    })
    $(".cj_max").mouseenter(function () {
        $(".pic_big").css("display","block");
        $(".fdj").css("display","block");
    })
    $(".cj_max").mouseleave(function () {
        $(".pic_big").css("display","none");
        $(".fdj").css("display","none");
    })
    /*****右击****/
    var $qh=0;
    $(".pic_s_r").click(function () {
        $qh++;
        if($qh>($(".tupian").children().length-5)){
            $qh=$(".tupian").children().length-5;
        }
        var $tupian_left=-70*$qh+"px";
        $(".tupian").stop().animate({
            left:$tupian_left
        });
    })
   /*****左击****/ 
    $(".pic_s_l").click(function () {
        $qh--;
        if($qh<0){
            $qh=0;
        }
        var $tupian_left=-70*$qh+"px";
        $(".tupian").stop().animate({
            left:$tupian_left
        });
    })
    
    $(".tupian").on("mouseenter","li", function () {
        $(this).css("borderColor","#f70800");
        $(this).siblings().css("borderColor","#ededed");
       
        var index=$(this).index();
        $(".pic1").children().css("display","none");
        $(".pic_big div").children().css("display","none");
        $(".pic1").children().eq(index).css("display","block");
        $(".pic_big div").children().eq(index).css("display","block");
    })



     $(".detail_main_cc_text1").hover(function(){
     	$(this).stop().animate({'height':'122'},500)
     },function(){
     	$(this).stop().animate({'height':'72'},500)
     })


    //收货地址  
    var stop = false;
    $(".detail_main_but").click(function(){
    	
    	if(!stop){
    	   $(".detail_main_addr").show();
    	   stop = true;
    	}else{
    	   $(".detail_main_addr").hide();
    	   stop = false;
    	}	
    });
    var stop1 = false;
    $(".country").click(function(){
    	
    	if(!stop1){
    	   $("#ul1").show();
    	   stop1 = true;
    	}else{
    	   $("#ul1").hide();
    	   stop1 = false;
    	}	
    })
    
    
    $(".cho_c").click(function(){
    	$(this).addClass('active').siblings('.cho_c').removeClass('active')
    })




    /*************    滚动条滚动效果   *******************/
    var timer = null;
    window.onscroll= function () {
     // 	clearTimeout(timer)
	//	timer = setTimeout(function(){
    	
	        var $xdTop=document.documentElement.scrollTop||document.body.scrollTop;
	        if($xdTop>=$("#detail").offset().top){
	            $(".tab_select").css("position","fixed");
	            $(".tab_select").css("top",0);
	
	        }else{
	            $(".tab_select").css("position","");
	            $(".tab_select").css("top",$(".detail_main_br").offset().top);
	        }
	        if($xdTop>=$("#detail").offset().top - 45){
	        	$(".tab_select li").eq(0).css("border-bottom","1px red solid").siblings('li').css("border-bottom","1px #ccc solid");
	            $(".tab_select li").eq(0).find('span').css("display","block").parent().siblings('li').children('span').css("display","none");
	         
	        }
	        if($xdTop>=$("#estimate").offset().top -45){
	        	$(".tab_select li").eq(1).css("border-bottom","1px red solid").siblings('li').css("border-bottom","1px #ccc solid");
	            $(".tab_select li").eq(1).find('span').css("display","block").parent().siblings('li').children('span').css("display","none");
	           
	        }
	        if($xdTop>=$("#consult").offset().top -45){
	        	$(".tab_select li").eq(2).css("border-bottom","1px red solid").siblings('li').css("border-bottom","1px #ccc solid");
	            $(".tab_select li").eq(2).find('span').css("display","block").parent().siblings('li').children('span').css("display","none");
	            
	        }
	        if($xdTop>=$("#parameters").offset().top -45){
	        	$(".tab_select li").eq(3).css("border-bottom","1px red solid").siblings('li').css("border-bottom","1px #ccc solid");
	            $(".tab_select li").eq(3).find('span').css("display","block").parent().siblings('li').children('span').css("display","none");
	           
	        }
	        
	        //返回顶部
            if($(window).scrollTop() >= 600){ //大于最大的高度值 ，显示楼梯;
                $(".returnTop").fadeIn();
            }else{
                $(".returnTop").fadeOut()
            }
	        
        
      //    },100)
    }

    /****  点击跳转  *****/
    $(".tab_select li").click(function (){
        var tab_index=$(this).index();
          $(this).css("border-bottom","1px red solid").siblings('li').css("border-bottom","1px #ccc solid");
          $(this).children('span').css("display","block").parent().siblings('li').children('span').css("display","none")
        if(tab_index==0){
            var d_top=$("#detail").offset().top-45;
            $(document).scrollTop(d_top);
        }
        if(tab_index==1){
            var d_top=$("#estimate").offset().top-45;
            $(document).scrollTop(d_top);
        }
        if(tab_index==2){
            var d_top=$("#consult").offset().top-45;
            $(document).scrollTop(d_top);
        }
         if(tab_index==3){
            var d_top=$("#parameters").offset().top-45;
            $(document).scrollTop(d_top);
        }
    })




    
    /******************数量加减 ******************/
    var $num=($(".gn_inp").val());
    $(".lessBtn").click(function () {
        $num--
        if($num<1){
            $(".errorNum").css("display","block");
            $num=1;
        }

        $(".gn_inp").val($num);
    })
    $(".lessBtn").mouseleave(function () {
        $(".errorNum").css("display","none");
    })
    
    $(".addBtn").click(function () {
        $num++;
        console.log($num);
        $(".gn_inp").val($num);
    });
    
    $(".gn_inp").blur(function () {

        var $num_reg=/^\d+$/;
        var inp_val=$(".gn_inp").val();
        console.log(inp_val);
        if(!$num_reg.test(inp_val)){
            $(".gn_inp").val("1");
            $num=1;
        }else{
            $num=$(".gn_inp").val();
        }
    });






  //评论
   $(".estimate_ul li").click(function(){
   	  
   	  $(this).find('.dian').css("display","block").parent().siblings("li").find('.dian').css("display","none")
   	  
   	  var index = $(this).index();
   	  $(".estimate_ol li").eq(index).css("display","block").siblings("li").css("display","none")
   	  
   })
  
  
    //咨询
    
    $.ajax({
            url:"js/detail.json"
        })
        .then(function(res){
            
            var showNum = 6;
            
            //成功之后初始化 分页插件;
            $("#Pagination").pagination(res.length,{items_per_page:showNum, // 显示4条;
                                                    num_display_entries:5,
                                                    num_edge_entries:1,
                                                    prev_text:"上一页",
                                                    next_text:"下一页",
                                                    callback:function(index){
                                                        //渲染页面;            
                                                        rendringPag(res,index,showNum)
                                                    }
                                        });
            
            
            function rendringPag(res,index,showNum){

            var html = "";  

            // for ; => index * showNum = 页码 * 显示几页; 

            //      递增关系 ; 

            for(var i = index * showNum ; i < (index + 1) * showNum; i++){
                //字符串拼接; 
                if(i < res.length){
                     html += "<table><tr><td>用 &nbsp; 户:</td><td>"+ res[i].name +"</td><td>"+ res[i].nametime+"</td></tr>"
                              + "<tr><td>咨询问题:</td/><td>"+ res[i].question +"</td><td></td></tr>" 
                              + "<tr><td>客服回复:</td/><td>"+ res[i].answer +"</td><td>"+ res[i].questiontime+"</td></tr></table>" 
                            
                }
               
            }

            $("#consult_list").html(html)

        }


        },function(){
            //失败情况 : 
            alert("数据加载出现了问题，请稍安勿躁，哪凉快哪待着去!");   
        })

    
})

