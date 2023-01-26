import { Component } from "../Component";

export class HeaderComponent extends Component {
  render() {
    super.render();

    this.element.innerHTML = `<header class="main-header"><h1 class="main-title">My Series</h1>
    </header>`;
  }
}
