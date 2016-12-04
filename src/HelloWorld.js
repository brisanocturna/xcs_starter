
export class HelloWorld {
  constructor(args) {
    this.args = { who: 'World' };
    this.state = {
      bye: false
    };
    this.el = document.createElement('div');

    Object.keys(args || {}).forEach((key) => {
      if (args && {}.hasOwnProperty.call(args, key)) {
        this.args[key] = args[key];
      }
    });
  }

  render() {
    const say = this.state.bye ? 'Bye' : 'Hello';
    this.el.innerHTML = `${say} ${this.args.who}`;
    return this.el;
  }

  sayBye() {
    this.state.bye = true;
  }
}
