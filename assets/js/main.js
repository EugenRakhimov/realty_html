;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

	$( window ).scroll( function() {
		var windowTop = $( window ).scrollTop();

		if ( windowTop > 50 ) {
			$( '.navbar' ).addClass( 'navbar-inverse' );
		} else {
			$( '.navbar' ).removeClass( 'navbar-inverse' );
		}
	});


})(jQuery)
