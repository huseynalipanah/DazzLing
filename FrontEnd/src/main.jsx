import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import SearchProvider from "./Context/searchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <SearchProvider>
      <App />
      </SearchProvider>

    </HelmetProvider>
  </React.StrictMode>
);
