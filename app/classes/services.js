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
    //return this.services.filterBy('active', true).price;

    // Porgrammation classique
    let result = 0;
    this.services.forEach((s) => {
      if (s.active) {
        result += s.price;
      }
    });
    return result;
  }
}
