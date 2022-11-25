const psss = document.querySelector('input');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');

psss.addEventListener('input', function(){
	if(psss.value.length >= 8){
		p1.style.color = 'green';
	}else{
		p1.style.color = 'black';
	}

	if(/\d/g.test(psss.value) === true){
		p2.style.color = 'green';
	}else{
		p2.style.color = 'black';
	}

	if(/[A-Z]/g.test(psss.value) === true){
		p3.style.color = 'green';
	}else{
		p3.style.color = 'black';
	}

	if(/[!-*]/g.test(psss.value) === true){
		p4.style.color = 'green';
	}
});