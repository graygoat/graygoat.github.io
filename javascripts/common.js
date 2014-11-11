function runCode(codeTxt){
	var winname = window.open('', "_blank", '');
	winname.document.open('text/html', 'replace');
	winname.opener = null;//防止代码对原页面修改
	winname.document.write(codeTxt);
	winname.document.close();
}

function $$(id){
	return document.getElementById(id);
}

