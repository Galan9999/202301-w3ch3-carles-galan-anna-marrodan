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
        />
        <h4 class="serie__title">${serie.name}</h4>
            <span class="serie__info">${serie.creator} (${serie.year})</span>
            <ul class="score">
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>
            </ul>`
      )
      .join("")}`;
  }
}
