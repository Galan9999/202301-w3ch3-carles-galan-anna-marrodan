import { HeaderComponent } from "./components/Components/HeaderComponent/HeaderComponent";
import { MainComponent } from "./MainComponent/MainComponent";
import { SectionComponent } from "./components/Components/SectionComponent/SectionComponent";
import { CardComponent } from "./components/Components/CardComponent/CardComponent";
import { Component } from "./components/Components/Component";
const { body } = document;

const header = new HeaderComponent(body, "container", "div");
header.render();

const mainContent = new MainComponent(header.element, "main-content", "main");
mainContent.render();

const sectionPendingSeries = new SectionComponent(
  header.element,
  "list",
  "section",
  false
);
sectionPendingSeries.render();

const cardListItem = new CardComponent(
  sectionPendingSeries.element,
  "serie",
  "ul"
);
cardListItem.render();

const sectionWatchedSeries = new SectionComponent(
  header.element,
  "list",
  "section",
  true
);
sectionWatchedSeries.render();
