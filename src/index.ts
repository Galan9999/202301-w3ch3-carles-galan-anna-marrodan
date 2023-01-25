import { Header } from "./components/HeaderComponent/Header";

const container = document.querySelector(".container")!;
const headerTitle = "My Series";
const header = new Header(container, headerTitle, "main-container");
