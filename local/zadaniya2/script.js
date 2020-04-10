let tex = document.querySelector('textarea');
let i = localStorage.length;

function SOXRANIT(){
	localStorage.setItem(i++, tex.value);
}

if (localStorage.length > 0) {
let parent = document.querySelector('knopki')

let prevedyshiy = document.createElement('button')
    prevedyshiy.id = 'prevedyshiy'
    prevedyshiy.innerText = 'Prevedyshiy'
	prevedyshiy.addEventListener('click', function(){
		i--
			if (i < 0) {
			i = localStorage.length
			}
    tex.value = localStorage.getItem(i);
	});
	parent.appendChild(prevedyshiy);
	

let sledyishi = document.createElement('button')
    sledyishi.id = 'sledyishi'
    sledyishi.innerText = 'sledyishi'
	sledyishi.addEventListener('click', function(){
		i++
			if (i > localStorage.length) {
			i = 0;
			}
    tex.value = localStorage.getItem(i);
	});
	parent.appendChild(sledyishi);
	
   
}