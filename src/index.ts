import { PageComponent } from "./components/Components/PageComponent/PageComponent";

const container = document.body;

const header = new PageComponent(container, "container", "div");
header.render();
