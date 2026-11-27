
# Set React App

**Author:** [Shubham Sarda](https://www.linkedin.com/in/shubhamsarda/) / [@shubham_ul](https://x.com/shubham_ul)  

---

## Overview

Set React App is a lightweight, opinionated setup for building modern React applications. Inspired by Create React App, it leverages [Vite](https://vitejs.dev/) for blazing-fast bundling, hot module replacement, and a streamlined developer experience. This template provides common tooling and sensible defaults to get you up and running quickly.

---

## Features

- **Vite-Powered**: Enjoy fast bundling, instant dev server start, and on-demand file serving.  
- **Latest React & React DOM**: Includes React and React DOM 19.x for modern React development.
- **Testing**: Pre-configured with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest DOM](https://github.com/testing-library/jest-dom) with [Vitest](https://vitest.dev/) for unit and integration tests.
- **Simple Scripts**: A minimal set of npm scripts for development, production builds, previews, and tests.
- **Web Vitals**: Measures performance for React apps, integrated out of the box.  

---

## Requirements

Use Node.js 22.22.2 or later in the 22.x line, 24.15.0 or later in the 24.x line, or Node.js 26 or newer.

## Get started

Create a new project with npx.

```bash
npx set-react-app@latest project-name
cd project-name
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

Once inside your project directory, you can run:

- **`npm run start`** or **`npm run dev`**  
  Runs the app in development mode using Vite on port **3000**.  

- **`npm run build`**  
  Builds the app for production to the `dist` folder. It bundles React in production mode, optimizes builds for the best performance, and is ready for deployment.  

- **`npm run preview`**  
  Serves the production build from the `dist` folder locally. Helpful for verifying your production build before deploying.

- **`npm test`**
  Runs the test suite once with Vitest.

---

## Project Structure

```bash
.
├── public          # Public assets that are directly served
├── src             # Main source code for the application
│   ├── App.jsx     # Root App component
│   ├── index.jsx    # Entry point for React application
│   └── ...         # Other components and files
├── tests           # Test files (if separated from src)
├── package.json
├── vite.config.js  # Vite configuration
└── ...
```

Feel free to modify this structure based on your project’s needs.

---

## Dependencies

```jsonc
"dependencies": {
  "react": "^19.3.1",
  "react-dom": "^19.3.1",
  "web-vitals": "^6.2.3"
},
"devDependencies": {
  "@testing-library/dom": "^10.4.2",
  "@testing-library/jest-dom": "^8.0.0",
  "@testing-library/react": "^16.3.3",
  "@testing-library/user-event": "^14.6.13",
  "@vitejs/plugin-react": "^6.3.0",
  "jsdom": "^31.0.1",
  "vite": "^8.3.8",
  "vitest": "^5.1.1"
}
```

---

## Contributing

Contributions, suggestions, and feedback are welcome!  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature/some-new-feature`)  
3. Commit changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/some-new-feature`)  
5. Open a Pull Request  

---

## License

This project is **free to use** and distributed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Connect with Me

**Author:** [Shubham Sarda](https://www.linkedin.com/in/shubhamsarda/) / [@shubham_ul](https://x.com/shubham_ul)  

If you find this project helpful or have any questions, feel free to reach out on LinkedIn/Twitter!

**Happy Coding!**
