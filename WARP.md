# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **React TypeScript manifesto website** built with modern web technologies. The project appears to be for "The Chennai Compute Company" and serves as a company manifesto/landing page with elegant serif typography and smooth animations.

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI**: shadcn/ui components + Radix UI primitives  
- **Styling**: Tailwind CSS with custom theme
- **Package Manager**: npm (with bun.lock also present)
- **Development**: Vite dev server with SWC for fast compilation

## Development Commands

### Core Development
```bash
# Install dependencies
npm install

# Start development server (runs on localhost:3000)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Server
- **Port**: 3000 (configured in vite.config.ts)
- **Host**: "::" (IPv6, allows external connections)

## Architecture & Structure

### Application Architecture
This is a **Single Page Application (SPA)** with:
- **React Router** for client-side routing (currently minimal: Index + NotFound)
- **React Query** for state management and data fetching
- **Component-based architecture** with shadcn/ui design system

### Key Components Structure
```
src/
├── App.tsx                 # Root app with providers
├── main.tsx               # Entry point with error reporting
├── pages/
│   ├── Index.tsx          # Main page (manifesto content)
│   └── NotFound.tsx       # 404 page
├── components/
│   ├── ManifestoHero.tsx     # Hero section with logo/title
│   ├── ManifestoContent.tsx  # Main manifesto text content
│   ├── ManifestoFooter.tsx   # Footer section
│   └── ui/                   # shadcn/ui components
└── visual-edits/             # Special Lovable integration
```

### Visual Editing Integration
This project includes **Lovable visual editing capabilities** via:
- `src/visual-edits/VisualEditsMessenger.tsx` - Complex visual editing system
- `component-tagger-plugin.js` - Vite plugin for tagging components
- Elements have `data-orchids-id` attributes for visual editing

### Styling & Theme

#### Tailwind Configuration
- **Custom font families**: `font-serif` (Instrument Serif), `font-sans` (Inter)
- **Custom color palette**: manifesto-* colors (hero, accent, glow, text, muted)
- **Design system**: shadcn/ui with slate base color and CSS variables

#### Key Design Features
- Serif typography focus (Instrument Serif font)
- Custom manifesto color scheme
- Responsive design with container-based layouts
- CSS animations (accordion, pulse effects)

## Development Patterns

### Component Development
- Use **function components** with TypeScript
- Follow shadcn/ui patterns for consistent styling
- Components are in `src/components/` with clear naming (ManifestoX.tsx)
- UI primitives in `src/components/ui/`

### Import Aliases
```typescript
import Component from "@/components/Component"  // src/components/
import { Button } from "@/components/ui/button" // shadcn/ui components
```

### Error Handling
The app includes comprehensive **error reporting**:
- Runtime error capture in `main.tsx`
- Vite overlay error logging in `vite.config.ts`
- Errors are sent to parent iframe (Lovable integration)

### TypeScript Configuration
- **Relaxed settings**: `noImplicitAny: false`, `strictNullChecks: false`
- **Project references**: Separate configs for app and node
- **Skip lib checks** enabled for faster compilation

## Adding New Components

1. **shadcn/ui components**: Use the CLI to add pre-built components
   ```bash
   npx shadcn-ui@latest add [component-name]
   ```

2. **Custom components**: Create in `src/components/` following existing patterns
   - Use TypeScript interfaces for props
   - Apply Tailwind classes with custom theme colors
   - Include proper data attributes for visual editing if needed

## Content Management

### Manifesto Content
The main content is in `ManifestoContent.tsx` with:
- Structured text sections
- Custom border styling (`border-l-4 border-manifesto-accent`)
- Typography classes optimized for serif fonts

### Assets
- **Logo/Images**: Uses Supabase storage URLs for hosted images
- **Public assets**: Standard `/public` directory for static files

## Build & Deployment

### Build Outputs
- **Production**: `npm run build` - optimized for deployment
- **Development build**: `npm run build:dev` - with source maps and debugging

### Vite Configuration
- **SWC**: Fast compilation with `@vitejs/plugin-react-swc`
- **Path resolution**: `@/` alias configured for clean imports
- **Development plugins**: Error logging and component tagging

## Project-Specific Notes

- This is a **Lovable.dev project** (see README.md URL and visual editing system)
- Uses **serif typography** as a core design element
- **Chennai Compute Company** branding throughout
- Visual editing capabilities mean components may have special data attributes
- Error reporting is designed to work within Lovable's iframe environment

## Troubleshooting

### Common Issues
1. **TypeScript errors**: Check `tsconfig.json` - many strict checks are disabled
2. **Styling issues**: Verify Tailwind custom theme colors in `tailwind.config.ts`
3. **Component imports**: Use `@/` aliases consistently
4. **Visual editing**: Components need proper `data-orchids-id` attributes for editing

### Development Environment
- **Node.js required**: Standard React/Vite requirements
- **Package manager**: Prefers npm (package-lock.json present)
- **Fonts**: Custom fonts loaded via Tailwind/CSS, some via Google Fonts API