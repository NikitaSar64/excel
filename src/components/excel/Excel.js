import { $ } from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.nodeElem = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const root = $.createDomElem("div", "excel");

    this.components = this.components.map((Component) => {
      const componentWrapper = $.createDomElem("div", Component.className);
      const component = new Component(componentWrapper);
      componentWrapper.html(component.toHTML());
      root.append(componentWrapper);
      return component;
    });

    return root;
  }

  render() {
    this.nodeElem.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
