$(document).ready(function() {
	$('.modal-trigger').leanModal();
	$('.scrollspy').scrollSpy();
	$('.button-collapse').sideNav();
	$('.typed').typed({
		strings: ["Subtitle: "],
		typeSpeed: 100,
		callback: function() {
			scramble(['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5'])
		}
	});
});