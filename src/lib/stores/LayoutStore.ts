// a store that holds various layout related data like scroll position, etc.
// import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const Layout = writable({
	scrollPosition: 0,
	scrollDirection: 'down',
	device: 'desktop'
});

// calculate if user is scrolling up or down
let lastYSroll = 0;

Layout.subscribe((layout) => {
	if (layout.scrollPosition + 10 > 0) {
		layout.scrollDirection = layout.scrollPosition > lastYSroll && lastYSroll !== 0 ? 'down' : 'up';
		// only update last scroll position if user has scrolled more than 10px
		if (Math.abs(layout.scrollPosition - lastYSroll) > 75 || layout.scrollPosition < 50) {
			lastYSroll = layout.scrollPosition > 50 ? layout.scrollPosition : 0;
		}
	}
});

export const lang: Writable<string> = localStorageStore('lang', 'en');
