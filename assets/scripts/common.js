/* Designed by Shrey Gupta from the Translational Genomics Research Institute in 2015 for Dr. Seungchan Kim. The following code was made using a template protected under the GNU GPL v.2.0 License. */

$(document).ready(function(){
	var sidebarOffsetTop = $('.eddy-sidebar ul').offset().top;
	$(window).scroll(function(){
		var windowScrollTop = $(window).scrollTop();
		if (windowScrollTop > sidebarOffsetTop) $('.eddy-sidebar ul').addClass('eddy-sidebar-fixed');
		else $('.eddy-sidebar ul').removeClass('eddy-sidebar-fixed');
	});
});