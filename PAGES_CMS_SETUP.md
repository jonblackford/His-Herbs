# Pages CMS Setup

Pages CMS lets the customer edit the content file without touching code.

## Editable content

The customer can edit:

- Business name
- Tagline
- Hero text
- Announcement or hours note
- Phone/address/map/Facebook links
- About section
- Services
- Seasonal highlights
- Gallery photos
- Contact intro text
- Footer text

## Content file

The editable content lives at:

`content/site.json`

The Pages CMS configuration is:

`.pages.yml`

## Recommended workflow

1. Connect Pages CMS to the GitHub repository.
2. Let the customer edit the website content in Pages CMS.
3. When they save, Pages CMS commits changes to GitHub.
4. Netlify automatically redeploys the updated site.
