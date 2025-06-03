# GifsApp

GifsApp is an Angular application that displays trending GIFs and allows users to search for GIFs using the Giphy API. The app features a modern UI with Tailwind CSS, search history, and a responsive layout.

## Features

- View trending GIFs from Giphy
- Search for GIFs by name, description, or tag
- View search history and revisit previous searches
- Responsive design using Tailwind CSS
- Modern Angular 19+ standalone components and signals


## Getting Started

### Installation

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd gifs-app
   ```

2. **Generate environment files**
    ```sh
    ng generate environments
    ```
    Copy the variables from .env.template into the generated environment files (environment.ts and environment.development.ts) and fill in the required values (e.g., apiKey, companyName, etc.).

3. **Install dependencies**
    ```sh
    npm install
    ```

4. **Start the development server**
    ```sh
    ng serve
    ```
    The app will be available at http://localhost:4200/.

## Project Structure
- app - Main application source code
  - gifs/ - GIF-related components, pages, services, and interfaces
  - shared/ - Shared services (e.g., scroll state)
  - environments/ - Environment configuration files
- public - Static assets (e.g., favicon)
- .env.template - Template for environment variables
