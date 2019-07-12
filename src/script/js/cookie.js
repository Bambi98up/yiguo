function setcookie(key,value,days){
	var d=new Date();
	d.setDate(d.getDate()+days);
	document.cookie=key+'='+(value)+';expires='+d;
}

function getcookie(key){
	var strarr=(document.cookie).split('; ');
	for(var i=0;i<strarr.length;i++){
		var newarr=strarr[i].split('=');
		if(newarr[0]==key){
			return newarr[1];
		}
	}
}

function delcookie(key){
	setcookie(key,'',-1);
}