import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = []; // on créé un tableau des elm qui vont composer une liste et on spécifie que la valeur elements doit être suivie (déclanche le recalcul automatique à tous les endroits qui l'appelle (hbs))
  selected = []; // on crée un tableau d'elm selected
  id = 'id';

  constructor() {
    // on crée un constructeur qui initialise les elm
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target; // on récupère l'elm de l'evenement déclanché
    var selectedIds = [...select.selectedOptions].map((option) => option.value); // puis on met dans une liste les éléments selectionnés avec leurs options value={{elm.id}} pour savoir si c'est selectionné ou pas
    if (this.args.onChange) { // si ça change (au clic de l'utilisateur par exemple) :
      this.args.onChange( // sur le changement on :
        this.elements.filter(
          // filtre :
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0 // les selectedIds en fonction de la valeur de ce que l'utilisateur a choisi, pour retenir que ceux selectionnés
        )
      );
    }
  }
}
