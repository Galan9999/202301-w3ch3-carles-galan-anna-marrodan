import { Component } from "./components/Components/Component";
import { PageComponent } from "./components/Components/PageComponent/PageComponent";
import { Header } from "./components/HeaderComponent/Header";

const container = document.body;

const header = new PageComponent(container, "container", "div");
header.render();

// // Const headerTitle = "My Series";
// // const header = new Header(container, headerTitle, "main-container");

// const mainContainer = new Component(container, "main-content", "main");
// mainContainer.render();

// const mainContent = document.querySelector(".main-content")!;

// const headerMain = new Component(
//   mainContainer.element,
//   "main-content__title",
//   "h2"
// );
// headerMain.render();
