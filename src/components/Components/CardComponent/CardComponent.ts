import { series } from "../../../series";
import { Component } from "../Component";

export class CardComponent extends Component {
  render() {
    super.render();
    this.element.innerHTML = `${series
      .map(
        (serie) =>
          `<img
          class="serie__poster"
          src="${serie.poster}"
          alt="${serie.name} poster"
        />`
      )
      .join("")}`;
  }
}
