import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

// List of your app's routes
const routes = [
  '/',
  '/about-us',
  '/contact-us',
  '/apply-now',
  '/terms-condition',
  '/fqa',
  '/privacy-policy',
  '/repay-now'
];

// Get the equivalent of __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the hostname (domain) for the sitemap
const hostname = 'https://speedoloan.com';

// Define the sitemap path in the public folder
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
console.log('Sitemap Path:', sitemapPath);

const generateSitemap = () => {
  try {
    // Create a writable stream to the sitemap file
    const writeStream = createWriteStream(sitemapPath);

    // Initialize SitemapStream with the hostname
    const sitemap = new SitemapStream({ hostname });

    // Pipe the sitemap data to the writable stream
    sitemap.pipe(writeStream);

    // Add each route to the sitemap
    routes.forEach(route => {
      sitemap.write({ url: route, changefreq: 'daily', priority: 0.7 });
    });

    // Finalize the sitemap and close the stream
    sitemap.end();
    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
