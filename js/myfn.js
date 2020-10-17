/* 代码整理：懒人之家 www.lanrenzhijia.com */
function startMove(obj,json,ratio,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		var bStop=true;
		for (var attr in json)
		{
			var now=0;
			if(attr=="opacity")
			{
				now=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else
			{
				now=parseInt(getStyle(obj,attr));
			}
			
			if(ratio)
			{
				var speed=(json[attr]-now)/(10+ratio);				
			}
			else
			{
				var speed=(json[attr]-now)/10;
			}
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
	
			if(now!=json[attr])bStop=false;
			
			if(attr=="opacity")
			{
				obj.style.filter="alpha(opacity:"+(now+speed)+")";
				obj.style.opacity=(now+speed)/100;
			}
			else
			{
				obj.style[attr]=(now+speed)+"px";
			}
		}
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
	}, 30)
}

function getStyle(obj,name)	
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}

function getClass(oParent,sClass)
{
	var aResult=[];
	var Eles=oParent.getElementsByTagName('*')
	for(var i=0; i<Eles.length; i++)
	{
		if(Eles[i].className==sClass)
		{
			aResult.push(Eles[i]);
		}
	}
	return aResult;
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */