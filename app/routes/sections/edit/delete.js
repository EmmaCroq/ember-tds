import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditDeleteRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action deleteProduct(product) {
    product.deleteRecord();
    product.save().then(() => this.transitionTo('sections'));
    alert('Le produit a bien été supprimé');
  }

  afterModel(model) {
    this.idProduct = model.get('id');
  }

  renderTemplate() {
    this.render({ outlet: 'product' });
  }
}
