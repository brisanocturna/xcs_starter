

class Fixture {
  constructor(args) {
    this.id = Math.random();
    this.el = document.createElement('div');
    this.el.id = `fixture-${this.id}`;
    if (args && args.content) {
      this.el.innerHTML = args.content;
    }
    document.body.appendChild(this.el);
  }

  destroy() {
    document.body.removeChild(this.el);
  }

  append(child) {
    this.el.appendChild(child);
  }

  hasText(selector, text) {
    let result = false;
    const elements = this.el.querySelectorAll(selector);
    [].forEach.call(elements, (el) => {
      result = result || el.innerText.indexOf(text) > -1;
    });
    return result;
  }
}

const fixtures = {};

module.exports = {
  get: (args) => {
    const fix = new Fixture(args);
    fixtures[fix.id] = fix;
    return fix;
  }
};
