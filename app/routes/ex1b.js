import Route from '@ember/routing/route';

export default class Ex1bRoute extends Route {
  model() {
    return this.modelFor('ex1').items;
  }
}
