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

const section = new SectionComponent(header.element, "list", "section");
section.render();

const cardList = new Component(section.element, "series", "ul");
cardList.render();

const cardListItem = new CardComponent(cardList.element, "serie", "li");
cardListItem.render();

const sectionPendingSeries = new SectionComponent(
  header.element,
  "list",
  "section",
  false
);
sectionPendingSeries.render();
const sectionWatchedSeries = new SectionComponent(
  header.element,
  "list",
  "section",
  true
);
sectionWatchedSeries.render();
