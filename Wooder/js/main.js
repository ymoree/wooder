$(document).ready(function(){
	var wow = new WOW();
	wow.init();
});

$(function(){
	$(".navigation-icon").click(function(){
		$(".navigation").toggleClass("navigation-open")
	});
});

$(function(){
	$(".lang").click(function(){
		$(".lang").toggleClass("lang-open")
	});
});


const cards = document.querySelectorAll('.card');

for (let i=0; i < cards.length; i++){
	const card = cards[i]
	card.addEventListener('mousemove', rotate);
	card.addEventListener('mouseout', stopRotate)
}

function rotate(event) {
	const cardItem = this.querySelector('.card-item');
	const halfHeight = cardItem.offsetHeight  / 2;
	const halfWidth = cardItem.offsetWidth  / 2;
	
	cardItem.style.transform = 'rotateX('+-
	(event.offsetY - halfHeight) / 10 +'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)'
}

function stopRotate(event) {
	const cardItem = this.querySelector('.card-item');
	cardItem.style.transform = 'rotate(0)'
}