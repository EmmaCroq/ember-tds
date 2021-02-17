import Route from '@ember/routing/route';

export default class TestlistRoute extends Route {
  model() {
    return this.store.findAll('contact');
  }
}
