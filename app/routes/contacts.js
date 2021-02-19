import Route from '@ember/routing/route';
import MyContacts from 'tds/classes/contacts';
import { action } from '@ember/object';

export default class ContactsRoute extends Route {
  model() {
    return new MyContacts(this.store.findAll('contact'));
  }

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action cancelDeletion(contacts) {
    contacts.forEach((c) => c.rollbackAttributes());
  }

  @action saveDeletion(contacts) {
    contacts.forEach((c) => c.save());
  }

}
