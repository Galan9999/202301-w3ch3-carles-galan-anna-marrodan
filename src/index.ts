import { HeaderComponent } from "./components/Components/HeaderComponent/HeaderComponent";
import { MainComponent } from "./MainComponent/MainComponent";

const { body } = document;

const header = new HeaderComponent(body, "container", "div");
header.render();

const mainContent = new MainComponent(header.element, "main-content", "main");
mainContent.render();
