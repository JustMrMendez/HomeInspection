import { XataClient } from '$lib/xata';
import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

const xata = new XataClient({
	apiKey: env.XATA_API_KEY
});


export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const lang = formData.get('lang') as string;

	console.log('lang', lang);

	if (lang !== 'en' && lang !== 'es') {
		// return fail(400, { lang, message: 'Requested Language is missing' });
        return json({ lang, message: 'Requested Language is missing' }, { status: 400 })
	}

	return json({ success: true, lang });
};
