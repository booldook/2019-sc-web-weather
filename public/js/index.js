/* 
// jQuery ajax 통신
function cityInit() {
	$.ajax({
		type: "get",
		url: "json/city.json",
		dataType: "json",
		success: function (res) {
			console.log(res);
		}
	});
}
*/

// 전역변수
var ajax = new XMLHttpRequest();

// main - 도시정보 가져오기
cityInit();
function cityInit() {
	ajax.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
	};
	ajax.open("GET", "json/city.json", true);
	ajax.send();
}