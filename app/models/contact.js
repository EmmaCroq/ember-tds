import Model, { attr } from '@ember-data/model';

export default class ContactModel extends Model {
  @belongsTo('category') category;

  @attr('string') nom;
  @attr('string') prenom;
  @attr('string') email;
}
