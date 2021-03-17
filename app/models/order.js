import Model, { attr } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('integer') id;
  @attr('string') status;
  @attr('integer') amount;
}
