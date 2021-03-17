import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service userAuth;
  @action login(user) {
    let self = this;
    this.store
      .query('employee', {
        filter: {
          email: user.email,
        },
      })
      .then((connected) => {
        if (connected.length) {
          connected = connected.firstObject;
          if (connected.password && connected.password === user.password) {
            self.userAuth.login(connected);
            self.transitionTo('board');
          }
        }
      });
  }
}
