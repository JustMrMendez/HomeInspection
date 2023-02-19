import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import type { DatabaseSchema, PageContentEN, Services } from '$lib/xata';

export const load: PageLoad = async ({ fetch }) => {
	let lang = 'en';
	if (browser) {
		lang = localStorage.getItem('lang') || 'en';
		console.log('lang', lang);

		let extraTables;
		if (lang === 'es') {
			extraTables = 'ServicesES';
		} else {
			extraTables = 'ServicesEN';
		}
		const content: DatabaseSchema = await fetch(`/api/content`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				lang: lang.replace(/"/g, ''),
				from: 'home',
				sections: 'Hero, Services, FAQs, Contact',
				tables: extraTables
			}
		}).then((res) => res.json());
		console.log('content', content);

		return {
			...content
		};
	}
};
