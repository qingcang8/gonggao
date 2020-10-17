window.onload=function()
{
	var oCS=document.getElementById('cs');
	var oSpan=oCS.getElementsByTagName('span');
	var oGG=document.getElementById('gg');
	var oGGUL=oGG.getElementsByTagName('ul')[0];
	var oGGLi=oGG.getElementsByTagName('li');
	var oNum=document.getElementById('num');
	var oNumLi=oNum.getElementsByTagName('li');
	var timer=null;
	var now=0;
	var direction=1;
	var dealy=2500;					//默认为3000毫秒（3秒）更换一次图片，可自行修改！
	var oA=getClass(oCS,"a1");
	for(var i=0; i<oA.length; i++)
	{
		oA[i].onmouseover=function()
		{
			for(var i=0; i<oA.length; i++)
			{
				oA[i].className="a1";
			}
			this.className="cs";
		}
	}	
	for(var i=0; i<oNumLi.length; i++)
	{
		oNumLi[i].index=i;
		oNumLi[i].onmouseover=function()
		{
			now=this.index;
			play();
		}
	}	
	function play()
	{
		for(var i=0; i<oNumLi.length; i++)
		{
			oNumLi[i].className="";
		}
		oNumLi[now].className="active";
		startMove(oGGUL,{top:-oGGLi[now].offsetHeight*now})			
	}	
	function auto()
	{
		if(direction==1)
		{
			now++;
			if(now==oNumLi.length-1)
			{
				direction=0;
			}
		}
		else if(direction==0)
		{
			now--;
			if(now==0)
			{
				direction=1;
			}
		}
		play();
	}	
	oCS.onmouseover=function()
	{
		timer=setInterval(auto,dealy);
		startMove(oCS,{right:0,opacity:100},0,function()
		{
			startMove(oSpan[0],{left:10})
		});
	};
	
	oCS.onmouseout=function()
	{
		clearInterval(timer);
		startMove(oCS,{right:-480,opacity:30},0,function()
		{
			oCS.style.right=-500+"px";
			startMove(oSpan[0],{left:-25});
		});
	}
}