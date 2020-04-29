/*!
 * smooth-scroll v16.1.2
 * Animate scrolling to anchor links
 * (c) 2020 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */

(function (root, factory) {
	if (teof defi

			var anchor;
			if (hash === '#') {
				if (!settings.topOnEmptyHash) return;
				anchor = document.documentElement;
			} else {
				anchor = document.querySelector(hash);
			}
			anchor = !anchor && hash === '#top' ? document.documentElement : anchor;

			// If anchored element exists, scroll to it
			if (!anchor) return;
			event.preventDefault();
			setHistory(settings);
			smoothScroll.animateScroll(anchor, toggle);

		};

		/**
		 * Animate scroll on popstate events
		 */
		var popstateHandler = function (event) {

			// Stop if history.state doesn't exist (ex. if clicking on a broken anchor link).
			// fixes `Cannot read property 'smoothScroll' of null` error getting thrown.
			if (history.state === null) return;

			// Only run if state is a popstate record for this instantiation
			if (!history.state.smoothScroll || history.state.smoothScroll !== JSON.stringify(settings)) return;

			// Only run if state includes an anchor

			// if (!history.state.anchor && history.state.anchor !== 0) return;

			// Get the anchor
			var anchor = history.state.anchor;
			if (typeof anchor === 'string' && anchor) {
				anchor = document.querySelector(escapeCharacters(history.state.anchor));
				if (!anchor) return;
			}

			// Animate scroll to anchor link
			smoothScroll.animateScroll(anchor, null, {updateURL: false});

		};

		/**
		 * Destroy the current initialization.
		 */
		smoothScroll.destroy = function () {

			// If plugin isn't already initialized, stop
			if (!settings) return;

			// Remove event listeners
			document.removeEventListener('click', clickHandler, false);
			window.removeEventListener('popstate', popstateHandler, false);

			// Cancel any scrolls-in-progress
			smoothScroll.cancelScroll();

			// Reset variables
			settings = null;
			anchor = null;
			toggle = null;
			fixedHeader = null;
			eventTimeout = null;
			animationInterval = null;

		};

		/**
		 * Initialize Smooth Scroll
		 * @param {Object} options User settings
		 */
		var init = function () {

			// feature test
			if (!supports()) throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';

			// Destroy any existing initializations
			smoothScroll.destroy();

			// Selectors and variables
			settings = extend(defaults, options || {}); // Merge user options with defaults
			fixedHeader = settings.header ? document.querySelector(settings.header) : null; // Get the fixed header

			// When a toggle is clicked, run the click handler
			document.addEventListener('click', clickHandler, false);

			// If updateURL and popState are enabled, listen for pop events
			if (settings.updateURL && settings.popstate) {
				window.addEventListener('popstate', popstateHandler, false);
			}

		};


		//
		// Initialize plugin
		//

		init();


		//
		// Public APIs
		//

		return smoothScroll;

	};

	return SmoothScroll;

}));
