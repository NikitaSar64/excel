import { $ } from "@core/dom";

export class Excel {
  constructor(selector, options) {
    this.nodeElem = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const root = $.createDomElem("div", "excel");

    this.components.forEach((Component) => {
      const component = new Component();
      const componentWrapper = $.createDomElem("div", Component.className);
      componentWrapper.html(component.toHTML());
      root.append(componentWrapper);
    });

    return root;
  }

  render() {
    this.nodeElem.append(this.getRoot());
  }
}
