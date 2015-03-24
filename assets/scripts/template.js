/* Designed by Shrey Gupta from the Translational Genomics Research Institute in 2015 for Dr. Seungchan Kim. The following code was made using a template protected under the GNU GPL v.2.0 License. */

$(document).ready(function(){
	var sidebarOffsetTop = $('.site-sidebar ul').offset().top;
	$(window).scroll(function(){
		var windowScrollTop = $(window).scrollTop();
		if (windowScrollTop > sidebarOffsetTop) $('.site-sidebar ul').addClass('site-sidebar-fixed');
		else $('.site-sidebar ul').removeClass('site-sidebar-fixed');
	});
});