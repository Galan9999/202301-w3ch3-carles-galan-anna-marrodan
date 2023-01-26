import { Component } from "../Component";

export class SectionComponent extends Component {
  isWatched: boolean;
  constructor(
    parentElement: Element,
    className: string,
    tagName: string,
    isWatched: boolean
  ) {
    super(parentElement, className, tagName);
    this.isWatched = isWatched;
  }

  render() {
    super.render();
    this.element.innerHTML = `<h3 class="list__title">${
      this.isWatched ? `Watched series` : `Pending series`
    }</h3>
        <span class="list__info">${
          this.isWatched
            ? `You have watched 4 series`
            : `You have 4 series pending to watch`
        }</span>`;
  }
}
