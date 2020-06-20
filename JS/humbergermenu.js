const humberger = document.getElementById("Humberger_Icon");
const navUL = document.getElementById("nav-ul");

humberger.addEventListener('click', () =>{
	console.log('clicked');
	navUL.classList.toggle('navShow');

})