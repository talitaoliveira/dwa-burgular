$(document).ready(function(){
	/* NAVBAR */
	$(".button-collapse").sideNav();

	$(".menu-cardapio").click(function(){
		setTimeout(teste => {Materialize.showStaggeredList('#staggered-test');}, 500)
		
	});
});