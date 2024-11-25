import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark', // Set the base theme to dark
        colors: {
          dark: [
            '#121212', // VS Code-like dark gray
            '#1e1e1e', // Dark gray (editor background)
            '#252526', // Slightly lighter dark gray
            '#333333', // Sidebar and panel background
            '#444444', // Accent background
            '#555555', // Muted gray
            '#666666', // Border color
            '#777777', // Less important text
            '#888888', // Slightly lighter text
            '#999999', // Borders and shadows
          ],
        },
        primaryColor: 'dark',
        fontFamily: 'Consolas, "Courier New", Courier, monospace', //VSCode font style
        headings: { fontFamily: 'Consolas, "Courier New", Courier, monospace' },
        fontSizes: {
          sm: 12,
          md: 14,
          lg: 16,
          xl: 18,
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
