import Model, { attr } from '@ember-data/model';

export default class SectionModel extends Model {
  @attr('string') name;
  @attr('string') description;
}
