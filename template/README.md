# React App

A React project built with [Vite](https://vite.dev/).

## Getting Started

You need Node.js 22.22.2 or later in the 22.x line, 24.15.0 or later in the 24.x line, or Node.js 26 or newer.

```bash
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start` or `npm run dev`: starts the development server.
- `npm run build`: builds the app for production into the `dist` folder.
- `npm run preview`: serves the production build locally.
- `npm test`: runs the tests once.

## Project Structure

```
.
├── public/               # Files served as they are (favicon, icons, manifest)
├── src/
│   ├── index.jsx         # Entry point that renders App
│   ├── index.css         # Global styles
│   ├── App.css           # Styles for App
│   └── App.jsx           # Main App component
├── index.html            # HTML page that loads src/index.jsx
├── package.json
└── vite.config.js        # Vite configuration
```

Components in `src/` can use either the `.js` or the `.jsx` extension.

## Dependencies

- **react** and **react-dom**: build the user interface.
- **web-vitals**: measures page performance.

Development dependencies:

- **vite** and **@vitejs/plugin-react**: run the development server and build the app.
- **vitest** and **jsdom**: run the tests.
- **@testing-library/react**, **@testing-library/dom**, **@testing-library/jest-dom** and **@testing-library/user-event**: help test components.

See `package.json` for the exact versions.

## Contributing

1. Create a new branch: `git checkout -b my-feature`
2. Commit your changes: `git commit -m "Add my feature"`
3. Push the branch: `git push origin my-feature`
4. Open a pull request.

## License

Add a license for this project here, and put its full text in a `LICENSE` file.
