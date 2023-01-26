import { Component } from "../Component";

export class SectionComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `<h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>`;
  }
}
