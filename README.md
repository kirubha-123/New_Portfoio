# Professional Full-Stack Portfolio

A high-performance, modern portfolio website built with **React** (Frontend) and **Node.js/Express** (Backend). Features glassmorphism design, smooth animations, and a responsive layout.

## 🚀 Features

- **Modern UI**: Stylish glassmorphism design using vanilla CSS.
- **Dynamic Content**: Portfolio projects are fetched from a JSON API.
- **Contact Form**: Functional contact form with backend integration.
- **Animations**: Fluid transitions and micro-interactions powered by Framer Motion.
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices.
- **SEO Ready**: Semantic HTML and optimized structure for search engines.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Vanilla CSS** (Custom Design System)

### Backend
- **Node.js**
- **Express**
- **Cors & Dotenv** (Middleware)
- **Nodemon** (Development Server)

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for the root, client, and server:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

### Running the Application

To start both the client and server concurrently:
```bash
npm run dev
```

The application will be available at:
- Frontend: [http://localhost:5173/](http://localhost:5173/)
- Backend API: [http://localhost:5000/api/projects](http://localhost:5000/api/projects)

## 📁 Project Structure

```
antigravity/
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── assets/     # Images and fonts
│   │   └── App.jsx     # Main entry point
├── server/           # Node.js backend
│   ├── data/         # Mock data & models
│   └── index.js      # Server entry point
└── package.json      # Root configuration
```

## 📄 License
MIT License - Created by Antigravity AI.
