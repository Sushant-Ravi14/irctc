# IRCTC - Modern Indian Railways Portal Clone

A comprehensive React-based modernization of the **IRCTC (Indian Railway Catering and Tourism Corporation)** website. This project offers a high-performance, responsive, and visually stunning interface for managing rail travel needs, including train tracking, PNR enquiries, and specialized booking services.

## 🚀 Core Features

- **PNR Enquiry**: Quick and easy access to passenger name record status.
- **Live Train Status**: Real-time tracking of train positions and delays.
- **Integrated Booking**: specialized portals for FTR booking, Pets booking, and Wheelchair assistance.
- **E-Catering & EPantry**: Simplified food ordering directly to your seat.
- **User Management**: Modern login and registration system with secure profile management.
- **Financial Services**: IRCTC iPay integration, E-Wallet guides, and Loyalty card (SBI/BOB) comparisons.
- **"Ask Disha" AI**: Interactive floating chatbot for user assistance.
- **Multi-Language Support**: Complete internationalization (i18n) for Hindi/English and more.
- **Dynamic UI**: Features a sleek dark mode, glassy bento-grid layouts, and responsive components.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/) (v8)
- **Routing**: [React Router Dom](https://reactrouter.com/) (v7)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Tailored modern UI with CSS variables)
- **State Management**: React Context API (for i18n and global settings)

## 📁 Folder Structure

```text
irctc-01/
├── src/
│   ├── components/       # Reusable UI elements (Navbar, Modals, Hero, etc.)
│   ├── pages/            # Core application views (PNR, Alerts, Tracking, etc.)
│   ├── context/          # State management (Language, etc.)
│   ├── i18n/             # Translation files for multi-language support
│   ├── assets/           # Static images and media
│   ├── App.jsx           # Main router and app layout logic
│   ├── index.css         # Global styles and modern UI tokens
│   └── main.jsx          # Project entry point
├── public/               # Public static assets
└── package.json          # Project metadata and dependencies
```

## ⚙️ Steps to Run Locally

1. **Clone the project**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd irctc/irctc-01
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173` (or the port specified by Vite).