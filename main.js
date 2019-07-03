$(".nav-site li").click(function(){
	console.log("click");
	$(".nav-site li").removeClass("activado");
	$(this).addClass("activado");
})

$(".head-acordion").click(function(){
	$(this).toggleClass("visto")
	$(this).parent().find(".contenido").slideToggle();
})