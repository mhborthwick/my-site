import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <Header />
        <App />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
