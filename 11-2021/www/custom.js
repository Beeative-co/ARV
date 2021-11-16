let script = document.createElement('script');
script.src = '/wp-includes/js/jquery/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(() => {
	(function ($) {
		let width = $(window).width();
		console.log('width ', width)
		if (width < 992) {
			let navbar = $('.oxy-nav-menu-responsive-dropdowns')
			
			navbar.click(function () {
				if (navbar.hasClass('oxy-nav-menu-open')) {
					navbar.removeClass('oxy-nav-menu-open')
				} else {
					navbar.addClass('oxy-nav-menu-open')
				}
				})
		}
		if (width <= 768) {
			$('#_header_left-11-225').css('padding','12px')
			
		}
			
 })(jQuery); 
//})();
}, 250);

//(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':ew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T3JNSDQ');

//console.log('script')
