import { type ComponentStructure } from "../types";

export class Component implements ComponentStructure {
  element: Element;
  parentElement: Element;

  constructor(parentElement: Element, className: string, tagName: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  public render() {
    this.parentElement.appendChild(this.element);
  }
}
