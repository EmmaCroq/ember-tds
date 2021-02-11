import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params /*, hash*/) {
  const [items, value, prop] = params; // on crée des constantes tiré des paramètres
  let id = prop || 'id'; // si id n'est pas encore défini on l'initialise à prop
  return items.filterBy(id, value).length > 0; // on retourne que si la liste des items est supérieur à 0, autrement dit s'il y a des items
});
