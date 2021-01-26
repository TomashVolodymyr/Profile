$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
		$('.a').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();


	var h_elem = document.querySelectorAll('.show-more-less_block');
var H_block = document.querySelector('.show-more-less');
var to_show = document.querySelector('.to-show');
var to_hidden = document.querySelector('.to-hidden');


if (H_block.clientHeight >= 2*h_elem[0].clientHeight) {
	H_block.style.height = 2*h_elem[0].clientHeight + 'px';
	H_block.style.overflow = 'hidden';
	to_show.style.display = "block";
}


function showMore(event) {
	to_show.style.display = "none";
	to_hidden.style.display = "block"
	H_block.style.height = "auto";
} 

function showLess(event) {
	to_show.style.display = "block";
	to_hidden.style.display = "none"
	H_block.style.height = 2*h_elem[0].clientHeight + 'px';
}


new Swiper('.testimonials__swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 2500,
  },

  speed: 1800,
});

//підключення галереї
window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});