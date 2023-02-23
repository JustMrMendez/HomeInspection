// SEO Config file

type KeywordAction = 'inspection services' | 'inspector' | 'testing' | 'cost';

export function generateKeywords(
	locations: string[],
	baseKeywords: string[],
	actions: KeywordAction[]
): string[] {
	const keywords: string[] = [];

	for (const location of locations) {
		for (const baseKeyword of baseKeywords) {
			for (const action of actions) {
				const keyword = `${baseKeyword} ${action} in ${location}`;
				keywords.push(keyword);
			}
		}
	}

	return keywords;
}

const locations = ['Miami', 'Kendall', 'Doral', 'Homestead'];
const baseKeywords = ['home', 'residential home', 'Mold', 'Radon', 'Certified Home'];
const actions: KeywordAction[] = ['inspection services', 'inspector', 'testing', 'cost'];

const keywords = generateKeywords(locations, baseKeywords, actions); // <-- Here the keywords are generated

const title = 'R & A Home Inspections Group';
const phone = '305-330-2949';
const email = 'info@rnainspection.com';
const facebook = 'https://www.facebook.com/RnAinspection';
const instagram = 'https://instagram.com/rna_inspections';

export const SEO = {
	site: 'https://www.rnainspection.com',
	title: title,
	description: `${title} is a full-service home inspection company serving ${locations.join(
		', '
	)}. We provide home inspection services, mold inspection, radon testing, and more.
    Call us at ${phone} or email us at ${email}.`,
	keywords: keywords.join(', ')
};
