Luboitext.value = localStorage.getItem("kluch");
Luboitext.oninput=function(){
	localStorage.setItem("kluch", Luboitext.value);
    console.log(Luboitext.value);
};