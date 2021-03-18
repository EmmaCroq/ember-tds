import Model, { attr, belongsTo } from '@ember-data/model';

export default class OrderdetailModel extends Model {
  @attr('number') quantity;
  @belongsTo('product') product;
  @belongsTo('order') order;
}
