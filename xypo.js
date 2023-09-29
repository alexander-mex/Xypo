const menuBtn = document.querySelector("#menuBtn");
const sideNav = document.querySelector("#sideNav");
sideNav.style.right = "-250px";

menuBtn.onclick = function(){
	if(sideNav.style.right == "-250px"){
		sideNav.style.right = "0";
	}
	else{
		sideNav.style.right = "-250px";
	}
}

let scroll = new SmoothScroll('a[href*="#"]',{
	speed: 1000,
	speedAsDuration: true
});

const form = document.querySelectorAll('.contact__form input');
let pl = '';
for(let a = 0; a < form.length; a++){
  form[a].onfocus = function(){
    pl = this.placeholder;
    this.placeholder = '';
  }

  form[a].onblur = function(){
    if(this.placeholder == "") 
      this.placeholder = pl;
  }
}