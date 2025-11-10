# VulnX Security Website (Next.js + Tailwind)

Modern, fast, and secure marketing site for VulnX Security, LLC.

## Tech Stack
- Next.js 14 (pages router)
- Tailwind CSS
- Markdown-powered blog (remark)
- Formspree for contact form
- Vercel for hosting/CDN/SSL

## Local Development
```bash
npm install
npm run dev
# open http://localhost:3000

## Contact Form Configuration

The site uses Formspree for form handling. Configure your form ID via an environment variable to enable submissions from both the Contact page and the forms embedded on service detail pages.

1. Create a `.env.local` file in the project root (not committed):

```bash
cp .env.local.example .env.local # if example exists, or create manually
```

2. Add your Formspree form ID:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id_here
```

The app will post JSON to `https://formspree.io/f/${NEXT_PUBLIC_FORMSPREE_FORM_ID}`. If the variable is missing, the UI will warn you and submissions will likely fail.

### Spam Protection & UX
- A hidden honeypot field is included to reduce bot submissions.
- Client-side validation checks name, email format, and message before submit.
- Success and error states are shown inline without leaving the page.

