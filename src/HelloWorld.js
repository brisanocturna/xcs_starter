
export class HelloWorld {
  constructor(args) {
    this.args = { who: 'World' };
    this.el = document.createElement('div');

    Object.keys(args || {}).forEach((key) => {
      if (args && {}.hasOwnProperty.call(args, key)) {
        this.args[key] = args[key];
      }
    });
  }

  render() {
    this.el.innerHTML = `Hello ${this.args.who}`;
    return this.el;
  }
}
