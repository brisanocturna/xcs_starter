
import { HelloWorld } from './HelloWorld';

window.addEventListener('load', () => {
  const sayHello = new HelloWorld({
    who: 'developer'
  });
  document.body.appendChild(sayHello.render());
});
