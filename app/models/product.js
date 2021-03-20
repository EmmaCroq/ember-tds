import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') comments;
  @attr('string') price;
  @attr('string') promotion;
  @belongsTo('section') section;
}
