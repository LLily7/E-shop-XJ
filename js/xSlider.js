"use strict";
!function(n){
	var i=function(i,e){
		function c(){
			r.config.current<d-2&&(r.config.current++,o.stop(!0,!1).animate({left:-r.config.w*r.config.current-r.config.w},
			r.config.speed,function(){
			r.config.current===d-2&&(o.css("left",-r.config.w),
			r.config.current=0)}))
			
			}
			
			
			function t(){
				clearInterval(w),
				w=setInterval(c,r.config.intervalTime)
				}
				
				var r=this;
				this.el=i,
				this.userConfig=e,
				this.config={w:this.el.width(),current:0,speed:500,intervalTime:5e3},
				null!=e&&n.extend(this.config,this.userConfig);
				var f=this.el.children(".slider-img"),   
				o=f.children("ul"),    //o 是 ul
				l=o.children("li");   //l 是 ul中的 li
				this.el.append('<a href="javascript:" class="slider-btn slider-btn-left"></a>'),
				this.el.append('<a href="javascript:" class="slider-btn slider-btn-right"></a>');
				var s=this.el.children(".slider-btn-left"),  //  s左按钮
				g=this.el.children(".slider-btn-right");   // g右按钮
				var d=l.length;
				o.css("left",-this.config.w*this.config.current-this.config.w);
				g.on("click",function(n){
					n.preventDefault(),
					r.config.current<d-2&&(t(),
					r.config.current++,
					
					r.config.current!=d-2&&o.stop(!0,!1).animate(
					{left:-r.config.w*r.config.current-r.config.w},
					r.config.speed
                    ),
					
					r.config.current===d-2&&o.stop(!0,!1).animate(
					{left:-r.config.w*r.config.current-r.config.w},
					r.config.speed,function(){o.css("left",-r.config.w),
					r.config.current=0
					}))
					
					}),
					
					
				s.on("click",function(n){
					n.preventDefault(),
					r.config.current>-1&&(t(),
					r.config.current--,
					r.config.current!=-1&&o.stop(!0,!1).animate(
					{left:-r.config.w*r.config.current-r.config.w},
					r.config.speed
					),
					r.config.current===-1&&o.stop(!0,!1).animate(
					{left:0},r.config.speed,function(){
						o.css("left",-r.config.w*(d-2)),
						r.config.current=d-3
						}))
					
					});
			
					
					var w=setInterval(c,r.config.intervalTime)
					
            };
					n.fn.extend({xSlider:function(){
						new i(n(this))
						}
						})
	}(jQuery);
			var config={current:0,speed:500,intervalTime:2e3};
			$(".slider").xSlider(config);
			$(".slider1").xSlider(config);
			$(".slider2").xSlider(config);
			$(".slider3").xSlider(config);
			$(".slider4").xSlider(config);
					
					
					
					
					