import { HelloWorld } from '../src/HelloWorld';
import Fixtures from './Fixtures';

describe('Hello World', () => {
  it('must say hello', () => {
    const fixture = Fixtures.get();
    const helloWorld = new HelloWorld();
    fixture.append(helloWorld.render());
    expect(fixture.hasText('div', 'Hello World')).toBe(true, '');
    fixture.destroy();
  });

  it('must say to someone', () => {
    const helloWorld = new HelloWorld({
      who: 'Jhon Doe'
    });
    const fixture = Fixtures.get();
    fixture.append(helloWorld.render());
    expect(fixture.hasText('div', 'Hello Jhon Doe')).toBe(true, '');
    fixture.destroy();
  });
});
