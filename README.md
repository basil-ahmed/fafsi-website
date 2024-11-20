# FAFSI Website

## Description

The FAFSI website is a professional platform that offers resources for home purchasing, refinancing, and mortgage prequalification. The website is designed to provide users with a seamless and informative experience, allowing them to explore mortgage tools, learn about services, and contact the FAFSI team.

The site is built with **Next.js** and styled using **Tailwind CSS**, hosted on **Vercel**, and integrates **Formspree** for form submission functionality.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Form Submissions](#form-submissions)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Features

1. **Home Page**
   - Interactive hero section with navigation links to different pages.
   - Smooth scroll functionality for in-page navigation.
   - Mortgage tools for rates, calculator, and news.

2. **Pages**
   - **Purchase**: A detailed guide to home purchasing, including necessary documents.
   - **Refinancing**: Comprehensive information on refinancing options and required steps.
   - **Prequalify**: A form for quick mortgage prequalification using Formspree.
   - **Contact Us**: A user-friendly form to contact FAFSI directly.
   - **About Us**: Overview of FAFSI’s mission and services.

3. **Responsive Design**
   - Fully responsive layout optimized for desktop, tablet, and mobile devices.

4. **Footer and Header**
   - Footer links to key resources, with "coming soon" placeholders for social media.
   - Sticky header with smooth navigation.

5. **SEO-Optimized**
   - Meta descriptions and Open Graph tags for enhanced search engine visibility.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Hosting**: [Vercel](https://vercel.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **Version Control**: [Git](https://git-scm.com/)

---

## Project Structure

```
├── components/
│   ├── ui/
│   │   ├── header.tsx       // Header component
│   │   ├── footer.tsx       // Footer component
│   └── logo.tsx             // Logo component
├── pages/
│   ├── index.tsx            // Home page
│   ├── purchase.tsx         // Purchase page
│   ├── refinancing.tsx      // Refinancing page
│   ├── prequalify.tsx       // Prequalify form page
│   ├── contact.tsx          // Contact form page
│   ├── _app.tsx             // Application wrapper
│   ├── _document.tsx        // Custom document
├── public/
│   ├── images/              // Image assets
├── styles/
│   ├── globals.css          // Global styles
├── README.md
├── package.json
├── tailwind.config.js       // Tailwind configuration
├── postcss.config.js        // PostCSS configuration
└── tsconfig.json            // TypeScript configuration
```

---

## Getting Started

### Prerequisites

1. Install **Node.js** (LTS version recommended).
2. Install **npm** or **yarn** (comes with Node.js).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/fafsi-site.git
   cd fafsi-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## Deployment

The website is hosted on [Vercel](https://vercel.com/). Follow these steps for deployment:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Update your DNS settings to point to Vercel’s nameservers if using a custom domain.

---

## Form Submissions

Forms on the **Prequalify** and **Contact Us** pages use [Formspree](https://formspree.io/) for handling submissions.

### Setting Up Formspree

1. Create a Formspree account.
2. Copy your unique endpoint URL (e.g., `https://formspree.io/f/xqakllkg`).
3. Replace the `action` attribute in the forms with your endpoint.

---

## Customization

### Updating Site Content

1. **Pages**: Modify the content in the `pages/` directory to customize each page.
2. **Images**: Replace images in the `public/images/` directory with your assets.

### Styling

- Update `styles/globals.css` or use the Tailwind utility classes in the components.
- Tailwind configuration can be customized in `tailwind.config.js`.

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

## Contact

For questions or support, contact us at [info@fafsi.com](mailto:info@fafsi.com).