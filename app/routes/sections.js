import Abstractroute from './abstractroute';

export default class SectionsRoute extends Abstractroute {
  model() {
    return this.store.findAll('section');
  }
}
