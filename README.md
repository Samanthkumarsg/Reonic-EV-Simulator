# Reonic EV Simulator

This is a frontend project simulating electric vehicle (EV) charging scenarios for shop parking spaces. The interface allows users to input parameters for a simulation and visualize precomputed outputs using static data. The project is built with **React**, **TypeScript**, and **Tailwind CSS**, hosted on **Vercel**.

## Live Demo

You can view the live demo of the project at the following link:

[Reonic EV Simulator](https://reonic-ev-simulator.vercel.app/)

## About the Developer
Hi! I'm **Samanth Kumar**, a passionate frontend developer with 4 years of experience working on modern frameworks like React, Next.js, and Tailwind CSS. 

### My Approach
To ensure a seamless development experience, I followed a design system approach. I began by defining consistent styles and components that align with Tailwind CSS's utility-first framework. This allowed me to create reusable UI elements while maintaining flexibility for customization. I consciously avoided using external UI libraries to keep the project lightweight and focused on core principles.

I broke the problem into smaller tasks, starting with the input forms and ensuring they were dynamic and responsive. The outputs were designed to provide clear insights into the EV charging patterns using charts and visual elements to make data interpretation straightforward.

This project was built entirely from scratch, leveraging modular components and a well-defined folder structure for maintainability and scalability.

## Features

### Inputs
- **Number of Chargepoints**: Allows configuration of how many EV charging points are available.
- **Arrival Probability Multiplier**: Adjusts the probability of cars arriving to charge (20%-200%, default: 100%).
- **Energy Consumption per Vehicle**: Defines the average energy consumption of vehicles (default: 18 kWh).
- **Charging Power per Chargepoint**: Sets the charging power for each chargepoint (default: 11 kW).

### Outputs
- **Charging Values (kW)**: Displays the power usage per chargepoint over a specified period.
- **Exemplary Day**: Showcases a sample day of charging activity.
- **Total Energy Charged (kWh)**: Visualizes the total energy usage.
- **Charging Events**:
  - Events per year, month, week, or day.
  - Bar charts for aggregated data (e.g., max power demand, total energy).

### Bonus
- Added UI for creating different types of chargepoints (e.g., 5x11kW, 3x22kW, 1x50kW).

## Tech Stack
- **React**: UI library for building components.
- **TypeScript**: Ensures type safety.
- **Tailwind CSS**: Utility-first framework for responsive styling.
- **Vite**: Fast build tool for modern web applications.
- **Vercel**: Hosting platform for deployment.

- 

## Screenshots

![Screenshot](https://github.com/Samanthkumarsg/Reonic-EV-Simulator/blob/main/public/screenshots/1.png)
![Screenshot](https://github.com/Samanthkumarsg/Reonic-EV-Simulator/blob/main/public/screenshots/2.png)
![Screenshot](https://github.com/Samanthkumarsg/Reonic-EV-Simulator/blob/main/public/screenshots/3.png)
![Screenshot](https://github.com/Samanthkumarsg/Reonic-EV-Simulator/blob/main/public/screenshots/4.png)
![Screenshot](https://github.com/Samanthkumarsg/Reonic-EV-Simulator/blob/main/public/screenshots/5.png)
![Screenshot](https://github.com/Samanthkumarsg/Reonic-EV-Simulator/blob/main/public/screenshots/6.png)


## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher) or Yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Samanthkumarsg/Reonic-EV-Simulator.git
   cd Reonic-EV-Simulator
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

### Building for Production
1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Serve the build locally:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

If you have any questions or need clarification, feel free to reach out @ samanthkumarsg@gmail.com
