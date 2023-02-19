import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { About } from "./components/about";
import { Card } from "./components/card";
import { Grid } from "./components/grid";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { Main } from "./components/main";
import "./index.css";

function getData(heading: Heading) {
  switch (heading) {
    case Heading.LANGUAGES:
      return [Language.JAVASCRIPT, Language.GO, Language.JAVA];
    case Heading.TOOLS:
      return [Tools.GIT, Tools.JIRA, Tools.CCP, Tools.AGILE, Tools.DEV_OPS];
    case Heading.DATABASES:
      return [Database.MONGO, Database.POSTGRES, Database.INFLUX];
    case Heading.OS:
      return [OS.MAC, OS.WINDOWS, OS.LINUX];
    default:
      throw Error();
  }
}

enum Heading {
  LANGUAGES = "Languages",
  TOOLS = "Tools",
  DATABASES = "Databases",
  OS = "OS",
}

enum Language {
  JAVASCRIPT = "JavaScript/TypeScript",
  GO = "Go",
  JAVA = "Java",
}

enum Tools {
  GIT = "Git",
  JIRA = "JIRA",
  CCP = "GCP, AWS",
  AGILE = "Agile Methodologies",
  DEV_OPS = "Kubernetes, Docker",
}

enum Database {
  MONGO = "MongoDB",
  POSTGRES = "Postgres",
  INFLUX = "InfluxDB",
}

enum OS {
  MAC = "MacOS",
  WINDOWS = "Windows",
  LINUX = "Linux",
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Layout>
        <Header />
        <Main>
          <About />
          <Grid>
            <Card heading={Heading.LANGUAGES} data={getData(Heading.LANGUAGES)} />
            <Card heading={Heading.TOOLS} data={getData(Heading.TOOLS)} />
            <Card heading={Heading.DATABASES} data={getData(Heading.DATABASES)} />
            <Card heading={Heading.OS} data={getData(Heading.OS)} />
          </Grid>
          <App />
        </Main>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
