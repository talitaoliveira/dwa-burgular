$(document).ready(function(){
	/* NAVBAR */
	$(".button-collapse").sideNav();

	$(".menu-cardapio").click(function(){
		setTimeout(teste => {Materialize.showStaggeredList('#staggered-test');}, 500)
		
	});
$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true
});
});