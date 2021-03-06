var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var contrast = document.getElementById("contrast_mode");
var logo = document.getElementById("logo");
var animation = document.querySelector("#animation div");
var animation_link = document.getElementById("animation");
var zsku = document.querySelector("#must_see a:nth-of-type(6) img");
var animation_pointer_1 = document.querySelector(".animation_buttons:nth-of-type(1) span:nth-of-type(2)");
var animation_pointer_2 = document.querySelector(".animation_buttons:nth-of-type(1) span:nth-of-type(1)");
var animation_pointer_3 = document.querySelector(".animation_buttons:nth-of-type(3) span:nth-of-type(2)");
var animation_pointer_4 = document.querySelector(".animation_buttons:nth-of-type(3) span:nth-of-type(1)");
var cookies = ['', ''];
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

var animationId = window.setInterval(animate, 10000);

function animate() {
	if(animation.style["background-position-x"] == "100%") {
		animation.style["background-position-x"] = "0px";
		animation_link.removeAttribute('href');
		animation_pointer_1.classList.add('current_slide');
		animation_pointer_3.classList.add('current_slide');
		animation_pointer_2.classList.remove('current_slide');
		animation_pointer_4.classList.remove('current_slide');
	}
	else {
		animation.style["background-position-x"] = "100%";
		animation_link.setAttribute('href', '/MPWiK/dla_klienta/');
		animation_pointer_1.classList.remove('current_slide');
		animation_pointer_3.classList.remove('current_slide');
		animation_pointer_2.classList.add('current_slide');
		animation_pointer_4.classList.add('current_slide');
	}
}

function set_slide_1() {
	animation.style["background-position-x"] = "0px";
	animation_link.removeAttribute('href');
	animation_pointer_1.classList.add('current_slide');
	animation_pointer_3.classList.add('current_slide');
	animation_pointer_2.classList.remove('current_slide');
	animation_pointer_4.classList.remove('current_slide');
	window.clearInterval(animationId);
	animationId = window.setInterval(animate, 10000);
}

function set_slide_2() {
	animation.style["background-position-x"] = "100%";
	animation_link.setAttribute('href', 'dla_klienta');
	animation_pointer_1.classList.remove('current_slide');
	animation_pointer_3.classList.remove('current_slide');
	animation_pointer_2.classList.add('current_slide');
	animation_pointer_4.classList.add('current_slide');
	window.clearInterval(animationId);
	animationId = window.setInterval(animate, 10000);
}

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
	document.documentElement.style.setProperty('--gallery-background-color_1', 'rgba(239, 121, 72, 0.2)');
	document.documentElement.style.setProperty('--gallery-background-color_2', 'rgba(239, 121, 72, 0.35)');
	document.documentElement.style.setProperty('--gallery-background-color_3', 'rgba(239, 121, 72, 0.7)');
	document.documentElement.style.setProperty('--gallery-background-color_4', 'rgba(239, 121, 72, 0.4)');
	document.documentElement.style.setProperty('--gallery-background-color_5', 'rgba(239, 121, 72, 1)');
	logo.setAttribute('src', 'photos/logo_inverted.png');
	hamburger.setAttribute('src', 'photos/hamburger_inverted.png');
	zsku.setAttribute('src', 'photos/zsku_logo_inverted.png');
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
	document.documentElement.style.setProperty('--gallery-background-color_1', 'rgba(16, 134, 183, 0.2)');
	document.documentElement.style.setProperty('--gallery-background-color_2', 'rgba(16, 134, 183, 0.35)');
	document.documentElement.style.setProperty('--gallery-background-color_3', 'rgba(16, 134, 183, 0.7)');
	document.documentElement.style.setProperty('--gallery-background-color_4', 'rgba(16, 134, 183, 0.4)');
	document.documentElement.style.setProperty('--gallery-background-color_5', 'rgba(16, 134, 183, 1)');
	logo.setAttribute('src', 'photos/logo.png');
	hamburger.setAttribute('src', 'photos/hamburger.png');
	zsku.setAttribute('src', 'photos/zsku_logo.png');
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
	document.cookie = "font_size=" + x + ";expires=" + date + ";path=/";
}