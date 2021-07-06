var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var contrast = document.getElementById("contrast_mode");
var logo = document.getElementById("logo");
var cookies = ['', ''];
var msnry = new Masonry( '.grid', {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	transitionDuration: 200,
	percentPosition: true
});
var date = new Date();

date.setTime(date.getTime() + (30*24*60*60*1000));
// document.cookie = "style=light;expires=" + date + ";path=/";
// document.cookie = "font_size=1;expires=" + date + ";path=/";
var cookie = document.cookie;
cookie = cookie.split(';');
for(var i = 0; i <cookie.length; i++) {
	while (cookie[i].charAt(0) == ' ') {
		cookie[i] = cookie[i].substring(1);
	}
	if (cookie[i].indexOf("style") != -1) {
		cookies[0] = cookie[i].substring(6, cookie[i].length);
	}
	if (cookie[i].indexOf("font_size") != -1) {
		cookies[1] = cookie[i].substring(10, cookie[i].length);
	}
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.getElementsByTagName("link")[0].href = "photos/logo_inverted.png";
	if (cookies[0] == '') {
		set_inverted_colors();
	}
}
else {
	document.getElementsByTagName("link")[0].href = "photos/logo.png";
	if (cookies[0] == '') {
		set_normal_colors();
	}
}
if(cookies[0] == 'dark') {
	set_inverted_colors();
}
else if (cookies[0] == 'light') {
	set_normal_colors();
}
if (cookies[1] != '') {
	set_font_size(cookies[1]);
}
else {
	set_font_size("1");
}

// window.addEventListener('resize', relocate);

// function relocate() {
// 	setTimeout(() => { msnry.layout(); }, 650);
// }
function show_menu() {
	hamburger.setAttribute('onclick','hide_menu()');
	menu.classList.remove('hidden_m_s');
}

function hide_menu() {
	hamburger.setAttribute('onclick','show_menu()');
	menu.classList.add('hidden_m_s');
}

function set_inverted_colors() {
	contrast.setAttribute('onclick', 'set_normal_colors()');
	document.documentElement.style.setProperty('--menu-color', '#dbdd8a');
	document.documentElement.style.setProperty('--hoovered-menu-color', '#ef7948');
	document.documentElement.style.setProperty('--white-color', 'black');
	document.documentElement.style.setProperty('--red-color', 'aqua');
	document.documentElement.style.setProperty('--black-color', 'white');
	document.documentElement.style.setProperty('--dimgray-color', '#969696');
	document.documentElement.style.setProperty('--footer-background-color', '#191919');
	document.documentElement.style.setProperty('--footer-text-color', '#999999');
	document.documentElement.style.setProperty('--footer-header-color', '#b3b3b3');
	document.documentElement.style.setProperty('--footer-line-color', '#333333');
	logo.setAttribute('src', 'photos/logo_inverted.png');
	hamburger.setAttribute('src', 'photos/hamburger_inverted.png');
	document.cookie = "style=dark;expires=" + date + ";path=/";
}

function set_normal_colors() {
	contrast.setAttribute('onclick', 'set_inverted_colors()');
	document.documentElement.style.setProperty('--menu-color', '#252376');
	document.documentElement.style.setProperty('--hoovered-menu-color', '#1086b7');
	document.documentElement.style.setProperty('--white-color', 'white');
	document.documentElement.style.setProperty('--red-color', 'red');
	document.documentElement.style.setProperty('--black-color', 'black');
	document.documentElement.style.setProperty('--dimgray-color', 'dimgray');
	document.documentElement.style.setProperty('--footer-background-color', '#e6e6e6');
	document.documentElement.style.setProperty('--footer-text-color', '#666666');
	document.documentElement.style.setProperty('--footer-header-color', '#4c4c4c');
	document.documentElement.style.setProperty('--footer-line-color', '#cccccc');
	logo.setAttribute('src', 'photos/logo.png');
	hamburger.setAttribute('src', 'photos/hamburger.png');
	document.cookie = "style=light;expires=" + date + ";path=/";
}

function set_font_size(x) {
	document.documentElement.style.setProperty('--font-size', x);
	if (x == 0.8) {
		document.querySelector("#font_size span:nth-of-type(1)").style["color"] = "var(--red-color)";
		document.querySelector("#font_size span:nth-of-type(2)").style["color"] = "var(--black-color)";
		document.querySelector("#font_size span:nth-of-type(3)").style["color"] = "var(--black-color)";
	}
	else if(x == 1){
		document.querySelector("#font_size span:nth-of-type(1)").style["color"] = "var(--black-color)";
		document.querySelector("#font_size span:nth-of-type(2)").style["color"] = "var(--red-color)";
		document.querySelector("#font_size span:nth-of-type(3)").style["color"] = "var(--black-color)";
	}
	else{
		document.querySelector("#font_size span:nth-of-type(1)").style["color"] = "var(--black-color)";
		document.querySelector("#font_size span:nth-of-type(2)").style["color"] = "var(--black-color)";
		document.querySelector("#font_size span:nth-of-type(3)").style["color"] = "var(--red-color)";
	}
	setTimeout(() => { msnry.layout(); }, 200);
	document.cookie = "font_size=" + x + ";expires=" + date + ";path=/";
}