import Abstractroute from './abstractroute';

export default class BoardRoute extends Abstractroute {
  model() {
    return this.userAuth.getUser();
  }
}
