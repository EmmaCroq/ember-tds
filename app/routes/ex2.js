import Route from '@ember/routing/route';
import { datas } from '../data/data';
import Services from '../classes/services';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  model() {
    return new Services(datas);
  }

  @action toggleActive(s) {
    set(s, 'active', !s.active);
  }
}
