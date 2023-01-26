import { Component } from "../components/Components/Component";

export class MainComponent extends Component {
  render() {
    super.render();

    this.element.innerHTML = ` <h2 class="main-content__title">Series list</h2>`;
  }
}
