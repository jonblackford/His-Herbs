# Pages CMS Setup

This project includes `.pages.yml` and `content/site.json` so the business can edit website content without touching code.

## Setup overview

1. Keep this site in a GitHub repository.
2. Connect the repository to Pages CMS.
3. Pages CMS will read `.pages.yml`.
4. The editable area should appear as **Website Content**.
5. Customer edits update `content/site.json`.
6. Netlify automatically redeploys after GitHub changes.

## Image uploads

Uploaded images should go into:

`assets/uploads/`

The image path used in content should start with:

`/assets/uploads/filename.jpg`

Existing built-in images are stored in:

`assets/`
