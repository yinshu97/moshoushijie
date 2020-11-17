let nav_user = document.getElementById("tu-content");
let top_user = document.getElementsByClassName("top-user")[0];
let jiantou1 = document.getElementsByClassName("icon-img")[0];

let nav_game = document.getElementById("ng-content");
let top_game = document.getElementsByClassName("cn-game")[0];
let jiantou2 = document.getElementsByClassName("icon-img")[4];

let nav_serve = document.getElementById("ns-content");
let top_serve = document.getElementsByClassName("cn-serve")[0];
let jiantou3 = document.getElementsByClassName("icon-img")[5];

let nav_count = document.getElementById("nc-content");
let top_count = document.getElementsByClassName("cn-count")[0];
let jiantou4 = document.getElementsByClassName("icon-img")[9];

let leftbtn = document.getElementById("left");
let rightbtn = document.getElementById("right");
let imagelist = document.getElementById("image").getElementsByTagName("li");
let cirlist = document.getElementById("cir").getElementsByTagName("li");
let index = 0;

window.onload = () => {
	topClick();

	change();

}

function topClick() {

	/*账户*/
	top_user.onclick = (e) => {
		e.preventDefault();
		if(nav_user.style.display == "none") {
			nav_game.style.display = "none";
			jiantou2.src = "img/箭头下.png";
			nav_serve.style.display = "none";
			jiantou3.src = "img/箭头下.png";
			nav_count.style.display = "none";
			jiantou4.src = "img/箭头下.png";
			nav_user.style.display = "block";
			jiantou1.src = "img/箭头上.png";
		} else {
			nav_user.style.display = "none";
			jiantou1.src = "img/箭头下.png";
		}
	}
	/*游戏*/
	top_game.onclick = (e) => {
		e.preventDefault();
		if(nav_game.style.display == "none") {
			nav_user.style.display = "none";
			jiantou1.src = "img/箭头下.png";
			nav_serve.style.display = "none";
			jiantou3.src = "img/箭头下.png";
			nav_count.style.display = "none";
			jiantou4.src = "img/箭头下.png";
			nav_game.style.display = "block";
			jiantou2.src = "img/箭头上.png";
		} else {
			nav_game.style.display = "none";
			jiantou2.src = "img/箭头下.png";
		}
	}

	/*服务*/
	top_serve.onclick = (e) => {
		e.preventDefault();
		if(nav_serve.style.display == "none") {
			nav_user.style.display = "none";
			jiantou1.src = "img/箭头下.png";
			nav_game.style.display = "none";
			jiantou2.src = "img/箭头下.png";
			nav_count.style.display = "none";
			jiantou4.src = "img/箭头下.png";
			nav_serve.style.display = "block";
			jiantou3.src = "img/箭头上.png";
		} else {
			nav_serve.style.display = "none";
			jiantou3.src = "img/箭头下.png";
		}
	}

	/*点数*/
	top_count.onclick = (e) => {
		e.preventDefault();
		if(nav_count.style.display == "none") {
			nav_user.style.display = "none";
			jiantou1.src = "img/箭头下.png";
			nav_game.style.display = "none";
			jiantou2.src = "img/箭头下.png";
			nav_serve.style.display = "none";
			jiantou3.src = "img/箭头下.png";
			nav_count.style.display = "block";
			jiantou4.src = "img/箭头上.png";
		} else {
			nav_count.style.display = "none";
			jiantou4.src = "img/箭头下.png";
		}
	}

}

function change() {
	leftbtn.onclick = function() {
		if(--index < 0)
			index = imagelist.length - 1;
		changimg();
	}

	rightbtn.onclick = function() {
		if(++index == imagelist.length)
			index = 0;
		changimg();
	}

	var timer = setInterval(function() {
		if(++index == imagelist.length)
			index = 0;
		changimg();
	}, 2000);

	function changimg() {
		for(var i = 0; i < imagelist.length; i++) {
			imagelist[i].className = "";
		}
		for(var j = 0; j < cirlist.length; j++) {
			cirlist[j].className = "";
		}
		imagelist[index].className = "current";
		cirlist[index].className = "current";
	}
}