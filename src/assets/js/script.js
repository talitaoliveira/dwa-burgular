$(document).ready(function(){
	/* NAVBAR */
	$(".button-collapse").sideNav();

	$(".menu-cardapio").click(function(){
		Materialize.showStaggeredList('#staggered-test');
	});
});