import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsDeleteRoute extends Route {
  model(params) {
    return this.store.findRecord('section', params.section_id);
  }

  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }
  @action saveDeletions(section) {
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
      section.save().then(() => this.transitionTo('sections'));
    });
  }
}
