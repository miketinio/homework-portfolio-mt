function () {
	function showLearnMore() {
	//event.preventDefault();
	console.log('i\'ve been clicked');
	$('#learnmoretext').slidetoggle();
	}

	$('.learnmore').click(showLearnMore);

}



