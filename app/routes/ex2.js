import Route from '@ember/routing/route';
import { datas } from '../data/data';
import Services from '../classes/services';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  promo = false;
  model() {
    return new Services(datas);
  }

  @action toggleActive(s) {
    set(s, 'active', !s.active);
  }

  @action togglePromo() {
    this.promo = !this.promo;
    if (!this.promo) {
      this.transitionTo('ex2');
    } else {
      this.transitionTo('ex2.promo');
    }
  }

  /*@action toggleTotalVisible(checkboxElem) {
    var total = document.getElementById('totalfinal');
    if (checkboxElem.checked) {
      total.style.visibility = 'hidden';
    } else {
      total.style.visibility = 'visible';
    }
  }

  @action toggleRemise() {
    if (promos.name == 'B22') {
      return promos.price;
    }
  }*/
}
