let showbtnClass = document.getElementsByClassName("con-i2-btn")[0];
let showbtn = document.getElementById("cib");
let news = document.getElementsByClassName("con-i3-news")[0];
window.onload = () => {
	show();
}

function show() {
	showbtn.onclick = (e) => {
		e.preventDefault();
		showbtnClass.style.display = "none";
		news.style.display = "block";
	}
}