import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = []; //elm 1ere liste
  includedItems = []; //elm 2eme liste
  @tracked dispoItems_ = []; //elm selected 1ere liste
  @tracked includedItems_ = []; //elm selected 2ere liste

  @action changeDispo(elements) {
    this.dispoItems_ = elements; // on ajoute l'elm à la liste n°1 selected
  }

  @action changeIncluded(elements) {
    this.includedItems_ = elements; // on ajoute l'elm à la liste n°2 selected
  }

  /*
   * add et remove
   */
  // pourquoi faire une méthode remove ? si ce n'est pour mieux comprendre le code avec le changement de nom
  @action add(source, dest, what) {
    dest.pushObjects(what); // on transfère les elm selected à la destination
    source.removeObjects(what); // et on les retire de la source
  }
}
