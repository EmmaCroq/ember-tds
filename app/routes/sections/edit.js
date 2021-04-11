import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsEditRoute extends Route {
  model(params) {
    return RSVP.hash({
      section: this.store.findRecord('section', params.section_id, {
        include: 'products',
      }),
      sectionId: params.section_id,
    });
  }

  @action editSection(section) {
    section.save().then(() => this.transitionTo('sections'));
  }

  @action editProduct(idSection) {
    this.transitionTo('sections.edit').then(() => {
      this.transitionTo('sections.edit.edit', idSection);
    });
  }

  @action deleteProduct(idSection) {
    this.transitionTo('sections.edit').then(() => {
      this.transitionTo('sections.edit.delete', idSection);
    });
  }

  renderTemplate() {
    this.render({ outlet: 'newprod' });
  }
}
