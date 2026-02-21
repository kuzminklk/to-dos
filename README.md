# 8-BIT TO-DO LIST 🎮

A retro-inspired, pixel-perfect task management application with dark/light theme support. Built with TypeScript and Vite, featuring authentic 8-bit/16-bit gaming aesthetics.

## ✨ Features

- **Add, Complete & Delete Tasks** - Manage your to-do list with ease
- **Dark/Light Theme Toggle** - Switch between bright arcade and retro CRT aesthetics
- **Local Storage Persistence** - Your tasks are automatically saved to your browser
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Retro Pixel Style** - Authentic 8-bit/16-bit gaming console aesthetic
- **Smooth Animations** - Interactive button effects with press animations

## 🎨 Style & Design

This project features a **retro 8-bit arcade aesthetic** inspired by classic gaming consoles:

### **Light Theme** ☀️
- Bright yellow (#FFFF00) primary accent
- Cyan (#00FFFF) secondary buttons
- Black pixel borders creating blocky, chunky UI
- Clean, bright arcade game cabinet look

### **Dark Theme** 🌙
- Bright green (#00FF00) text on dark background
- Authentic CRT monitor retro computer feel
- Cyan and magenta accents
- Perfect for late-night gaming sessions

### **Typography**
- **Font:** Press Start 2P - Authentic pixel-perfect 8-bit typeface
- Bold, chunky letters maintaining the retro gaming vibe

### **UI Elements**
- Pixelated blocky borders (3px solid)
- Shadow effects simulating depth
- Interactive "press" animations on buttons
- Checkbox elements with retro styling

## 🛠️ Technologies

### **Frontend**
- **TypeScript** - Static type safety and better developer experience
- **Vite** - Lightning-fast build tool and development server
- **CSS3** - Modern styling with CSS variables for theming
- **HTML5** - Semantic markup with accessibility

### **Architecture**
- **Model-Template Pattern** - Clean separation of concerns
- **Local Storage API** - Client-side data persistence
- **CSS Custom Properties** - Dynamic theme switching without JavaScript complexity

### **Development Tools**
- **Node.js & npm** - Package management
- **TypeScript Compiler** - Type checking and transpilation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/kuzminklk/to-dos.git
cd to-dos
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5174/` (or the next available port if 5174 is in use).

### Available Commands

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Compile TypeScript and bundle for production
- **`npm run preview`** - Preview the production build locally

## 📁 Project Structure

```
src/
├── main.ts                 # Application entry point & event handling
├── css/
│   └── style.css          # Styles with theme variables & responsive design
├── model/
│   ├── Task.ts            # Task model with interface
│   └── TasksList.ts       # TasksList model with storage management
└── templates/
    └── TasksListTemplate.ts  # Template for rendering tasks to DOM

index.html                  # HTML entry point with semantic structure
favicon.svg                 # Retro checkbox-themed favicon
```

## 🔄 Development Process

### Architecture & Design Patterns

#### **Model-Template Separation**
- **Models** (`Task.ts`, `TasksList.ts`) - Handle business logic and data
  - `Task` - Single task representation with id, title, and completion status
  - `TasksList` - Collection manager with localStorage persistence
- **Templates** (`TasksListTemplate.ts`) - Handle DOM rendering
  - Converts model data into interactive HTML elements
  - Attaches event listeners for user interactions

#### **Theme Management**
- CSS variables defined at `:root` for light theme
- Dark theme overrides in `html.dark-theme` selector
- localStorage persistence of user preference
- System preference detection with `prefers-color-scheme`

#### **Event Flow**
1. User input → Event listener triggered
2. Event handler → Updates model
3. Model.save() → Syncs to localStorage
4. Template.render() → Re-renders from updated model
5. DOM updated → Visual feedback to user

### Key Features Implementation

**Task Addition:**
- Form submission → Input validation → New Task creation → Model.addTask() → Template re-render

**Task Completion:**
- Checkbox change → Toggle task.done → Model.save() → CSS strikethrough styling

**Task Deletion:**
- Delete button click → Model.removeTask() → Template re-render

**Theme Toggle:**
- Button click → Toggle CSS class on `<html>` → CSS variables switch automatically

### Code Quality

- **TypeScript** strict type checking ensures reliability
- **JSDoc comments** document functions and parameters
- **Semantic HTML** with ARIA labels for accessibility
- **Responsive design** with mobile-first approach

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎮 Gameplay Tips

- **Theme Toggle** - Use the button in the header to switch between themes
- **Quick Add** - Press Enter to quickly add tasks
- **Dark Mode** - Perfect for development sessions late at night
- **Mobile Friendly** - Use on your phone or tablet seamlessly

## 📝 License

Open source and free to use and modify.

## 🙏 Acknowledgments

- Inspired by Dave Gray's TypeScript tutorials
- Press Start 2P font for authentic retro styling
- Classic 8-bit and 16-bit gaming aesthetics

---

**Built with ❤️ and a love for retro gaming** 🕹️✨
