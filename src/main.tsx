import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { About } from "./components/about";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { Main } from "./components/main";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <Header />
        <Main>
          <About />
          <App />
        </Main>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
