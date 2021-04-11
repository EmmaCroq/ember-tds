import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsAddProductRoute extends Route {
  model() {
    return RSVP.hash({
      sections: this.store.findAll('section'),
    });
  }

  @action addProduct(product) {
    let newProduct = this.store.createRecord('product', product);
    newProduct.save().then(() => this.transitionTo('products'));
  }

  renderTemplate() {
    this.render({ outlet: 'newsomething' });
  }
}
