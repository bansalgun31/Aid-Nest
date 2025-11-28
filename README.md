# Aid-Nest

A modern, responsive web application built with React and Vite designed to connect volunteers with charitable causes and community support initiatives.

## Overview

Aid-Nest is a charitable organization platform that facilitates volunteer engagement, fundraising, and community awareness. The application provides a user-friendly interface for discovering causes, reading blog content, volunteering opportunities, and connecting with the organization.

## Features

- **Home Dashboard**: Central hub with featured causes and navigation
- **About Page**: Learn about Aid-Nest's mission and values
- **Causes**: Browse and explore different charitable causes
- **Volunteer Program**: Discover volunteering opportunities
- **Blogs**: Read insightful articles and updates
- **Contact**: Reach out to the organization
- **Responsive Design**: Fully responsive UI that works on all devices

## Tech Stack

### Frontend
- **React 19.1.0**: A JavaScript library for building user interfaces with component-based architecture
- **Vite 7.0.4**: Modern, fast build tool and development server
- **React Router DOM 7.7.1**: Client-side routing for navigation between pages
- **Tailwind CSS 4.1.11**: Utility-first CSS framework for styling
- **Material-UI (MUI) 7.3.0**: Pre-built React components for professional UI
- **Styled Components 6.1.19**: CSS-in-JS styling solution for component styling
- **FontAwesome 7.0.0**: Icon library for visual enhancement
- **Emotion**: CSS-in-JS library for advanced styling capabilities

### Development Tools
- **ESLint 9.30.1**: Code quality and consistency tool
- **Vite Plugins**: React plugin with Fast Refresh for hot module replacement

## Project Structure

```
Aid-Nest-main/
├── src/
│   ├── Components/
│   │   ├── App.jsx           # Main application component with routing
│   │   ├── Home.jsx          # Home page
│   │   ├── About.jsx         # About page
│   │   ├── Pages.jsx         # Pages/navigation component
│   │   ├── Blogs.jsx         # Blog listing page
│   │   ├── Causes.jsx        # Causes page
│   │   ├── Contact.jsx       # Contact page
│   │   ├── Volunteer.jsx     # Volunteer opportunities page
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Footer.jsx        # Footer component
│   │   ├── App.css           # Main styles
│   │   ├── index.css         # Global styles
│   │   └── main.jsx          # React entry point
│   └── assets/               # Static assets
├── public/
│   └── images/               # Public images
├── index.html                # HTML entry point
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Aid-Nest-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`**: Start the development server with hot module replacement
- **`npm run build`**: Build the application for production
- **`npm run preview`**: Preview the production build locally
- **`npm run lint`**: Run ESLint to check code quality

## Component Overview

### App.jsx
The main application component that sets up React Router with the following routes:
- `/` - Home page
- `/about` - About page
- `/page` - Pages navigation
- `/blogs` - Blog articles
- `/causes` - Charitable causes
- `/contact` - Contact page
- `/volunteer` - Volunteer opportunities

### Header & Footer
Reusable components for navigation and branding across all pages.

### Pages
Individual page components for each section of the application, featuring specific content and calls-to-action.

## Styling Approach

The project utilizes multiple styling solutions:
- **Tailwind CSS**: For utility-first styling and responsive design
- **Material-UI**: For pre-built, accessible UI components
- **CSS Modules** (App.css, index.css): For component-specific and global styles
- **Styled Components**: For advanced styling and theme integration
- **Emotion**: For dynamic styling capabilities

## Development Guidelines

### Code Quality
- Run `npm run lint` before committing changes to ensure code quality
- Follow React best practices and component composition patterns
- Use functional components with hooks

### Styling
- Prefer Tailwind CSS utility classes for rapid development
- Use Styled Components for complex component-specific styles
- Maintain consistency with Material-UI component usage

### Routing
- Use React Router's `useNavigate` and `useParams` hooks for dynamic routing
- Organize routes in the main `App.jsx` file

## Browser Support

The application is optimized for modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- User authentication and profiles
- Donation payment integration
- Event management system
- Volunteer application tracking
- Admin dashboard
- Backend API integration

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

