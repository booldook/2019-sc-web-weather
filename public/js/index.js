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
			var cities = JSON.parse(this.responseText).cities;
			// id로 DOM 접근하기 - jQuery
			var $citySelect = $("#cities");
			// id로 DOM 접근하기 - ES5
			var citySelect5 = document.getElementById("cities");
			// id로 DOM 접근하기 - ES6
			var citySelect = document.querySelector("#cities");
			console.log($citySelect[0], $(citySelect5), citySelect);

			// jQuery: select#cities 에 도시를 option으로 추가하기
			/*
			for(var i in cities) {
				$citySelect.append('<option value="'+cities[i].id+'">'+cities[i].name+'</option>');
			}
			*/

			// ES5: select#cities 에 도시를 option으로 추가하기
			/*
			for(var i in cities) {
				var html = '<option value="'+cities[i].id+'">'+cities[i].name+'</option>';
				document.getElementById("cities").innerHTML += html;
				// console.log(document.getElementById("cities").innerHTML);
			}
			*/

			// ES6: select#cities 에 도시를 option으로 추가하기
		}
	};
	ajax.open("GET", "json/city.json", true);
	ajax.send();
}


/*
// innerHTML 사용법
var a = 5;
var html = a;
html += a;
console.log(html);

// var html = document.getElementById("sample").innerHTML;
// document.getElementById("sample").innerHTML = document.getElementById("sample").innerHTML + '<span>마바사아</span>';
document.getElementById("sample").innerHTML += '<span>마바사아</span>';
console.log(html);
*/