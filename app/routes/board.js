import Abstractroute from './abstractroute';
import { action } from '@ember/object';

export default class BoardRoute extends Abstractroute {
  model() {
    return this.userAuth.getUser();
  }

  @action logout() {
    this.transitionTo('logout');
  }
}
