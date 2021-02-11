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
    return this.services.filterBy('active', true).length;
  }

  get sumActive() {
    // somme total des services actifs
    // Programmation fonctionnelle
    let services = this.services.filterBy('active', true);
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
