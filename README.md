# BrendanSG Portfolio (brendansg.github.io)

Welcome to the repository for **Brendan Saint Germes' personal portfolio website**.

The site is built with **React**, **TypeScript**, and **Vite**, and is automatically deployed to **GitHub Pages** via **GitHub Actions**. It has been based from ["React + TypeScript + Vite" template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linter:** [Oxlint](https://oxc.rs/)
- **Formatter:** [Prettier](https://prettier.io/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) & [GitHub Actions](https://github.com/features/actions)

---

## 📁 Project Structure

```text
brendansg.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow for building & deploying to GitHub Pages
├── public/
│   ├── assets/              # Static assets (images, fonts, icons)
│   └── favicon.jpg          # Website favicon
├── src/
│   ├── components/
│   │   └── entrylist.tsx    # Reusable list component for education/projects/interests
│   ├── sections/            # Individual portfolio section definitions
│   │   ├── about.tsx        # Bio & introduction
│   │   ├── contact.tsx      # Contact links
│   │   ├── education.tsx    # Academic journey & degrees
│   │   ├── interests.tsx    # Extracurriculars
│   │   ├── projects.tsx     # Technical & engineering projects
│   │   └── index.ts         # Section registry & ordering
│   ├── types/
│   │   └── sections.ts      # TypeScript interfaces for sections and entries
│   ├── App.tsx              # Main layout, header navigation, and section renderer
│   ├── index.css            # Global styling and CSS theme
│   └── main.tsx             # Application entry point
│   └── mobile.css           # Mobile-specific CSS styling
├── .oxlintrc.json           # Oxlint configuration
├── .prettierrc              # Prettier code formatting rules
├── package.json             # Dependencies and npm scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 20+ or 26 recommended) and `npm`.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BrendanSG/brendansg.github.io.git BrendanSG-Portfolio 
   cd BrendanSG-Portfolio 
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Scripts

- **Start development server:**
  ```bash
  npm run dev
  ```
  Opens the local development server with Hot Module Replacement (HMR).

- **Build for production:**
  ```bash
  npm run build
  ```
  Runs TypeScript type checking (`tsc -b`) and bundles production assets with Vite into the `dist/` directory.

- **Lint code:**
  ```bash
  npm run lint
  ```
  Runs Oxlint to check for code quality and style issues.

- **Preview production build:**
  ```bash
  npm run preview
  ```
  Spins up a local server serving the built `dist/` output.

---

## 🤝 How to Contribute

Contributions, bug reports, and suggestions are welcome! To contribute:

### 1. Fork & Branch
- Fork the repository to your own GitHub account.
- Create a clear, descriptive branch for your changes:
  ```bash
  git checkout -b feature/your-feature-name
  ```

### 2. Modifying Content & Sections
- **Adding or modifying sections:**
  - Create or edit section files in `src/sections/`.
  - Conform to the `Section` type exported from `src/types/sections.ts`.
  - Register new sections in `src/sections/index.ts` and set their display `order`.
- **Adding media or assets:**
  - Place images, icons, or fonts into `public/assets/`.
  - Reference them with absolute public paths (e.g., `/assets/my-image.png`).

### 3. Code Quality & Standards
Before committing:
- **Lint your code:** Run `npm run lint` and fix any warnings or errors.
- **Check TypeScript types & build:** Ensure `npm run build` succeeds without type errors.
- **Format code:** Maintain clean code consistent with `.prettierrc` (tabs, single quotes where applicable).

### 4. Submit a Pull Request
- Commit your changes with meaningful messages:
  ```bash
  git commit -m "Add experience section"
  ```
- Push the branch to your fork:
  ```bash
  git push origin feature/your-feature-name
  ```
- Open a **Pull Request (PR)** against the `main` branch. Provide a brief explanation of what was added or changed.

---

## 🚢 Deployment

Deployment is fully automated. When changes are merged into the `main` branch, the [GitHub Actions workflow](.github/workflows/deploy.yml) triggers, builds the site (`npm ci && npm run build`), and publishes the resulting `dist/` folder directly to **GitHub Pages**.

---

## 🎨 Credits & Icon Attributions

The icons used in the contact section are provided by [Flaticon](https://www.flaticon.com/):
- **E-Mail icon** created by [Magnific](https://www.flaticon.com/free-icon/email_552486) - Flaticon
- **LinkedIn icon** created by [Creartive](https://www.flaticon.com/fr/icone-gratuite/logo-linkedin_4096186) - Flaticon

---

## 🤖 Note

> **Note:** An AI assistant was used to help writing and structure this README documentation.
