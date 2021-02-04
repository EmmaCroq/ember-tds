export default class Services {
  services = [];
  constructor(services) {
    this.services = services;
  }

  //@computed('services.@each.active')
  get countActive() {
    // Programmation fonctionnelle
    return this.services.filterBy('active', true).length;

    // Programmation classique
  }

  get sumActive() {
    // Programmation fonctionnelle
    let services = this.services.filterBy('active', true);
    let result = 0;
    services.forEach((s) => {
      result += s.price;
    });
    return result;
  }
}
