import type { ParamMatcher } from '@sveltejs/kit';
// import { XataClient } from '$lib/xata';
// import { XATA_API_KEY, XATA_FALLBACK_BRANCH } from '$env/static/private';

// const xata = new XataClient({
//     apiKey: XATA_API_KEY,
//     branch: XATA_FALLBACK_BRANCH
//   });

export const match: ParamMatcher = (param) => {
	// using regex to match the param which is a string using .test()
	const regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9-]+$/;
	return regex.test(param);
};
