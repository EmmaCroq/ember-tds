import { tracked } from '@glimmer/tracking';

export default class Services {
  services = [];
  promos = {};

  @tracked codePromo;

  constructor(services) {
    this.services = services;
  }

  //@computed('services.@each.active')
  get countActive() {
    // combien de services actifs
    return this.services.filter((s)=>s.active).length;
  }

  get sumActive() {
    // somme total des services actifs
    let services = this.services.filter((s)=>s.active);
    let result = 0;
    services.forEach((s) => {
      result += s.price;
    });
    return result;
  }

  get promoTx() {
    return this.promos[this.codePromo] || 'Code invalide';
  }

  get montantPromo() {
    return this.promoTx * this.sumActive;
  }
}
