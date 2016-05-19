$(document).ready(function() {
	$('.typed').typed({
		strings: ["Experience: "],
		typeSpeed: 50,
		callback: function() {
			scramble(['Transportation', 'Zero Gravity', 'Space Exploration', 'The Hyperloop', 'Jet Packs'])
		}
	});
});
