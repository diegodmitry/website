# Website

## Overview

This is the source code for my personal website hosted at [https://diegodmitry.github.io/website/](https://diegodmitry.github.io/website/). The website serves as a portfolio and blog, showcasing my projects, skills, and other professional information.

## Features

- **Responsive Design**: Works well on desktop, tablet, and mobile devices.
- **Modern Technologies**: Built with React, TypeScript, and Material UI.
- **Hosted on GitHub Pages**: Automatically deployed via GitHub Actions.
- **Dynamic Theme Toggle**: Allows users to switch between light and dark themes.

## Tech Stack

- **Frontend**: React, TypeScript, Material UI
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Version Control**: Git

## Project Structure

```bash
.
├── public                 # Public assets (favicon, images, etc.)
├── src                    # Source files
│   ├── components         # Reusable components
│   ├── pages              # Pages of the website
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point of the application
├── .gitignore             # Files and directories to ignore in Git
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration
├── vite.config.js         # Vite configuration
└── yarn.lock / package-lock.json # Dependency lock file
```

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/diegodmitry/website.git
    cd website
    ```
2. **Install dependencies**:

    Using npm:
    ```bash
    npm install
    ```
3. **Run the development server**:

    ```bash
    npm run dev
    ```

## Deployment

This project is deployed using GitHub Pages. To deploy your changes:

1. **Build the project**:

    ```bash
    npm run build
    ```
2. **Deploy to GitHub Pages**:

    ```bash
    npm run deploy
    ```

## Contact

For any inquiries, feel free to reach out:

- **GitHub**: https://github.com/diegodmitry
- **LinkedIn**: https://www.linkedin.com/in/diegodmitry/