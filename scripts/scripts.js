var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");

function show_menu() {
	hamburger.setAttribute('onclick','hide_menu()');
	menu.classList.remove('hidden_m_s');
}

function hide_menu() {
	hamburger.setAttribute('onclick','show_menu()');
	menu.classList.add('hidden_m_s');
}

function set_font_size(x) {
	document.documentElement.style.setProperty('--font-size', x);
	if (x == 0.8) {
		document.querySelector("#font_size span:nth-of-type(1)").style["color"] = "red";
		document.querySelector("#font_size span:nth-of-type(2)").style["color"] = "black";
		document.querySelector("#font_size span:nth-of-type(3)").style["color"] = "black";
	}
	else if(x == 1){
		document.querySelector("#font_size span:nth-of-type(1)").style["color"] = "black";
		document.querySelector("#font_size span:nth-of-type(2)").style["color"] = "red";
		document.querySelector("#font_size span:nth-of-type(3)").style["color"] = "black";
	}
	else{
		document.querySelector("#font_size span:nth-of-type(1)").style["color"] = "black";
		document.querySelector("#font_size span:nth-of-type(2)").style["color"] = "black";
		document.querySelector("#font_size span:nth-of-type(3)").style["color"] = "red";
	}

}