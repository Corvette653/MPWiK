var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var contrast = document.getElementById("contrast_mode");
var logo = document.getElementById("logo");
var animation = document.querySelector("#animation div");
var animation_link = document.getElementById("animation");
var animation_pointer_1 = document.querySelector(".animation_buttons:nth-of-type(1) span:nth-of-type(2)");
var animation_pointer_2 = document.querySelector(".animation_buttons:nth-of-type(1) span:nth-of-type(1)");
var animation_pointer_3 = document.querySelector(".animation_buttons:nth-of-type(3) span:nth-of-type(2)");
var animation_pointer_4 = document.querySelector(".animation_buttons:nth-of-type(3) span:nth-of-type(1)");


// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 	set_inverted_colors();
// 	document.getElementsByTagName("link")[2].href = "photos/logo_inverted.png"
// }
// else {
// 	set_normal_colors();
// }

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
		animation_link.setAttribute('href', 'dla_klienta');
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
}

function set_slide_2() {
	animation.style["background-position-x"] = "100%";
	animation_link.setAttribute('href', 'dla_klienta');
	animation_pointer_1.classList.remove('current_slide');
	animation_pointer_3.classList.remove('current_slide');
	animation_pointer_2.classList.add('current_slide');
	animation_pointer_4.classList.add('current_slide');
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
	logo.setAttribute('src', 'photos/logo_inverted.png');
	hamburger.setAttribute('src', 'photos/hamburger_inverted.png');

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
}