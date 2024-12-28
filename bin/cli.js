#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const fse = require("fs-extra");

const appName = process.argv[2];

if (!appName) {
  console.error("Please provide a project name: npm set-react-app my-app");
  process.exit(1);
}

const appPath = path.join(process.cwd(), appName);
const templatePath = path.join(__dirname, "../template");

// Step 1: Create the project folder
try {
  if (fs.existsSync(appPath)) {
    console.error(`Folder "${appName}" already exists. Choose a different name.`);
    process.exit(1);
  }
  fs.mkdirSync(appPath);
} catch (err) {
  console.error(`Error creating project folder: ${err.message}`);
  process.exit(1);
}

// Step 2: Copy template files to the new project folder
try {
  fse.copySync(templatePath, appPath, { overwrite: true });
  console.log("Template files copied successfully.");
} catch (err) {
  console.error(`Error copying template files: ${err.message}`);
  process.exit(1);
}

// Step 3: Update the `name` field in `package.json`
try {
  const packageJsonPath = path.join(appPath, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  packageJson.name = appName; // Update the name field
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
  console.log(`Updated package.json with project name: ${appName}`);
} catch (err) {
  console.error(`Error updating package.json: ${err.message}`);
  process.exit(1);
}

// Step 4: Install dependencies
try {
  console.log("Creating a new React app.");
  console.log("\nInstalling packages. This might take a couple of minutes.");
  console.log("Installing react, react-dom, vite and more...");
  execSync(`cd "${appPath}" && npm install`, { stdio: "inherit" });
  console.log("Dependencies installed successfully.");
} catch (err) {
  console.error(`Error installing dependencies: ${err.message}`);
  process.exit(1);
}

console.log(`Your React app is ready!`);

console.log(`\nHere are some important commands:`);
console.log(`npm start: Starts the development server.`);
console.log(`npm run build: Builds the project for production, optimizing the output for deployment.`);
console.log(`npm preview: Starts a local server to preview the production build.`);

console.log(`\nNext steps:`);
console.log(`cd ${appName}`);
console.log(`npm start`);

console.log(`\nHappy hacking!`);
