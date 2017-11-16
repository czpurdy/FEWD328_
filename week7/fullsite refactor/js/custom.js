// Put all your lovely jQuery / Javascript goodies right down here.

$('.accordionButton').click(showContent);

function showContent(){
	if($(this).siblings('.accordionContent').attr('display', 'show')){
		$(this).siblings('.accordionContent').slideUp();
	}
	$(this).next('.accordionContent').slideToggle();
}