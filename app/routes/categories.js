import Route from '@ember/routing/route';

export default class CategoriesRoute extends Route {
  model() {
    return this.store.findAll('category');
  }

  //debugger;
  afterModel(model) {
    this.store.findAll('contact');
    this.transitionTo('categories');
  }
}
