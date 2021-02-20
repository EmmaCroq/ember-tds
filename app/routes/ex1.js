import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class Ex1Route extends Route {
  //model Hook : définit les données
  model() {
    return { items: [] };
  }
  @action
  saveAction(content) {
    let model = this.modelFor(this.routeName);
    model.items = content.split('\n');
    this.transitionTo('ex1b');
  }
}
