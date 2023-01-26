import { HeaderComponent } from "./components/Components/HeaderComponent/HeaderComponent";
import { MainComponent } from "./MainComponent/MainComponent";
import { SectionComponent } from "./components/Components/SectionComponent/SectionComponent";

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
const sectionWatchedSeries = new SectionComponent(
  header.element,
  "list",
  "section",
  true
);
sectionWatchedSeries.render();
