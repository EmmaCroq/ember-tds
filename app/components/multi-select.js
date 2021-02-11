import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; // on spécifie la valeur elements qui doit être suivient
  selected = []; // on crée un tableau selected et elements
  id = 'id';

  constructor() { // on crée un constructeur qui sera utile pour toutes les instances de cette classe
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target; // on récupère l'élément de l'evenement déclanché
    var selectedIds = [...select.selectedOptions].map((option) => option.value); // puis on met dans une liste les éléments selectionnés avec leurs options
    if (this.args.onChange) { // si ça change (au clic de l'utilisateur) :
      this.args.onChange( // sur le changement on :
        this.elements.filter(
          // filtre :
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0 // les selectedIds en fonction de la valeur de ce que l'utilisateur a choisi, pour retenir que ceux selectionnés
        )
      );
    }
  }
}
