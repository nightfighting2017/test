// JavaScript Document
	//微信二维码
	$(".logo_right p").hover(function(){
		  $(".logo_right p em").show();
		 },function(){
			$(".logo_right p em").hide(); 
			 })
 //tab切换	
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
	   var menu=document.getElementById(name+i);
	   var con=document.getElementById("con_"+name+"_"+i);
	   menu.className=i==cursel?"hover":"";
	   try{
		   con.style.display=i==cursel?"block":"none";
	   }catch (e){

	   } 	   
	}
}

