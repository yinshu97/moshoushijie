let nav_game = document.getElementById("tg-content");
let top_game = document.getElementsByClassName("top-game")[0];
let jiantou1 = document.getElementsByClassName("icon-img")[0];

let nav_compete = document.getElementById("tc-content");
let top_compete = document.getElementsByClassName("top-compete")[0];
let jiantou2 = document.getElementsByClassName("icon-img")[1];

let nav_user = document.getElementById("tu-content");
let top_user = document.getElementsByClassName("top-user")[0];
let jiantou3 = document.getElementsByClassName("icon-img")[2];

let con_nav_game = document.getElementById("cn-game");
let sec_game = document.getElementsByClassName("sec-game")[0];
let jiantou4 = document.getElementsByClassName("icon-img")[10];

let cn_search = document.getElementById("cn-search");
let cns = document.getElementsByClassName("con-nav-search")[0];
let search1 = document.getElementsByClassName("icon-search")[0];

let showbtnClass = document.getElementsByClassName("con-i2-btn")[0];
let showbtn = document.getElementById("cib");
let news = document.getElementsByClassName("con-i3-news")[0];

window.onload = () => {
	topClick();
	show();
}

function topClick() {

	/*游戏*/
	top_game.onclick = (e) => {
		e.preventDefault();
		if(nav_game.style.display == "none") {
			nav_compete.style.display = "none";
			jiantou2.src = "img/箭头下.png";
			nav_user.style.display = "none";
			jiantou3.src = "img/箭头下.png";
			con_nav_game.style.display = "none";
			jiantou4.src = "img/箭头下.png";
			nav_game.style.display = "inline-block";
			jiantou1.src = "img/箭头上.png";
		} else {
			nav_game.style.display = "none";
			jiantou1.src = "img/箭头下.png";
		}
	}

	/*竞技*/
	top_compete.onclick = (e) => {
		e.preventDefault();
		if(nav_compete.style.display == "none") {
			nav_game.style.display = "none";
			jiantou1.src = "img/箭头下.png";
			nav_user.style.display = "none";
			jiantou3.src = "img/箭头下.png";
			con_nav_game.style.display = "none";
			jiantou4.src = "img/箭头下.png";
			nav_compete.style.display = "inline-block";
			jiantou2.src = "img/箭头上.png";
		} else {
			nav_compete.style.display = "none";
			jiantou2.src = "img/箭头下.png";
		}
	}

	/*账户*/
	top_user.onclick = (e) => {
		e.preventDefault();
		if(nav_user.style.display == "none") {
			nav_game.style.display = "none";
			jiantou1.src = "img/箭头下.png";
			nav_compete.style.display = "none";
			jiantou2.src = "img/箭头下.png";
			con_nav_game.style.display = "none";
			jiantou4.src = "img/箭头下.png";
			cn_search.style.display = "none";
			search1.src = "img/搜索1.png";
			nav_user.style.display = "block";
			jiantou3.src = "img/箭头上.png";
		} else {
			nav_user.style.display = "none";
			jiantou3.src = "img/箭头下.png";
		}
	}

	/*导航栏游戏*/
	sec_game.onclick = (e) => {
		e.preventDefault();
		if(con_nav_game.style.display == "none") {
			nav_user.style.display = "none";
			jiantou3.src = "img/箭头下.png";
			cn_search.style.display = "none";
			search1.src = "img/搜索1.png";
			con_nav_game.style.display = "block";
			jiantou4.src = "img/箭头上.png";
		} else {
			con_nav_game.style.display = "none";
			jiantou4.src = "img/箭头下.png";
		}
	}

	/*搜索*/
	cns.onclick = (e) => {
		e.preventDefault();
		if(cn_search.style.display == "none") {
			nav_user.style.display = "none";
			jiantou3.src = "img/箭头下.png";
			con_nav_game.style.display = "none";
			jiantou4.src = "img/箭头下.png";

			cn_search.style.display = "block";
			search1.src = "img/错.png";
		} else {
			cn_search.style.display = "none";
			search1.src = "img/搜索1.png";
		}
	}
}

window.onscroll = () => {
	let topScroll = window.pageYOffset; //滚动的距离,距离顶部的距离
	let bignav = document.getElementsByClassName("container-nav")[0]; //获取到导航栏id
	let cnlogo = document.getElementsByClassName("cn-logo")[0];
	let cn = document.getElementsByClassName("con-nav-logo")[0];
	if(topScroll > 40) { //当滚动距离大于625px时执行下面的东西

		bignav.style.position = 'fixed';
		bignav.style.width = '100%';
		bignav.style.maxWidth = '1700px';
		bignav.style.top = '-40px';
		//		bignav.style.width = '100%';
		bignav.style.zIndex = '9999';
		cn.style.width = '60px';
		cnlogo.src = 'https://wow-site-assets.cnc.blzstatic.cn/static/components/Logo/Logo-wowIcon.01e2c443798558c38d8e3b143a6f0d03.png';
		cnlogo.style.width = '35px';
		cnlogo.style.height = '35px';
		cnlogo.style.marginTop = '15px';
		cnlogo.style.marginLeft = '18px';
		con_nav_game.style.width = '100%';
		con_nav_game.style.marginLeft = '0';
		con_nav_game.style.top = '70px';
		con_nav_game.style.position = 'fixed';
		con_nav_game.style.zIndex = '2';
		cn_search.style.width = '100%';
		cn_search.style.marginLeft = '0';
		cn_search.style.top = '70px';
		cn_search.style.position = 'fixed';
		cn_search.style.zIndex = '2';
	} else { //当滚动距离小于625的时候执行下面的内容，也就是让导航栏恢复原状
		bignav.style.position = 'static';
		bignav.style.zIndex = '999';
		bignav.style.width = '92%';
		bignav.style.maxWidth = '1700px';
		bignav.style.marginTop = '40px';
		cn.style.width = '17%';
		cnlogo.src = 'https://wow-site-assets.cnc.blzstatic.cn/static/components/Logo/Logo-wow-cn-sitenav.13cfdf2525d9e8baa160370904b60251.png';
		cnlogo.style.width = '240px';
		cnlogo.style.height = '100px';
		cnlogo.style.marginTop = '-22px';
		cnlogo.style.marginLeft = '-30px';
		con_nav_game.style.width = '92%';
		con_nav_game.style.marginLeft = '4%';
		con_nav_game.style.marginTop = '0';
		con_nav_game.style.position = 'absolute';
		con_nav_game.style.zIndex = '2';
		cn_search.style.width = '92%';
		cn_search.style.marginLeft = '4%';
		cn_search.style.marginTop = '0';
		cn_search.style.position = 'absolute';
		cn_search.style.zIndex = '2';
	}
}

function show() {
	showbtn.onclick = (e) => {
		e.preventDefault();
		showbtnClass.style.display = "none";
		news.style.display = "block";
	}
}