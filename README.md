# Plane History Museum - Frontend

A modern, interactive web interface for exploring historical aircraft at the Plane Museum.

## Tech Stack

- **React 19** - Latest React with improved performance and compiler
- **Vite 7** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router DOM v7** - Client-side routing
- **TanStack Query v5** - Powerful data synchronization
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon system
- **Radix UI** - Accessible component primitives
- **Sonner** - Toast notifications
- **QRCode.react** - QR code generation
- **next-themes** - Theme management

## Features

- 🛩️ Browse aircraft collection
- 🏢 Explore organizations
- 📱 Responsive design
- 🌓 Dark/light theme support
- 🔍 Detailed aircraft and organization views
- ⚡ Fast and optimized performance

## Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/haagahelia/hidb-front.git
   cd hidb-front
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Basic Structure

```
src/
├── pages/
│   ├── Index.jsx              # Home page
│   ├── Aircraft.jsx           # Aircraft listing
│   ├── AircraftDetail.jsx     # Individual aircraft details
│   ├── Organization.jsx       # Organization listing
│   ├── OrganizationDetail.jsx # Individual organization details
│   └── NotFound.jsx           # 404 page
├── components/
│   └── ui/                    # Reusable UI components
├── App.jsx                    # Main app component with routing
└── main.jsx                   # Application entry point
```

## Routes

- `/` - Home page
- `/aircraft` - Browse all aircraft
- `/aircraft/:id` - View specific aircraft details
- `/organization` - Browse all organizations
- `/organization/:id` - View specific organization details

## Development

The project uses:
- **ESLint** for code linting
- **React Compiler** (Babel plugin) for optimized builds
- **Cypress** for end-to-end testing
- **TanStack Query** for server state management

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.
