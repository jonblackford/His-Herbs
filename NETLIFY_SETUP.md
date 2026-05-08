# Netlify Setup

1. Create or open the GitHub repository for the site.
2. Upload the contents of this folder to the repository root.
3. In Netlify, choose **Add new site → Import an existing project**.
4. Connect GitHub and choose the repository.
5. Use these build settings:
   - Build command: leave blank
   - Publish directory: `/`
6. Deploy the site.
7. After deploy, submit a test message through the contact form.
8. In Netlify, go to **Forms** and confirm the `contact` form appears.

The included `netlify.toml` keeps the static site configuration simple and Netlify-friendly.
