var body = document.querySelector('.color-scheme');
var themeBtn = document.querySelectorAll('.color-scheme__mode-changer');
var themeModeBtn = document.querySelector('button');
//var themeDarkBtn = document.querySelector('svg:nth-of-type(2)');

for(var i = 0; i < themeBtn.length; i++){
themeBtn[i].addEventListener('click', function(){
body.classList.toggle('color-scheme--light-mode');
body.classList.toggle('color-scheme--dark-mode');
if(body.classList.contains("color-scheme--dark-mode")){
	themeModeBtn.textContent= "Let me light";
//	themeLightBtn.style.display= "block";

}else{
	themeModeBtn.textContent= "Let me dark";
//	themeLightBtn.style.display= "none";
}
});
}