
/*************************     **************************/



$(".list_c_rb_ul >li").click(function(){
	var index = $(this).index();
	$(this).css({"border-bottom":"2px #ed593a solid"}).siblings('li').css({"border-bottom":"none"})
	$(this).children('p').css("display","block").parent().siblings('li').children('p').css("display","none")
	
	$(".list_c_rb_ol >li").eq(index).css("display","block").siblings('li').css("display","none")
	
});




/*************************   解析json  **************************/

    $.getJSON('js/list.json',function(json){	
    	//console.log(json);
    	var list1 = json.list1;
    	var list1Id = list1.id;
    	var list1Url = list1.url;
    	var list1Addr = list1.addr;
    	var list1Text = list1.text;
    	var list1Text1 = list1.text1;
    	var list1Price = list1.price;
    	
    	var list2 = json.list2;
    	var list2Id = list2.id;
    	var list2Url = list2.url;
    	var list2Addr = list2.addr;
    	var list2Text = list2.text;
    	var list2Text1 = list2.text1;
    	var list2Price = list2.price;
    	
    	$.each(list1Url,function(i){
    		$("<div class='list_product'><a><img  src=' "+ list1Url[i] + " '/></a><p><a href='#'> <img src=' "+ list1Addr[i] + "'/> "+ list1Text[i]  + " </a><span> "+ list1Text1[i] + "</span></p><span> ￥ <b>" + list1Price[i] + "</b></span><button class='xg' id='"+ list1Id[i] +" '>立即选购</button></div>").appendTo($(".list_c_rb_ol >li").eq(0))
    		$("<div class='list_product'><a><img  src=' "+ list2Url[i] + " '/></a><p><a href='#'> <img src=' "+ list2Addr[i] + "'/> "+ list2Text[i]  + " </a><span> "+ list2Text1[i] + "</span></p><span> ￥ <b> " + list2Price[i] + "</b></span><button class='xg' id='"+ list2Id[i] +" '>立即选购</button></div>").appendTo($(".list_c_rb_ol >li").eq(1))
    		$("<div class='list_product'><a><img  src=' "+ list1Url[i] + " '/></a><p><a href='#'> <img src=' "+ list1Addr[i] + "'/> "+ list1Text[i]  + " </a><span> "+ list1Text1[i] + "</span></p><span> ￥ <b>" + list1Price[i] + "</b></span><button class='xg' id='"+ list1Id[i] +" '>立即选购</button></div>").appendTo($(".list_c_rb_ol >li").eq(2))
    		$("<div class='list_product'><a><img  src=' "+ list2Url[i] + " '/></a><p><a href='#'> <img src=' "+ list2Addr[i] + "'/> "+ list2Text[i]  + " </a><span> "+ list2Text1[i] + "</span></p><span> ￥ <b> " + list2Price[i] + "</b></span><button class='xg' id='"+ list2Id[i] +" '>立即选购</button></div>").appendTo($(".list_c_rb_ol >li").eq(3))
    	})
    	
    	
    	
    	
    //	 console.log($(".list_product").length);
		$(".list_product").mouseenter(function(){
			
			$(this).css({border:"1px #E4E4E4 solid","box-shadow":"0 0 2px #ccc"})
			
		})
    	$(".list_product").mouseleave(function(){
			
			$(this).css({border:"1px white solid","box-shadow":"none"})
			
		})
    	
    	//点击立即抢购  事件
    	
    	$(".xg").click(function(){
    		//console.log(this.id);
    		
    		var pic_url = $(this).siblings('a').children('img').attr('src');
    		//console.log(pic_url);
    		var pic_text = $(this).siblings('p').children('a').text();
    		//console.log(pic_text);
    		var pic_price = $(this).siblings('span').find('b').text();
    	    // console.log(pic_price);
    	    
    	    
    	    $(".list_cart_l").remove();   //每次创建时清空一次
    		$(".list_cart_r").before("<div class='list_cart_l'><img src = '" + pic_url +" '/></div>");
    		$(".list_cart_r >h2").remove();
    		$(".list_cart_price").remove();
    		$(".list_cart_rb").before("<h2>"+ pic_text +"</h2><div class= 'list_cart_price'><span> " + pic_price +"</span><i>￥99.00</i></div>");
    		$(".add_cart").attr("id",this.id)
    		$(".list_cart").css({display:"block"})
    		
    		
    	
    	})
    	
    	
    /*********************弹出框 加入购物车事件   **********************/	
	 
     $(".cho_c").click(function(){
    	$(this).addClass('active').siblings('.cho_c').removeClass('active')
     });
     
      $(".size").click(function(){
    	$(this).addClass('active').siblings('.size').removeClass('active')
     });
     
     //点击按钮，消失  最右边的×
     $(".click_dis").click(function(){
     	$(".list_cart").css({display:"none"})	
     })
 
   /******************数量加减 ******************/
    var $num=($(".gn_inp").val());
    $(".lessBtn").click(function () {
        $num--
        if($num<1){
//          $(".errorNum").css("display","block");
            $num=1;
        }
       // console.log($num);

        $(".gn_inp").val($num);
    })
//  $(".lessBtn").mouseleave(function () {
//      $(".errorNum").css("display","none");
//  })
    
    $(".addBtn").click(function () {
        $num++;
       // console.log($num);
        $(".gn_inp").val($num);
    });
    
    $(".gn_inp").blur(function (){

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
    
    
    
 /*
    思路：
        第一步：获取所要操作的节点对象
        第二步：当页面加载完后，需要计算本地cookie存了多少【个】商品，把个数赋值给ccount
        第三步：为每一个商品对应的添加购物车按钮绑定一个点击事件onclick
             更改本地的cookie
            获取当前商品的pid
            循环遍历本地的cookie转换后的数组，取出每一个对象的pid进行对比，若相等则该商品不是第一次添加
            从购物车中取出该商品，然后更pCount值追加1
            否则：创建一个新的对象，保存到购物中。同时该商品的数量为
 */

    
    //显示商品总数量的标签节点对象
    var ccount = document.getElementById("header_cartNum");

    //约定好用名称为datas的cookie来存放购物车里的数据信息  datas里所存放的就是一个json字符串
	var listStr = cookieObj.get("datas");
	/*判断一下本地是否有一个购物车（datas），没有的话，创建一个空的购物车，有的话就直接拿来使用*/
	if(!listStr) { //没有购物车     datas  json
	    cookieObj.set({
	        name: "datas",
	        value: "[]"
	    });
	    listStr = cookieObj.get("datas");
	}

	var listObj = JSON.parse(listStr); //数组
	
	var totalCount = 0; //默认为0

    

    //点击加入购物车事件
    
    $(".add_cart").click(function(){

    	//console.log(_id)
    	var pid = this.id;  //id
    	var _text = $(this).parent().siblings('h2').text();
    	//console.log(_text);  //文本
    	var _url = $(this).parent().parent().siblings('.list_cart_l').children('img').attr('src');
    	//console.log(_url);   //图片地址
    	var _size = $(this).parent().siblings('.list_cart_rb').children('.active').text();
    	//console.log(_size);   //尺寸
    	var _color = $(this).parent().siblings('.list_cart_color').children('.active').text();
    	//console.log(_color);   //颜色
    	var _price = $(this).parent().siblings('.list_cart_price').children('span').text();
    	//console.log(_price);   //价格
    	//数量
    	
    	var _num = +$(this).parent().siblings('.list_cart_num').find('.gn_inp').val();
    	console.log(_num);

    	
    	 if(checkObjByPid(pid)) {
            listObj = updateObjById(pid,_num)
         } else {
            var obj = {
                pid: pid,
                pImg: _url,
                pName: _text,
                pSize: _size,
                pColor:_color,
                price: _price,
                pCount: _num
            };
            listObj.push(obj);
          //  console.log(listObj.pCount);
            listObj = updateData(listObj);
            
        }
       // console.log(listObj.pCount);
       $("#header_cartNum").html(getTotalCount);
	
    });
    
    
    
    
    console.log(cookieObj.get("datas"));
    	
	
    	
 });
 

    
 