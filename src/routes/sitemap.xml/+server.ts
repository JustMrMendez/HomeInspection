import { SEO } from '$lib/SEO/SEO';

export async function GET() {
	const pages = [
		{ url: '/', priority: 1.0, freq: 'weekly' },
		{ url: '/about', priority: 0.9, freq: 'weekly' },
		{ url: '/services', priority: 0.9, freq: 'weekly' }
		// Add more pages here
	];

	const today = new Date().toISOString();

	const sitemapXml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      ${pages
				.map(
					({ url, priority, freq }) => `
          <url>
            <loc>${SEO.site}${url}</loc>
            <lastmod>${today}</lastmod>
            <changefreq>${freq}</changefreq>
            <priority>${priority}</priority>
            <mobile:mobile/>
            <xhtml:link rel="alternate" hreflang="en" href="${SEO.site}" />
            <xhtml:link rel="canonical" href="${SEO.site}" />
          </url>`
				)
				.join('')}
    </urlset>`.trim();

	return new Response(sitemapXml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
