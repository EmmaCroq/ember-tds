export default class Services {
  services = [];
  constructor(services) {
    this.services = services;
  }

  //@computed('services.@each.active')
  get countActive() {
    // Programmation fonctionnelle
    return this.services.filterBy('active', true).length;

    // Porgrammation classique
    /*
    let r=0;
    this.services.forEach(s=>{
      if(s.active){
        r++;
      }
    });
    return r;
     */
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
