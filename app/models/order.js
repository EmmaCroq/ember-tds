import Model, { attr, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('string') dateCreation;
  @attr('number') amount;
  @hasMany('orderdetail') orderdetail;
  get count() {
    return this.orderdetail.length;
  }
}
