import { ChakraProvider, Text } from "@chakra-ui/react";
import theme from "./theme";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  AiOutlineCluster,
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineMessage,
} from "react-icons/ai";
import App from "./App";
import { About } from "./components/about";
import { Card } from "./components/card";
import { Grid } from "./components/grid";
import { Header } from "./components/header";
import { Layout } from "./components/layout";
import { Main } from "./components/main";
import { Project } from "./components/project";
import { Section } from "./components/section";
import "./index.css";

import songBookImg from "../src/assets/songbook.png";
import { Cta } from "./components/cta";

function getData(heading: Heading) {
  switch (heading) {
    case Heading.LANGUAGES:
      return [Language.JAVASCRIPT, Language.GO];
    case Heading.TOOLS:
      return [
        Tools.GIT,
        Tools.JIRA,
        Tools.CI_CD,
        Tools.CCP,
        Tools.GRAFANA,
        Tools.AGILE,
        Tools.DEV_OPS,
      ];
    case Heading.DATABASES:
      return [Database.MONGO, Database.POSTGRES, Database.INFLUX];
    case Heading.OS:
      return [OS.MAC, OS.WINDOWS, OS.LINUX];
    default:
      throw Error(`Invalid arg: ${heading}`);
  }
}

enum Heading {
  LANGUAGES = "Languages",
  TOOLS = "Tools",
  DATABASES = "Databases",
  OS = "OS",
}

enum SectionHeading {
  PROJECTS = "Projects",
  CTA = "Interested in chatting?",
}

enum ProjectHeading {
  SONGBOOK = "Songbook",
  AWA_MONITORING = "awa-monitoring",
}

enum Language {
  JAVASCRIPT = "JavaScript / TypeScript",
  GO = "Go",
}

enum Tools {
  GIT = "Git",
  JIRA = "JIRA",
  CCP = "GCP",
  CI_CD = "CI / CD",
  AGILE = "Agile Methodologies",
  GRAFANA = "Grafana",
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
    <ChakraProvider theme={theme}>
      <Layout>
        <Header />
        <Main>
          <About />
          <Grid>
            <Card
              heading={Heading.LANGUAGES}
              data={getData(Heading.LANGUAGES)}
              icon={AiOutlineMessage}
            />
            <Card
              heading={Heading.TOOLS}
              data={getData(Heading.TOOLS)}
              icon={AiOutlineCluster}
            />
            <Card
              heading={Heading.DATABASES}
              data={getData(Heading.DATABASES)}
              icon={AiOutlineDatabase}
            />
            <Card
              heading={Heading.OS}
              data={getData(Heading.OS)}
              icon={AiOutlineCode}
            />
          </Grid>
          <Section
            heading={SectionHeading.PROJECTS}
            options={{ size: "4xl", width: "initial", textAlign: "center" }}
          />
          <Project heading={ProjectHeading.SONGBOOK} img={songBookImg}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
              temporibus similique minima, ducimus architecto ipsum tempora ex,
              nam labore at. Modi ex cum quidem at eum placeat, porro velit?
            </Text>
          </Project>
          <Project
            heading={ProjectHeading.AWA_MONITORING}
            img={songBookImg}
            reverse={true}
          >
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde
              temporibus similique minima, ducimus architecto ipsum tempora ex,
              nam labore at. Modi ex cum quidem at eum placeat, porro velit?
            </Text>
          </Project>
          <Section
            heading={SectionHeading.CTA}
            options={{ size: "4xl", width: "initial", textAlign: "center" }}
          />
          <Cta text={"Let's talk!"} />
          {/* <App /> */}
        </Main>
      </Layout>
    </ChakraProvider>
  </React.StrictMode>
);
