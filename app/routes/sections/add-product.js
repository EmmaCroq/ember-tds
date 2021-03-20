import Route from '@ember/routing/route';

export default class SectionsAddProductRoute extends Route {
  model() {
    return this.store.findAll('product');
  }
}
