import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Demo extends Component {
  @tracked match = 0;

  matchTo = () => {};

  changeMatch = () => this.match++;

  theModifier = (...args) => {
    console.log('setting up modifier');

    let last = args[args.length - 1];
    let fn = args[0];
    let fnArgs = [];
    let options = {};

    if (typeof last === 'object' && 'on' in last) {
      options = last;
    }

    for (let arg in args) {
      if (arg !== fn && fn !== options) {
        fnArgs.push(arg);
      }
    }

    console.log(fn, fnArgs, options);

    return () => {
      console.log('Tearing down modifier');
    };
  };
}
