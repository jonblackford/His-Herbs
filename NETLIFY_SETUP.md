# Netlify Setup

1. Upload this project to a GitHub repository.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Connect the GitHub repository.
4. Build settings:
   - Build command: leave blank
   - Publish directory: `.`
5. Deploy.

## Contact form submissions

After the first successful deploy, Netlify should detect the form named `contact` on `/contact/`.

To view messages:

1. Open the site in Netlify.
2. Go to **Forms**.
3. Open the `contact` form.
4. View/export submissions.

Test the form once after publishing. Netlify Forms usually appear after the first deployed form submission or after Netlify scans the deployed HTML.
