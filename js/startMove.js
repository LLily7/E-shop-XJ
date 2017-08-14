function getstyle(obj, attr) //兼容写法，获取元素样式
{
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
	//json 一个对象，存储属性和边界值
function startMove(obj, json, fn) {

	
	clearInterval(obj.timer);
	// var end=450;
	// var speed;
	
	obj.timer = setInterval(function() {
		var flag = true;
		for (var attr in json) {
			var end = json[attr];
			var start = getstyle(obj, attr);
			if (attr == "opacity") {
				start = Math.round(parseFloat(start) * 100);
			} else {
				start = parseInt(start);
			}
			var speed = (end - start) / 8;
			speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
			//console.log(speed+start);
			if (attr == "opacity") {
				obj.style[attr] = (start + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (start + speed) + ')';
			} else {
				obj.style[attr] = start + speed + "px";
			}
			if (start == end) {
				//clearInterval(obj.timer);
				flag=true;
			} else {
				flag = false;
			}
			//console.log(flag);
		}
		if (flag) {
			clearInterval(obj.timer);
			if (fn) 
			{
				fn();
			}
		}
	}, 10)
}