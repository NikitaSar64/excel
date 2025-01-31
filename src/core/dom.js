class Dom {
  constructor(selector) {
    this.element =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === "string") {
      this.element.innerHTML = html;
    }
    return this.element.outerHTML.trim();
  }

  clear() {
    this.html("");
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.element;
    }
    if (Element.prototype.append) {
      this.element.append(node);
    }

    return this;
  }

  on(eventType, callback) {
    this.element.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.element.removeEventListener(eventType, callback);
  }

  closest(selector) {
    return $(this.element.closest(selector));
  }

  getCoords() {
    return this.element.getBoundingClientRect();
  }

  get data() {
    return this.element.dataset;
  }

  findAll(selector) {
    return this.element.querySelectorAll(selector);
  }

  css(styles = {}) {
    Object.keys(styles).forEach((key) => {
      this.element.style[key] = styles[key];
    });
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.createDomElem = (tagName, classes) => {
  const elem = document.createElement(tagName);
  if (classes) {
    elem.classList.add(classes);
  }

  return $(elem);
};
