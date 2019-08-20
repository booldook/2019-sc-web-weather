// 전역변수선언
var key = '02efdd64bdc14b279bc91d9247db4722';
var units = 'metric';
var dailyAPI = 'https://api.openweathermap.org/data/2.5/weather';
var weeklyAPI = 'https://api.openweathermap.org/data/2.5/forecast';
//https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=02efdd64bdc14b279bc91d9247db4722&units=metric
var cityURL = 'json/city.json';
var dailyURL = dailyAPI + '?appid=' + key + '&units=' + units;
var weeklyURL = weeklyAPI + '?appid=' + key + '&units=' + units;

// 프로그램 시작
init();
function init() {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = cityFn;
	ajax.open('GET', cityURL, true);
	ajax.send();
}

// 도시 정보 가져오기
function cityFn() {
	if(this.readyState == 4 && this.status == 200) {
		var _city = document.querySelector("#cities");
		var res = JSON.parse(this.responseText).cities;
		var _elem = document.createElement('option');
		var title = document.createTextNode('도시를 선택해 주세요.');
		_elem.appendChild(title);
		_elem.setAttribute("value", "");
		_elem.setAttribute("selected", "selected");
		_city.innerHTML = "";
		_city.appendChild(_elem);
		//<option value="" selected>도시를 선택해 주세요.</option>
		for(var i in res) {
			_elem = document.createElement('option');
			title = document.createTextNode(res[i].name);
			_elem.setAttribute("value", res[i].id);
			_elem.appendChild(title);
			_city.appendChild(_elem);
		}
		_city.addEventListener("change", function(){
			var ajax = new XMLHttpRequest();
			ajax.onreadystatechange = dailyFn;
			ajax.open('GET', dailyURL+"&id="+this.value, true);
			ajax.send();
		});
	}
}

// 데일리 정보 가져오기
function dailyFn() {
	if(this.readyState == 4 && this.status == 200) {
		console.log(JSON.parse(this.responseText));
	}
}