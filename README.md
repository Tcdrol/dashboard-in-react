# React Dashboard

A modern, responsive admin dashboard built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive interface for managing users, products, calendar events, and system settings with a clean, accessible UI that works across all device sizes.

## Features

- 📊 Interactive Dashboard with key metrics
- 📅 Calendar with event management
- 👥 User management
- 🛍️ Product catalog
- 💬 Messaging system
- ⚙️ Settings and preferences
- 🌓 Light/Dark mode
- 📱 Fully responsive design

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Modules
- **State Management**: React Context API
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Data Fetching**: Axios
- **Date Handling**: date-fns
- **UI Components**: Custom components with Radix UI primitives
- **Build Tool**: Vite
- **Linting/Formatting**: ESLint + Prettier

## Project Structure

```
src/
├── assets/            # Static assets (images, icons, etc.)
├── components/        # Reusable UI components
│   ├── common/       # Common components (buttons, inputs, etc.)
│   ├── layout/       # Layout components (header, sidebar, etc.)
│   └── ui/           # UI-specific components
├── config/           # Application configuration
├── contexts/         # React contexts
├── hooks/            # Custom React hooks
├── layouts/          # Page layout components
├── lib/              # Utility functions and helpers
├── pages/            # Page components
├── services/         # API services
├── styles/           # Global styles and themes
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/dashboard.git
   cd dashboard/dash
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run tests
- `lint` - Run ESLint
- `format` - Format code with Prettier

## API Integration

The application connects to a backend API. Make sure the API server is running and properly configured.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=http://localhost:3000/api
# Add other environment variables as needed
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

---

Made with ❤️ by [Your Name]
