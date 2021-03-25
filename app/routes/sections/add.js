import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsAddRoute extends Route {
  model() {
    return {};
  }

  @action addSection(section) {
    let newSection = this.store.createRecord('section', section);
    newSection.save().then(() => this.transitionTo('sections'));
  }

  @action addProduct(product) {
    let newProduct = this.store.createRecord('product', product);
    newProduct.save().then(() => this.transitionTo('products'));
  }

  renderTemplate() {
    this.render({ outlet: 'newsect' });
  }
}
