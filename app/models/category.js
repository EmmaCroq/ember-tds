import Model, { attr } from '@ember-data/model';

export default class CategoryModel extends Model {
  @hasMany('contact') contacts;

  @attr('string') nom;
}
