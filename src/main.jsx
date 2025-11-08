import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS CSS globally
import AOS from "aos"; // Import AOS JavaScript library
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { HttpLink } from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${import.meta.env.VITE_BACKEND_URL}/graphql`,
  }),
});

// Initialize AOS when the app starts
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true, // Animate only once
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ErrorBoundary>
          <ApolloProvider client={client}>
            {/* <App /> */}
          </ApolloProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
