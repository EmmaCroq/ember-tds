import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsAddRoute extends Route {
  model() {
    return {};
  }
  @action save(data) {
    let contact = this.store.createRecord('contact', data);
    contact.save().then(() => this.transitionTo('contacts')); //quand il a terminé de sauvegarder il transtionne vers contacts
  }
}
