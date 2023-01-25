export class Header {
  private readonly element: Element;
  private readonly title: string;

  constructor(parentElement: Element, title: string) {
    this.element = document.createElement("header");
    parentElement.appendChild(this.element);
    this.title = title;
    this.render();
  }

  private render() {
    this.element.innerHTML = `<h1 class="main-title">${this.title}</h1>`;
  }
}
