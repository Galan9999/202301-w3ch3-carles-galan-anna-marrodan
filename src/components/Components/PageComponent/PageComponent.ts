import { Component } from "../Component";

export class PageComponent extends Component {
  constructor(parentElement: Element, className: string, tagName: string) {
    super(parentElement, "container", "div");
  }

  render() {
    super.render();

    this.element.innerHTML = `<header class="main-header"><h1 class="main-title">My Series</h1>
    </header>
    <main class="main-content">
      <h2 class="main-content__title">Series list</h2>`;
  }
}
