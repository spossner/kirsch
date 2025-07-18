# 🌟 Coaching Website - Sandra Müller

A professional coaching website built with Astro, featuring a modern component-based architecture and TypeScript form handling.

## 🚀 Project Structure

```text
/
├── public/
│   └── images/
│       └── female.webp              # Hero background image
├── src/
│   ├── components/                  # Reusable Astro components
│   │   ├── HeroSection.astro        # Hero section with background image
│   │   ├── ServicesSection.astro    # Services grid (3 service cards)
│   │   ├── CoachProfile.astro       # Coach profile with image and bio
│   │   ├── AboutSection.astro       # About section with quote
│   │   ├── ContactForm.astro        # Contact form (Netlify Forms)
│   │   ├── ConfirmationDialog.astro # Success dialog overlay
│   │   └── Footer.astro             # Site footer
│   ├── pages/
│   │   └── index.astro              # Main page (component composition)
│   ├── scripts/
│   │   └── contact-form.ts          # Form handling with TypeScript
│   └── styles/
│       └── global.css               # Global styles
└── package.json
```

## 🎨 Design Features

- **Component-based architecture** - Clean separation of concerns
- **TypeScript form handling** - Custom form submission with validation
- **Netlify Forms integration** - Server-side form processing
- **Custom confirmation dialog** - "Deine Reise beginnt jetzt!" themed success message
- **Responsive design** - Mobile-first approach with Tailwind CSS
- **Professional styling** - Green theme with elegant typography (EB Garamond)
- **Background image integration** - Hero section with subtle overlay effects

## 📁 Component Architecture

### Core Components:
- `HeroSection` - Full-screen hero with background image and CTAs
- `ServicesSection` - 3-column grid showcasing coaching services
- `CoachProfile` - Two-column layout with coach photo and bio
- `AboutSection` - Centered content with inspirational quote
- `ContactForm` - Netlify form with custom success dialog
- `ConfirmationDialog` - Modal overlay for form success feedback
- `Footer` - Simple footer with copyright

### Interactive Features:
- **Custom form submission** - Prevents default, shows loading states
- **Success dialog** - Animated modal with "Reise beginnt" theme
- **Keyboard accessibility** - ESC key closes dialog
- **Click-outside handling** - Dialog closes when clicking overlay
- **Form validation** - Required fields with focus states

## 🛠️ Technical Stack

- **Astro** - Static site generator with component islands
- **TypeScript** - Type-safe form handling and interactions
- **Tailwind CSS** - Utility-first styling framework
- **Netlify Forms** - Server-side form processing
- **EB Garamond** - Professional serif typography

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
