$(document).ready(function() {
	$('.typed').typed({
		strings: ["Exploring the concepts of: "],
		typeSpeed: 100,
		callback: function() {
			scramble(['Transportation', 'Zero Gravity', 'Space Exploration', 'The Hyperloop', 'Jet Packs'])
		}
	});
});
