import type { RequestHandler } from './$types';
import { defaultOptions } from '$lib/xata';
import { json } from '@sveltejs/kit';
import { BaseClient } from '@xata.io/client';

const xata = new BaseClient({
	...defaultOptions
});

export const GET: RequestHandler = async ({ request }) => {
	// extract language and page from headers
	const lang = request.headers.get('lang') || 'en';
	const page = request.headers.get('from') || 'home';
	const extraTable = request.headers.get('tables');

	// extract sections from headers and trim whitespaces
	// const getSections = request.headers.get('sections');
	// const pageSections = getSections
	// 	? getSections.split(',').map((section) => section.trim())
	// 	: ['Hero', 'Services', 'FAQs', 'Contact'];
	// const { sections, metaData } = filterAndSpreadKeys(
	// 	ContentTableName === 'PageContentEN.*' ? content.PageContentEN : content.PageContentES,
	// 	pageSections
	// );

	// create table name for the correct language
	const ContentTableName = `PageContent${lang.toUpperCase()}.*`;
	let content;
	let extraTableContent;
	try {
		// fetch content from database
		content = await xata.db.Pages.filter('name', page).select([ContentTableName]).getFirst();
		// fetch extra table content
		if (extraTable) {
			extraTableContent = await xata.db[extraTable].getAll();
		}
	} catch (err) {
		console.error(err);
		return json({ error: err }, { status: 500 });
	}

	// create response object
	const response = { ...content };
	if (extraTableContent) {
		response[extraTable] = extraTableContent;
	}
	// if any of the keys have a sufix of 'EN' or 'ES' remove the sufix from the response object

	// Object.keys(response).forEach((key) => {
	// 	if (key.endsWith('ES' || 'EN')) {
	// 		const newKey = key.slice(0, -2);
	// 		response[newKey] = response[key];
	// 		delete response[key];
	// 	}
	// });

	// return json response
	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'max-age=0, s-max-age=3600, stale-while-revalidate'
		},
		status: 200
	});
};
