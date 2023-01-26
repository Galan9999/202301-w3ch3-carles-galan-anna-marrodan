import { PageComponent } from "./components/Components/PageComponent/PageComponent";
import { SectionComponent } from "./components/Components/SectionComponent/SectionComponent";

const container = document.body;

const header = new PageComponent(container, "container", "div");
header.render();

const section = new SectionComponent(header.element, "list", "section");
section.render();
