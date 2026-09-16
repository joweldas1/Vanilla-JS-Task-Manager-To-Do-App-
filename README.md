# Vanilla JS Task Manager (To-Do App)

**Developer Note (September 2026):** 
While my primary professional focus is architecting scalable WordPress/WooCommerce solutions and complex React applications, I built this zero-framework project to demonstrate core Vanilla JavaScript fundamentals. This project showcases raw DOM manipulation, manual state management, and `localStorage` persistence without relying on external state libraries or frameworks.

## Overview
A high-performance, dark-themed Task Management application built entirely with Vanilla JavaScript (ES6+), HTML5, and CSS3. The application focuses on a clean user experience (UX) and robust internal state management.

## Core Features
* **Persistent Storage:** Tasks are automatically saved to the browser's `localStorage`, ensuring data persists across page reloads.
* **State Filtering:** Built-in logic to filter views between 'All', 'Active', and 'Completed' tasks dynamically.
* **XSS Prevention:** Input sanitation (`escapeHtml`) is implemented to prevent Cross-Site Scripting vulnerabilities when rendering user input.
* **Modern UI/UX:** A sleek, responsive dark mode interface utilizing CSS Flexbox, custom scrollbars, and smooth transitions.

## Tech Stack
* **HTML5:** Semantic structure.
* **CSS3:** Custom properties, Flexbox layout, hover states, and smooth transitions.
* **JavaScript (ES6+):** Pure DOM manipulation, array methods (`map`, `filter`, `forEach`), event delegation, and JSON parsing.

## Technical Highlights
The codebase was structured to mimic modern state-driven architecture without using a framework:
1. **Single Source of Truth:** The `tasks` array acts as the central state. All UI updates trigger a unified `renderTasks()` function, preventing DOM desync.
2. **Immutable Updates:** Operations like toggling or deleting tasks use array methods that return new arrays (e.g., `.map()` and `.filter()`), adhering to best practices for state mutation.
3. **Security First:** Raw user inputs are sanitized before being injected into the DOM via `innerHTML` to prevent script injections.

## How to Run (Local Setup)
1. Clone this repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. No build tools (Webpack, Vite, etc.) or `npm install` required.

---
*Built by [Jowel Das](https://joweldas.vercel.app/) - CMS & Web Developer.*