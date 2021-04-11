import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditEditRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action editProduct(idProduct) {
    idProduct.save().then(() => this.transitionTo('sections'));
  }

  afterModel(model) {
    this.idProduct = model.get('id');
  }

  renderTemplate() {
    this.render({ outlet: 'product' });
  }
}
