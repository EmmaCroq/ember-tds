import Model, { attr, hasMany } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @hasMany('orderdetail') orderdetail;
  get count() {
    return this.orderdetail.length;
  }
}
