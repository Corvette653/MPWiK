var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");
var contrast = document.getElementById("contrast_mode");
var logo = document.getElementById("logo");


if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	set_inverted_colors();
	document.getElementsByTagName("link")[2].href = "photos/logo_inverted.png"
}
else {
	set_normal_colors();
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
	document.documentElement.style.setProperty('--menu-color', '#cfcc7b');
	document.documentElement.style.setProperty('--hoovered-menu-color', '#ff9d6d');
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
	document.documentElement.style.setProperty('--menu-color', '#303384');
	document.documentElement.style.setProperty('--hoovered-menu-color', '#006292');
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