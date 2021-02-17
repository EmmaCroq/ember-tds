import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsUpdateRoute extends Route {
  // pas besoin de model, il le fait tout seul
  renderTemplate() {
    this.render('contacts.add');
  }

  @action save(contact) {
    contact.save().then(() => {
      this.transitionTo('contacts');
    });
  }
}
