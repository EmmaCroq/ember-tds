import Route from '@ember/routing/route';
import { promos } from '../data/data';

export default class Ex2PromoRoute extends Route {
  model() {
    return this.modelFor('ex2');
  }

  aftermodel(model) {
    model.promos = promos;
  }
}
