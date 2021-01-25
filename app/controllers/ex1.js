import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked content;
  @tracked info;

  @action
  clear() {
    this.clear();
  }
  @action
  save() {
    this.args.model.save();
  }
  @action
  update() {
    this.update();
  }
  getStyle() {
    if (this.toggle() < 20) return 'warning';
    if (this.toggle() < 10) return 'danger';
    else return 'info';
  }

  getSize() {
    return this.MAX - this.content.length;
  }

  count() {
    return this.getSize();
  }
}
