import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class UserAuthService extends Service {
  @tracked user = null;
  storage;
  constructor() {
    super();
    this.storage = sessionStorage;
    if (this.storage.user) {
      let u = JSON.parse(this.storage.user);
      set(this, 'user', u);
    }
  }
  //Retourne l'employé connecté
  getUser() {
    return this.user;
  }
  //Retourne vrai si un employé est connecté
  get isAuth() {
    return this.user !== null;
  }
  //Déconnecte l'employé actuellement connecté
  logout() {
    this.user = null;
    this.storage.removeItem('user');
    this.storage.clear();
  }
  //A appeler pour connexion de l'employé, après validation positive du formulaire de connexion
  login(user) {
    this.user = user;
    this.storage.user = JSON.stringify({ id: user.id, email: user.email });
  }
}
