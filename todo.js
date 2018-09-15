// Check off specific To Dos by clicking
var done = $("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "li", function(){
    $(".done").append("<li><span><i class='fa fa-trash'></i></span> " + done + "</li>");
	$(this).remove();

});


// Click on X to delete To Dos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}	
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

$(".fa-chevron-circle-down").click(function(){
	$("input[type='text']").fadeToggle();
})

$(".fa-trash").click(function(){
	$(this).remove()
})



