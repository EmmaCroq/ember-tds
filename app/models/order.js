import Model, { attr } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('number') id;
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
}
